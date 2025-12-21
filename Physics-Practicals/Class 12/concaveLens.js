let concaveLensDiv = createDiv("practical-file", "physics-practical");

// #region Diagram 
let ccl_diagramDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_diagramDiv);

ccl_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

ccl_diagramDiv.appendChild(createImg("practical-file-diagram light", "Physics-Practicals/Class 12/Diagrams/Light/concave lens.jpg"));
ccl_diagramDiv.appendChild(createImg("practical-file-diagram dark", "Physics-Practicals/Class 12/Diagrams/Dark/concave lens.jpg"));

let ccl_moreDiagramBtn = createButton(null, "practical-section-more-button", createIcon("fill", "images-square"),"More Diagrams", ccl_showDiagrams);
// ccl_diagramDiv.appendChild(ccl_moreDiagramBtn);

function ccl_showDiagrams() {
  for (let i=1; i <= 6; i++) {
    ccl_diagramDiv.appendChild(createImg("practical-file-more-diagram light", `Physics-Practicals/Class 12/Diagrams/Light/diagram${i}.jpg`));
    ccl_diagramDiv.appendChild(createImg("practical-file-more-diagram dark", `Physics-Practicals/Class 12/Diagrams/Dark/diagram${i}.jpg`));
  }
}
// #endregion Diagram 

// #region Objective 
let ccl_objectiveDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_objectiveDiv);

ccl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

ccl_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the focal length of a concave lens using a convex lens."
  )
);
// #endregion Objective 

// #region Apparatus 
let ccl_apparatusDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_apparatusDiv);

ccl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

ccl_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench with four uprights, two needles, a concave lens, a convex lens of f < f of concave lens, a knitting needle and a meter scale."
  )
);
// #endregion Apparatus 

// #region Formula 
let ccl_formulaDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_formulaDiv);

ccl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

ccl_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v - 1/u")
);

ccl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "u: distance between I and L2"
  )
);
ccl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "v: distance between I' and L2"
  )
);
// #endregion Formula 

// #region Observation 
let ccl_observationDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_observationDiv);

ccl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let ccl_lengthOfNeedleInput = createInput(
  "ccl-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_ccl
);
ccl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Actual Length of the knitting needle (x): ",
      ccl_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

ccl_observationDiv.appendChild(createPAS("a)", "For u:"))

ccl_movedDiv1 = createDiv("practical-section-content");
ccl_observationDiv.appendChild(ccl_movedDiv1);

let ccl_distanceMirrorObjectInput = createInput(
  "ccl-distance-between-mirror-and-object-input",
  "number",
  0,
  measureEssentials_ccl
);
ccl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Observed distance between object needle and lens when needle is inserted between them, y: ",
      ccl_distanceMirrorObjectInput,
      "cm."
    ),
    true
  )
);

let ccl_indexErrorUInput = createInput(
  "ccl-index-error-input",
  "number",
  0,
  measureEssentials_ccl
);
ccl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Index error for u, e_1 = (y - x) : ",
      ccl_indexErrorUInput,
      "cm."
    ),
    true
  )
);

let ccl_indexCorrectionUInput = createInput(
  "ccl-index-correction-u-input",
  "number",
  0,
  null,
  true
);
ccl_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Index correction for u, (-e_1) = (x - y) :",
      ccl_indexCorrectionUInput,
      "cm."
    ),
    true
  )
);

const ccl_movedDiv2 = createDiv("practical-section-content");
ccl_observationDiv.appendChild(ccl_movedDiv2);

let ccl_distanceMirrorImageInput = createInput(
  "ccl-distance-between-mirror-and-image-input",
  "number",
  0,
  measureEssentials_ccl
);
ccl_movedDiv2.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Observed distance between image needle and lens when needle is inserted between them, z:",
      ccl_distanceMirrorImageInput,
      "cm."
    ),
    true
  )
);

let ccl_indexErrorVInput = createInput(
  "ccl-index-error-v-input",
  "number",
  0,
  null,
  true
);
ccl_movedDiv2.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x) :",
      ccl_indexErrorVInput,
      "cm."
    ),
    true
  )
);

let ccl_indexCorrectionVInput = createInput(
  "ccl-index-correction-v-input",
  "number",
  0,
  null,
  true
);
ccl_movedDiv2.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2) :",
      ccl_indexCorrectionVInput,
      "cm."
    ),
    true
  )
);

ccl_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of focal length of mirror"
  )
);
let ccl_distanceTableDiv = createDiv("observation-table-div");
ccl_observationDiv.appendChild(ccl_distanceTableDiv);

let ccl_distanceTable = createDiv("observation-table");
ccl_distanceTableDiv.appendChild(ccl_distanceTable);

