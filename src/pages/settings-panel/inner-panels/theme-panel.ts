import { createElement } from "../../../utils/create-dom.js";

export const themePanel = createElement("div", {
  id: "theme-panel",
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
  textContent: "Theme",
});
panelNameDiv.append( backBtn, panelName );

panelBar.append( panelNameDiv );
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  id: "theme-panel-content",
  className: "content-div",
});

// MARK: dark
const darkOption = createElement("button", {
  id: "dark-btn-theme",
  className: "radio-option",
}, [
  createElement("i", { className: "ph-bold ph-circle" }),
  createElement("p", { textContent: "Dark" }),
]);
darkOption.addEventListener("click", () => { chooseTheme("dark") })

// MARK: light
const lightOption = createElement("button", {
  id: "light-btn-theme",
  className: "radio-option selected",
}, [
  createElement("i", { className: "ph-fill ph-radio-button" }),
  createElement("p", { textContent: "Light" }),
]);
lightOption.addEventListener("click", () => { chooseTheme("light") })

contentDiv.append( darkOption, lightOption );


//#region functions

function syncUI(theme: string) {
  const btn = contentDiv.querySelector<HTMLButtonElement>(`#${theme}-btn-theme`);
  if (btn) setTheme(btn);
}

document.addEventListener("theme-change", (ev) => {
  syncUI((ev as CustomEvent).detail.theme);
});

function setTheme(option: HTMLButtonElement) {
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
  if (icon) {
    icon.classList.replace("ph-bold", "ph-fill");
    icon.classList.replace("ph-circle", "ph-radio-button");
  }
}

function chooseTheme(theme: string) {
  document.dispatchEvent( new CustomEvent("theme-change-request", { detail: {
    theme: theme,
  }}));
}

//#endregion functions


//#endregion content

themePanel.append( panelBar, contentDiv );
