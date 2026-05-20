import { createElement } from "../../../utils/create-dom.js";
export const aboutPanel = createElement("div", {
    id: "about-panel",
    className: "app-panel",
});
//#region Panel Bar
const panelBar = createElement("div", {
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
    window.location.hash = "#settings";
});
const panelName = createElement("p", {
    className: "panel-name",
    textContent: "About",
});
panelNameDiv.append(backBtn, panelName);
panelBar.append(panelNameDiv);
//#endregion Panel Bar
//#region Content
const contentDiv = createElement("div", {
    className: "content-div",
});
//#region About app
const appInfoSection = createElement("div", {
    id: "app-section",
    className: "section",
});
const appName = createElement("p", {
    className: "app-name",
    textContent: "Practical",
});
const appVersion = createElement("p", {
    className: "version-tag",
    textContent: "v2.7.9",
});
appInfoSection.append(appName, appVersion);
//#region Community
const creatorSection = createElement("div", {
    id: "community-section",
    className: "section",
});
const creatorHeader = createElement("p", {
    className: "section-header",
    textContent: "Developer & Community",
});
// Developer
const developerDiv = createElement("div", {
    className: "link-div",
});
const devKey = createElement("p", {
    className: "link-key",
    textContent: "Developed By",
});
const devValue = createElement("p", {
    className: "link-value",
    textContent: "Noor Taquee",
});
developerDiv.append(devKey, devValue);
// source code Link
const sourceCodeAnchor = createElement("a", {
    className: "anchor-btn",
    href: "https://github.com/Noor-Taquee/Practicals",
    target: "_blank",
}, [
    createElement("i", { className: "" }),
    createElement("p", { textContent: "Source Code" }),
]);
// Contributors
//creatorSection.appendChild(createAboutItem("Contributors", null, "Special Thanks to [Name 1], [Name 2]..."));
creatorSection.append(creatorHeader, developerDiv, sourceCodeAnchor);
//#region social
const socialSection = createElement("div", {
    id: "social-section",
    className: "section",
});
const socialHeader = createElement("p", {
    className: "section-header",
    textContent: "Stay Connected",
});
// GitHub Profile Link
const githubAnchor = createElement("a", {
    className: "social-link toggle-effect",
    href: "https://github.com/Noor-Taquee",
    target: "_blank",
}, [
    createElement("i", { className: "ph-bold ph-github-logo" }),
    createElement("p", { textContent: "GitHub" }),
]);
// LinkedIn ProfileLink
const linkedInAnchor = createElement("a", {
    className: "social-link toggle-effect",
    href: "https://www.linkedin.com/in/noor-taquee",
    target: "_blank",
}, [
    createElement("i", { className: "ph-bold ph-linkedin-logo" }),
    createElement("p", { textContent: "LinkedIn" }),
]);
// Instagram ProfileLink
const instagramAnchor = createElement("a", {
    className: "social-link toggle-effect",
    href: "https://www.instagram.com/prince1420__",
    target: "_blank",
}, [
    createElement("i", { className: "ph-bold ph-instagram-logo" }),
    createElement("p", { textContent: "Instagram" }),
]);
socialSection.append(socialHeader, githubAnchor, linkedInAnchor, instagramAnchor);
contentDiv.append(appInfoSection, creatorSection, socialSection);
//#endregion Content
aboutPanel.append(panelBar, contentDiv);
//# sourceMappingURL=about-panel.js.map