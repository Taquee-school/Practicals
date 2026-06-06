import {
  createDiv,
  createInput,
  createTextField,
  base,
  createPAS,
  createInputDiv,
  createTableColumn,
  createButton,
  createIcon,
} from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Volume Calculation
function calculateVolume_vnc() {
  let de = parseFloat(vnc_correctedExternalDiameterInput.value) || 0;
  let di = parseFloat(vnc_correctedInternalDiameterInput.value) || 0;
  let he = parseFloat(vnc_correctedExternalHeightInput.value) || 0;
  let hi = parseFloat(vnc_correctedInternalHeightInput.value) || 0;

  let volume = (Math.PI * (de * de * he - di * di * hi)) / 4;
  vnc_masspulInput.value = volume.toFixed(4);
}
// #endregion

// #region Measurement Functions
let vnc_leastCount = 0;
let vnc_zeroError = 0;

function measureEssentials_vnc() {
  let mainScaleDiv = parseFloat(vnc_mainScaleDivInput.value) || 0;
  let vernierScaleDiv = parseFloat(vnc_vernierScaleDivInput.value) || 0;

  vnc_leastCount = vernierScaleDiv > 0 ? mainScaleDiv / vernierScaleDiv : 0;
  vnc_leastCountInput.value = vnc_leastCount.toFixed(3);

  let ze1 = parseFloat(vnc_ze1Input.value) || 0;
  let ze2 = parseFloat(vnc_ze2Input.value) || 0;
  let ze3 = parseFloat(vnc_ze3Input.value) || 0;

  vnc_zeroError = (ze1 + ze2 + ze3) / 3;
  vnc_meanZeroErrorInput.value = vnc_zeroError.toFixed(4);
  vnc_zeroCorrectionInput.value = (-vnc_zeroError).toFixed(4);

  measureExternalDiameter_vnc();
  measureInternalDiameter_vnc();
  measureExternalHeight_vnc();
  measureInternalHeight_vnc();
}

