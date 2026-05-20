import { createElement } from "../../utils/create-dom.js";
export const homePanel = createElement("div", {
    id: "home-panel",
    className: "app-panel",
});
//#region panel bar
const panelBar = createElement("div", {
    className: "panel-bar",
});
const panelNameDiv = createElement("div", {
    className: "panel-name-div",
});
const panelName = createElement("p", {
    className: "panel-name",
    textContent: "Home",
});
panelNameDiv.append(panelName);
const utilityDiv = createElement("div", {
    className: "utility-div",
});
const searchBar = createElement("input", {
    name: "search",
    type: "text",
    className: "file-search",
    placeholder: "Search",
});
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
utilityDiv.append(flowToggle);
panelBar.append(panelNameDiv, utilityDiv);
//#endregion panel bar
//#region content
const contentDiv = createElement("div", {
    className: "content-div",
});
// header
const fileContainer_header = createElement("div", {
    className: "file-container-header",
});
fileContainer_header.append();
const fileContainer = createElement("div", {
    className: "file-container grid",
});
const physicsBtn = createElement("button", {
    className: "file-btn",
}, [
    createElement("i", { className: "ph-fill ph-folder" }),
    createElement("p", { textContent: "Physics Practicals" }),
]);
physicsBtn.addEventListener("click", () => {
    window.location.hash = "#home/PhysicsPracticals";
});
const chemistryBtn = createElement("button", {
    className: "file-btn",
}, [
    createElement("i", { className: "ph-fill ph-folder" }),
    createElement("p", { textContent: "Chemistry Practicals" }),
]);
chemistryBtn.addEventListener("click", () => {
    window.location.hash = "#home/ChemistryPracticals";
});
const computerBtn = createElement("button", {
    className: "file-btn",
}, [
    createElement("i", { className: "ph-fill ph-folder" }),
    createElement("p", { textContent: "Computer Practicals" }),
]);
fileContainer.append(physicsBtn, chemistryBtn, computerBtn);
contentDiv.append(fileContainer);
//#endregion content
homePanel.append(panelBar, contentDiv);
//# sourceMappingURL=page.js.map