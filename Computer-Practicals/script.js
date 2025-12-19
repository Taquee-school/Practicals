const app = document.getElementById("app");

const messageDiv = document.getElementById("message-div");
messageDiv.addEventListener("animationend" , () => {
  messageDiv.style.animation = "none";
},{ once:true });
const messageText = document.getElementById("message-text");

const innerApp = document.getElementById("inner-app");
const editorTab = document.getElementById("editor-tab");
const mainArea = document.getElementById("main-area");
const codeEditor = document.getElementById("code-area");

let Editor = document.getElementById("editor");

// #region message div
function showMessage(message) {
  messageText.textContent = message;
  messageDiv.style.display = "flex";
  messageDiv.style.animation = "slide-in-top 0.4s ease";
  setTimeout(() => {
    messageDiv.style.animation = "slide-out-top 0.3s ease";
    messageDiv.addEventListener("animationend", () => {
      messageDiv.style.display = "none";
    }, { once:true });
  }, 1500)
}
// #endregion message div


// #region Sidebar
const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("animationend", () => {
  sidebar.style.animation = "none";
}, { once:true });

const bnSidebar = document.getElementById("sidebar-btn");
bnSidebar.addEventListener("click", showSidebar);

const closeSidebarBtn = document.getElementById("close-sidebar-btn");
closeSidebarBtn.addEventListener("click", hideSidebar);

function showSidebar() {
  if (window.getComputedStyle(sidebar).display == "none") {
    sidebar.style.display = "flex";
    sidebar.style.animation = "slide-in-left 0.5s ease-in-out";
  }
}
function hideSidebar() {
  if (window.getComputedStyle(sidebar).display == "flex") {
    sidebar.style.animation = "slide-out-left 0.5s ease-in-out";
    sidebar.addEventListener("animationend", () => {
      sidebar.style.display = "none";
    }, { once: true });
  }
}

const sidebarContent = document.getElementById("sidebar-content");

// region file panel

// #endregion Sidebar


// #region settings
const settingsBtn = document.getElementById("settings-btn");
settingsBtn.addEventListener("click", openSettings);

function openSettings() {
  innerApp.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    innerApp.replaceChild(settingsPanel, editorTab);
  }, 100);
  innerApp.addEventListener("animationend", () => {
    innerApp.style.animation = "none";
  }, { once: true });
}

function closeSettings() {
  innerApp.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    innerApp.replaceChild(editorTab, settingsPanel);
  }, 100);
  innerApp.addEventListener("animationend", () => {
    innerApp.style.animation = "none";
  }, { once: true });
}


const settingsPanel = createDiv("inner-app-tab", "settings-panel");
settingsPanel.addEventListener("animationend", () => {
  settingsPanel.style.animation = "none";
});

const settingsMainContent = createDiv("content", "settings-main-content");
settingsPanel.appendChild(settingsMainContent);

const settingsTopBar = createDiv("top-bar", "settings-top-bar");
settingsMainContent.appendChild(settingsTopBar);

const settingsTopBarCloseBtn = createButton("settings-top-bar-close-btn", "toggle-btn back-btn", createIcon("bold", "arrow-left"), null, closeSettings);
settingsTopBarCloseBtn.addEventListener("click", closeSettings);
settingsTopBar.appendChild(settingsTopBarCloseBtn);

const settingsTopBarTitle = createTextField("tab-header-text", "Settings");
settingsTopBar.appendChild(settingsTopBarTitle);

const settingsContent = createDiv("content", "settings-content");
settingsMainContent.appendChild(settingsContent);

// #region Theme panel
let selectedIcon = null;
let appliedTheme = "palenight";

settingsContent.appendChild(createButton("theme-button", "tab-btn", createIcon("bold", "palette"), "Theme", openThemePanel));
function openThemePanel() {
  settingsPanel.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsPanel.replaceChild(themePanel, settingsMainContent);
  }, 100);
}
function closeThemePanel() {
  settingsPanel.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsPanel.replaceChild(settingsMainContent, themePanel);
  }, 100);
}

