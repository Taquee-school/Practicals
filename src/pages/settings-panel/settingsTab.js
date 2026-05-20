import { createElement } from "../../utils/create-dom.js";


function updateDeviceTheme() {
  const themeTag = document.querySelector('meta[name="theme-color"]');
  const color = getComputedStyle(app).getPropertyValue("--primary-bg").trim();
  themeTag.setAttribute("content", color);
}

/**
 * replaces divs
 * @param {HTMLDivElement} parent container that contains both children
 * @param {HTMLDivElement} OldPanel child to be removed
 * @param {HTMLDivElement} newPanel child to be added
 * @param {HTMLDivElement} animatingElement by default it's the parent
 */
function openPanel(parent, oldPanel, newPanel, animatingElement = null) {

  oldPanel.style.animation = "drop 200ms ease-out";
  oldPanel.addEventListener("animationend", () => {
    oldPanel.style.animation = "none";
    
    parent.removeChild(oldPanel);
  }, { once: true });
  
  parent.appendChild(newPanel);

  newPanel.style.animation = "fade-in 300ms ease";
  newPanel.addEventListener("animationend", () => {
    newPanel.style.animation = "none";
  });
}

/**
 * replaces divs
 * @param {HTMLDivElement} parent container that contains both children
 * @param {HTMLDivElement} OldPanel child to be removed
 * @param {HTMLDivElement} newPanel child to be added
 * @param {HTMLDivElement} animatingElement by default it's the parent
 */
function closePanel(parent, oldPanel, newPanel, animatingElement = null) {

  oldPanel.style.animation = "fade-out 300ms ease-out";
  oldPanel.addEventListener("animationend", () => {
    oldPanel.style.animation = "none";
    
    parent.removeChild(oldPanel);
  }, { once: true });
  
  parent.appendChild(newPanel);
  newPanel.style.animation = "rise 200ms ease";
  newPanel.addEventListener("animationend", () => {
    newPanel.style.animation = "none";
  });
}

// #region Theme Panel

//#region functions
function chooseTheme(theme, option) {
  const currentOption = themePanelContent.querySelector(".selected");
  if (currentOption) {
    currentOption.classList.remove("selected");
    const currentIcon = currentOption.querySelector("i");
    currentIcon.classList.replace("ph-fill", "ph-bold");
    currentIcon.classList.replace("ph-radio-button", "ph-circle");
  }

  option.classList.add("selected");
  const icon = option.querySelector("i");
  icon.classList.replace("ph-bold", "ph-fill");
  icon.classList.replace("ph-circle", "ph-radio-button");
  setTheme(theme);
}

function setTheme(theme) {
  app.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  updateDeviceTheme();
}

function openThemePanel() { openPanel(settingsTab, settingsContent, ThemePanel); }

function closeThemePanel() { closePanel(settingsTab, ThemePanel, settingsContent); }

//#endregion functions

const bnTheme = document.getElementById("theme-btn");
bnTheme.addEventListener("click", openThemePanel);

const ThemePanel = createDiv("content added", "theme-panel");

const themePanelHeader = createDiv("top-bar column", "theme-panel-header");
themePanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeThemePanel)));
themePanelHeader.appendChild(createTextField("tab-header", "Theme"));
ThemePanel.appendChild(themePanelHeader);

const themePanelContent = createDiv("content", "theme-panel-content");
ThemePanel.appendChild(themePanelContent);

const darkIcon = createIcon("fill", "radio-button");
themePanelContent.appendChild(toggleEffect(createButton("dark-btn-theme", "radio-option toggle-effect selected", darkIcon, "Dark", () => { chooseTheme("dark", themePanelContent.querySelector("#dark-btn-theme")) })));

const lightIcon = createIcon("bold", "circle");
themePanelContent.appendChild(toggleEffect(createButton("light-btn-theme", "radio-option toggle-effect", lightIcon, "Light", () => { chooseTheme("light", themePanelContent.querySelector("#light-btn-theme")) })));

// #endregion

