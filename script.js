let app = document.getElementById("app");

let loadingScreen = document.getElementById("loading-screen");

let innerApp = document.getElementById("inner-app");
let innerAppTabContainer = document.getElementById("inner-app-tab-container");

let homeTab = document.getElementById("home-tab");
let practicalTab = document.getElementById("practical-tab");

let bnHome = document.getElementById("home-button");
bnHome.addEventListener("click", () => {
  if (app.classList.contains("vertical")) {
    changeTab(practicalTab);
  } else {
    if ((practicalTab.style.display = "none")) {
      practicalTab.style.display = "flex";
    } else {
      practicalTab.style.display = "none";
    }
  }
});
let homeIcon = document.getElementById("home-icon");

let bnPractical = document.getElementById("practical-button");
bnPractical.addEventListener("click", () => changeTab(practicalTab));
let practicalIcon = document.getElementById("practical-icon");

let practicalContainer = document.getElementById("practical-container");
let experimentName = document.getElementById("experiment-name");

let class11_list = document.getElementById("class-11");
let class12_list = document.getElementById("class-12");

let NavigationDiv = document.getElementById("navigation-div");


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

function createListButton(container, id, buttonText) {
  let btn = document.createElement("button");
  container.appendChild(btn);
  btn.id = id;
  btn.classList.add("ripple");

  btn.appendChild(createTextField(null, buttonText));

  let ic = document.createElement("i");
  ic.className = "ph-bold ph-caret-right";
  btn.appendChild(ic);
  setRippleStyle();
  return btn;
}

function createTextField(className, content) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = content;

  return p;
}

function createInput(
  id,
  type,
  value = 0,
  inputFunction = null,
  readOnly = false
) {
  let input = document.createElement("input");
  if (id) input.id = id;
  input.type = type;
  input.value = value;
  input.oninput = inputFunction;
  input.readOnly = readOnly;
  return input;
}

function createInputDiv(label, inputElement, extraLabel = null) {
  let div = document.createElement("div");
  div.className = "practical-section-input-div";

  let p1 = document.createElement("p");
  div.appendChild(p1);
  p1.textContent = label;
  p1.appendChild(inputElement);

  if (extraLabel) {
    let p2 = document.createElement("span");
    p2.textContent = extraLabel;
    p1.appendChild(p2);
  }

  return div;
}

function createColumn(
  header,
  numberOfRows,
  idPattern,
  type,
  value,
  inputFunction,
  readOnly = false
) {
  let column = document.createElement("div");
  column.className = "observation-table-column";
  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  column.appendChild(columnHeader);
  let columnHeaderp = document.createElement("p");
  columnHeaderp.textContent = header;
  columnHeader.appendChild(columnHeaderp);

  for (let i = 1; i <= numberOfRows; i++) {
    if (Array.isArray(value)) {
      if (idPattern) {
        column.appendChild(
          createInput(
            `${idPattern}-${i}`,
            type,
            value[i - 1],
            inputFunction,
            readOnly
          )
        );
      } else {
        column.appendChild(
          createInput(null, type, value[i - 1], inputFunction, readOnly)
        );
      }
    } else {
      column.appendChild(
        createInput(`${idPattern}-${i}`, type, value, inputFunction, readOnly)
      );
    }
  }

  return column;
}