const themePanel = createDiv("content", "theme-panel");

const themePanelHeader = createDiv("top-bar", "theme-panel-header");
themePanel.appendChild(themePanelHeader);

const themePanelCloseBtn = createButton("theme-panel-close-btn", "toggle-btn back-btn", createIcon("bold", "arrow-left"), null, closeThemePanel);
themePanelHeader.appendChild(themePanelCloseBtn);

const themePanelTitle = createTextField("tab-header-text", "Choose theme");
themePanelHeader.appendChild(themePanelTitle);

const themePanelContent = createDiv("settings-content-theme-section-theme-list");
themePanel.appendChild(themePanelContent);

let palenightIcon = createIcon("fill", "radio-button");
selectedIcon = palenightIcon;
themePanelContent.appendChild(createButton("theme-panel-theme-list-theme1", "tab-btn", palenightIcon, "Palenight", () => {
  applyTheme("palenight", palenightIcon);
}));

let monokaiIcon = createIcon("bold", "circle");
themePanelContent.appendChild(createButton("theme-panel-theme-list-theme1", "tab-btn", monokaiIcon, "Monokai", () => {
  applyTheme("monokai", monokaiIcon);
}));

let githubDarkIcon = createIcon("bold", "circle");
themePanelContent.appendChild(createButton("theme-panel-theme-list-theme1", "tab-btn", githubDarkIcon, "Github Dark", () => {
  applyTheme("github-dark", githubDarkIcon);
}));


function applyTheme(theme, icon) {
  selectedIcon.className = "ph-bold ph-circle";
  app.classList.remove(appliedTheme);
  selectedIcon = icon;
  appliedTheme = theme;
  app.classList.add(appliedTheme);
  selectedIcon.className = "ph-fill ph-radio-button";
}


// #endregion Theme panel

// #endregion settings

// #region Editor settings
settingsContent.appendChild(createButton("editor-settings-btn", "tab-btn", createIcon("bold", "text-align-center"), "Editor", openEditorSettingsPanel));
function openEditorSettingsPanel() {
  settingsPanel.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsPanel.replaceChild(editorSettingsPanel, settingsMainContent);
  }, 100);
}
function closeEditorSettingsPanel() {
  settingsPanel.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    settingsPanel.replaceChild(settingsMainContent, editorSettingsPanel);
  }, 100);
}

const editorSettingsPanel = createDiv("content", "editor-settings-panel");

const editorSettingsPanelHeader = createDiv("top-bar", "editor-settings-panel-header");
editorSettingsPanel.appendChild(editorSettingsPanelHeader);

editorSettingsPanelHeader.appendChild(createButton("editor-settings-panel-close-btn", "toggle-btn back-btn", createIcon("bold", "arrow-left"), null, closeEditorSettingsPanel));

editorSettingsPanelHeader.appendChild(createTextField("tab-header-text", "Editor Settings"));

const editorSettingsPanelContent = createDiv("settings-content-editor-section-theme-list");
editorSettingsPanel.appendChild(editorSettingsPanelContent);

// #region Line height
const lineHeightDiv = createDiv("settings-input-div", "line-height-div");
editorSettingsPanelContent.appendChild(lineHeightDiv);

const lineHeightHeader = createDiv("settings-input-header", "line-height-header");
lineHeightDiv.appendChild(lineHeightHeader);

lineHeightHeader.appendChild(createTextField("tab-header-text", "Line Height"));

lineHeightHeader.appendChild(createButton("reset-line-height-btn", "toggle-btn", createIcon("bold", "arrow-counter-clockwise"), null, resetLineHeight));

const lineHeightInput = document.createElement("input");
lineHeightInput.type = "number";
lineHeightInput.min = "1";
lineHeightInput.max = "2";
lineHeightInput.value = "1";
lineHeightInput.addEventListener("input", () => {
  mainArea.style.setProperty("--line-height", lineHeightInput.value);
  refreshEditor();
});
lineHeightDiv.appendChild(lineHeightInput);

