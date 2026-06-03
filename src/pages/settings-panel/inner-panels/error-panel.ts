import { createElement } from "../../../utils/create-dom.js";

export const errorPanel = createElement("div", {
  className: "app-panel",
  id: "error-panel",
});

//#region panel bar
const panelBar = createElement("div", {
  id: "error-panel-header",
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
  textContent: "Error",
});
panelNameDiv.append( backBtn, panelName );

panelBar.append( panelNameDiv );
//#endregion panel bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

const text1 = createElement("p", {
  className: "error-panel-text",
  textContent: "Write your issue in github.",
});

const text2 = createElement("p", {
  className: "error-panel-text",
  textContent: "You need a github account to submit your issue.",
});

const reportAnchor = createElement("a", {
  className: "anchor-btn",
  href: "https://github.com/Noor-Taquee/Practicals/issues",
  target: "_blank",
}, [ createElement("p", { textContent: "Open Github" }) ]);

contentDiv.append( text1, text2, reportAnchor );
//#endregion content

errorPanel.append( panelBar, contentDiv );
