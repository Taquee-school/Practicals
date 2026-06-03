import { createElement } from "../../../utils/create-dom.js";
import { createSlider } from "../../../utils/ui.js";

export const accessibilityPanel = createElement("div", {
  className: "app-panel",
  id: "accessibility-panel",
});

//#region panel bar
const panelBar = createElement("div", {
  id: "theme-panel-header",
  className: "panel-bar",
});

const panelNameDiv = createElement("div", {
  className: "panel-name-div",
});
const backBtn = createElement("button", {
  title: "Back",
  className: "toggle",
}, [ createElement("i", { className: "ph-bold ph-caret-left" }) ]);
backBtn.addEventListener("click", () => {
  window.location.hash = "#settings"
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Theme",
});
panelNameDiv.append( backBtn, panelName );

panelBar.append( panelNameDiv );
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  id: "accessibility-panel-content",
  className: "content-div",
});

const DEFAULT_FONT_SCALE = "1";
const DEFAULT_HEADER_SCALE = "1";
const DEFAULT_ICON_SCALE = "1";

let currentFontScale = DEFAULT_FONT_SCALE;
let currentHeaderScale = DEFAULT_HEADER_SCALE;
let currentIconScale = DEFAULT_ICON_SCALE;

// MARK: font scale
const fontScaleSlider = createElement("input", {
  id: "font-scale-slider",
  type: "range",
  min: "0.5",
  max: "2",
  step: "0.05",
  value: "1",
});
fontScaleSlider.addEventListener("input", () => {
  currentFontScale = fontScaleSlider.value;
  changeAccessibility();
});
const fontScaleSliderDiv = createSlider("Font Scale", fontScaleSlider);

// MARK: header scale
const headerScaleSlider = createElement("input", {
  id: "header-scale-slider",
  type: "range",
  min: "0.5",
  max: "2",
  step: "0.05",
  value: "1",
});
headerScaleSlider.addEventListener("input", () => {
  currentHeaderScale = headerScaleSlider.value;
  changeAccessibility();
});
const headerScaleSliderDiv = createSlider("Header Scale", headerScaleSlider);

// MARK: icon scale
const iconScaleSlider = createElement("input", {
  id: "icon-scale-slider",
  type: "range",
  min: "0.5",
  max: "2",
  step: "0.05",
  value: "1",
});
const iconScaleSliderDiv = createSlider("Icon Scale", iconScaleSlider);
iconScaleSlider.addEventListener("input", () => {
  currentIconScale = iconScaleSlider.value;
  changeAccessibility();
})

function syncUI() {
}

function changeAccessibility() {
  document.dispatchEvent( new CustomEvent("accessibility-change-request", { detail: {
    fontScale: currentFontScale,
    headerScale: currentHeaderScale,
    iconScale: currentIconScale,
  }}) );
}

contentDiv.append( fontScaleSliderDiv, headerScaleSliderDiv, iconScaleSliderDiv );
//#endregion content

accessibilityPanel.append( panelBar, contentDiv );