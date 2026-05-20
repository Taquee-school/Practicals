import { createElement } from "../../utils/create-dom.js";
export const settingsPanel = createElement("div", {
    id: "settings-panel",
    className: "app-panel",
});
//#region top bar
const topBar = createElement("div", {
    className: "panel-bar",
});
const panelNameDiv = createElement("div", {
    className: "panel-name-div",
});
const backBtn = createElement("button", {
    className: "toggle",
}, [
    createElement("i", { className: "ph-bold ph-caret-left" })
]);
backBtn.addEventListener("click", () => {
    window.location.hash = "#home";
});
const panelName = createElement("p", {
    className: "panel-name",
    textContent: "Settings",
});
panelNameDiv.append(backBtn, panelName);
topBar.append(panelNameDiv);
//#endregion top bar
//#region content
const contentDiv = createElement("div", {
    className: "content-div",
});
const iconDiv = createElement("div", { className: "app-icon" });
const buttonContainer = createElement("div", {
    className: "button-container list-view",
});
const themeBtn = createElement("button", {
    className: "action-btn",
}, [
    createElement("i", { className: "ph-bold ph-paint-roller" }),
    createElement("p", { textContent: "Theme" }),
]);
themeBtn.addEventListener("click", () => {
    window.location.hash = "#settings/theme";
});
const paletteBtn = createElement("button", {
    className: "action-btn",
}, [
    createElement("i", { className: "ph-bold ph-palette" }),
    createElement("p", { textContent: "Palette" }),
]);
paletteBtn.addEventListener("click", () => {
    window.location.hash = "#settings/palette";
});
const accessibilityBtn = createElement("button", {
    className: "action-btn",
}, [
    createElement("i", { className: "ph-bold ph-eye" }),
    createElement("p", { textContent: "Accessibility" }),
]);
accessibilityBtn.addEventListener("click", () => {
    window.location.hash = "#settings/accessibility";
});
const errorBtn = createElement("button", {
    className: "action-btn",
}, [
    createElement("i", { className: "ph-bold ph-bug" }),
    createElement("p", { textContent: "Report Error" }),
]);
errorBtn.addEventListener("click", () => {
    window.location.hash = "#settings/report";
});
const aboutBtn = createElement("button", {
    className: "action-btn",
}, [
    createElement("i", { className: "ph-bold ph-info" }),
    createElement("p", { textContent: "About" }),
]);
aboutBtn.addEventListener("click", () => {
    window.location.hash = "#settings/about";
});
buttonContainer.append(themeBtn, paletteBtn, accessibilityBtn, errorBtn, aboutBtn);
contentDiv.append(iconDiv, buttonContainer);
//#endregion content
settingsPanel.append(topBar, contentDiv);
//# sourceMappingURL=page.js.map