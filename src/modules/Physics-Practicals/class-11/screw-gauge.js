import {
  base,
  createInput,
  createDiv,
  createTextField,
  createPAS,
  createInputDiv,
  createTableColumn,
  createButton,
  createIcon,
} from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let scg_leastCount = null;
let scg_zeroError = null;
let scg_density = null;
let scg_rowCount = 0;

function measureEssentials_scg() {
  let scg_dByCsr = parseFloat(scg_dByCsrInput.value) || 0;
  let scg_revByCsr = parseFloat(scg_revByCsrInput.value) || 0;
  let scg_pitch = scg_dByCsr / scg_revByCsr;
  scg_pitchInput.value = scg_pitch.toFixed(4);
  scg_leastCount = scg_pitch / parseFloat(scg_divOfCsrInput.value) || 1;
  scg_leastCountInput.value = scg_leastCount.toFixed(3);

  let scg_ze1 = parseFloat(scg_ze1Input.value) || 0;
  let scg_ze2 = parseFloat(scg_ze2Input.value) || 0;
  let scg_ze3 = parseFloat(scg_ze3Input.value) || 0;

  scg_zeroError = ((scg_ze1 + scg_ze2 + scg_ze3) / 3).toFixed(4);
  scg_meanzeInput.value = scg_zeroError;

  scg_zeroCorrectionInput.value = -scg_zeroError;

  scg_density = parseFloat(scg_densityInput.value) || 0;

  measureDiameter_scg();
}

function measureDiameter_scg() {
  let d_sum = 0;

  for (let i = 1; i <= scg_rowCount; i++) {
    document.getElementById(`scg-lc-${i}`).value = scg_leastCount.toFixed(3);

    let msr = parseFloat(document.getElementById(`scg-msr-${i}`).value) || 0;
    let csr = parseFloat(document.getElementById(`scg-div-${i}`).value) || 0;

    let d = msr + csr * scg_leastCount;

    document.getElementById(`scg-d-obs-${i}`).value = d.toFixed(3);

    d_sum += d;
  }

  let d_mean = d_sum / scg_rowCount;
  scg_meanDiameterInput.value = d_mean.toFixed(3);

  let d_corrected = d_mean + (parseFloat(scg_zeroCorrectionInput.value) || 0);
  scg_correctedDiameterInput.value = d_corrected.toFixed(4);

  massPerUnitLength =
    (3.14 * (d_corrected / 1000) * (d_corrected / 1000) * scg_density) / 4;

  scg_masspulInput.value = massPerUnitLength.toFixed(10);
}

function scg_addRow() {
  scg_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `scg-s-no-${scg_rowCount}`,
      "number",
      scg_rowCount,
      null,
      true,
    );
    scg_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `scg-msr-${scg_rowCount}`,
      "number",
      0,
      measureDiameter_scg,
    );
    scg_msrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `scg-div-${scg_rowCount}`,
      "number",
      0,
      measureDiameter_scg,
    );
    scg_csrColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(`scg-lc-${scg_rowCount}`, "number", 0, null, true);
    scg_lcColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(`scg-d-obs-${scg_rowCount}`, "number", 0, null, true);
    scg_diameterColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
}
// #endregion Functions

let scg_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_diagramDiv);

scg_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:"),
);

let scg_diagram_light = document.createElement("img");
((scg_diagram_light.className = "practical-file-diagram"), "light");
scg_diagram_light.src = base + "/diagrams/class-11/light/screw gauge.jpg";
scg_diagramDiv.appendChild(scg_diagram_light);
let scg_diagram_dark = document.createElement("img");
((scg_diagram_dark.className = "practical-file-diagram"), "dark");
scg_diagram_dark.src = base + "/diagrams/class-11/dark/screw gauge.jpg";
scg_diagramDiv.appendChild(scg_diagram_dark);

let scg_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_objectiveDiv);

scg_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECTIVE:"),
);

scg_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To determine the mass per unit length of a given wire, by measuring its diameter, using a screw gauge.",
  ),
);

let scg_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_apparatusDiv);

scg_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:"),
);

scg_apparatusDiv.appendChild(
  createTextField("practical-section-content", "A screw gauge, a thin wire."),
);

let scg_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_formulaDiv);

scg_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:"),
);

scg_formulaDiv.appendChild(
  createTextField("practical-main-formula", "m = πd²¶/4"),
);

scg_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,"),
);

let scg_formulaBelonging = createDiv("moved-div");
scg_formulaDiv.appendChild(scg_formulaBelonging);

scg_formulaBelonging.appendChild(
  createTextField("", "m = mass per unit length of the wire."),
);
scg_formulaBelonging.appendChild(
  createTextField("", "d = diameter of the wire."),
);
scg_formulaBelonging.appendChild(
  createTextField("", "¶ = Density of the material of the wire."),
);

let scg_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_observationDiv);

scg_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:"),
);

let scg_dByCsrInput = createInput(
  "scg-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      scg_dByCsrInput,
    ),
    true,
  ),
);