function createPAS(number, content, contentIsDiv = false) {
  let div = document.createElement("div");
  div.className = "pas-div";

  let noDiv = document.createElement("div");
  div.appendChild(noDiv);
  noDiv.className = "pas-number-div";

  let No = document.createElement("p");
  noDiv.appendChild(No);
  No.textContent = `${number}.`;

  if (contentIsDiv) {
    div.appendChild(content);
    content.style.width = "80%";
  } else {
    let pDiv = document.createElement("div");
    div.appendChild(pDiv);
    pDiv.className = "pas-text-div";

    let p = document.createElement("p");
    pDiv.appendChild(p);
    p.textContent = content;
  }

  return div;
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
// #endregion


// OPTIONAL PANEL =====================
// #region Option Panel
let optionPanel = document.getElementById("option-panel");
let bnOption = document.getElementById("options-btn");
bnOption.addEventListener("click", showOptionPanel);

function showOptionPanel() {
  bnOption.removeEventListener("click", showOptionPanel);
  optionPanel.style.display = "flex";
  optionPanel.style.animation = "appear 0.3s ease";
  optionPanel.addEventListener(
    "animationend",
    () => {
      optionPanel.style.animation = "none";
      bnOption.addEventListener("click", hideOptionPanel);
    },
    { once: true }
  );
}

function hideOptionPanel() {
  if ((optionPanel.style.display = "flex")) {
    bnOption.removeEventListener("click", hideOptionPanel);
    optionPanel.style.animation = "disappear 0.3s ease";
    optionPanel.addEventListener(
      "animationend",
      () => {
        optionPanel.style.animation = "none";
        optionPanel.style.display = "none";
        bnOption.addEventListener("click", showOptionPanel);
      },
      { once: true }
    );
  }
}

// #endregion

// THEME PANEL ========================
// #region Theme Panel
let appliedTheme = "dark";
let appliedThemeI = null;
let selectedTheme = "dark";
let selectedThemeI = null;

let ThemePanel = document.getElementById("theme-panel");
let bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", showThemePanel);

let cancelTheme = document.getElementById("cancel-btn-theme");
cancelTheme.addEventListener("click", hideThemePanel);

let confirmTheme = document.getElementById("confirm-btn-theme");
confirmTheme.addEventListener("click", applyTheme);

let bnDark = document.getElementById("dark-btn-theme");
let darkIcon = document.getElementById("dark-icon");
appliedThemeI = darkIcon;
selectedThemeI = darkIcon;
bnDark.addEventListener("click", () => {
  selectedThemeI.className = "ph-bold ph-circle";
  selectedTheme = "dark";
  selectedThemeI = darkIcon;
  selectedThemeI.className = "ph-fill ph-radio-button";
});

let bnLight = document.getElementById("light-btn-theme");
let lightIcon = document.getElementById("light-icon");
bnLight.addEventListener("click", () => {
  selectedThemeI.className = "ph-bold ph-circle";
  selectedTheme = "light";
  selectedThemeI = lightIcon;
  selectedThemeI.className = "ph-fill ph-radio-button";
});

function applyTheme() {
  app.classList.remove(appliedTheme);
  appliedThemeI = selectedThemeI;
  appliedTheme = selectedTheme;
  app.classList.add(appliedTheme);
  hideThemePanel();
  localStorage.setItem("theme", appliedTheme);
}

function showThemePanel() {
  if ((ThemePanel.style.display = "none")) {
    hideOptionPanel();
    bnTheme.removeEventListener("click", showThemePanel);
    ThemePanel.style.display = "flex";
    ThemePanel.style.animation = "appear 0.3s ease";
    ThemePanel.addEventListener(
      "animationend",
      () => {
        ThemePanel.style.animation = "none";
        bnTheme.addEventListener("click", hideThemePanel);
      },
      { once: true }
    );
  }
}

function hideThemePanel() {
  if ((ThemePanel.style.display = "flex")) {
    selectedThemeI.className = "ph-bold ph-circle";
    selectedThemeI = appliedThemeI;
    selectedThemeI.className = "ph-fill ph-radio-button";
    bnTheme.removeEventListener("click", hideThemePanel);
    ThemePanel.style.animation = "disappear 0.3s ease";
    ThemePanel.addEventListener(
      "animationend",
      () => {
        ThemePanel.style.animation = "none";
        ThemePanel.style.display = "none";
        bnTheme.addEventListener("click", showThemePanel);
      },
      { once: true }
    );
  }
}

function setTheme(theme) {
  let themeMap = { light: lightIcon, dark: darkIcon };
  selectedThemeI.className = "ph-bold ph-circle";
  selectedThemeI = themeMap[theme];
  selectedTheme = theme;
  selectedThemeI.className = "ph-fill ph-radio-button";
  applyTheme();
}

// NAV STYLE PANEL ========================
// #region Nav style Panel
let appliedNavBarStyle = "sticky";
let appliedNavBarStyleI = null;
let selectedNavBarStyle = "sticky";
let selectedNavBarStyleI = null;

let NavBarStylePanel = document.getElementById("navigation-bar-panel");
let bnNavBarStyle = document.getElementById("navigation-bar-btn");
bnNavBarStyle.addEventListener("click", showNavBarStylePanel);

let cancelNavBarStyle = document.getElementById("cancel-btn-navigation-bar");
cancelNavBarStyle.addEventListener("click", hideNavBarStylePanel);

let confirmNavBarStyle = document.getElementById("confirm-btn-navigation-bar");
confirmNavBarStyle.addEventListener("click", applyNavBarStyle);

let bnSticky = document.getElementById("sticky-btn-navigation-bar");
let stickyIcon = document.getElementById("sticky-icon");
appliedNavBarStyleI = stickyIcon;
selectedNavBarStyleI = stickyIcon;
bnSticky.addEventListener("click", () => {
  selectedNavBarStyleI.className = "ph-bold ph-circle";
  selectedNavBarStyle = "sticky";
  selectedNavBarStyleI = stickyIcon;
  selectedNavBarStyleI.className = "ph-fill ph-radio-button";
});

let bnFloating = document.getElementById("floating-btn-navigation-bar");
let floatingIcon = document.getElementById("floating-icon");
bnFloating.addEventListener("click", () => {
  selectedNavBarStyleI.className = "ph-bold ph-circle";
  selectedNavBarStyle = "floating";
  selectedNavBarStyleI = floatingIcon;
  selectedNavBarStyleI.className = "ph-fill ph-radio-button";
});

function applyNavBarStyle() {
  NavigationDiv.style.animation = "flash 0.3s ease";
  NavigationDiv.addEventListener(
    "animationend",
    () => {
      NavigationDiv.style.animation = "none";
      NavigationDiv.classList.remove(appliedNavBarStyle);
      appliedNavBarStyleI = selectedNavBarStyleI;
      appliedNavBarStyle = selectedNavBarStyle;
      NavigationDiv.classList.add(appliedNavBarStyle);
      hideNavBarStylePanel();
      localStorage.setItem("navigation-bar", appliedNavBarStyle);
    },
    { once: true }
  );
}

function showNavBarStylePanel() {
  if ((NavBarStylePanel.style.display = "none")) {
    hideOptionPanel();
    bnNavBarStyle.removeEventListener("click", showNavBarStylePanel);
    NavBarStylePanel.style.display = "flex";
    NavBarStylePanel.style.animation = "appear 0.3s ease";
    NavBarStylePanel.addEventListener(
      "animationend",
      () => {
        NavBarStylePanel.style.animation = "none";
        bnNavBarStyle.addEventListener("click", hideNavBarStylePanel);
      },
      { once: true }
    );
  }
}

function hideNavBarStylePanel() {
  if ((NavBarStylePanel.style.display = "flex")) {
    selectedNavBarStyleI.className = "ph-bold ph-circle";
    selectedNavBarStyleI = appliedNavBarStyleI;
    selectedNavBarStyleI.className = "ph-fill ph-radio-button";
    bnNavBarStyle.removeEventListener("click", hideNavBarStylePanel);
    NavBarStylePanel.style.animation = "disappear 0.3s ease";
    NavBarStylePanel.addEventListener(
      "animationend",
      () => {
        NavBarStylePanel.style.animation = "none";
        NavBarStylePanel.style.display = "none";
        bnNavBarStyle.addEventListener("click", showNavBarStylePanel);
      },
      { once: true }
    );
  }
}

function setNavBarStyle(navigationBar) {
  let navigationBarMap = { floating: floatingIcon, sticky: stickyIcon };
  selectedNavBarStyleI.className = "ph-bold ph-circle";
  selectedNavBarStyleI = navigationBarMap[navigationBar];
  selectedNavBarStyle = navigationBar;
  selectedNavBarStyleI.className = "ph-fill ph-radio-button";
  applyNavBarStyle();
}

function checkLocalStorage() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    setTheme(theme);
  }
  let navBarStyle = localStorage.getItem("navigation-bar");
  if (navBarStyle) {
    setNavBarStyle(navBarStyle);
  }
}

