let convexMirrorDiv = createDiv("practical-file");

let cvm_diagramDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_diagramDiv);

cvm_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

let cvm_diagram_light = document.createElement("img");
cvm_diagram_light.className = "practical-file-diagram light";
cvm_diagram_light.src = "Physics-Practicals/Class 12/Diagrams/Light/convex mirror.jpg";
cvm_diagramDiv.appendChild(cvm_diagram_light);
let cvm_diagram_dark = document.createElement("img");
cvm_diagram_dark.className = "practical-file-diagram dark";
cvm_diagram_dark.src = "Physics-Practicals/Class 12/Diagrams/Dark/convex mirror.jpg";
cvm_diagramDiv.appendChild(cvm_diagram_dark);

let cvm_objectiveDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_objectiveDiv);

cvm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

cvm_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the focal length of convex mirror using convex lens."
  )
);

let cvm_apparatusDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_apparatusDiv);

cvm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

cvm_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with four uprights, convex mirror, a convex lens, a knitting needle and a half meter scale."
  )
);

let cvm_formulaDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_formulaDiv);

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

let cvm_observationDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_observationDiv);

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

cvm_distanceTable.appendChild(
  createColumn(
    "S.no",
    5,
    null,
    "number",
    [1, 2, 3, 4, 5],
    null,
    true
  )
);

cvm_distanceTable.appendChild(
  createColumn(
    "Position of the object needle (O) cm",
    5,
    "cvm-table-O",
    "number",
    0,
    measureFocalLength_cvm
  )
);

cvm_distanceTable.appendChild(
  createColumn(
    "Position of the lens (L) cm",
    5,
    "cvm-table-L",
    "number",
    0,
    measureFocalLength_cvm
  )
);

cvm_distanceTable.appendChild(
  createColumn(
    "Position of the lens (M) cm",
    5,
    "cvm-table-M",
    "number",
    0,
    measureFocalLength_cvm
  )
);

cvm_distanceTable.appendChild(
  createColumn(
    "Position of the image needle (I) cm",
    5,
    "cvm-table-I",
    "number",
    0,
    measureFocalLength_cvm
  )
);

cvm_distanceTable.appendChild(
  createColumn(
    "Observed Distance MI' (cm)",
    5,
    "cvm-table-MI",
    "number",
    0,
    null,
    true
  )
);

let cvm_meanMIInput = createInput("cvm-mean-MI-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_meanMIInput, "cm."));

let cvm_correctedMIInput = createInput("cvm-corrected-MI-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_correctedMIInput, "cm."));

let cvm_focalLengthInput = createInput("cvm-focal-length-input", "number", "0", null, true);
cvm_observationDiv.appendChild(createInputDiv("Mean MI':", cvm_focalLengthInput, "cm."));


let cvm_resultDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_resultDiv);

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

let cvm_precautionsDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_precautionsDiv);

cvm_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

cvm_precautionsDiv.appendChild(createPAS("1", "The line joining the pole of the mirror, the centre of the lens L and the tip of the needle should be parallel to the length of the optical bench."));
cvm_precautionsDiv.appendChild(createPAS("2", ""));
cvm_precautionsDiv.appendChild(createPAS("3", ""));
cvm_precautionsDiv.appendChild(createPAS("4", ""));

let cvm_SOEDiv = createDiv("practical-section");
convexMirrorDiv.appendChild(cvm_SOEDiv);

cvm_SOEDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

cvm_SOEDiv.appendChild(createPAS("1", "Focal length of the lens may not be small."));
cvm_SOEDiv.appendChild(createPAS("2", "The uprights may not be vertical."));
cvm_SOEDiv.appendChild(createPAS("3", "Parallax removal may not be perfect."));

// VARIABLES =============================
let cvm_lengthOfNeedle = null;

let cvm_indexCorrection = 0;

// FUNCTIONS =============================
function measureEssentials_cvm() {
  let Y = parseFloat(cvm_lengthOfNeedleInput.value) || 0;
  let X = parseFloat(cvm_distanceMIInput.value) || 0;

  cvm_indexCorrection = Y - X;
  cvm_indexCorrectionInput.value = cvm_indexCorrection.toFixed(2);

  // measureFocalLength_cvm();
}

function measureFocalLength_cvm() {
  let sumMI = 0;
  let validReadings = 0;

  for (let i = 1; i <= 9; i++) {
    let O = parseFloat(document.getElementById(`cvm-table-O-${i}`).value) || 0;
    let L = parseFloat(document.getElementById(`cvm-table-L-${i}`).value) || 0;
    let M = parseFloat(document.getElementById(`cvm-table-M-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`cvm-table-I-${i}`).value) || 0;
    let MI = I - M;
    document.getElementById(`cvm-table-MI-${i}`).value = MI.toFixed(2);
    if (O > 0) {
      sumMI += MI;
      validReadings++;
    }
  }
  if (validReadings > 0) {
    let meanMI = sumMI / validReadings;
    cvm_meanMIInput.value = meanMI.toFixed(2);
    let correctedMI = sumMI + cvm_indexCorrection;
    cvm_correctedMIInput.value = correctedMI.toFixed(2);
    let F = correctedMI / 2;
    cvm_focalLengthInput.value = F.toFixed(2);
    cvm_fFocalLengthInput.value = F.toFixed(2);
  }
}