let scg_revByCsrInput = createInput(
  "scg-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular scale along main scale (y): ",
      scg_revByCsrInput,
    ),
    true,
  ),
);

let scg_pitchInput = createInput("scg-pitch-input", "number", 0, null, true);
scg_observationDiv.appendChild(
  createPAS("3", createInputDiv("Pitch (x/y): ", scg_pitchInput), true),
);

let scg_divOfCsrInput = createInput(
  "scg-division-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Total number of divisions of circular scale (n): ",
      scg_divOfCsrInput,
    ),
    true,
  ),
);

let scg_leastCountInput = createInput(
  "scg-least-count-input",
  "number",
  0,
  null,
  true,
);
scg_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      scg_leastCountInput,
      "mm",
    ),
    true,
  ),
);

scg_observationDiv.appendChild(createPAS("6", "Zero Error"));

let scg_zeroErrorDiv = createDiv("moved-div");
scg_observationDiv.appendChild(scg_zeroErrorDiv);

let scg_ze1Input = createInput(
  "scg-zero-error-1-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", scg_ze1Input), true),
);

let scg_ze2Input = createInput(
  "scg-zero-error-2-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", scg_ze2Input), true),
);

let scg_ze3Input = createInput(
  "scg-zero-error-3-input",
  "number",
  0,
  measureEssentials_scg,
);
scg_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", scg_ze3Input), true),
);

let scg_meanzeInput = createInput(
  "scg-mean-zero-error-input",
  "number",
  0,
  null,
  true,
);
scg_observationDiv.appendChild(
  createPAS("7", createInputDiv("Mean zero error: ", scg_meanzeInput), true),
);

let scg_zeroCorrectionInput = createInput(
  "scg-zero-correction-input",
  "number",
  0,
  null,
  true,
);
scg_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", scg_zeroCorrectionInput),
    true,
  ),
);

let scg_densityInput = createInput(
  "scg-density-input",
  "number",
  7850,
  measureEssentials_scg,
);
scg_densityInput.style.width = "100px";
scg_observationDiv.appendChild(
  createPAS(
    "9",
    createInputDiv("Density of the material: ", scg_densityInput, "kg/m³"),
    true,
  ),
);

scg_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of diameter of wire",
  ),
);
let scg_diameterTableDiv = createDiv("observation-table-div");
scg_observationDiv.appendChild(scg_diameterTableDiv);

let scg_diameterTable = createDiv("observation-table");
scg_diameterTableDiv.appendChild(scg_diameterTable);

const scg_sNoColumn = createTableColumn("S.no");
scg_diameterTable.appendChild(scg_sNoColumn);

const scg_msrColumn = createTableColumn("Main scale reading");
scg_diameterTable.appendChild(scg_msrColumn);

const scg_csrColumn = createTableColumn("Divisions (n)");
scg_diameterTable.appendChild(scg_csrColumn);

const scg_lcColumn = createTableColumn("Value (L.C)");
scg_diameterTable.appendChild(scg_lcColumn);

const scg_diameterColumn = createTableColumn("Observed diameter");
scg_diameterTable.appendChild(scg_diameterColumn);

scg_addRow();
scg_diameterTableDiv.appendChild(
  createButton(
    "scg-add-row-btn",
    "add-row-btn toggle-effect ",
    createIcon("bold", "plus"),
    "Add Row",
    scg_addRow,
  ),
);

let scg_meanDiameterInput = createInput(
  "scg-mean-observed-diameter-input",
  "number",
  0,
  null,
  true,
);
scg_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", scg_meanDiameterInput, "mm"),
);

let scg_correctedDiameterInput = createInput(
  "scg-corrected-diameter-input",
  "number",
  0,
  null,
  true,
);
scg_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", scg_correctedDiameterInput, "mm"),
);

let scg_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_resultDiv);

scg_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:"),
);

let scg_masspulInput = createInput(
  "scg-mass-per-unit-length-input",
  "number",
  0,
  null,
  true,
);
scg_masspulInput.style.width = "100px";
scg_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    scg_masspulInput,
    "kg/m",
  ),
);

let scg_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(scg_precautionsDiv);

scg_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:",
  ),
);

scg_precautionsDiv.appendChild(
  createPAS(
    "1",
    "We should check the working of the screw gauge to ensure the free movement of the screw",
  ),
);
scg_precautionsDiv.appendChild(
  createPAS("2", "We should check the functioning of the ratchet."),
);
scg_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The screw gauge should always be rotated in the same direction to avoid backlash errors.",
  ),
);
scg_precautionsDiv.appendChild(
  createPAS("4", "We should make the final adjustment by using ratchet."),
);
scg_precautionsDiv.appendChild(
  createPAS("5", "We should stop turning the ratchet when it starts slipping."),
);
scg_precautionsDiv.appendChild(
  createPAS(
    "6",
    "We should take the reading of diameter at various places of the wire.",
  ),
);
