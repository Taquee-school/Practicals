// #region UI helper functions
function createDiv(className, id = null) {
    let div = document.createElement("div");
    if (className) {
        div.className = className;
    }
    if (id) {
        div.id = id;
    }
    return div;
}
function createTextField(className, content) {
    let p = document.createElement("p");
    p.className = className;
    p.textContent = content;
    return p;
}
function createButton(id = null, className = null, icon = null, text = null, clickFunction = null) {
    let button = document.createElement("button");
    if (id) {
        button.id = id;
    }
    if (className) {
        button.className = className;
    }
    if (icon) {
        button.appendChild(icon);
    }
    if (text) {
        let p = document.createElement("p");
        p.textContent = text;
        button.appendChild(p);
    }
    if (clickFunction) {
        button.addEventListener("click", clickFunction);
    }
    return button;
}
function createIcon(type = null, name, clickFunction = null, id = null) {
    if (!type) {
        type = "regular";
    }
    let icon = document.createElement("i");
    icon.className = `ph-${type} ph-${name}`;
    if (clickFunction) {
        icon.addEventListener("click", clickFunction);
    }
    return icon;
}
function addScript(path, id) {
    if (document.getElementById(id))
        return;
    let newScipt = document.createElement("script");
    newScipt.id = id;
    newScipt.src = path;
    document.body.appendChild(newScipt);
    return newScipt;
}
function addStyle(path, id) {
    if (document.getElementById(id))
        return;
    let newStyle = document.createElement("link");
    newStyle.id = id;
    newStyle.rel = "stylesheet";
    newStyle.href = path;
    document.head.appendChild(newStyle);
    return newStyle;
}
// #endregion
// #region elements
const app = document.getElementById("app");
const appWrapper = document.getElementById("app-wrapper");
const loadingScreen = document.getElementById("loading-screen");
const innerApp = document.getElementById("inner-app");
const innerAppTabContainer = document.getElementById("inner-app-tab-container");
const homeTab = document.getElementById("home-tab");
const homeContent = document.getElementById("home-content");
const homeTabContent = document.querySelector("#home-tab .content");
const practicalTab = document.getElementById("practical-tab");
const settingsTab = document.getElementById("settings-tab");
const settingsContent = document.getElementById("settings-content");
const bnHome = document.getElementById("home-button");
const homeIcon = document.getElementById("home-icon");
const bnPractical = document.getElementById("practical-button");
const practicalIcon = document.getElementById("practical-icon");
const bnSettings = document.getElementById("settings-button");
const settingsIcon = document.getElementById("settings-icon");
const practicalContainer = document.getElementById("practical-container");
const experimentName = document.getElementById("experiment-name");
const NavigationDiv = document.getElementById("navigation-div");
// #endregion elements
// #region Navigation
bnHome.addEventListener("click", () => {
    if (app.classList.contains("vertical")) {
        changeTab(homeTab);
    }
    else {
        if (homeTab.style.display == "none") {
            homeTab.style.display = "flex";
        }
        else {
            homeTab.style.display = "none";
        }
    }
});
bnPractical.addEventListener("click", () => { changeTab(practicalTab); });
bnSettings.addEventListener("click", () => { changeTab(settingsTab); });
currentPractical = null;
function openFile(file, message) {
    if (currentVideoUrl) {
        videoFrame.src = currentVideoUrl;
        helpVideoText.style.display = "none";
    }
    else {
        videoFrame.src = "";
        helpVideoText.style.display = "flex";
    }
    changeTab(practicalTab);
    try {
        practicalContainer.removeChild(currentPractical);
    }
    catch { }
    if (practicalContainer.contains(loadingTab)) {
        practicalContainer.removeChild(loadingTab);
    }
    practicalContainer.appendChild(file);
    currentPractical = file;
    experimentName.textContent = message;
    currentVideoUrl = null;
}
function changeTab(dTab) {
    dTab.scrollIntoView();
}
const tolerance = 1;
const scrollParent = innerAppTabContainer;
let currentTabBtn = bnHome;
scrollParent.addEventListener("scroll", checkTabInView);
function checkTabInView() {
    currentTabBtn.style.animation = "none";
    currentTabBtn.classList.remove("active");
    if (isElementCentered(homeTab)) {
        currentTabBtn = bnHome;
        currentTabBtn.classList.add("active");
    }
    else if (isElementCentered(practicalTab)) {
        currentTabBtn = bnPractical;
        currentTabBtn.classList.add("active");
    }
    else if (isElementCentered(settingsTab)) {
        currentTabBtn = bnSettings;
        currentTabBtn.classList.add("active");
    }
}
function isElementCentered(element) {
    const containerRect = scrollParent.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const elementCenter = elementRect.left + elementRect.width / 2;
    return Math.abs(containerCenter - elementCenter) <= tolerance;
}
// Prevent from accidentally quitting
window.addEventListener("popstate", (event) => {
    window.onbeforeunload = () => {
        const exitCon = window.confirm("Are you sure you want to exit?");
        if (!exitCon) {
            event.preventDefault();
            history.pushState(null, document.title, window.location.href);
        }
    };
});
// #endregion
// HELP PANEL ========================
// #region Help Panel
let practicalTabContent = document.getElementById("practical-tab-content");
let currentVideoUrl = null;
let helpBtn = document.getElementById("help-button");
helpBtn.addEventListener("click", openHelpPanel);
const practicalTabBackBtn = document.querySelector("#practical-tab .back-btn");
practicalTabBackBtn.addEventListener("click", goToHome);
function goToHome() {
    if (app.classList.contains("vertical")) {
        changeTab(homeTab);
    }
    else {
        homeTab.style.display = "flex";
    }
}
let helpPanel = createDiv("practical-tab-panel");
let helpVideoHeader = createTextField("help-video-header", "Watch tutorial");
helpPanel.appendChild(helpVideoHeader);
let videoContainer = createDiv("video-container");
helpPanel.appendChild(videoContainer);
let helpVideoText = createTextField("help-video-text", "Video is not available for this experiment !");
videoContainer.appendChild(helpVideoText);
let videoFrame = document.createElement("iframe");
videoFrame.className = "video-player";
videoFrame.setAttribute("allowfullscreen", "true");
videoContainer.appendChild(videoFrame);
function openHelpPanel() {
    if (practicalTabContent.contains(practicalContainer)) {
        practicalTabContent.style.animation = "flash 0.2s ease";
        practicalTabContent.addEventListener("animationend", () => {
            practicalTabContent.style.animation = "none";
            practicalTabBackBtn.removeEventListener("click", goToHome);
            practicalTabBackBtn.addEventListener("click", closeHelpPanel);
            practicalTabContent.replaceChild(helpPanel, practicalContainer);
        }, { once: true });
    }
}
function closeHelpPanel() {
    videoFrame.src = "";
    practicalTabContent.style.animation = "flash 0.2s ease";
    practicalTabContent.addEventListener("animationend", () => {
        practicalTabContent.style.animation = "none";
        practicalTabBackBtn.removeEventListener("click", closeHelpPanel);
        practicalTabBackBtn.addEventListener("click", goToHome);
        practicalTabContent.replaceChild(practicalContainer, helpPanel);
    }, { once: true });
}
function playVideo() { }
// #endregion
// #region Toggle Effect
function setRippleStyle(button) {
    button.addEventListener("click", function (event) {
        let circle = document.createElement("span");
        circle.classList.add("ripple-span");
        let rect = button.getBoundingClientRect();
        let diameter = Math.max(rect.width, rect.height);
        let radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        let existingRipple = button.querySelector(".ripple-span");
        if (existingRipple) {
            existingRipple.remove();
        }
        button.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 600);
    });
    return button;
}
function setGlowStyle(element) {
    element.addEventListener("click", function (event) {
        const circle = document.createElement("span");
        circle.classList.add("glow-span");
        let rect = button.getBoundingClientRect();
        let diameter = Math.max(rect.width, rect.height);
        let radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        let existingRipple = button.querySelector(".ripple-span");
        if (existingRipple) {
            existingRipple.remove();
        }
        button.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 600);
    });
    return button;
}
const strecthFactor = 0.3;
const maxStretch = 1.2;
/**
 *
 * @param {HTMLElement} element
 * @returns
 */