// #region Nav style Panel

//#region functions
function chooseNavBarStyle(style, option) {
  const currentOption = navBarStylePanelContent.querySelector(".selected");
  if (currentOption) {
    currentOption.classList.remove("selected");
    const currentIcon = currentOption.querySelector("i");
    currentIcon.classList.replace("ph-fill", "ph-bold");
    currentIcon.classList.replace("ph-radio-button", "ph-circle");
  }

  option.classList.add("selected");
  const icon = option.querySelector("i");
  icon.classList.replace("ph-bold", "ph-fill");
  icon.classList.replace("ph-circle", "ph-radio-button");
  setNavBarStyle(style);
}

function setNavBarStyle(style) {
  NavigationDiv.className = style;
  localStorage.setItem("navigation-bar", style);
}

function openNavBarStylePanel() { openPanel(settingsTab, settingsContent, NavBarStylePanel); }

function closeNavBarStylePanel() { closePanel(settingsTab, NavBarStylePanel, settingsContent); }

//#endregion functions

const bnNavBarStyle = document.getElementById("navigation-bar-btn");
bnNavBarStyle.addEventListener("click", openNavBarStylePanel);

const NavBarStylePanel = createDiv("content added", "navigation-bar-panel");

const navBarStylePanelHeader = createDiv("top-bar column", "navigation-bar-panel-header");
navBarStylePanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeNavBarStylePanel)));
navBarStylePanelHeader.appendChild(createTextField("tab-header", "Navigation Bar Style"));
NavBarStylePanel.appendChild(navBarStylePanelHeader);

const navBarStylePanelContent = createDiv("content", "navigation-bar-panel-content");
NavBarStylePanel.appendChild(navBarStylePanelContent);

const stickyIcon = createIcon("fill", "radio-button");
navBarStylePanelContent.appendChild(toggleEffect(
  createButton("sticky-btn-navigation-bar", "radio-option toggle-effect selected", stickyIcon, "Sticky", () => {
    chooseNavBarStyle("sticky", navBarStylePanelContent.querySelector("#sticky-btn-navigation-bar"))
  })
));

const floatingIcon = createIcon("bold", "circle");
navBarStylePanelContent.appendChild(toggleEffect(
  createButton("floating-btn-navigation-bar", "radio-option toggle-effect", floatingIcon, "Floating", () => {
    chooseNavBarStyle("floating", navBarStylePanelContent.querySelector("#floating-btn-navigation-bar"))
  })
));

const hiddenIcon = createIcon("bold", "circle");
navBarStylePanelContent.appendChild(toggleEffect(
  createButton("hidden-btn-navigation-bar", "radio-option toggle-effect", hiddenIcon, "Hidden", () => {
    chooseNavBarStyle("hidden", navBarStylePanelContent.querySelector("#hidden-btn-navigation-bar"))
  })
));

// #endregion Nav style Panel

// #region Palette Panel

//#region functions
function choosePalette(palette, option) {
  const currentOption = palettePanelContent.querySelector(".selected");
  if (currentOption) {
    currentOption.classList.remove("selected");
    const currentIcon = currentOption.querySelector("i");
    currentIcon.classList.replace("ph-fill", "ph-bold");
    currentIcon.classList.replace("ph-radio-button", "ph-circle");
  }

  option.classList.add("selected");
  const icon = option.querySelector("i");
  icon.classList.replace("ph-bold", "ph-fill");
  icon.classList.replace("ph-circle", "ph-radio-button");
  setPalette(palette);
}

function setPalette(palette) {
  app.dataset.palette = palette;
  localStorage.setItem("palette", palette);
  updateDeviceTheme();
}

function openPalettePanel() { openPanel(settingsTab, settingsContent, PalettePanel); }

function closePalettePanel() { closePanel(settingsTab, PalettePanel, settingsContent); }

//#endregion functions

const bnPalette = document.getElementById("palette-btn");
bnPalette.addEventListener("click", openPalettePanel);

const PalettePanel = createDiv("content added", "palette-panel");

