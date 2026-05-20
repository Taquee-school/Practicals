import { createDiv, createInput, createTextField, createImg, physicsFilePath_class12, createButton, createIcon, createPAS, createInputDiv, createTableColumn, toggleEffect } from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let cvm_lengthOfNeedle = null;
let cvm_indexCorrection = 0;
let cvm_rowCount = 0;

function measureEssentials_cvm() {
  let Y = parseFloat(cvm_lengthOfNeedleInput.value) || 0;
  let X = parseFloat(cvm_distanceMIInput.value) || 0;

  cvm_indexCorrection = Y - X;
  cvm_indexCorrectionInput.value = cvm_indexCorrection.toFixed(2);

  measureFocalLength_cvm();
}

function measureFocalLength_cvm() {
  let sumMI = 0;

  for (let i = 1; i <= cvm_rowCount; i++) {
    let O = parseFloat(document.getElementById(`cvm-table-O-${i}`).value) || 0;
    let L = parseFloat(document.getElementById(`cvm-table-L-${i}`).value) || 0;
    let M = parseFloat(document.getElementById(`cvm-table-M-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`cvm-table-I-${i}`).value) || 0;
    let MI = I - M;
    document.getElementById(`cvm-table-MI-${i}`).value = MI.toFixed(2);

    sumMI += MI;
  }

  let meanMI = sumMI / cvm_rowCount;
  cvm_meanMIInput.value = meanMI.toFixed(2);
  let correctedMI = meanMI + cvm_indexCorrection;
  cvm_correctedMIInput.value = correctedMI.toFixed(2);
  let F = correctedMI / 2;
  cvm_focalLengthInput.value = F.toFixed(2);
  cvm_fFocalLengthInput.value = F.toFixed(2);
}

function cvm_addRow() {
    cvm_rowCount++;
    setTimeout(() => {
        let inp = createInput(`cvm-s-no-${cvm_rowCount}`, "number", cvm_rowCount, null, true);
        cvm_sNoColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 10);
    setTimeout(() => {
        let inp = createInput(`cvm-table-O-${cvm_rowCount}`, "number", 0, measureFocalLength_cvm);
        cvm_OColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 50);
    setTimeout(() => {
        let inp = createInput(`cvm-table-L-${cvm_rowCount}`, "number", 0, measureFocalLength_cvm);
        cvm_LColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 100);
    setTimeout(() => {
        let inp = createInput(`cvm-table-M-${cvm_rowCount}`, "number", 0, measureFocalLength_cvm);
        cvm_MColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 150);
    setTimeout(() => {
        let inp = createInput(`cvm-table-I-${cvm_rowCount}`, "number", 0, measureFocalLength_cvm);
        cvm_IColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 200);
    setTimeout(() => {
        let inp = createInput(`cvm-table-MI-${cvm_rowCount}`, "number", 0, null, true);
        cvm_MIColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 250);
}
// #endregion Functions

// #region Diaram
let cvm_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_diagramDiv);

cvm_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

cvm_diagramDiv.appendChild(createImg("practical-file-diagram", "light", physicsFilePath_class12 + "class-12/assets/diagrams/light/convex mirror.jpg"));
cvm_diagramDiv.appendChild(createImg("practical-file-diagram", "dark", physicsFilePath_class12 + "class-12/assets/diagrams/dark/convex mirror.jpg"));

let cvm_moreDiagramBtn = createButton(null, "practical-section-more-button", createIcon("fill", "images-square"),"More Diagrams", cvm_showDiagrams);
// cvm_diagramDiv.appendChild(cvm_moreDiagramBtn);

function cvm_showDiagrams() {
  for (let i=1; i <= 6; i++) {
    cvm_diagramDiv.appendChild(createImg("practical-file-more-diagram light", `Physics-Practicals/class-12/diagrams/light/diagram${i}.jpg`));
    cvm_diagramDiv.appendChild(createImg("practical-file-more-diagram dark", `Physics-Practicals/class-12/diagrams/dark/diagram${i}.jpg`));
  }
}
// #endregion Diagram

// #region Objective
let cvm_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_objectiveDiv);

cvm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

cvm_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the focal length of convex mirror using convex lens."
  )
);
// #endregion Objective

// #region Apparatus
let cvm_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_apparatusDiv);

cvm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

cvm_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with four uprights, convex mirror, a convex lens, a knitting needle and a half meter scale."
  )
);
// #endregion Apparatus

// #region Formula
let cvm_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_formulaDiv);

cvm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

cvm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The focal length of the convex mirror is given by"
  )
);

cvm_formulaDiv.appendChild(
  createTextField("practical-main-formula", "f = (radius of curvature)/2 = MI/2")
);

cvm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Where, MI is the radius of curvature of the given convex mirror."
  )
);
// #endregion Formula

// #region Observation
let cvm_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_observationDiv);

cvm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let cvm_lengthOfNeedleInput = createInput(
  "cvm-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_cvm
);
cvm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (y): ",
      cvm_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

let cvm_distanceMIInput = createInput(
  "cvm-distance-with-needle-and-MI-input",
  "number",
  0,
  measureEssentials_cvm
);
cvm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance with the needle M and I' (x): ",
      cvm_distanceMIInput,
      "cm."
    ),
    true
  )
);

let cvm_indexCorrectionInput = createInput(
  "cvm-index-correction-input",
  "number",
  0,
  null,
  true
);
cvm_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index correction between M and I = (y-x):",
      cvm_indexCorrectionInput,
      "cm."
    ),
    true
  )
);

cvm_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of focal length"
  )
);
let cvm_distanceTableDiv = createDiv("observation-table-div");
cvm_observationDiv.appendChild(cvm_distanceTableDiv);

let cvm_distanceTable = createDiv("observation-table");
cvm_distanceTableDiv.appendChild(cvm_distanceTable);

const cvm_sNoColumn = createTableColumn("S.no");
cvm_distanceTable.appendChild(cvm_sNoColumn);

const cvm_OColumn = createTableColumn("Position of the object needle (O) cm");
cvm_distanceTable.appendChild(cvm_OColumn);

const cvm_LColumn = createTableColumn("Position of the lens (L) cm");
cvm_distanceTable.appendChild(cvm_LColumn);

const cvm_MColumn = createTableColumn("Position of the lens (M) cm");
cvm_distanceTable.appendChild(cvm_MColumn);

const cvm_IColumn = createTableColumn("Position of the image needle (I) cm");
cvm_distanceTable.appendChild(cvm_IColumn);

const cvm_MIColumn = createTableColumn("Observed Distance MI' (cm)");
cvm_distanceTable.appendChild(cvm_MIColumn);

cvm_addRow();
cvm_distanceTableDiv.appendChild(toggleEffect(createButton("cvm-add-row-btn", "add-row-btn toggle-effect ", createIcon("bold", "plus"), "Add Row", cvm_addRow)));

let cvm_meanMIInput = createInput("cvm-mean-MI-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_meanMIInput, "cm."));

let cvm_correctedMIInput = createInput("cvm-corrected-MI-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_correctedMIInput, "cm."));

let cvm_focalLengthInput = createInput("cvm-focal-length-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_focalLengthInput, "cm."));
// #endregion Observation

// #region Result
let cvm_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_resultDiv);

cvm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let cvm_fFocalLengthInput = createInput(
  "cvm-result-focal-length-input",
  "number",
  0,
  null,
  true
);
cvm_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Focal length of the given convex mirror with the help of convex lens is found to be: ",
      cvm_fFocalLengthInput,
      "cm."
    ),
    true
  )
);
// #endregion Result

// #region Precautions
let cvm_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_precautionsDiv);

cvm_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

cvm_precautionsDiv.appendChild(createPAS("1", "The line joining the pole of the mirror, the centre of the lens L and the tip of the needle should be parallel to the length of the optical bench."));
cvm_precautionsDiv.appendChild(createPAS("2", ""));
cvm_precautionsDiv.appendChild(createPAS("3", ""));
cvm_precautionsDiv.appendChild(createPAS("4", ""));
// #endregion Precautions

// #region Sources of errors
let cvm_SOEDiv = createDiv("practical-section");
experimentDiv.appendChild(cvm_SOEDiv);

cvm_SOEDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

cvm_SOEDiv.appendChild(createPAS("1", "Focal length of the lens may not be small."));
cvm_SOEDiv.appendChild(createPAS("2", "The uprights may not be vertical."));
cvm_SOEDiv.appendChild(createPAS("3", "Parallax removal may not be perfect."));
// #endregion Sources of errors
