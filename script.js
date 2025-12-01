let loadingScreen = document.getElementById("loading-screen");

let app = document.getElementById("app");
let innerApp = document.getElementById("inner-app");

let homeTab = document.getElementById("home-tab");
let practicalTab = document.getElementById("practical-tab");

let bnHome = document.getElementById("home-button");
bnHome.addEventListener("click", () => changeTab(homeTab));
let homeIcon = document.getElementById("home-icon");

let bnPractical = document.getElementById("practical-button");
bnPractical.addEventListener("click", () => changeTab(practicalTab));
let practicalIcon = document.getElementById("practical-icon");

let practicalContainer = document.getElementById("practical-container");
let experimentName = document.getElementById("experiment-name");

let class11_list = document.getElementById("class-11");
let class12_list = document.getElementById("class-12");

let NavigationDiv = document.getElementById("navigation-div");

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
}

currentTabBtn = homeIcon;
function changeTab(dTab, dTabBtn) {
  dTab.scrollIntoView();
}

innerApp.addEventListener("scroll", function checkTabInView() {
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
});
tolerance = 1;
scrollParent = innerApp;
function isElementCentered(element) {
  const currentScrollPosition = scrollParent.scrollLeft;
  const containerWidth = scrollParent.offsetWidth;

  const elementCenterPosition = element.offsetLeft + element.offsetWidth / 2;

  const requiredScrollPosition = elementCenterPosition - containerWidth / 2;

  return Math.abs(currentScrollPosition - requiredScrollPosition) <= tolerance;
}

// #endregion

// HELP PANEL ========================
// #region Help Panel
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
videoFrame.setAttribute("allow", "autoplay");
videoFrame.setAttribute("allowfullscreen", "true");
videoContainer.appendChild(videoFrame);

function openHelpPanel() {
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

function playVideo() {}

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