// External Diameter
let vnc_ex_d_rowCount = 0;
function measureExternalDiameter_vnc() {
  let sum = 0;
  for (let i = 1; i <= vnc_ex_d_rowCount; i++) {
    let msr =
      parseFloat(document.getElementById(`vnc-ex-d-msr-${i}`).value) || 0;
    let div =
      parseFloat(document.getElementById(`vnc-ex-d-div-${i}`).value) || 0;
    let vsr = div * vnc_leastCount;
    document.getElementById(`vnc-ex-d-vsr-${i}`).value = vsr.toFixed(3);
    let obs = msr + vsr;
    document.getElementById(`vnc-ex-d-obs-${i}`).value = obs.toFixed(3);
    sum += obs;
  }
  let mean = sum / vnc_ex_d_rowCount;
  vnc_meanExternalDiameterInput.value = mean.toFixed(3);
  let corrected = mean + (parseFloat(vnc_zeroCorrectionInput.value) || 0);
  vnc_correctedExternalDiameterInput.value = corrected.toFixed(3);
  calculateVolume_vnc();
}
function vnc_addExDRow() {
  vnc_ex_d_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-d-sno-${vnc_ex_d_rowCount}`,
      "number",
      vnc_ex_d_rowCount,
      null,
      true,
    );
    vnc_ex_d_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-d-msr-${vnc_ex_d_rowCount}`,
      "number",
      0,
      measureExternalDiameter_vnc,
    );
    vnc_ex_d_msrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-d-div-${vnc_ex_d_rowCount}`,
      "number",
      0,
      measureExternalDiameter_vnc,
    );
    vnc_ex_d_divColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-d-vsr-${vnc_ex_d_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_ex_d_vsrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-d-obs-${vnc_ex_d_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_ex_d_obsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
}

// Internal Diameter
let vnc_in_d_rowCount = 0;
function measureInternalDiameter_vnc() {
  let sum = 0;
  for (let i = 1; i <= vnc_in_d_rowCount; i++) {
    let msr =
      parseFloat(document.getElementById(`vnc-in-d-msr-${i}`).value) || 0;
    let div =
      parseFloat(document.getElementById(`vnc-in-d-div-${i}`).value) || 0;
    let vsr = div * vnc_leastCount;
    document.getElementById(`vnc-in-d-vsr-${i}`).value = vsr.toFixed(3);
    let obs = msr + vsr;
    document.getElementById(`vnc-in-d-obs-${i}`).value = obs.toFixed(3);
    sum += obs;
  }
  let mean = sum / vnc_in_d_rowCount;
  vnc_meanInternalDiameterInput.value = mean.toFixed(3);
  let corrected = mean + (parseFloat(vnc_zeroCorrectionInput.value) || 0);
  vnc_correctedInternalDiameterInput.value = corrected.toFixed(3);
  calculateVolume_vnc();
}
function vnc_addInDRow() {
  vnc_in_d_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-d-sno-${vnc_in_d_rowCount}`,
      "number",
      vnc_in_d_rowCount,
      null,
      true,
    );
    vnc_in_d_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-d-msr-${vnc_in_d_rowCount}`,
      "number",
      0,
      measureInternalDiameter_vnc,
    );
    vnc_in_d_msrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-d-div-${vnc_in_d_rowCount}`,
      "number",
      0,
      measureInternalDiameter_vnc,
    );
    vnc_in_d_divColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-d-vsr-${vnc_in_d_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_in_d_vsrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-d-obs-${vnc_in_d_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_in_d_obsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
}

// External Height
let vnc_ex_h_rowCount = 0;
function measureExternalHeight_vnc() {
  let sum = 0;
  for (let i = 1; i <= vnc_ex_h_rowCount; i++) {
    let msr =
      parseFloat(document.getElementById(`vnc-ex-h-msr-${i}`).value) || 0;
    let div =
      parseFloat(document.getElementById(`vnc-ex-h-div-${i}`).value) || 0;
    let vsr = div * vnc_leastCount;
    document.getElementById(`vnc-ex-h-vsr-${i}`).value = vsr.toFixed(3);
    let obs = msr + vsr;
    document.getElementById(`vnc-ex-h-obs-${i}`).value = obs.toFixed(3);
    sum += obs;
  }
  let mean = sum / vnc_ex_h_rowCount;
  vnc_meanExternalHeightInput.value = mean.toFixed(3);
  let corrected = mean + (parseFloat(vnc_zeroCorrectionInput.value) || 0);
  vnc_correctedExternalHeightInput.value = corrected.toFixed(3);
  calculateVolume_vnc();
}
function vnc_addExHRow() {
  vnc_ex_h_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-h-sno-${vnc_ex_h_rowCount}`,
      "number",
      vnc_ex_h_rowCount,
      null,
      true,
    );
    vnc_ex_h_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-h-msr-${vnc_ex_h_rowCount}`,
      "number",
      0,
      measureExternalHeight_vnc,
    );
    vnc_ex_h_msrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-h-div-${vnc_ex_h_rowCount}`,
      "number",
      0,
      measureExternalHeight_vnc,
    );
    vnc_ex_h_divColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-h-vsr-${vnc_ex_h_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_ex_h_vsrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `vnc-ex-h-obs-${vnc_ex_h_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_ex_h_obsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
}

// Internal Height
let vnc_in_h_rowCount = 0;
function measureInternalHeight_vnc() {
  let sum = 0;
  for (let i = 1; i <= vnc_in_h_rowCount; i++) {
    let msr =
      parseFloat(document.getElementById(`vnc-in-h-msr-${i}`).value) || 0;
    let div =
      parseFloat(document.getElementById(`vnc-in-h-div-${i}`).value) || 0;
    let vsr = div * vnc_leastCount;
    document.getElementById(`vnc-in-h-vsr-${i}`).value = vsr.toFixed(3);
    let obs = msr + vsr;
    document.getElementById(`vnc-in-h-obs-${i}`).value = obs.toFixed(3);
    sum += obs;
  }
  let mean = sum / vnc_in_h_rowCount;
  vnc_meanInternalHeightInput.value = mean.toFixed(3);
  let corrected = mean + (parseFloat(vnc_zeroCorrectionInput.value) || 0);
  vnc_correctedInternalHeightInput.value = corrected.toFixed(3);
  calculateVolume_vnc();
}
function vnc_addInHRow() {
  vnc_in_h_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-h-sno-${vnc_in_h_rowCount}`,
      "number",
      vnc_in_h_rowCount,
      null,
      true,
    );
    vnc_in_h_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-h-msr-${vnc_in_h_rowCount}`,
      "number",
      0,
      measureInternalHeight_vnc,
    );
    vnc_in_h_msrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-h-div-${vnc_in_h_rowCount}`,
      "number",
      0,
      measureInternalHeight_vnc,
    );
    vnc_in_h_divColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-h-vsr-${vnc_in_h_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_in_h_vsrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `vnc-in-h-obs-${vnc_in_h_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    vnc_in_h_obsColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
}
// #endregion Measurement Functions

let vnc_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_diagramDiv);

