// #region Helper functions
function createListButton(container, id, buttonText) {
    let btn = document.createElement("button");
    container.appendChild(btn);
    btn.id = id;
    btn.classList.add("toggle-effect");

    btn.appendChild(createTextField(null, buttonText));

    let ic = document.createElement("i");
    ic.className = "ph-bold ph-caret-right";
    btn.appendChild(ic);
    toggleEffect(btn);
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
    
    openPanel(homeTab, homeContent, physicsTab);
}

function closePhysicsPanel() { closePanel(homeTab, physicsTab, homeContent); }


homeTabContent.appendChild(toggleEffect(createButton("physics-btn", "home-tab-btn toggle-effect", null, "Physics practicals", openPhysicsPanel)));

let physicsTab = createDiv("inner-app-tab", "physics-tab");

let physicsTabHeader = createDiv("top-bar");
physicsTab.appendChild(physicsTabHeader);

physicsTabHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closePhysicsPanel)));


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

    openPanel(homeTab, homeContent, chemistryTab);
}

function closeChemistryPanel() { closePanel(homeTab, chemistryTab, homeContent); }

homeTabContent.appendChild(toggleEffect(createButton("chemistry-btn", "home-tab-btn toggle-effect", null, "Chemistry practicals", openChemistryPanel)));

let chemistryTab = createDiv("inner-app-tab", "chemistry-tab");

let chemistryTabHeader = createDiv("top-bar");
chemistryTab.appendChild(chemistryTabHeader);

chemistryTabHeader.appendChild(toggleEffect(createButton(null, "toggle back-btn toggle-effect", createIcon("bold", globalBackIcon), null, closeChemistryPanel)));


let chemistryTabContent = createDiv("content");
chemistryTab.appendChild(chemistryTabContent);

// #endregion chemistry Tab

// #region computer practicals

homeTabContent.appendChild(toggleEffect(
    createButton("computer-btn", "home-tab-btn toggle-effect", null, "Computer practicals", () => { window.location.href = "https://noor-taquee.github.io/GluCode/" })
));

// #endregion computer practicals