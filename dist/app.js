import { createElement } from "./utils/create-dom.js";
import { navBar } from "./components/navigation/navigation.js";
//#region app
export const app = document.getElementById("app");
function updateDeviceColors() {
    const themeTag = document.querySelector('meta[name="theme-color"]');
    const color = getComputedStyle(app).getPropertyValue("--primary-bg").trim();
    themeTag?.setAttribute("content", color);
}
// MARK: theme
app.dataset.theme = "light";
document.addEventListener("theme-change-request", (e) => {
    const newTheme = e.detail.theme;
    app.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    updateDeviceColors();
    requestAnimationFrame(() => {
        document.dispatchEvent(new CustomEvent("theme-change", { detail: {
                theme: newTheme,
            } }));
    });
});
// MARK: palette
app.dataset.palette = "default";
document.addEventListener("palette-change-request", (e) => {
    const newPalette = e.detail.palette;
    app.dataset.palette = newPalette;
    localStorage.setItem("palette", newPalette);
    updateDeviceColors();
    requestAnimationFrame(() => {
        document.dispatchEvent(new CustomEvent("palette-change", { detail: {
                palette: newPalette,
            } }));
    });
});
// MARK: orientation
app.dataset.orientation = "vertical";
function checkOrientation() {
    app.dataset.orientation = window.innerHeight < window.innerWidth ?
        "horizontal" : "vertical";
}
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
// MARK: accessibility
document.addEventListener("accessibility-change-request", (e) => {
    const { font, header, icon } = e.detail;
    app.style.setProperty("--font-scale", font);
    localStorage.setItem("font-scale", font);
    app.style.setProperty("--header-scale", header);
    localStorage.setItem("header-scale", header);
    app.style.setProperty("--icon-scale", icon);
    localStorage.setItem("icon-scale", icon);
    requestAnimationFrame(() => {
        document.dispatchEvent(new CustomEvent("accessibility-change", { detail: {
                fontScale: font,
                headerScale: header,
                iconScale: icon,
            } }));
    });
});
//#endregion app
export const panelContainer = createElement("div", {
    className: "panel-container",
});
app.append(panelContainer, navBar);
//# sourceMappingURL=app.js.map