vnc_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:"),
);

let vnc_diagram_light = document.createElement("img");
((vnc_diagram_light.className = "practical-file-diagram"), "light");
vnc_diagram_light.src = base + "/diagrams/class-11/light/vernier calipers.jpg";
vnc_diagramDiv.appendChild(vnc_diagram_light);
let vnc_diagram_dark = document.createElement("img");
((vnc_diagram_dark.className = "practical-file-diagram"), "dark");
vnc_diagram_dark.src = base + "/diagrams/class-11/dark/vernier calipers.jpg";
vnc_diagramDiv.appendChild(vnc_diagram_dark);

let vnc_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_objectiveDiv);

vnc_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:"),
);

vnc_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the volume of the material of a hollow cylinder using vernier calipers.",
  ),
);

let vnc_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_apparatusDiv);

vnc_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:"),
);

vnc_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A hollow cylinder, vernier calipers.",
  ),
);

let vnc_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_formulaDiv);

vnc_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:"),
);

vnc_formulaDiv.appendChild(
  createTextField("practical-main-formula", "V = π(de2he - di2hi)/4"),
);

vnc_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,"),
);

let vnc_formulaBelonging = createDiv("moved-div");
vnc_formulaDiv.appendChild(vnc_formulaBelonging);

vnc_formulaBelonging.appendChild(
  createTextField(null, "V = volume of the material of the hollow cylinder."),
);
vnc_formulaBelonging.appendChild(
  createTextField(null, "de = external diameter of the cylinder."),
);
vnc_formulaBelonging.appendChild(
  createTextField(null, "he = external height of the cylinder."),
);
vnc_formulaBelonging.appendChild(
  createTextField(null, "di = internal diameter of the cylinder."),
);
vnc_formulaBelonging.appendChild(
  createTextField(null, "hi = internal height of the cylinder"),
);

let vnc_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_observationDiv);

vnc_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:"),
);

let vnc_mainScaleDivInput = createInput(
  "vnc-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc,
);
vnc_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Value of one smallest division of the main scale (x): ",
      vnc_mainScaleDivInput,
      "cm",
    ),
    true,
  ),
);

let vnc_vernierScaleDivInput = createInput(
  "vnc-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc,
);
vnc_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total division on vernier scale (y): ",
      vnc_vernierScaleDivInput,
    ),
    true,
  ),
);

let vnc_leastCountInput = createInput(
  "vnc-least-count-input",
  "number",
  0,
  null,
  true,
);
vnc_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv("Least Count: ", vnc_leastCountInput, "mm"),
    true,
  ),
);

vnc_observationDiv.appendChild(createPAS("4", "Zero Error"));

let vnc_zeroErrorDiv = createDiv("moved-div");
vnc_observationDiv.appendChild(vnc_zeroErrorDiv);

let vnc_ze1Input = createInput(
  "vnc-zero-error-1-input",
  "number",
  0,
  measureEssentials_vnc,
);
vnc_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", vnc_ze1Input, "mm"), true),
);

let vnc_ze2Input = createInput(
  "vnc-zero-error-2-input",
  "number",
  0,
  measureEssentials_vnc,
);
vnc_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", vnc_ze2Input, "mm"), true),
);

let vnc_ze3Input = createInput(
  "vnc-zero-error-3-input",
  "number",
  0,
  measureEssentials_vnc,
);
vnc_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", vnc_ze3Input, "mm"), true),
);

