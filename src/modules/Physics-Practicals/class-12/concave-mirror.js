import {
  createDiv,
  createInput,
  createTextField,
  createImg,
  base,
  createButton,
  createIcon,
  createPAS,
  createInputDiv,
  createTableColumn,
  toggleEffect,
} from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions

// let ccm_lengthOfNeedle = null;
// let ccm_distanceMirrorObject = null;
// let ccm_distanceMirrorImage = null;

let ccm_indexCorrectionU = 0;
let ccm_indexCorrectionV = 0;
let ccm_rowCount = 0;

function measureEssentials_ccm() {
  let X = parseFloat(ccm_lengthOfNeedleInput.value) || 0;
  let Y = parseFloat(ccm_distanceMirrorObjectInput.value) || 0;
  let Z = parseFloat(ccm_distanceMirrorImageInput.value) || 0;

  let ccm_indexErrorU = Y - X;
  ccm_indexCorrectionU = -ccm_indexErrorU;
  ccm_indexErrorUInput.value = ccm_indexErrorU.toFixed(2);
  ccm_indexCorrectionUInput.value = ccm_indexCorrectionU.toFixed(2);

  let ccm_indexErrorV = Z - X;
  ccm_indexCorrectionV = -ccm_indexErrorV;
  ccm_indexErrorVInput.value = ccm_indexErrorV.toFixed(2);
  ccm_indexCorrectionVInput.value = ccm_indexCorrectionV.toFixed(2);

  measureFocalLength_ccm();
}

function measureFocalLength_ccm() {
  let sumF = 0;

  for (let i = 1; i <= ccm_rowCount; i++) {
    let P = parseFloat(document.getElementById(`ccm-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`ccm-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`ccm-table-I-${i}`).value) || 0;

    let u_obs = Math.abs(P - O);
    let u_cor = u_obs + ccm_indexCorrectionU;
    document.getElementById(`ccm-table-U-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`ccm-table-U-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = Math.abs(P - I);
    let v_cor = v_obs + ccm_indexCorrectionV;
    document.getElementById(`ccm-table-I-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`ccm-table-I-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`ccm-table-F-${i}`).value = f.toFixed(3);

    sumF += f;
  }

  let focalLength = sumF / ccm_rowCount;
  ccm_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}

function ccm_addRow() {
  ccm_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `ccm-s-no-${ccm_rowCount}`,
      "number",
      ccm_rowCount,
      null,
      true,
    );
    ccm_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-P-${ccm_rowCount}`,
      "number",
      0,
      measureFocalLength_ccm,
    );
    ccm_PColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-O-${ccm_rowCount}`,
      "number",
      0,
      measureFocalLength_ccm,
    );
    ccm_OColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-I-${ccm_rowCount}`,
      "number",
      0,
      measureFocalLength_ccm,
    );
    ccm_IColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-U-obs-${ccm_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    ccm_UObsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-U-cor-${ccm_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    ccm_UCorColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 250);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-I-obs-${ccm_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    ccm_IObsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 300);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-I-cor-${ccm_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    ccm_ICorColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 350);
  setTimeout(() => {
    let inp = createInput(
      `ccm-table-F-${ccm_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    ccm_FColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 400);
}
// #endregion Functions

// #region Diagram
let ccm_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_diagramDiv);

ccm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:"),
);

ccm_diagramDiv.appendChild(
  createImg(
    "practical-file-diagram",
    "light",
    base + "/diagrams/class-12/light/concave mirror.jpg",
  ),
);
ccm_diagramDiv.appendChild(
  createImg(
    "practical-file-diagram",
    "dark",
    base + "/diagrams/class-12/dark/concave mirror.jpg",
  ),
);

let ccm_moreDiagramBtn = createButton(
  null,
  "practical-section-more-button",
  createIcon("fill", "images-square"),
  "More Diagrams",
  ccm_showDiagrams,
);
ccm_moreDiagramBtn.remove();
// ccm_diagramDiv.appendChild(ccm_moreDiagramBtn);

function ccm_showDiagrams() {
  for (let i = 1; i <= 6; i++) {
    ccm_diagramDiv.appendChild(
      createImg(
        "practical-file-more-diagram light",
        `Physics-Practicals/class-12/diagrams/light/diagram${i}.jpg`,
      ),
    );
    ccm_diagramDiv.appendChild(
      createImg(
        "practical-file-more-diagram dark",
        `Physics-Practicals/class-12/diagrams/dark/diagram${i}.jpg`,
      ),
    );
  }
}
// #endregion Diagram

// #region Objective
let ccm_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_objectiveDiv);

ccm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:"),
);

ccm_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the value of 'v' for different values of 'u' in case of a concave mirror and hence, to find the focal length 'f' of the mirrors by plotting graph between 'u' & 'v'.",
  ),
);
// #endregion Objective

// #region Apparatus
let ccm_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_apparatusDiv);

ccm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:"),
);

ccm_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with three uprights, one mirror holder, two needles, concave mirror, a knitting needle and a meter scale.",
  ),
);
// #endregion Apparatus

// #region Formula
let ccm_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_formulaDiv);

ccm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:"),
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The relation between the object distance 'u' and the image distance 'v' and the focal length 'f' of a concave mirror is given by",
  ),
);

ccm_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v + 1/u"),
);

ccm_formulaDiv.appendChild(createTextField("practical-section-content", "Or"));

