import { createElement } from "../../../../utils/create-dom.js";
export const physicsPanel = createElement("div", {
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
    title: "Back",
    className: "toggle",
}, [createElement("i", { className: "ph-bold ph-caret-left" })]);
backBtn.addEventListener("click", () => {
    window.location.hash = "#home";
});
const panelName = createElement("p", {
    className: "panel-name",
    textContent: "Practical",
});
panelNameDiv.append(backBtn, panelName);
const utilityDiv = createElement("div", {
    className: "utility-div",
});
const searchBar = createElement("input", {
    name: "search",
    type: "text",
    className: "file-search",
    placeholder: "Search",
});
const searchBtn = createElement("button", {
    className: "toggle",
}, [createElement("i", { className: "ph-bold ph-magnifying-glass" })]);
const flowToggle = createElement("button", {
    className: "file-flow-toggle toggle",
}, [createElement("i", { className: "ph-fill ph-squares-four" })]);
flowToggle.addEventListener("click", () => {
    const isGrid = fileContainer.classList.contains("grid");
    fileContainer.classList.replace(isGrid ? "grid" : "list", isGrid ? "list" : "grid");
    const icon = flowToggle.querySelector("i");
    if (icon) {
        icon.className = isGrid ? "ph-fill ph-rows" : "ph-fill ph-squares-four";
    }
});
utilityDiv.append(searchBtn, flowToggle);
topBar.append(panelNameDiv, utilityDiv);
//#endregion top bar
//#region content
const contentDiv = createElement("div", {
    className: "content-div",
});
const fileContainer = createElement("div", {
    id: "physics-file-container",
    className: "file-container grid",
});
const class12_filesList = new Map([
    ["class", "12"],
    ["Ohms Law", "ohms_law"],
    ["PN Junction", "pn_junction"],
    ["Meter Bridge", "meter_bridge"],
    ["Half Deflection", "half_deflection"],
    ["AC Sonometer", "ac_sonometer"],
    ["Convex Lens", "convex_lens"],
    ["Concave Mirror", "concave_mirror"],
    ["Convex Mirror", "convex_mirror"],
    ["Concave Lens", "concave_lens"],
]);
const class11_filesList = new Map([
    ["class", "11"],
    ["Screw Gauge", "screw_gauge"],
    ["Vernier Calipers", "vernier_calipers"],
    ["Parallelogram", "parallelogram"],
    ["Spherometer", "spherometer"],
    ["Simple Pendulum", "simple_pendulum"],
    ["Sonometer", "sonometer"],
    ["Helical Spring", "helical_spring"],
    ["Resonance Tube", "resonance_tube"],
]);
const filesList = class12_filesList;
filesList.forEach((path, name) => {
    if (name === "class")
        return;
    const btn = createElement("button", {
        className: "file-btn",
    }, [
        createElement("i", { className: "ph-fill ph-folder" }),
        createElement("p", { textContent: name }),
    ]);
    fileContainer.appendChild(btn);
    btn.addEventListener("click", () => {
        window.location.hash = `#practicals&class=${filesList.get("class")}&practical=${path}`;
    });
});
contentDiv.append(fileContainer);
//#endregion content
physicsPanel.append(topBar, contentDiv);
//# sourceMappingURL=physics-panel.js.map