let vnc_meanZeroErrorInput = createInput(
  "vnc-mean-zero-error-input",
  "number",
  0,
  null,
  true,
);
vnc_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", vnc_meanZeroErrorInput, "mm"),
    true,
  ),
);

let vnc_zeroCorrectionInput = createInput(
  "vnc-zero-correction-input",
  "number",
  0,
  null,
  true,
);
vnc_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", vnc_zeroCorrectionInput, "mm"),
    true,
  ),
);

vnc_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of external diameter",
  ),
);

let vnc_externalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalDiameterTableDiv);

let vnc_externalDiameterTable = createDiv("observation-table");
vnc_externalDiameterTableDiv.appendChild(vnc_externalDiameterTable);

const vnc_ex_d_sNoColumn = createTableColumn("S.no");
vnc_externalDiameterTable.appendChild(vnc_ex_d_sNoColumn);

const vnc_ex_d_msrColumn = createTableColumn("Main scale reading");
vnc_externalDiameterTable.appendChild(vnc_ex_d_msrColumn);

const vnc_ex_d_divColumn = createTableColumn("Vernier scale divisions");
vnc_externalDiameterTable.appendChild(vnc_ex_d_divColumn);

const vnc_ex_d_vsrColumn = createTableColumn("Vernier scale reading");
vnc_externalDiameterTable.appendChild(vnc_ex_d_vsrColumn);

const vnc_ex_d_obsColumn = createTableColumn("Total reading");
vnc_externalDiameterTable.appendChild(vnc_ex_d_obsColumn);

vnc_addExDRow();
vnc_externalDiameterTableDiv.appendChild(
  createButton(
    "vnc-ex-d-add-row-btn",
    "add-row-btn toggle-effect ",
    createIcon("bold", "plus"),
    "Add Row",
    vnc_addExDRow,
  ),
);

let vnc_meanExternalDiameterInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Mean observed external diameter: ",
    vnc_meanExternalDiameterInput,
    "cm",
  ),
);

let vnc_correctedExternalDiameterInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Corrected external diameter: ",
    vnc_correctedExternalDiameterInput,
    "cm",
  ),
);

vnc_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of internal diameter",
  ),
);
let vnc_internalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalDiameterTableDiv);

let vnc_internalDiameterTable = createDiv("observation-table");
vnc_internalDiameterTableDiv.appendChild(vnc_internalDiameterTable);

const vnc_in_d_sNoColumn = createTableColumn("S.no");
vnc_internalDiameterTable.appendChild(vnc_in_d_sNoColumn);

const vnc_in_d_msrColumn = createTableColumn("Main scale reading");
vnc_internalDiameterTable.appendChild(vnc_in_d_msrColumn);

const vnc_in_d_divColumn = createTableColumn("Vernier scale divisions");
vnc_internalDiameterTable.appendChild(vnc_in_d_divColumn);

const vnc_in_d_vsrColumn = createTableColumn("Vernier scale reading");
vnc_internalDiameterTable.appendChild(vnc_in_d_vsrColumn);

const vnc_in_d_obsColumn = createTableColumn("Total reading");
vnc_internalDiameterTable.appendChild(vnc_in_d_obsColumn);

vnc_addInDRow();
vnc_internalDiameterTableDiv.appendChild(
  createButton(
    "vnc-in-d-add-row-btn",
    "add-row-btn toggle-effect ",
    createIcon("bold", "plus"),
    "Add Row",
    vnc_addInDRow,
  ),
);

let vnc_meanInternalDiameterInput = createInput(
  "vnc-mean-observed-internal-diameter-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Mean observed internal diameter: ",
    vnc_meanInternalDiameterInput,
    "cm",
  ),
);

let vnc_correctedInternalDiameterInput = createInput(
  "vnc-corrected-internal-diameter-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Corrected internal diameter: ",
    vnc_correctedInternalDiameterInput,
    "cm",
  ),
);

vnc_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of external height",
  ),
);
let vnc_externalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalHeightTableDiv);

let vnc_externalHeightTable = createDiv("observation-table");
vnc_externalHeightTableDiv.appendChild(vnc_externalHeightTable);

const vnc_ex_h_sNoColumn = createTableColumn("S.no");
vnc_externalHeightTable.appendChild(vnc_ex_h_sNoColumn);

