addStyle("Chemistry-Practicals/chemistryPracticalFile.css").onload = () => {
  if (chemistryTabContent.contains(loadingTab)) {
    chemistryTabContent.removeChild(loadingTab);
  }
  loadAcidicRadicals();
  loadBasicRadicals();
}

// #region UI Helper functions
function createChemistryColumn(type) {
  let column = createDiv(`observation-table-column ${type}`);
  
  let columnHeader = createDiv("observation-table-column-header");
  columnHeader.appendChild(createTextField("observation-table-column-header-text", type));
  column.appendChild(columnHeader);
  
  return column;
}

// #endregion


let RadicalsList = createDiv("practicals-list-div");
chemistryTabContent.appendChild(RadicalsList);

function loadBasicRadicals() {
  let basicRadicalsList = createDiv("practicals-list list-view");
  RadicalsList.appendChild(createTextField("practicals-list-class-header", "Basic radicals"));
  RadicalsList.appendChild(basicRadicalsList);

  let group_0 = createListButton(basicRadicalsList, "basic-group-0-btn", "Group-0");
  group_0.addEventListener("click", () => {
    try {
      openFile(basicGroup0Div, "Group-0");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-0.js").onload = () => {
        openFile(basicGroup0Div, "Group-0");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_1 = createListButton(basicRadicalsList, "basic-group-1-btn", "Group-I");
  group_1.addEventListener("click", () => {
    try {
      openFile(basicGroup1Div, "Group-I");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-1.js").onload = () => {
        openFile(basicGroup1Div, "Group-I");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_2 = createListButton(basicRadicalsList, "basic-group-2-btn", "Group-II");
  group_2.addEventListener("click", () => {
    try {
      openFile(basicGroup2Div, "Group-II");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-2.js").onload = () => {
        openFile(basicGroup2Div, "Group-II");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_3 = createListButton(basicRadicalsList, "basic-group-3-btn", "Group-III");
  group_3.addEventListener("click", () => {
    try {
      openFile(basicGroup3Div, "Group-III");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-3.js").onload = () => {
        openFile(basicGroup3Div, "Group-III");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_4 = createListButton(basicRadicalsList, "basic-group-4-btn", "Group-IV");
  group_4.addEventListener("click", () => {
    try {
      openFile(basicGroup4Div, "Group-IV");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-4.js").onload = () => {
        openFile(basicGroup4Div, "Group-IV");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_5 = createListButton(basicRadicalsList, "basic-group-5-btn", "Group-V");
  group_5.addEventListener("click", () => {
    try {
      openFile(basicGroup5Div, "Group-V");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-5.js").onload = () => {
        openFile(basicGroup5Div, "Group-V");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_6 = createListButton(basicRadicalsList, "basic-group-6-btn", "Group-VI");
  group_6.addEventListener("click", () => {
    try {
      openFile(basicGroup6Div, "Group-VI");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/basic-radicals/group-6.js").onload = () => {
        openFile(basicGroup6Div, "Group-VI");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });
}

function loadAcidicRadicals() {
  let acidicRadicalsList = createDiv("practicals-list list-view");
  RadicalsList.appendChild(createTextField("practicals-list-class-header", "Acidic radicals"));
  RadicalsList.appendChild(acidicRadicalsList);

  let group_1 = createListButton(acidicRadicalsList, "acidic-group-1-btn", "Group-I");
  group_1.addEventListener("click", () => {
    try {
      openFile(acidicGroup1Div, "Group-I");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/acidic-radicals/group-1.js").onload = () => {
        openFile(acidicGroup1Div, "Group-I");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_2 = createListButton(acidicRadicalsList, "acidic-group-2-btn", "Group-II");
  group_2.addEventListener("click", () => {
    try {
      openFile(acidicGroup2Div, "Group-II");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/acidic-radicals/group-2.js").onload = () => {
        openFile(acidicGroup2Div, "Group-II");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let group_3 = createListButton(acidicRadicalsList, "acidic-group-3-btn", "Group-III");
  group_3.addEventListener("click", () => {
    try {
      openFile(acidicGroup3Div, "Group-III");
    } catch {
      showPracticalLoading();
      addScript("Chemistry-Practicals/acidic-radicals/group-3.js").onload = () => {
        openFile(acidicGroup3Div, "Group-III");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });
}