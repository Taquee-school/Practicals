function updateDeviceTheme() {
  const themeTag = document.querySelector('meta[name="theme-color"]');
  const color = getComputedStyle(app).getPropertyValue("--primary-bg").trim();
  themeTag.setAttribute("content", color);
}

// #region Theme Panel
let appliedTheme = "dark";
let appliedThemeI = null;
let selectedTheme = "dark";
let selectedThemeI = null;

let bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", openThemePanel);

let ThemePanel = createDiv("content", "theme-panel");

let themePanelHeader = createDiv("top-bar", "theme-panel-header");
themePanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeThemePanel)));
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
  updateDeviceTheme();
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
  applyTheme();
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
navBarStylePanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeNavBarStylePanel)));
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

let hiddenIcon = createIcon("bold", "circle");
navBarStylePanelContent.appendChild(setRippleStyle(
  createButton("hidden-btn-navigation-bar", "tab-btn ripple", hiddenIcon, "Hidden", () => {
    selectedNavBarStyleI.className = "ph-bold ph-circle";
    selectedNavBarStyle = "hidden";
    selectedNavBarStyleI = hiddenIcon;
    selectedNavBarStyleI.className = "ph-fill ph-radio-button";
    applyNavBarStyle();
  })
));

function applyNavBarStyle() {
  NavigationDiv.classList.remove(appliedNavBarStyle);
  appliedNavBarStyleI = selectedNavBarStyleI;
  appliedNavBarStyle = selectedNavBarStyle;
  NavigationDiv.classList.add(appliedNavBarStyle);
  localStorage.setItem("navigation-bar", appliedNavBarStyle);
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
  applyNavBarStyle();
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
palettePanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closePalettePanel)));
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
  updateDeviceTheme();
}

function setPalette(palette) {
  let paletteMap = { default: defaultIcon, purple: purpleIcon, lime: limeIcon, pink: pinkIcon, blue: blueIcon };
  selectedPaletteI.className = "ph-bold ph-circle";
  selectedPaletteI = paletteMap[palette];
  selectedPalette = palette;
  selectedPaletteI.className = "ph-fill ph-radio-button";
  applyPalette();
}

// #endregion Palette Panel

// #region Accessibilty Panel
let currentFontScale = 1;
let currentHeaderScale = 1;
let currentIconScale = 1;

let bnAccessibilty = document.getElementById("accessibility-btn");
bnAccessibilty.addEventListener("click", openAccessibiltyPanel);

let AccessibiltyPanel = createDiv("content", "accessibility-panel");

let accessibiltyPanelHeader = createDiv("top-bar", "accessibility-panel-header");
accessibiltyPanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeAccessibiltyPanel)));
accessibiltyPanelHeader.appendChild(createTextField("tab-header", "Accessibility"));
AccessibiltyPanel.appendChild(accessibiltyPanelHeader);

let accessibiltyPanelContent = createDiv("content", "accessibility-panel-content");
AccessibiltyPanel.appendChild(accessibiltyPanelContent);

let fontScaleSlider = createSlider(accessibiltyPanelContent, "font-scale-slider", "Font Scale", 0.5, 2, 1, 0.05);
fontScaleSlider.addEventListener("input", () => {
  currentFontScale = fontScaleSlider.value;
  app.style.setProperty("--font-scale", currentFontScale);
  localStorage.setItem("font-scale", currentFontScale);
})

let headerScaleSlider = createSlider(accessibiltyPanelContent, "header-scale-slider", "Header Scale", 0.5, 2, 1, 0.05);
headerScaleSlider.addEventListener("input", () => {
  currentHeaderScale = headerScaleSlider.value;
  app.style.setProperty("--header-scale", currentHeaderScale);
  localStorage.setItem("header-scale", currentHeaderScale);
})

let iconScaleSlider = createSlider(accessibiltyPanelContent, "icon-scale-slider", "Icon Scale", 0.5, 2, 1, 0.05);
iconScaleSlider.addEventListener("input", () => {
  currentIconScale = iconScaleSlider.value;
  app.style.setProperty("--icon-scale", currentIconScale);
  localStorage.setItem("icon-scale", currentIconScale);
})

function openAccessibiltyPanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(AccessibiltyPanel, settingsContent);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function closeAccessibiltyPanel() {
  settingsTab.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsTab.replaceChild(settingsContent, AccessibiltyPanel);
  }, 100);
  settingsTab.addEventListener(
    "animationend",
    () => {
      settingsTab.style.animation = "none";
    },
    { once: true }
  );
}

function setAccessibilty(fontScale, headerScale, iconScale) {
    if (fontScale) {
    currentFontScale = parseFloat(fontScale);
    app.style.setProperty("--font-scale", currentFontScale);
    fontScaleSlider.value = currentFontScale;
  }

  if (headerScale) {
    currentHeaderScale = parseFloat(headerScale);
    app.style.setProperty("--header-scale", currentHeaderScale);
    headerScaleSlider.value = currentHeaderScale;
  }

  if (iconScale) {
    currentIconScale = parseFloat(iconScale);
    app.style.setProperty("--icon-scale", currentIconScale);
    iconScaleSlider.value = currentIconScale;
  }
}

function createSlider(parentDiv, id, label, min, max, value, step) {
  let slider = createDiv("slider", id);
  parentDiv.appendChild(slider);

  let sliderHeader = createDiv("top-bar", "slider-header");
  sliderHeader.appendChild(createTextField(null, label));
  slider.appendChild(sliderHeader);

  let sliderContent = createDiv("content", "slider-content");
  slider.appendChild(sliderContent);

  let sliderInput = document.createElement("input");
  sliderInput.className = "slider-input";
  sliderInput.type = "range";
  sliderInput.min = min;
  sliderInput.max = max;
  sliderInput.value = value;
  sliderInput.step = step;
  sliderContent.appendChild(sliderInput);
  sliderInput.addEventListener("touchstart", () => {
    innerAppTabContainer.style.overflow = "hidden";
  });
  sliderInput.addEventListener("touchend", () => {
    innerAppTabContainer.style.overflow = "scroll";
  });

  return sliderInput;
}
// #endregion Accessibilty Panel

// #region Error Panel
let bnError = document.getElementById("error-btn");
bnError.addEventListener("click", openErrorPanel);

let errorPanel = createDiv("content", "error-panel");

let errorPanelHeader = createDiv("top-bar", "error-panel-header");
errorPanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeErrorPanel)));
errorPanelHeader.appendChild(createTextField("tab-header", "Error"));
errorPanel.appendChild(errorPanelHeader);

let errorPanelContent = createDiv("content", "error-panel-content");
errorPanel.appendChild(errorPanelContent);

errorPanelContent.appendChild(createTextField("error-panel-text", "Write your issue in github."));
errorPanelContent.appendChild(createTextField("error-panel-text", "You need a github account to submit your issue."));

errorPanelContent.appendChild(createActionButton("https://github.com/Noor-Taquee/Practicals/issues", "Open Github"));

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
aboutPanelHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeAboutPanel)));
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
  // 1. About app
  let versionInfo = createDiv("version-info");
  versionInfo.appendChild(createTextField("app-name", "Practical"));
  versionInfo.appendChild(createTextField("version-tag", "v2.7.9"));
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

  aboutPanelContent.appendChild(creatorSection);
  aboutPanelContent.appendChild(socialSection);

}



buildAboutPanelContent();
// #endregion About Panel