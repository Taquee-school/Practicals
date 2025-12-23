let convexLensDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let cvl_lengthOfNeedle = null;
let cvl_distanceLensObject = null;
let cvl_distanceLensImage = null;

let cvl_indexCorrectionU = 0;
let cvl_indexCorrectionV = 0;
let cvl_rowCount = 0;

function measureEssentials_cvl() {
  let X = parseFloat(cvl_lengthOfNeedleInput.value) || 0;
  let Y = parseFloat(cvl_distanceLensObjectInput.value) || 0;
  let Z = parseFloat(cvl_distanceLensImageInput.value) || 0;

  let cvl_indexErrorU = Y - X;
  cvl_indexCorrectionU = -cvl_indexErrorU;
  cvl_indexErrorUInput.value = cvl_indexErrorU.toFixed(2);
  cvl_indexCorrectionUInput.value = cvl_indexCorrectionU.toFixed(2);

  let cvl_indexErrorV = Z - X;
  cvl_indexCorrectionV = -cvl_indexErrorV;
  cvl_indexErrorVInput.value = cvl_indexErrorV.toFixed(2);
  cvl_indexCorrectionVInput.value = cvl_indexCorrectionV.toFixed(2);

  measureFocalLength_cvl();
}

function measureFocalLength_cvl() {
  let sumF = 0;

  for (let i = 1; i <= cvl_rowCount; i++) {
    let P = parseFloat(document.getElementById(`cvl-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`cvl-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`cvl-table-I-${i}`).value) || 0;

    let u_obs = Math.abs(P - O);
    let u_cor = u_obs + cvl_indexCorrectionU;
    document.getElementById(`cvl-table-obj-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`cvl-table-obj-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = Math.abs(P - I);
    let v_cor = v_obs + cvl_indexCorrectionV;
    document.getElementById(`cvl-table-img-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`cvl-table-img-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`cvl-table-focal-length-${i}`).value = f.toFixed(3);

    sumF += f;
  }

  focalLength = sumF / cvl_rowCount;
  cvl_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}

function cvl_addRow() {
    cvl_rowCount++;
    setTimeout(() => {
        let inp = createInput(`cvl-s-no-${cvl_rowCount}`, "number", cvl_rowCount, null, true);
        cvl_sNoColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 10);
    setTimeout(() => {
        let inp = createInput(`cvl-table-P-${cvl_rowCount}`, "number", 75, measureFocalLength_cvl);
        cvl_PColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 50);
    setTimeout(() => {
        let inp = createInput(`cvl-table-O-${cvl_rowCount}`, "number", 0, measureFocalLength_cvl);
        cvl_OColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 100);
    setTimeout(() => {
        let inp = createInput(`cvl-table-I-${cvl_rowCount}`, "number", 0, measureFocalLength_cvl);
        cvl_IColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 150);
    setTimeout(() => {
        let inp = createInput(`cvl-table-obj-obs-${cvl_rowCount}`, "number", 0, null, true);
        cvl_UObsColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 200);
    setTimeout(() => {
        let inp = createInput(`cvl-table-obj-cor-${cvl_rowCount}`, "number", 0, null, true);
        cvl_UCorColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 250);
    setTimeout(() => {
        let inp = createInput(`cvl-table-img-obs-${cvl_rowCount}`, "number", 0, null, true);
        cvl_IObsColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 300);
    setTimeout(() => {
        let inp = createInput(`cvl-table-img-cor-${cvl_rowCount}`, "number", 0, null, true);
        cvl_ICorColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 350);
    setTimeout(() => {
        let inp = createInput(`cvl-table-focal-length-${cvl_rowCount}`, "number", 0, null, true);
        cvl_FColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 400);
}
// #endregion Functions

// #region Diagram
let cvl_diagramDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_diagramDiv);

cvl_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

cvl_diagramDiv.appendChild(createImg("practical-file-diagram light", ""));
cvl_diagramDiv.appendChild(createImg("practical-file-diagram dark", ""));

let cvl_moreDiagramBtn = createButton(null, "practical-section-more-button", createIcon("fill", "images-square"),"More Diagrams", cvl_showDiagrams);
// cvl_diagramDiv.appendChild(cvl_moreDiagramBtn);

function cvl_showDiagrams() {
  for (let i=1; i <= 6; i++) {
    cvl_diagramDiv.appendChild(createImg("practical-file-more-diagram light", `images/Physics/Class 12/Diagrams/Light/diagram${i}.jpg`));
    cvl_diagramDiv.appendChild(createImg("practical-file-more-diagram dark", `images/Physics/Class 12/Diagrams/Dark/diagram${i}.jpg`));
  }
}
// #endregion Diagram

// #region Objective
let cvl_objectiveDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_objectiveDiv);

cvl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

cvl_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the value of 'v' for different values of 'u' in case of a convex lens and hence, to find the focal length 'f' of the lens by plotting a graph between 'u'& 'v'."
  )
);
// #endregion Objective

// #region Apparatus
let cvl_apparatusDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_apparatusDiv);

cvl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

cvl_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with three uprights, one lens holder, two needles, convex lens, a knitting needle and a meter scale."
  )
);
// #endregion Apparatus

// #region Formula
let cvl_formulaDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_formulaDiv);

cvl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

cvl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The relation between the object distance u, the image distance v and the focal length f of a lens (here for convex lens) is given by,"
  )
);

