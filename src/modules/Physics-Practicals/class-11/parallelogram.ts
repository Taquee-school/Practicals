import { createDiv, createTextField, createInput, createPAS, createInputDiv, createTableColumn, base } from "../../../utils/practical.js";

// #region Functions
let prl_rowCount = 0;

function measureEssentials_prl() {
}

function prl_addRow() {
    prl_rowCount++;
}
// #endregion Functions

export const experimentDiv = createDiv("practical-file", "physics-practical");

let prl_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_diagramDiv);

prl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let prl_diagram_light = document.createElement("img");
prl_diagram_light.className = "practical-file-diagram", "light";
prl_diagram_light.src = base+"/diagrams/class-11/light/parallelogram.jpg";
prl_diagramDiv.appendChild(prl_diagram_light);
let prl_diagram_dark = document.createElement("img");
prl_diagram_dark.className = "practical-file-diagram", "dark";
prl_diagram_dark.src = base+"/diagrams/class-11/dark/parallelogram.jpg";
prl_diagramDiv.appendChild(prl_diagram_dark);

let prl_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_objectiveDiv);

prl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

prl_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let prl_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_apparatusDiv);

prl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

prl_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_formulaDiv);

prl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

prl_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

prl_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaBelonging = createDiv("moved-div");
prl_formulaDiv.appendChild(prl_formulaBelonging);

prl_formulaBelonging.appendChild(createTextField("", ""));

let prl_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_observationDiv);

prl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let prl_mainScaleDivInput = createInput(
  "prl-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_prl
);
prl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      prl_mainScaleDivInput
    ),
    true
  )
);

let prl_vernierScaleDivInput = createInput(
  "prl-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_prl
);
prl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      prl_vernierScaleDivInput
    ),
    true
  )
);

let prl_leastCountInput = createInput(
  "prl-least-count-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      prl_leastCountInput,
      "mm"
    ),
    true
  )
);

prl_observationDiv.appendChild(createPAS("6", "Zero Error"));

let prl_zeroErrorDiv = createDiv("moved-div");
prl_observationDiv.appendChild(prl_zeroErrorDiv);

let prl_ze1Input = createInput(
  "prl-zero-error-1-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", prl_ze1Input), true)
);

let prl_ze2Input = createInput(
  "prl-zero-error-2-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", prl_ze2Input), true)
);

let prl_ze3Input = createInput(
  "prl-zero-error-3-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", prl_ze3Input), true)
);

let prl_meanZeroErrorInput = createInput(
  "prl-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", prl_meanZeroErrorInput),
    true
  )
);

let prl_zeroCorrectionInput = createInput(
  "prl-zero-correction-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", prl_zeroCorrectionInput),
    true
  )
);

let prl_diameterTableDiv = createDiv("observation-table-div");
prl_observationDiv.appendChild(prl_diameterTableDiv);

let prl_diameterTable = createDiv("observation-table");
prl_diameterTableDiv.appendChild(prl_diameterTable);

const prl_sNoColumn = createTableColumn("S.no");
prl_diameterTable.appendChild(prl_sNoColumn);

prl_addRow();

let prl_meanDiameterInput = createInput(
  "prl-mean-observed-diameter-input",
  "number",
  0
);
prl_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", prl_meanDiameterInput, "mm")
);

let prl_correctedDiameterInput = createInput(
  "prl-corrected-diameter-input",
  "number",
  0
);
prl_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", prl_correctedDiameterInput, "mm")
);

let prl_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_resultDiv);

prl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let prl_masspulInput = createInput(
  "prl-mass-per-unit-length-input",
  "number",
  0
);
prl_masspulInput.style.width = "100px";
prl_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    prl_masspulInput,
    "kg/m"
  )
);

let prl_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(prl_precautionsDiv);

prl_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

prl_precautionsDiv.appendChild(createPAS("1", ""));
prl_precautionsDiv.appendChild(createPAS("2", ""));
prl_precautionsDiv.appendChild(createPAS("3", ""));
prl_precautionsDiv.appendChild(createPAS("4", ""));
prl_precautionsDiv.appendChild(createPAS("5", ""));


