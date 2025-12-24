// #region UI helper functions
function createDiv(className, id = null) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }
  return div;
}

function createTextField(className, content) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = content;

  return p;
}

function createButton(
  id = null,
  className = null,
  icon = null,
  text = null,
  clickFunction = null
) {
  let button = document.createElement("button");
  if (id) {
    button.id = id;
  }
  if (className) {
    button.className = className;
  }
  if (icon) {
    button.appendChild(icon);
  }
  if (text) {
    let p = document.createElement("p");
    p.textContent = text;
    button.appendChild(p);
  }
  if (clickFunction) {
    button.addEventListener("click", clickFunction);
  }
  return button;
}

function createIcon(type = null, name, clickFunction = null, id = null) {
  if (!type) {
    type = "regular";
  }
  let icon = document.createElement("i");
  icon.className = `ph-${type} ph-${name}`;

  if (clickFunction) {
    icon.addEventListener("click", clickFunction);
  }

  return icon;
}

function addScript(path, id) {
  if (document.getElementById(id)) return;
  let newScipt = document.createElement("script");
  newScipt.id = id;
  newScipt.src = path;
  document.body.appendChild(newScipt);
  return newScipt;
}

function addStyle(path, id) {
  if (document.getElementById(id)) return;
  let newStyle = document.createElement("link");
  newStyle.id = id;
  newStyle.rel = "stylesheet";
  newStyle.href = path;
  document.head.appendChild(newStyle);
  return newStyle;
}

// #endregion

// #region Navigation
bnHome.addEventListener("click", () => {
  if (app.classList.contains("vertical")) {
    changeTab(homeTab);
  } else {
    if (homeTab.style.display == "none") {
      homeTab.style.display = "flex";
    } else {
      homeTab.style.display = "none";
    }
  }
});
bnPractical.addEventListener("click", () => changeTab(practicalTab));
bnSettings.addEventListener("click", () => changeTab(settingsTab));


currentPractical = null;
function openFile(file, message) {
  if (currentVideoUrl) {
    videoFrame.src = currentVideoUrl;
    helpVideoText.style.display = "none";
  } else {
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  }
  changeTab(practicalTab);
  try {
    practicalContainer.removeChild(currentPractical);
  } catch { }
  if (practicalContainer.contains(loadingTab)) {
    practicalContainer.removeChild(loadingTab);
  }
  practicalContainer.appendChild(file);
  currentPractical = file;
  experimentName.textContent = message;
  currentVideoUrl = null;
}

function changeTab(dTab, dTabBtn) {
  dTab.scrollIntoView();
}

const tolerance = 1;
const scrollParent = innerAppTabContainer;
let currentTabBtn = homeIcon;

scrollParent.addEventListener("scroll", checkTabInView);
function checkTabInView() {
  currentTabBtn.style.animation = "none";
  currentTabBtn.classList.remove("active");
  if (isElementCentered(homeTab)) {
    currentTabBtn = homeIcon;
    currentTabBtn.classList.add("active");
    currentTabBtn.style.animation = "expand 0.45s ease";
  } else if (isElementCentered(practicalTab)) {
    currentTabBtn = practicalIcon;
    currentTabBtn.classList.add("active");
    currentTabBtn.style.animation = "expand 0.45s ease";
  } else if (isElementCentered(settingsTab)) {
    currentTabBtn = settingsIcon;
    currentTabBtn.classList.add("active");
    currentTabBtn.style.animation = "expand 0.45s ease";
  }
}
function isElementCentered(element) {
  const containerRect = scrollParent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenter = containerRect.left + containerRect.width / 2;
  const elementCenter = elementRect.left + elementRect.width / 2;

  return Math.abs(containerCenter - elementCenter) <= tolerance;
}

// window.addEventListener("popstate", (event) => { handlePopState(event) });
function handlePopState(event) {
  if (event.state) {
    if (event.state.panel == "physicsPracticals") {
      physicsBtn.click();
    }
  } else {
    homeTab.scrollIntoView();
  }
}