const vnc_ex_h_msrColumn = createTableColumn("Main scale reading");
vnc_externalHeightTable.appendChild(vnc_ex_h_msrColumn);

const vnc_ex_h_divColumn = createTableColumn("Vernier scale divisions");
vnc_externalHeightTable.appendChild(vnc_ex_h_divColumn);

const vnc_ex_h_vsrColumn = createTableColumn("Vernier scale reading");
vnc_externalHeightTable.appendChild(vnc_ex_h_vsrColumn);

const vnc_ex_h_obsColumn = createTableColumn("Total reading");
vnc_externalHeightTable.appendChild(vnc_ex_h_obsColumn);

vnc_addExHRow();
vnc_externalHeightTableDiv.appendChild(
  createButton(
    "vnc-ex-h-add-row-btn",
    "add-row-btn toggle-effect ",
    createIcon("bold", "plus"),
    "Add Row",
    vnc_addExHRow,
  ),
);

let vnc_meanExternalHeightInput = createInput(
  "vnc-mean-observed-external-height-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Mean observed external height: ",
    vnc_meanExternalHeightInput,
    "cm",
  ),
);

let vnc_correctedExternalHeightInput = createInput(
  "vnc-corrected-external-height-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Corrected external height: ",
    vnc_correctedExternalHeightInput,
    "cm",
  ),
);

vnc_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of internal height",
  ),
);
let vnc_internalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalHeightTableDiv);

let vnc_internalHeightTable = createDiv("observation-table");
vnc_internalHeightTableDiv.appendChild(vnc_internalHeightTable);

const vnc_in_h_sNoColumn = createTableColumn("S.no");
vnc_internalHeightTable.appendChild(vnc_in_h_sNoColumn);

const vnc_in_h_msrColumn = createTableColumn("Main scale reading");
vnc_internalHeightTable.appendChild(vnc_in_h_msrColumn);

const vnc_in_h_divColumn = createTableColumn("Vernier scale divisions");
vnc_internalHeightTable.appendChild(vnc_in_h_divColumn);

const vnc_in_h_vsrColumn = createTableColumn("Vernier scale reading");
vnc_internalHeightTable.appendChild(vnc_in_h_vsrColumn);

const vnc_in_h_obsColumn = createTableColumn("Total reading");
vnc_internalHeightTable.appendChild(vnc_in_h_obsColumn);

vnc_addInHRow();
vnc_internalHeightTableDiv.appendChild(
  createButton(
    "vnc-in-h-add-row-btn",
    "add-row-btn toggle-effect ",
    createIcon("bold", "plus"),
    "Add Row",
    vnc_addInHRow,
  ),
);

let vnc_meanInternalHeightInput = createInput(
  "vnc-mean-observed-internal-height-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "Mean observed internal height: ",
    vnc_meanInternalHeightInput,
    "cm",
  ),
);

let vnc_correctedInternalHeightInput = createInput(
  "vnc-corrected-internal-height-input",
  "number",
  0,
);
vnc_observationDiv.appendChild(
  createInputDiv(
    "corrected internal height: ",
    vnc_correctedInternalHeightInput,
    "cm",
  ),
);

let vnc_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_resultDiv);

vnc_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:"),
);

let vnc_masspulInput = createInput(
  "vnc-mass-per-unit-length-input",
  "number",
  0,
);
vnc_masspulInput.style.width = "100px";
vnc_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    vnc_masspulInput,
    "kg/m",
  ),
);

let vnc_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(vnc_precautionsDiv);

vnc_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:",
  ),
);

vnc_precautionsDiv.appendChild(
  createPAS(
    "1",
    "We should carefully examine the working of the vernier Calipers before starting the experiment. If its motion is not smooth it should be oiled.",
  ),
);
vnc_precautionsDiv.appendChild(
  createPAS("2", "We should carefully record zero error."),
);
vnc_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The object should be gripped firmly between the jaws without any pressure.",
  ),
);
vnc_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The vernier should be first tightly screwed in position only then the observation should be taken. ",
  ),
);
vnc_precautionsDiv.appendChild(
  createPAS(
    "5",
    "The jaws may not be exactly at right angle to the main scale.",
  ),
);
