let bn_concaveMirror = createListButton(
  class12_list,
  "conave-mirror-btn",
  "Concave Mirror"
);
bn_concaveMirror.addEventListener("click", () =>
  openFile(concaveMirrorDiv, "Concave Mirror")
);

let concaveMirrorDiv = document.createElement("div");
concaveMirrorDiv.className = "practical-file";

let ccm_objectiveDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_objectiveDiv);
ccm_objectiveDiv.className = "practical-section";

ccm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

ccm_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the value of 'v' for different values of 'u' in case of a concave mirror and hence, to find the focal length 'f' of the mirrors by plotting graph between 'u' & 'v'."
  )
);

let ccm_apparatusDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_apparatusDiv);
ccm_apparatusDiv.className = "practical-section";

ccm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

ccm_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with three uprights, one mirror holder, two needles, concave mirror, a knitting needle and a meter scale."
  )
);

let ccm_formulaDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_formulaDiv);
ccm_formulaDiv.className = "practical-section";

ccm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The relation between the object distance 'u' and the image distance 'v' and the focal length of a concave mirror is given by"
  )
);

ccm_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v + 1/u  OR  f = uv/(u+v)")
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "In the case of concave mirrors, for real images both 'u' & 'v' are negative as per noro Cartesian sign convention. The focal length 'f' is also negative."
  )
);

let ccm_observationDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_observationDiv);
ccm_observationDiv.className = "practical-section";

ccm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let ccm_lengthOfNeedleInput = createInput(
  "ccm-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (x): ",
      ccm_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceMirrorObjectInput = createInput(
  "ccm-distance-between-mirror-and-object-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance between the mirror and the object needle 'O' when the Knitting needle is introduced between them (y): ",
      ccm_distanceMirrorObjectInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceMirrorImageInput = createInput(
  "ccm-distance-between-mirror-and-image-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Observed distance between the mirror and the iamge needle 'I' when the Knitting needle is introduced between them (z): ",
      ccm_distanceMirrorImageInput,
      "cm."
    ),
    true
  )
);

let ccm_indexErrorUInput = createInput(
  "ccm-index-error-u-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index error for 'u' = e1 = (y-x) :",
      ccm_indexErrorUInput,
      "cm."
    ),
    true
  )
);

let ccm_indexCorrectionUInput = createInput(
  "ccm-index-correction-u-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Index correction for 'u' = (-e1) :",
      ccm_indexCorrectionUInput,
      "cm."
    ),
    true
  )
);

let ccm_indexErrorVInput = createInput(
  "ccm-index-error-v-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x) :",
      ccm_indexErrorVInput,
      "cm."
    ),
    true
  )
);

let ccm_indexCorrectionVInput = createInput(
  "ccm-index-correction-v-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2) :",
      ccm_indexCorrectionVInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceTableDiv = document.createElement("div");
ccm_distanceTableDiv.className = "observation-table-div";
ccm_observationDiv.appendChild(ccm_distanceTableDiv);

let ccm_distanceTable = document.createElement("div");
ccm_distanceTable.className = "observation-table";
ccm_distanceTableDiv.appendChild(ccm_distanceTable);

ccm_distanceTable.appendChild(
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

ccm_distanceTable.appendChild(
  createColumn(
    "The mirror (P) cm",
    10,
    "ccm-table-P",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Needle (O) cm",
    10,
    "ccm-table-O",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Needle (I) cm",
    10,
    "ccm-table-I",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Distance Observed (cm)",
    10,
    "ccm-table-obj-obs",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Distance Corrected (cm)",
    10,
    "ccm-table-obj-cor",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Distance Observed (cm)",
    10,
    "ccm-table-img-obs",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Distance Corrected (cm)",
    10,
    "ccm-table-img-cor",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "f = uv/(u+v) (cm)",
    10,
    "ccm-table-focal-length",
    "number",
    0,
    null,
    true
  )
);

let ccm_resultDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_resultDiv);
ccm_resultDiv.className = "practical-section";

ccm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let ccm_focalLengthCalculatedInput = createInput(
  "ccm-mean-focal-length-calculated-input",
  "number",
  0
);
ccm_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      ccm_focalLengthCalculatedInput,
      "cm."
    ),
    true
  )
);

let ccm_focalLengthGraphInput = createInput(
  "ccm-mean-focal-length-by-graph-input",
  "number",
  0
);
ccm_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given cocave mirror as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      ccm_focalLengthGraphInput,
      "cm."
    ),
    true
  )
);

let ccm_precautionsDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_precautionsDiv);
ccm_precautionsDiv.className = "practical-section";

ccm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS:"
  )
);

ccm_precautionsDiv.appendChild(createPAS("1", ""));
ccm_precautionsDiv.appendChild(createPAS("2", ""));
ccm_precautionsDiv.appendChild(createPAS("3", ""));
ccm_precautionsDiv.appendChild(createPAS("4", ""));
ccm_precautionsDiv.appendChild(createPAS("5", ""));



let ccm_SOEDiv = document.createElement("div");
concaveMirrorDiv.appendChild(ccm_SOEDiv);
ccm_SOEDiv.className = "practical-section";

ccm_SOEDiv.appendChild(
  createTextField(
    "practical-section-header",
    "SOURCES OF ERRORS:"
  )
);

ccm_SOEDiv.appendChild(createPAS("1", ""));
ccm_SOEDiv.appendChild(createPAS("2", ""));
ccm_SOEDiv.appendChild(createPAS("3", ""));
ccm_SOEDiv.appendChild(createPAS("4", ""));
ccm_SOEDiv.appendChild(createPAS("5", ""));

// VARIABLES =============================
let ccm_lengthOfNeedle = null;
let ccm_distanceMirrorObject = null;
let ccm_distanceMirrorImage = null;

let ccm_indexCorrectionU = 0;
let ccm_indexCorrectionV = 0;

// FUNCTIONS =============================
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
}

function measureFocalLength_ccm() {
  let sumF = 0;
  let validReadings = 0;

  for (let i = 1; i <= 9; i++) {
    let P = parseFloat(document.getElementById(`ccm-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`ccm-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`ccm-table-I-${i}`).value) || 0;

    let u_obs = abs(P - O);
    let u_cor = u_obs + ccm_indexCorrectionU;
    document.getElementById(`ccm-table-obj-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`ccm-table-obj-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = abs(P - I);
    let v_cor = v_obs + ccm_indexCorrectionV;
    document.getElementById(`ccm-table-img-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`ccm-table-img-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`ccm-table-focal-length-${i}`).value = f.toFixed(3);

    if (
      f >
      (ccm_indexCorrectionU * ccm_indexCorrectionV) /
        (ccm_indexCorrectionU + ccm_indexCorrectionV)
    ) {
      sumF += f;
      validReadings++;
    }
  }

  focalLength = sumF / validReadings;
  ccm_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}