cvl_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v - 1/u")
);

cvl_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);

// #endregion Formula

// #region Observation
let cvl_observationDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_observationDiv);

cvl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let cvl_lengthOfNeedleInput = createInput(
  "cvl-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (x): ",
      cvl_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

let cvl_distanceLensObjectInput = createInput(
  "cvl-distance-between-Lens-and-object-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance between the Lens and the object needle 'O' when the Knitting needle is introduced between them (y): ",
      cvl_distanceLensObjectInput,
      "cm."
    ),
    true
  )
);

let cvl_distanceLensImageInput = createInput(
  "cvl-distance-between-Lens-and-image-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Observed distance between the Lens and the iamge needle 'I' when the Knitting needle is introduced between them (z): ",
      cvl_distanceLensImageInput,
      "cm."
    ),
    true
  )
);

let cvl_indexErrorUInput = createInput(
  "cvl-index-error-u-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index error for 'u' = e1 = (y-x) :",
      cvl_indexErrorUInput,
      "cm."
    ),
    true
  )
);

let cvl_indexCorrectionUInput = createInput(
  "cvl-index-correction-u-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Index correction for 'u' = (-e1) :",
      cvl_indexCorrectionUInput,
      "cm."
    ),
    true
  )
);

let cvl_indexErrorVInput = createInput(
  "cvl-index-error-v-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x) :",
      cvl_indexErrorVInput,
      "cm."
    ),
    true
  )
);

let cvl_indexCorrectionVInput = createInput(
  "cvl-index-correction-v-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2) :",
      cvl_indexCorrectionVInput,
      "cm."
    ),
    true
  )
);

cvl_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of focal length of mirror"
  )
);
let cvl_distanceTableDiv = createDiv("observation-table-div");
cvl_observationDiv.appendChild(cvl_distanceTableDiv);

let cvl_distanceTable = createDiv("observation-table");
cvl_distanceTableDiv.appendChild(cvl_distanceTable);

const cvl_sNoColumn = createTableColumn("S.no");
cvl_distanceTable.appendChild(cvl_sNoColumn);

const cvl_PColumn = createTableColumn("The Lens (P) cm");
cvl_distanceTable.appendChild(cvl_PColumn);

const cvl_OColumn = createTableColumn("Object Needle (O) cm");
cvl_distanceTable.appendChild(cvl_OColumn);

const cvl_IColumn = createTableColumn("Image Needle (I) cm");
cvl_distanceTable.appendChild(cvl_IColumn);

const cvl_UObsColumn = createTableColumn("Object Distance Observed (cm)");
cvl_distanceTable.appendChild(cvl_UObsColumn);

const cvl_UCorColumn = createTableColumn("Object Distance Corrected (cm)");
cvl_distanceTable.appendChild(cvl_UCorColumn);

const cvl_IObsColumn = createTableColumn("Image Distance Observed (cm)");
cvl_distanceTable.appendChild(cvl_IObsColumn);

const cvl_ICorColumn = createTableColumn("Image Distance Corrected (cm)");
cvl_distanceTable.appendChild(cvl_ICorColumn);

const cvl_FColumn = createTableColumn("f = uv/(u+v) (cm)");
cvl_distanceTable.appendChild(cvl_FColumn);

cvl_addRow();
cvl_distanceTableDiv.appendChild(setRippleStyle(createButton("cvl-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", cvl_addRow)));
// #endregion Observation

// #region Result
let cvl_resultDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_resultDiv);

cvl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let cvl_focalLengthCalculatedInput = createInput(
  "cvl-mean-focal-length-calculated-input",
  "number",
  0
);
cvl_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      cvl_focalLengthCalculatedInput,
      "cm."
    ),
    true
  )
);

let cvl_focalLengthGraphInput = createInput(
  "cvl-mean-focal-length-by-graph-input",
  "number",
  0
);
cvl_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given convex Lens as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      cvl_focalLengthGraphInput,
      "cm."
    ),
    true
  )
);
// #endregion Result

// #region Precautions
let cvl_precautionsDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_precautionsDiv);

cvl_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

cvl_precautionsDiv.appendChild(
  createPAS(
    "1",
    "The tips of the needles should be as high as the optical centre of the lens."
  )
);
cvl_precautionsDiv.appendChild(
  createPAS(
    "2",
    "The uprights supporting the needles and the mirror should be rigid."
  )
);
cvl_precautionsDiv.appendChild(
  createPAS(
    "3",
    "Parallax of the image and object needle should be removed tip to tip."
  )
);
cvl_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The object and the image needles should be clearly distinguished from each other and they should not be interchanged for different sets of observations."
  )
);
cvl_precautionsDiv.appendChild(
  createPAS(
    "5",
    "Index correction for both u and v should be properly determined and must be applied."
  )
);

let cvl_SOEDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_SOEDiv);
// #endregion Precautions

// #region Sources of Errors
cvl_SOEDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

cvl_SOEDiv.appendChild(createPAS("1", "The uprights may not be vertical."));
cvl_SOEDiv.appendChild(createPAS("2", "Parallax removal may not be perfect."));
cvl_SOEDiv.appendChild(createPAS("3", "The convex lens is very thick."));
cvl_SOEDiv.appendChild(
  createPAS(
    "4",
    "The principal axis of the lens may not be parallel to the optical bench."
  )
);
// #endregion Sources of Errors


