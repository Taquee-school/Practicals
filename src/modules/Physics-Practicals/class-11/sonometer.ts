import { createDiv, createTextField, base, createInput, createPAS, createInputDiv, createTableColumn } from "../../../utils/practical.js";

// #region Functions
let snm_rowCount = 0;

function measureEssentials_snm() { }

function snm_addRow() {
    snm_rowCount++;
}
// #endregion Functions

export const experimentDiv = createDiv("practical-file", "physics-practical");

let snm_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_diagramDiv);

snm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let snm_diagram_light = document.createElement("img");
snm_diagram_light.className = "practical-file-diagram", "light";
snm_diagram_light.src = base+"/diagrams/class-11/light/sonometer.jpg";
snm_diagramDiv.appendChild(snm_diagram_light);
let snm_diagram_dark = document.createElement("img");
snm_diagram_dark.className = "practical-file-diagram", "dark";
snm_diagram_dark.src = base+"/diagrams/class-11/dark/sonometer.jpg";
snm_diagramDiv.appendChild(snm_diagram_dark);

let snm_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_objectiveDiv);

snm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

snm_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let snm_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_apparatusDiv);

snm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

snm_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let snm_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_formulaDiv);

snm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

snm_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

snm_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let snm_formulaBelonging = createDiv("moved-div");
snm_formulaDiv.appendChild(snm_formulaBelonging);

snm_formulaBelonging.appendChild(createTextField("", ""));

let snm_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_observationDiv);

snm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let snm_mainScaleDivInput = createInput(
  "snm-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_snm
);
snm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      snm_mainScaleDivInput
    ),
    true
  )
);

let snm_vernierScaleDivInput = createInput(
  "snm-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_snm
);
snm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      snm_vernierScaleDivInput
    ),
    true
  )
);

let snm_leastCountInput = createInput(
  "snm-least-count-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      snm_leastCountInput,
      "mm"
    ),
    true
  )
);

snm_observationDiv.appendChild(createPAS("6", "Zero Error"));

let snm_zeroErrorDiv = createDiv("moved-div");
snm_observationDiv.appendChild(snm_zeroErrorDiv);

let snm_ze1Input = createInput(
  "snm-zero-error-1-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", snm_ze1Input), true)
);

let snm_ze2Input = createInput(
  "snm-zero-error-2-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", snm_ze2Input), true)
);

let snm_ze3Input = createInput(
  "snm-zero-error-3-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", snm_ze3Input), true)
);

let snm_meanZeroErrorInput = createInput(
  "snm-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", snm_meanZeroErrorInput),
    true
  )
);

let snm_zeroCorrectionInput = createInput(
  "snm-zero-correction-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", snm_zeroCorrectionInput),
    true
  )
);

let snm_diameterTableDiv = createDiv("observation-table-div");
snm_observationDiv.appendChild(snm_diameterTableDiv);

let snm_diameterTable = createDiv("observation-table");
snm_diameterTableDiv.appendChild(snm_diameterTable);

const snm_sNoColumn = createTableColumn("S.no");
snm_diameterTable.appendChild(snm_sNoColumn);
snm_addRow();
// Add other columns here when defined
// ...


let snm_meanDiameterInput = createInput(
  "snm-mean-observed-diameter-input",
  "number",
  0
);
snm_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", snm_meanDiameterInput, "mm")
);

let snm_correctedDiameterInput = createInput(
  "snm-corrected-diameter-input",
  "number",
  0
);
snm_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", snm_correctedDiameterInput, "mm")
);

let snm_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_resultDiv);

snm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let snm_masspulInput = createInput(
  "snm-mass-per-unit-length-input",
  "number",
  0
);
snm_masspulInput.style.width = "100px";
snm_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    snm_masspulInput,
    "kg/m"
  )
);

let snm_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(snm_precautionsDiv);

snm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

snm_precautionsDiv.appendChild(createPAS("1", ""));
snm_precautionsDiv.appendChild(createPAS("2", ""));
snm_precautionsDiv.appendChild(createPAS("3", ""));
snm_precautionsDiv.appendChild(createPAS("4", ""));
snm_precautionsDiv.appendChild(createPAS("5", ""));