function resetLineHeight() {
  lineHeightInput.value = "1";
}
// #endregion Line height

// #region Font size
const fontSizeDiv = createDiv("settings-input-div", "font-size-div");
editorSettingsPanelContent.appendChild(fontSizeDiv);

const fontSizeHeader = createDiv("settings-input-header", "font-size-header");
fontSizeDiv.appendChild(fontSizeHeader);

fontSizeHeader.appendChild(createTextField("tab-header-text", "Font Size"));

fontSizeHeader.appendChild(createButton("reset-font-size-btn", "toggle-btn", createIcon("bold", "arrow-counter-clockwise"), null, resetFontSize));

const fontSizeInput = document.createElement("input");
fontSizeInput.className = "settings-slider";
fontSizeInput.type = "range";
fontSizeInput.min = "1";
fontSizeInput.max = "10";
fontSizeInput.value = "1";
fontSizeInput.addEventListener("input", () => {
  mainArea.style.setProperty("--font-scale", fontSizeInput.value);
});
fontSizeInput.addEventListener("touchend", refreshEditor);
fontSizeDiv.appendChild(fontSizeInput);

function resetFontSize() {
  fontSizeInput.value = "1";
}
// #endregion Font size


// #region line numbers

const lineNumbersDiv = createDiv("settings-toggle-div", "line-numbers-div");
editorSettingsPanelContent.appendChild(lineNumbersDiv);

const lineNumbersHeader = createTextField("settings-toggle-text", "Show line numbers");
lineNumbersDiv.appendChild(lineNumbersHeader);

const lineNumbersToggleElement = createDiv("toggle-element active", "line-numbers-toggle-element");
lineNumbersToggleElement.addEventListener("click", toggleLineNumbers);
lineNumbersDiv.appendChild(lineNumbersToggleElement);

const lineNumbersToggleBall = createDiv("toggle-element-ball");
lineNumbersToggleElement.appendChild(lineNumbersToggleBall);

function toggleLineNumbers() {
  if (lineNumbersToggleElement.classList.contains("active")) {
    lineNumbersToggleElement.classList.remove("active");
    codeMirrorEditor.setOption("lineNumbers", false);
  } else {
    lineNumbersToggleElement.classList.add("active");
    codeMirrorEditor.setOption("lineNumbers", true);
  }
}
// #endregion line numbers


// #region wrap text

const wrapTextDiv = createDiv("settings-toggle-div", "line-numbers-div");
editorSettingsPanelContent.appendChild(wrapTextDiv);

const wrapTextHeader = createTextField("settings-toggle-text", "Wrap text");
wrapTextDiv.appendChild(wrapTextHeader);

const wrapTextToggleElement = createDiv("toggle-element active", "line-numbers-toggle-element");
wrapTextToggleElement.addEventListener("click", toggleLineNumbers);
wrapTextDiv.appendChild(wrapTextToggleElement);

const wrapTextToggleBall = createDiv("toggle-element-ball");
wrapTextToggleElement.appendChild(wrapTextToggleBall);

function toggleLineNumbers() {
  if (wrapTextToggleElement.classList.contains("active")) {
    wrapTextToggleElement.classList.remove("active");
    codeMirrorEditor.setOption("lineWrapping", false);
  } else {
    wrapTextToggleElement.classList.add("active");
    codeMirrorEditor.setOption("lineWrapping", true);
  }
}
// #endregion line numbers

// #endregion Editor settings

function checkOrientation() {
  if (app.offsetHeight > app.offsetWidth) {
    app.classList.remove("horizontal");
    app.classList.add("vertical");
  } else {
    app.classList.remove("vertical");
    app.classList.add("horizontal");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchLocalStorage();
  initializePyodide();
  checkOrientation();
})

window.addEventListener("resize", checkOrientation);