// #endregion

// HELP PANEL ========================
// #region Help Panel
let practicalTabContent = document.getElementById("practical-tab-content");

let currentVideoUrl = null;
let helpBtn = document.getElementById("help-button");
helpBtn.addEventListener("click", openHelpPanel);

let practicalTabBackBtn = document.querySelector("#practical-tab .back-btn");
practicalTabBackBtn.addEventListener("click", goToHome);
function goToHome() {
  if (app.classList.contains("vertical")) {
    changeTab(homeTab, bnHome);
  } else {
    homeTab.style.display = "flex";
  }
}

let helpPanel = createDiv("practical-tab-panel");

let helpVideoHeader = createTextField("help-video-header", "Watch tutorial");
helpPanel.appendChild(helpVideoHeader);

let videoContainer = createDiv("video-container");
helpPanel.appendChild(videoContainer);

let helpVideoText = createTextField("help-video-text", "Video is not available for this experiment !");
videoContainer.appendChild(helpVideoText);

let videoFrame = document.createElement("iframe");
videoFrame.className = "video-player";
videoFrame.setAttribute("allowfullscreen", "true");
videoContainer.appendChild(videoFrame);

function openHelpPanel() {
  if (practicalTabContent.contains(practicalContainer)) {
    practicalTabContent.style.animation = "flash 0.2s ease";
    practicalTabContent.addEventListener(
      "animationend",
      () => {
        practicalTabContent.style.animation = "none";
        practicalTabBackBtn.removeEventListener("click", goToHome);
        practicalTabBackBtn.addEventListener("click", closeHelpPanel);
        practicalTabContent.replaceChild(helpPanel, practicalContainer);
      },
      { once: true }
    );
  }
}

function closeHelpPanel() {
  videoFrame.src = "";
  practicalTabContent.style.animation = "flash 0.2s ease";
  practicalTabContent.addEventListener(
    "animationend",
    () => {
      practicalTabContent.style.animation = "none";
      practicalTabBackBtn.removeEventListener("click", closeHelpPanel);
      practicalTabBackBtn.addEventListener("click", goToHome);
      practicalTabContent.replaceChild(practicalContainer, helpPanel);
    },
    { once: true }
  );
}

function playVideo() { }
// #endregion

// #region Ripple Effect
function setRippleStyle(button) {
  button.addEventListener("click", function (event) {
    let circle = document.createElement("span");
    circle.classList.add("ripple-span");

    let rect = button.getBoundingClientRect();
    let diameter = Math.max(rect.width, rect.height);
    let radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    let existingRipple = button.querySelector(".ripple-span");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
  return button;
}
// #endregion

// region Initialisation
function checkLocalStorage() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  }
  let navBarStyle = localStorage.getItem("navigation-bar");
  if (navBarStyle) {
    setNavBarStyle(navBarStyle);
  }
  let palette = localStorage.getItem("palette");
  if (palette) {
    setPalette(palette);
  }

  // Load accessibility settings
  let fontScale = localStorage.getItem("font-scale");
  let headerScale = localStorage.getItem("header-scale");
  let iconScale = localStorage.getItem("icon-scale");
  setAccessibilty(fontScale, headerScale, iconScale);
}

function checkOrientation() {
  if (window.innerHeight >= window.innerWidth) {
    app.classList.remove("horizontal");
    app.classList.add("vertical");
  } else {
    // app.classList.remove("vertical");
    // app.classList.add("horizontal");
  }
  requestAnimationFrame(() => {
    appWrapper.style.height = `${window.innerHeight}px`;
  });
}
window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);

window.addEventListener("DOMContentLoaded", () => {
  checkLocalStorage();
  checkOrientation();
  checkTabInView();
  const buttons = document.querySelectorAll(".ripple");
  buttons.forEach((button) => { setRippleStyle(button) });
});
// #endregion Initialisation