ccm_formulaDiv.appendChild(
  createTextField("practical-main-formula", "f = uv/(u+v)"),
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "In the case of concave mirrors, for real images both 'u' & 'v' are negative as per new Cartesian sign convention. The focal length 'f' is also negative.",
  ),
);
// #endregion Formula

// #region Observation
let ccm_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_observationDiv);

ccm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:"),
);

let ccm_lengthOfNeedleInput = createInput(
  "ccm-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_ccm,
);
ccm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (x): ",
      ccm_lengthOfNeedleInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_distanceMirrorObjectInput = createInput(
  "ccm-distance-between-mirror-and-object-input",
  "number",
  0,
  measureEssentials_ccm,
);
ccm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance between the mirror and the object needle 'O' when the Knitting needle is introduced between them (y): ",
      ccm_distanceMirrorObjectInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_distanceMirrorImageInput = createInput(
  "ccm-distance-between-mirror-and-image-input",
  "number",
  0,
  measureEssentials_ccm,
);
ccm_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Observed distance between the mirror and the iamge needle 'I' when the Knitting needle is introduced between them (z): ",
      ccm_distanceMirrorImageInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_indexErrorUInput = createInput(
  "ccm-index-error-u-input",
  "number",
  0,
  null,
  true,
);
ccm_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index error for 'u' = e1 = (y-x):",
      ccm_indexErrorUInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_indexCorrectionUInput = createInput(
  "ccm-index-correction-u-input",
  "number",
  0,
  null,
  true,
);
ccm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Index correction for 'u' = (-e1):",
      ccm_indexCorrectionUInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_indexErrorVInput = createInput(
  "ccm-index-error-v-input",
  "number",
  0,
  null,
  true,
);
ccm_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x):",
      ccm_indexErrorVInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_indexCorrectionVInput = createInput(
  "ccm-index-correction-v-input",
  "number",
  0,
  null,
  true,
);
ccm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2):",
      ccm_indexCorrectionVInput,
      "cm.",
    ),
    true,
  ),
);

ccm_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of focal length of mirror",
  ),
);
let ccm_distanceTableDiv = createDiv("observation-table-div");
ccm_observationDiv.appendChild(ccm_distanceTableDiv);

let ccm_distanceTable = createDiv("observation-table");
ccm_distanceTableDiv.appendChild(ccm_distanceTable);

const ccm_sNoColumn = createTableColumn("S.no");
ccm_distanceTable.appendChild(ccm_sNoColumn);

const ccm_PColumn = createTableColumn("The mirror (P) cm");
ccm_distanceTable.appendChild(ccm_PColumn);

const ccm_OColumn = createTableColumn("Object Needle (O) cm");
ccm_distanceTable.appendChild(ccm_OColumn);

const ccm_IColumn = createTableColumn("Image Needle (I) cm");
ccm_distanceTable.appendChild(ccm_IColumn);

const ccm_UObsColumn = createTableColumn("Object Distance Observed (cm)");
ccm_distanceTable.appendChild(ccm_UObsColumn);

const ccm_UCorColumn = createTableColumn("Object Distance Corrected (cm)");
ccm_distanceTable.appendChild(ccm_UCorColumn);

const ccm_IObsColumn = createTableColumn("Image Distance Observed (cm)");
ccm_distanceTable.appendChild(ccm_IObsColumn);

const ccm_ICorColumn = createTableColumn("Image Distance Corrected (cm)");
ccm_distanceTable.appendChild(ccm_ICorColumn);

const ccm_FColumn = createTableColumn("f = uv/(u+v) (cm)");
ccm_distanceTable.appendChild(ccm_FColumn);

ccm_addRow();
ccm_distanceTableDiv.appendChild(
  toggleEffect(
    createButton(
      "ccm-add-row-btn",
      "add-row-btn toggle-effect ",
      createIcon("bold", "plus"),
      "Add Row",
      ccm_addRow,
    ),
  ),
);
// #endregion Observation

// #region Result
let ccm_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_resultDiv);

ccm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:"),
);

let ccm_focalLengthCalculatedInput = createInput(
  "ccm-mean-focal-length-calculated-input",
  "number",
  0,
);
ccm_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      ccm_focalLengthCalculatedInput,
      "cm.",
    ),
    true,
  ),
);

let ccm_focalLengthGraphInput = createInput(
  "ccm-mean-focal-length-by-graph-input",
  "number",
  0,
);
ccm_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given cocave mirror as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      ccm_focalLengthGraphInput,
      "cm.",
    ),
    true,
  ),
);
// #endregion Result

// #region Precautions
let ccm_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_precautionsDiv);

ccm_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:"),
);

ccm_precautionsDiv.appendChild(createPAS("1", ""));
ccm_precautionsDiv.appendChild(createPAS("2", ""));
ccm_precautionsDiv.appendChild(createPAS("3", ""));
ccm_precautionsDiv.appendChild(createPAS("4", ""));
ccm_precautionsDiv.appendChild(createPAS("5", ""));
// #endregion Precautions

// #region Sources of Errors
let ccm_SOEDiv = createDiv("practical-section");
experimentDiv.appendChild(ccm_SOEDiv);

ccm_SOEDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:"),
);

ccm_SOEDiv.appendChild(createPAS("1", ""));
ccm_SOEDiv.appendChild(createPAS("2", ""));
ccm_SOEDiv.appendChild(createPAS("3", ""));
ccm_SOEDiv.appendChild(createPAS("4", ""));
ccm_SOEDiv.appendChild(createPAS("5", ""));
// #endregion Sources of Errors