ccl_distanceTable.appendChild(
  createColumn(
    "S.no",
    10,
    null,
    "number",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    null,
    true
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "The mirror (P) cm",
    10,
    "ccl-table-P",
    "number",
    0,
    measureFocalLength_ccl,
    false
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Object Needle (O) cm",
    10,
    "ccl-table-O",
    "number",
    0,
    measureFocalLength_ccl,
    false
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Image Needle (I) cm",
    10,
    "ccl-table-I",
    "number",
    0,
    measureFocalLength_ccl,
    false
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Object Distance Observed (cm)",
    10,
    "ccl-table-obj-obs",
    "number",
    0,
    null,
    true
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Object Distance Corrected (cm)",
    10,
    "ccl-table-obj-cor",
    "number",
    0,
    null,
    true
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Image Distance Observed (cm)",
    10,
    "ccl-table-img-obs",
    "number",
    0,
    null,
    true
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "Image Distance Corrected (cm)",
    10,
    "ccl-table-img-cor",
    "number",
    0,
    null,
    true
  )
);

ccl_distanceTable.appendChild(
  createColumn(
    "f = uv/(u+v) (cm)",
    10,
    "ccl-table-focal-length",
    "number",
    0,
    null,
    true
  )
);

// #endregion Observation 

// #region Result 
let ccl_resultDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_resultDiv);

ccl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let ccl_focalLengthCalculatedInput = createInput(
  "ccl-mean-focal-length-calculated-input",
  "number",
  0
);
ccl_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      ccl_focalLengthCalculatedInput,
      "cm."
    ),
    true
  )
);

let ccl_focalLengthGraphInput = createInput(
  "ccl-mean-focal-length-by-graph-input",
  "number",
  0
);
ccl_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given cocave mirror as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      ccl_focalLengthGraphInput,
      "cm."
    ),
    true
  )
);

// #endregion Result 

// #region Precautions 
let ccl_precautionsDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_precautionsDiv);

ccl_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

ccl_precautionsDiv.appendChild(createPAS("1", ""));
ccl_precautionsDiv.appendChild(createPAS("2", ""));
ccl_precautionsDiv.appendChild(createPAS("3", ""));
ccl_precautionsDiv.appendChild(createPAS("4", ""));
ccl_precautionsDiv.appendChild(createPAS("5", ""));

// #endregion Precautions 

// #region Sources of Errors 
let ccl_SOEDiv = createDiv("practical-section");
concaveLensDiv.appendChild(ccl_SOEDiv);

ccl_SOEDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

ccl_SOEDiv.appendChild(createPAS("1", ""));
ccl_SOEDiv.appendChild(createPAS("2", ""));
ccl_SOEDiv.appendChild(createPAS("3", ""));
ccl_SOEDiv.appendChild(createPAS("4", ""));
ccl_SOEDiv.appendChild(createPAS("5", ""));

// #endregion Sources of Errors 

// #region Functions
// VARIABLES =============================
let ccl_lengthOfNeedle = null;
let ccl_distanceMirrorObject = null;
let ccl_distanceMirrorImage = null;

let ccl_indexCorrectionU = 0;
let ccl_indexCorrectionV = 0;

// FUNCTIONS =============================
function measureEssentials_ccl() {
  let X = parseFloat(ccl_lengthOfNeedleInput.value) || 0;
  let Y = parseFloat(ccl_distanceMirrorObjectInput.value) || 0;
  let Z = parseFloat(ccl_distanceMirrorImageInput.value) || 0;

  let ccl_indexErrorU = Y - X;
  ccl_indexCorrectionU = -ccl_indexErrorU;
  ccl_indexErrorUInput.value = ccl_indexErrorU.toFixed(2);
  ccl_indexCorrectionUInput.value = ccl_indexCorrectionU.toFixed(2);

  let ccl_indexErrorV = Z - X;
  ccl_indexCorrectionV = -ccl_indexErrorV;
  ccl_indexErrorVInput.value = ccl_indexErrorV.toFixed(2);
  ccl_indexCorrectionVInput.value = ccl_indexCorrectionV.toFixed(2);
}

function measureFocalLength_ccl() {
  let sumF = 0;
  let validReadings = 0;

  for (let i = 1; i <= 9; i++) {
    let P = parseFloat(document.getElementById(`ccl-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`ccl-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`ccl-table-I-${i}`).value) || 0;

    let u_obs = abs(P - O);
    let u_cor = u_obs + ccl_indexCorrectionU;
    document.getElementById(`ccl-table-obj-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`ccl-table-obj-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = abs(P - I);
    let v_cor = v_obs + ccl_indexCorrectionV;
    document.getElementById(`ccl-table-img-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`ccl-table-img-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`ccl-table-focal-length-${i}`).value = f.toFixed(3);

    if (
      f >
      (ccl_indexCorrectionU * ccl_indexCorrectionV) /
      (ccl_indexCorrectionU + ccl_indexCorrectionV)
    ) {
      sumF += f;
      validReadings++;
    }
  }

  focalLength = sumF / validReadings;
  ccl_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}
// #endregion Functions