const palettePanelHeader = createDiv("top-bar column", "palette-panel-header");
palettePanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closePalettePanel)));
palettePanelHeader.appendChild(createTextField("tab-header", "Palette"));
PalettePanel.appendChild(palettePanelHeader);

const palettePanelContent = createDiv("content", "palette-panel-content");
PalettePanel.appendChild(palettePanelContent);

const defaultIcon = createIcon("fill", "radio-button");
palettePanelContent.appendChild(toggleEffect(
  createButton("default-btn-palette", "radio-option selected toggle-effect", defaultIcon, "Default", () => {
    choosePalette("default", palettePanelContent.querySelector("#default-btn-palette"))
  })
));

const limeIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(toggleEffect(
  createButton("lime-btn-palette", "radio-option toggle-effect", limeIcon, "Lime", () => {
    choosePalette("lime", palettePanelContent.querySelector("#lime-btn-palette"))
  })
));

const purpleIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(toggleEffect(
  createButton("purple-btn-palette", "radio-option toggle-effect", purpleIcon, "Purple", () => {
    choosePalette("purple", palettePanelContent.querySelector("#purple-btn-palette"))
  })
));

const pinkIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(toggleEffect(
  createButton("pink-btn-palette", "radio-option toggle-effect", pinkIcon, "Pink", () => {
    choosePalette("pink", palettePanelContent.querySelector("#pink-btn-palette"))
  })
));

const blueIcon = createIcon("bold", "circle");
palettePanelContent.appendChild(toggleEffect(
  createButton("blue-btn-palette", "radio-option toggle-effect", blueIcon, "Blue", () => {
    choosePalette("blue", palettePanelContent.querySelector("#blue-btn-palette"))
  })
));

// #endregion Palette Panel

// #region Accessibilty Panel
let currentFontScale = 1;
let currentHeaderScale = 1;
let currentIconScale = 1;

const bnAccessibilty = document.getElementById("accessibility-btn");
bnAccessibilty.addEventListener("click", openAccessibiltyPanel);

const AccessibiltyPanel = createDiv("content added", "accessibility-panel");

const accessibiltyPanelHeader = createDiv("top-bar column", "accessibility-panel-header");
accessibiltyPanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeAccessibiltyPanel)));
accessibiltyPanelHeader.appendChild(createTextField("tab-header", "Accessibility"));
AccessibiltyPanel.appendChild(accessibiltyPanelHeader);

const accessibiltyPanelContent = createDiv("content", "accessibility-panel-content");
AccessibiltyPanel.appendChild(accessibiltyPanelContent);

const fontScaleSlider = createSlider(accessibiltyPanelContent, "font-scale-slider", "Font Scale", 0.5, 2, 1, 0.05);
fontScaleSlider.addEventListener("input", () => {
  currentFontScale = fontScaleSlider.value;
  app.style.setProperty("--font-scale", currentFontScale);
  localStorage.setItem("font-scale", currentFontScale);
})

const headerScaleSlider = createSlider(accessibiltyPanelContent, "header-scale-slider", "Header Scale", 0.5, 2, 1, 0.05);
headerScaleSlider.addEventListener("input", () => {
  currentHeaderScale = headerScaleSlider.value;
  app.style.setProperty("--header-scale", currentHeaderScale);
  localStorage.setItem("header-scale", currentHeaderScale);
})

const iconScaleSlider = createSlider(accessibiltyPanelContent, "icon-scale-slider", "Icon Scale", 0.5, 2, 1, 0.05);
iconScaleSlider.addEventListener("input", () => {
  currentIconScale = iconScaleSlider.value;
  app.style.setProperty("--icon-scale", currentIconScale);
  localStorage.setItem("icon-scale", currentIconScale);
})

function openAccessibiltyPanel() { openPanel(settingsTab, settingsContent, AccessibiltyPanel); }