checkLocalStorage();

// #endregion

function abs(x) {
  return x < 0 ? -x : x;
}

// #region Navigation
currentPractical = null;
function openFile(file, message) {
  changeTab(practicalTab);
  if (currentPractical) {
    practicalContainer.removeChild(currentPractical);
  }
  practicalContainer.appendChild(file);
  currentPractical = file;
  experimentName.textContent = message;
  currentVideoUrl = null;
}

currentTabBtn = homeIcon;
function changeTab(dTab, dTabBtn) {
  dTab.scrollIntoView();
}
innerApp.addEventListener("scroll", checkTabInView);

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
  }
}

tolerance = 10;
scrollParent = innerAppTabContainer;
function isElementCentered(element) {
  const containerRect = scrollParent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenter = containerRect.left + containerRect.width / 2;
  const elementCenter = elementRect.left + elementRect.width / 2;

  return Math.abs(containerCenter - elementCenter) <= tolerance;
}

// #endregion

// HELP PANEL ========================
// #region Help Panel
let currentVideoUrl = null;
let helpBtn = document.getElementById("help-button");
helpBtn.addEventListener("click", openHelpPanel);

let practicalTabBackBtn = document.querySelector("#practical-tab .back-btn");
practicalTabBackBtn.addEventListener("click", goToHome);
function goToHome() {
  changeTab(homeTab, bnHome);
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
  if (currentVideoUrl) {
    videoFrame.src = currentVideoUrl;
    helpVideoText.style.display = "none";
  } else {
    videoFrame.src = "";
    helpVideoText.style.display = "block";
  }

  practicalTab.style.animation = "flash 0.2s ease";
  practicalTab.addEventListener(
    "animationend",
    () => {
      practicalTab.style.animation = "none";
      practicalTabBackBtn.removeEventListener("click", goToHome);
      practicalTabBackBtn.addEventListener("click", closeHelpPanel);
      practicalTab.replaceChild(helpPanel, practicalContainer);
      helpBtn.style.display = "none";
    },
    { once: true }
  );
}

