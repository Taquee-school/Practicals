// #region Helper functions
function createListButton(container, id, buttonText) {
    let btn = document.createElement("button");
    container.appendChild(btn);
    btn.id = id;
    btn.classList.add("ripple");

    btn.appendChild(createTextField(null, buttonText));

    let ic = document.createElement("i");
    ic.className = "ph-bold ph-caret-right";
    btn.appendChild(ic);
    setRippleStyle(btn);
    return btn;
}

function showPracticalLoading() {
    if (practicalContainer.firstChild) {
        practicalContainer.removeChild(practicalContainer.firstChild);
    }
    practicalContainer.appendChild(loadingTab);
    practicalContainer.scrollIntoView();
}
// #endregion Helper functions


let loadingTab = createDiv("loading-tab");
loadingTab.appendChild(createIcon("bold", "circle-notch"));
loadingTab.appendChild(createTextField("loadin-text", "Loading..."));


// #region physics Tab

function openPhysicsPanel() {
    // Adding script if not already added
    if (!document.getElementById("PhysicsPracticals")) {
        addScript("src/Physics-Practicals/physicsPracticals.js").id = "PhysicsPracticals";
        physicsTabContent.appendChild(loadingTab);
    }
    
    homeTab.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        homeTab.replaceChild(physicsTab, homeContent);
    }, 100);
    homeTab.addEventListener("animationend", () => {
        homeTab.style.animation = "none";
    },
    { once: true }
    );
}

function closePhysicsPanel() {
    homeTab.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        homeTab.replaceChild(homeContent, physicsTab);
    }, 100);
    homeTab.addEventListener("animationend", () => {
        homeTab.style.animation = "none";
    },
    { once: true }
    );
}


homeTabContent.appendChild(setRippleStyle(createButton("physics-btn", "home-tab-btn ripple", null, "Physics practicals", openPhysicsPanel)));

let physicsTab = createDiv("inner-app-tab", "physics-tab");

let physicsTabHeader = createDiv("top-bar");
physicsTab.appendChild(physicsTabHeader);

physicsTabHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closePhysicsPanel)));


let physicsTabContent = createDiv("content");
physicsTab.appendChild(physicsTabContent);

// #endregion physics Tab

// #region chemistry Tab

function openChemistryPanel() {
    // add script if not already added
    if (!document.getElementById("ChemistryPracticals")) {
        addScript("src/Chemistry-Practicals/chemistryPracticals.js").id = "ChemistryPracticals";
        chemistryTabContent.appendChild(loadingTab);
    }

    homeTab.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        homeTab.replaceChild(chemistryTab, homeContent);
    }, 100);
    homeTab.addEventListener(
        "animationend",
        () => {
            homeTab.style.animation = "none";
        },
        { once: true }
    );
}

function closeChemistryPanel() {
    homeTab.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        homeTab.replaceChild(homeContent, chemistryTab);
    }, 100);
    homeTab.addEventListener(
        "animationend",
        () => {
            homeTab.style.animation = "none";
        },
        { once: true }
    );
}

homeTabContent.appendChild(setRippleStyle(createButton("chemistry-btn", "home-tab-btn ripple", null, "Chemistry practicals", openChemistryPanel)));

let chemistryTab = createDiv("inner-app-tab", "chemistry-tab");

let chemistryTabHeader = createDiv("top-bar");
chemistryTab.appendChild(chemistryTabHeader);

chemistryTabHeader.appendChild(setRippleStyle(createButton(null, "toggle back-btn ripple", createIcon("bold", "arrow-left"), null, closeChemistryPanel)));


let chemistryTabContent = createDiv("content");
chemistryTab.appendChild(chemistryTabContent);

// #endregion chemistry Tab

// #region computer practicals

homeTabContent.appendChild(setRippleStyle(
    createButton("computer-btn", "home-tab-btn ripple", null, "Computer practicals", () => { window.location.href = "https://noor-taquee.github.io/GluCode/" })
));

// #endregion computer practicals