import { createElement } from "../../../../utils/create-dom.js";

export const chemistryPanel = createElement("div", {
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
}, [ createElement("i", { className: "ph-bold ph-caret-left" }) ]);
backBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Practical",
});
panelNameDiv.append( backBtn, panelName );

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
}, [ createElement("i", { className: "ph-bold ph-magnifying-glass" }) ]);

const flowToggle = createElement("button", {
  className: "file-flow-toggle toggle",
}, [ createElement("i", { className: "ph-fill ph-squares-four" }) ]);

flowToggle.addEventListener("click", () => {
  const isGrid = fileContainer.classList.contains("grid");
  fileContainer.classList.replace( isGrid?"grid":"list", isGrid?"list":"grid" );
  const icon = flowToggle.querySelector("i");
  if (icon) {
    icon.className = isGrid ? "ph-fill ph-rows" : "ph-fill ph-squares-four";
  }
});

utilityDiv.append( searchBtn, flowToggle );

topBar.append( panelNameDiv, utilityDiv );
//#endregion top bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

const fileContainer = createElement("div", {
  id: "physics-file-container",
  className: "file-container grid",
});

const filesList = new Map<string, string>([
  ["Screw Gauge", ""],
  ["Vernier Calipers", ""],
  ["Parallelogram", ""],
  ["Spherometer", ""],
  ["Simple Pendulum", ""],
  ["Sonometer", ""],
  ["Helical Spring", ""],
  ["Resonance Tube", ""],
]);

filesList.forEach((path, name) => {
  const btn = createElement("button", {
    className: "file-btn",
  }, [
    createElement("i", { className: "ph-fill ph-folder" }),
    createElement("p", { textContent: name }),
  ]);
  fileContainer.appendChild( btn );
  if (path) return;
});

contentDiv.append( fileContainer );
//#endregion content

chemistryPanel.append( topBar, contentDiv );