function closeAccessibiltyPanel() { closePanel(settingsTab, AccessibiltyPanel, settingsContent); }

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
  const slider = createDiv("slider", id);
  parentDiv.appendChild(slider);

  const sliderHeader = createDiv("slider-header", "slider-header");
  sliderHeader.appendChild(createTextField(null, label));
  slider.appendChild(sliderHeader);

  const sliderContent = createDiv("content", "slider-content");
  slider.appendChild(sliderContent);

  const sliderInput = document.createElement("input");
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
const bnError = document.getElementById("error-btn");
bnError.addEventListener("click", openErrorPanel);

const errorPanel = createDiv("content added", "error-panel");

const errorPanelHeader = createDiv("top-bar column", "error-panel-header");
errorPanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeErrorPanel)));
errorPanelHeader.appendChild(createTextField("tab-header", "Error"));
errorPanel.appendChild(errorPanelHeader);

const errorPanelContent = createDiv("content", "error-panel-content");
errorPanel.appendChild(errorPanelContent);

errorPanelContent.appendChild(createTextField("error-panel-text", "Write your issue in github."));
errorPanelContent.appendChild(createTextField("error-panel-text", "You need a github account to submit your issue."));

errorPanelContent.appendChild(createActionButton("https://github.com/Noor-Taquee/Practicals/issues", "Open Github"));

function openErrorPanel() { openPanel(settingsTab, settingsContent, errorPanel); }

function closeErrorPanel() { closePanel(settingsTab, errorPanel, settingsContent); }

// #endregion Error Panel

// #region About Panel
const bnAbout = document.getElementById("about-btn");
bnAbout.addEventListener("click", openAboutPanel);

function openAboutPanel() { openPanel(settingsTab, settingsContent, aboutPanel); }

function closeAboutPanel() { closePanel(settingsTab, aboutPanel, settingsContent); }

const aboutPanel = createDiv("content added", "about-panel");

const aboutPanelHeader = createDiv("top-bar column", "about-panel-header");
aboutPanelHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeAboutPanel)));
aboutPanelHeader.appendChild(createTextField("tab-header", "About"));
aboutPanel.appendChild(aboutPanelHeader);

const aboutPanelContent = createDiv("content", "about-panel-content");
aboutPanel.appendChild(aboutPanelContent);


function createAboutItem(titleText, valueText) {
  const item = createDiv("link-item");

  const title = createTextField("link-title", titleText);
  item.appendChild(title);

  item.appendChild(createTextField("link-value", valueText));

  return item;
}

function createSocialLink(iconName, linkUrl, platform) {
  const linkElement = document.createElement('a');
  linkElement.className = "social-link toggle-effect";
  linkElement.href = linkUrl;
  linkElement.target = "_blank";

  linkElement.appendChild(createIcon("fill", iconName));
  linkElement.appendChild(createTextField("link-value", platform));

  return linkElement;
}

function createActionButton(linkUrl, buttonText) {
  const buttonContainer = createDiv("action-button-container");

  const button = document.createElement('a');
  button.className = "action-button";
  button.href = linkUrl;
  button.target = "_blank";
  button.appendChild(createTextField("action-button-text", buttonText));
  buttonContainer.appendChild(button);

  return buttonContainer;
}

function buildAboutPanelContent() {
  // 1. About app
  const versionInfo = createDiv("version-info");
  versionInfo.appendChild(createTextField("app-name", "Practical"));
  versionInfo.appendChild(createTextField("version-tag", "v2.7.9"));
  aboutPanelContent.appendChild(versionInfo);

  // 2. Developer & Community
  const creatorSection = createDiv("section");
  creatorSection.appendChild(createTextField("section-header", "Developer & Community"));

  // Developer
  creatorSection.appendChild(createAboutItem("Developed By", "Noor Taquee"));

  // GitHub repository Link
  creatorSection.appendChild(createActionButton("https://github.com/Noor-Taquee/Practicals", "Source Code"));

  // Contributors
  //creatorSection.appendChild(createAboutItem("Contributors", null, "Special Thanks to [Name 1], [Name 2]..."));

  const socialSection = createDiv("section");
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