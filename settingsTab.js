// #region Theme Panel
let appliedTheme = "dark";
let appliedThemeI = null;
let selectedTheme = "dark";
let selectedThemeI = null;

let bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", openThemePanel);

let ThemePanel = createDiv("content", "theme-panel");

let themePanelHeader = createDiv("top-bar", "theme-panel-header");
themePanelHeader.appendChild(createButton(null, "back-btn", createIcon("bold", "arrow-left"), null, closeThemePanel));
themePanelHeader.appendChild(createTextField("tab-header", "Theme"));
ThemePanel.appendChild(themePanelHeader);

let themePanelContent = createDiv("content", "theme-panel-content");
ThemePanel.appendChild(themePanelContent);

let darkIcon = createIcon("fill", "radio-button");
appliedThemeI = darkIcon;
selectedThemeI = darkIcon;
themePanelContent.appendChild(setRippleStyle(
  createButton("dark-btn-theme", "tab-btn ripple", darkIcon, "Dark", () => {
    selectedThemeI.className = "ph-bold ph-circle";
    selectedTheme = "dark";
    selectedThemeI = darkIcon;
    selectedThemeI.className = "ph-fill ph-radio-button";
    applyTheme();
  })));

let lightIcon = createIcon("bold", "circle");
themePanelContent.appendChild(setRippleStyle(
  createButton("light-btn-theme", "tab-btn ripple", lightIcon, "Light", () => {
    selectedThemeI.className = "ph-bold ph-circle";
    selectedTheme = "light";
    selectedThemeI = lightIcon;
    selectedThemeI.className = "ph-fill ph-radio-button";
    applyTheme();
  })));

function applyTheme() {
  app.classList.remove(appliedTheme);
  appliedThemeI = selectedThemeI;
  appliedTheme = selectedTheme;
  app.classList.add(appliedTheme);
  localStorage.setItem("theme", appliedTheme);
}


function openThemePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(ThemePanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closeThemePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, ThemePanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function setTheme(theme) {
  let themeMap = { light: lightIcon, dark: darkIcon };
  selectedThemeI.className = "ph-bold ph-circle";
  selectedThemeI = themeMap[theme];
  selectedTheme = theme;
  selectedThemeI.className = "ph-fill ph-radio-button";
  app.classList.remove(appliedTheme);
  appliedThemeI = selectedThemeI;
  appliedTheme = selectedTheme;
  app.classList.add(appliedTheme);
  localStorage.setItem("theme", appliedTheme);
}
// #endregion

// #region Nav style Panel
let appliedNavBarStyle = "sticky";
let appliedNavBarStyleI = null;
let selectedNavBarStyle = "sticky";
let selectedNavBarStyleI = null;

let bnNavBarStyle = document.getElementById("navigation-bar-btn");
bnNavBarStyle.addEventListener("click", openNavBarStylePanel);

let NavBarStylePanel = createDiv("content", "navigation-bar-panel");

let navBarStylePanelHeader = createDiv("top-bar", "navigation-bar-panel-header");
navBarStylePanelHeader.appendChild(createButton(null, "back-btn", createIcon("bold", "arrow-left"), null, closeNavBarStylePanel));
navBarStylePanelHeader.appendChild(createTextField("tab-header", "Navigation Bar Style"));
NavBarStylePanel.appendChild(navBarStylePanelHeader);

let navBarStylePanelContent = createDiv("content", "navigation-bar-panel-content");
NavBarStylePanel.appendChild(navBarStylePanelContent);

let stickyIcon = createIcon("fill", "radio-button");
appliedNavBarStyleI = stickyIcon;
selectedNavBarStyleI = stickyIcon;
navBarStylePanelContent.appendChild(setRippleStyle(
  createButton("sticky-btn-navigation-bar", "tab-btn ripple", stickyIcon, "Sticky", () => {
    selectedNavBarStyleI.className = "ph-bold ph-circle";
    selectedNavBarStyle = "sticky";
    selectedNavBarStyleI = stickyIcon;
    selectedNavBarStyleI.className = "ph-fill ph-radio-button";
    applyNavBarStyle();
  })
));


let floatingIcon = createIcon("bold", "circle");
navBarStylePanelContent.appendChild(setRippleStyle(
  createButton("floating-btn-navigation-bar", "tab-btn ripple", floatingIcon, "Floating", () => {
    selectedNavBarStyleI.className = "ph-bold ph-circle";
    selectedNavBarStyle = "floating";
    selectedNavBarStyleI = floatingIcon;
    selectedNavBarStyleI.className = "ph-fill ph-radio-button";
    applyNavBarStyle();
  })
));

function applyNavBarStyle() {
  NavigationDiv.style.animation = "flash 0.2s ease";
  setTimeout(() => {
    NavigationDiv.classList.remove(appliedNavBarStyle);
    appliedNavBarStyleI = selectedNavBarStyleI;
    appliedNavBarStyle = selectedNavBarStyle;
    NavigationDiv.classList.add(appliedNavBarStyle);
    localStorage.setItem("navigation-bar", appliedNavBarStyle);
  }, 100);
  NavigationDiv.addEventListener("animationend", () => {
    NavigationDiv.style.animation = "none";
  }, { once: true });
}

function openNavBarStylePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(NavBarStylePanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closeNavBarStylePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, NavBarStylePanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function setNavBarStyle(navigationBar) {
  let navigationBarMap = { floating: floatingIcon, sticky: stickyIcon };
  selectedNavBarStyleI.className = "ph-bold ph-circle";
  selectedNavBarStyleI = navigationBarMap[navigationBar];
  selectedNavBarStyle = navigationBar;
  selectedNavBarStyleI.className = "ph-fill ph-radio-button";
  NavigationDiv.classList.remove(appliedNavBarStyle);
  appliedNavBarStyleI = selectedNavBarStyleI;
  appliedNavBarStyle = selectedNavBarStyle;
  NavigationDiv.classList.add(appliedNavBarStyle);
  localStorage.setItem("navigation-bar", appliedNavBarStyle);
}

// #endregion Nav style Panel

// #region Palette Panel
let appliedPalette = "default";
let appliedPaletteI = null;
let selectedPalette = "default";
let selectedPaletteI = null;

let bnPalette = document.getElementById("palette-btn");
bnPalette.addEventListener("click", openPalettePanel);

function openPalettePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(PalettePanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closePalettePanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, PalettePanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

let PalettePanel = createDiv("content", "palette-panel");

let palettePanelHeader = createDiv("top-bar", "palette-panel-header");
palettePanelHeader.appendChild(createButton(null, "back-btn", createIcon("bold", "arrow-left"), null, closePalettePanel));
palettePanelHeader.appendChild(createTextField("tab-header", "Palette"));
PalettePanel.appendChild(palettePanelHeader);

let palettePanelContent = createDiv("content", "palette-panel-content");
PalettePanel.appendChild(palettePanelContent);

let defaultIcon = createIcon("fill", "radio-button");
appliedPaletteI = defaultIcon;
selectedPaletteI = defaultIcon;
palettePanelContent.appendChild(setRippleStyle(
  createButton("default-btn-palette", "tab-btn ripple", defaultIcon, "Default", () => {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPalette = "default";
    selectedPaletteI = defaultIcon;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  })
));

let limeIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(setRippleStyle(
  createButton("lime-btn-palette", "tab-btn ripple", limeIcon, "Lime", () => {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPalette = "lime";
    selectedPaletteI = limeIcon;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  })
));

let purpleIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(setRippleStyle(
  createButton("purple-btn-palette", "tab-btn ripple", purpleIcon, "Purple", () => {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPalette = "purple";
    selectedPaletteI = purpleIcon;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  })
));

let pinkIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(setRippleStyle(
  createButton("pink-btn-palette", "tab-btn ripple", pinkIcon, "Pink", () => {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPalette = "pink";
    selectedPaletteI = pinkIcon;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  })
));

let blueIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(setRippleStyle(
  createButton("blue-btn-palette", "tab-btn ripple", blueIcon, "Blue", () => {
    selectedPaletteI.className = "ph-bold ph-circle";
    selectedPalette = "blue";
    selectedPaletteI = blueIcon;
    selectedPaletteI.className = "ph-fill ph-radio-button";
    applyPalette();
  })
));

function applyPalette() {
  app.classList.remove(appliedPalette);
  appliedPaletteI = selectedPaletteI;
  appliedPalette = selectedPalette;
  app.classList.add(appliedPalette);
  localStorage.setItem("palette", appliedPalette);
}

function setPalette(palette) {
  let paletteMap = { default: defaultIcon, purple: purpleIcon, lime: limeIcon, pink: pinkIcon, blue: blueIcon };
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPaletteI = paletteMap[palette];
  selectedPalette = palette;
  selectedPaletteI.className = "ph-fill ph-radio-button";
  app.classList.remove(appliedPalette);
  appliedPaletteI = selectedPaletteI;
  appliedPalette = selectedPalette;
  app.classList.add(appliedPalette);
  localStorage.setItem("palette", appliedPalette);
}

// #endregion Palette Panel

// #region Error Panel 
// let bnError = document.getElementById("error-btn");
// bnError.addEventListener("click", openErrorPanel);

let errorPanel = createDiv("content", "error-panel");

let errorPanelHeader = createDiv("top-bar", "error-panel-header");
errorPanelHeader.appendChild(createButton(null, "back-btn", createIcon("bold", "arrow-left"), null, closeErrorPanel));
errorPanelHeader.appendChild(createTextField("tab-header", "Error"));
errorPanel.appendChild(errorPanelHeader);

let errorPanelContent = createDiv("content", "error-panel-content");
errorPanel.appendChild(errorPanelContent);

let errorInput = document.createElement("input");
errorInput.type = "text";
errorInput.id = "error-input";
errorInput.placeholder = "Enter error message";
errorPanelContent.appendChild(errorInput);

errorPanelContent.appendChild(createButton("error-btn", "error-btn", null, "submit", () => {
  let error = errorInput.value;
}));

function openErrorPanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(errorPanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closeErrorPanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, errorPanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

// #endregion Error Panel

// #region About Panel
let bnAbout = document.getElementById("about-btn");
bnAbout.addEventListener("click", openAboutPanel);

function openAboutPanel() {
  // history.pushState({ panel: "about" }, "", `${window.location.pathname}/about`);

  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(aboutPanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closeAboutPanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, aboutPanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

let aboutPanel = createDiv("content", "about-panel");

let aboutPanelHeader = createDiv("top-bar", "about-panel-header");
aboutPanelHeader.appendChild(createButton(null, "back-btn", createIcon("bold", "arrow-left"), null, closeAboutPanel));
aboutPanelHeader.appendChild(createTextField("tab-header", "About"));
aboutPanel.appendChild(aboutPanelHeader);

let aboutPanelContent = createDiv("content", "about-panel-content");
aboutPanel.appendChild(aboutPanelContent);


function createAboutItem(titleText, valueText) {
  let item = createDiv("link-item");

  let title = createTextField("link-title", titleText);
  item.appendChild(title);

  item.appendChild(createTextField("link-value", valueText));

  return item;
}

function createSocialLink(iconName, linkUrl, platform) {
  let linkElement = document.createElement('a');
  linkElement.className = "social-link ripple";
  linkElement.href = linkUrl;
  linkElement.target = "_blank";

  linkElement.appendChild(createIcon("fill", iconName));
  linkElement.appendChild(createTextField("link-value", platform));

  return linkElement;
}

function createActionButton(linkUrl, buttonText) {
  let buttonContainer = createDiv("action-button-container");

  let button = document.createElement('a');
  button.className = "action-button";
  button.href = linkUrl;
  button.target = "_blank";
  button.appendChild(createTextField("action-button-text", buttonText));
  buttonContainer.appendChild(button);

  return buttonContainer;
}


function buildAboutPanelContent() {
  // 1. Version and Tagline
  let versionInfo = createDiv("version-info");
  versionInfo.appendChild(createTextField("app-name", "Practical")); // Your App Name
  versionInfo.appendChild(createTextField("version-tag", "v2.3.1")); // Version Number
  aboutPanelContent.appendChild(versionInfo);

  // 2. Developer & Community
  let creatorSection = createDiv("section");
  creatorSection.appendChild(createTextField("section-header", "Developer & Community"));

  // Developer
  creatorSection.appendChild(createAboutItem("Developed By", "Noor Taquee"));

  // GitHub repository Link
  creatorSection.appendChild(createActionButton("https://github.com/Noor-Taquee/Practicals", "Source Code"));

  // Contributors
  //creatorSection.appendChild(createAboutItem("Contributors", null, "Special Thanks to [Name 1], [Name 2]..."));

  let socialSection = createDiv("section");
  socialSection.appendChild(createTextField("section-header", "Stay Connected"));

  // GitHub Profile Link
  socialSection.appendChild(createSocialLink("github-logo", "https://github.com/Noor-Taquee", "GitHub"));

  // LinkedIn ProfileLink
  socialSection.appendChild(createSocialLink("linkedin-logo", "https://www.linkedin.com/in/noor-taquee", "LinkedIn"));

  // Instagram ProfileLink
  socialSection.appendChild(createSocialLink("instagram-logo", "https://www.instagram.com/prince1420__", "Instagram"));

  // Add more social links here using createAboutItem()

  aboutPanelContent.appendChild(creatorSection);
  aboutPanelContent.appendChild(socialSection);

}



buildAboutPanelContent();
// #endregion About Panel