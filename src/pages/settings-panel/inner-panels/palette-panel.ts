import { createElement } from "../../../utils/create-dom.js";

export const palettePanel = createElement("div", {
  id: "palette-panel",
  className: "app-panel",
});


//#region panel bar
const panelBar = createElement("div", {
  id: "theme-panel-header",
  className: "panel-bar column",
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
  textContent: "Palette",
});
panelNameDiv.append( backBtn, panelName );

panelBar.append( panelNameDiv );
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  id: "theme-panel-content",
  className: "content-div",
});

// MARK: default
const defaultOption = createElement("button", {
  id: "default-btn-palette",
  className: "radio-option selected",
}, [
  createElement("i", { className: "ph-fill ph-radio-button" }),
  createElement("p", { textContent: "Default" }),
]);
defaultOption.addEventListener("click", () => { choosePalette("default") })

// MARK: lime 
const limeOption = createElement("button", {
  id: "lime-btn-palette",
  className: "radio-option",
}, [
  createElement("i", { className: "ph-bold ph-circle" }),
  createElement("p", { textContent: "Lime" }),
]);
limeOption.addEventListener("click", () => { choosePalette("lime") })

// MARK: purple 
const purpleOption = createElement("button", {
  id: "purple-btn-palette",
  className: "radio-option",
}, [
  createElement("i", { className: "ph-bold ph-circle" }),
  createElement("p", { textContent: "Purple" }),
]);
purpleOption.addEventListener("click", () => { choosePalette("purple") })


// MARK: pink 
const pinkOption = createElement("button", {
  id: "pink-btn-palette",
  className: "radio-option",
}, [
  createElement("i", { className: "ph-bold ph-circle" }),
  createElement("p", { textContent: "Pink" }),
]);
pinkOption.addEventListener("click", () => { choosePalette("pink") })


// MARK: blue
const blueOption = createElement("button", {
  id: "blue-btn-palette",
  className: "radio-option",
}, [
  createElement("i", { className: "ph-bold ph-circle" }),
  createElement("p", { textContent: "Blue" }),
]);
blueOption.addEventListener("click", () => { choosePalette("blue") })

contentDiv.append( defaultOption, limeOption, purpleOption, pinkOption, blueOption );


//#region functions

function syncUI(palette: string) {
  const btn = contentDiv.querySelector<HTMLButtonElement>(`#${palette}-btn-palette`);
  if (btn) setPalette(btn);
}

document.addEventListener("palette-change", (ev) => {
  syncUI((ev as CustomEvent).detail.palette);
});

function setPalette(option: HTMLButtonElement) {
  const currentOption = contentDiv.querySelector(".selected");
  if (currentOption) {
    currentOption.classList.remove("selected");
    const currentIcon = currentOption.querySelector("i");
    if (currentIcon) {
      currentIcon.classList.replace("ph-fill", "ph-bold");
      currentIcon.classList.replace("ph-radio-button", "ph-circle");
    }
  }

  option.classList.add("selected");
  const icon = option.querySelector("i");
  if (!icon) return;
  icon.classList.replace("ph-bold", "ph-fill");
  icon.classList.replace("ph-circle", "ph-radio-button");
}

function choosePalette(palette: string) {
  document.dispatchEvent( new CustomEvent("palette-change-request", { detail: {
    palette: palette,
  }}));
}

//#endregion functions


//#endregion content

palettePanel.append( panelBar, contentDiv );