function setStretchStyle(element) {
    if (!element.classList.contains("toggle"))
        return element;
    /** @type {Array<number>} */ let fingerStart = [];
    function handleMove(event) {
        event.preventDefault();
        const finger = event.touches[0];
        let x = finger.clientX;
        let y = finger.clientY;
        let dX = x - fingerStart[0];
        let dY = y - fingerStart[1];
        const changeX = Math.abs(dX);
        const changeY = Math.abs(dY);
        element.style.transform = `
    scale(${Math.min(1 + changeX / 150 * strecthFactor, maxStretch)}, ${Math.min(1 + changeY / 150 * strecthFactor, maxStretch)})
    translate(${dX * 0.01}px, ${dY * 0.01}px)`;
        return;
        const circle = element.querySelector(".glow-span");
        if (circle) {
            if (dY < -20) {
                dY = -20;
            }
            else if (dY > (element.clientHeight + 20)) {
                dY = (element.clientHeight + 20);
            }
            if (dX < -20) {
                dX = -20;
            }
            else if (dX > (element.clientWidth + 20)) {
                dX = (element.clientWidth + 20);
            }
            circle.style.top = `${dY}px`;
            circle.style.left = `${dX}px`;
        }
    }
    element.addEventListener("touchstart", (touch) => {
        const event = touch.touches[0];
        element.style.transition = "transform 0s";
        fingerStart = [event.clientX, event.clientY];
        // const circle = document.createElement("span");
        // circle.classList.add("glow-span");
        // element.appendChild(circle);
        element.addEventListener("touchmove", handleMove);
    });
    element.addEventListener("touchend", () => {
        element.removeEventListener("touchmove", handleMove);
        // element.querySelectorAll(".glow-span").forEach(span => {
        //   span.remove();
        // });
        element.style.transition = "transform 0.45s ease";
        element.style.transform = "scale(1) translate(0)";
    });
    return element;
}
// #endregion
// #region Initialisation
const toggleEffect = app.dataset.os == "ios" ? (element) => { return setStretchStyle(element); } : (element) => { return setRippleStyle(element); };
function checkLocalStorage() {
    let theme = localStorage.getItem("theme");
    if (theme) {
        setTheme(theme);
    }
    let palette = localStorage.getItem("palette");
    if (palette) {
        setPalette(palette);
    }
    let fontScale = localStorage.getItem("font-scale");
    let headerScale = localStorage.getItem("header-scale");
    let iconScale = localStorage.getItem("icon-scale");
    setAccessibilty(fontScale, headerScale, iconScale);
}
function checkOrientation() {
    app.dataset.orientation = window.innerHeight >= window.innerWidth ? "vertical" : "horizontal";
}
window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);
window.addEventListener("DOMContentLoaded", () => {
    checkLocalStorage();
    checkOrientation();
    checkTabInView();
    setNavBarStyle(app.dataset.os == "ios" ? "floating" : "sticky");
    document.querySelectorAll(".back-btn").forEach(button => {
        button.appendChild(createIcon("bold", globalBackIcon));
    });
    document.querySelectorAll(".toggle-effect").forEach(element => { toggleEffect(element); });
});
document.addEventListener('contextmenu', e => e.preventDefault());
export {};
// #endregion Initialisation
//# sourceMappingURL=script.js.map