function closeHelpPanel() {
  videoFrame.src = "";
  practicalTab.style.animation = "flash 0.2s ease";
  practicalTab.addEventListener(
    "animationend",
    () => {
      practicalTab.style.animation = "none";
      practicalTabBackBtn.removeEventListener("click", closeHelpPanel);
      practicalTabBackBtn.addEventListener("click", goToHome);
      practicalTab.replaceChild(practicalContainer, helpPanel);
      helpBtn.style.display = "flex";
    },
    { once: true }
  );
}

function playVideo() { }

// #endregion

//
function setRippleStyle() {
  const buttons = document.querySelectorAll(".ripple");
  buttons.forEach((button) => {
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
  });
}
//

function checkOrientation() {
  if (window.innerHeight >= window.innerWidth) {
    app.classList.remove("horizontal");
    app.classList.add("vertical");
  } else {
    app.classList.remove("vertical");
    app.classList.add("horizontal");
  }
}
window.addEventListener("resize", checkOrientation);

window.addEventListener("DOMContentLoaded", () => {
  checkOrientation();
  checkTabInView();
});

function addScript(path) {
  let newScipt = document.createElement("script");
  newScipt.src = path;
  document.body.appendChild(newScipt);
  return newScipt;
}

addScript("Physics-Practicals/PhysicsPracticals.js");