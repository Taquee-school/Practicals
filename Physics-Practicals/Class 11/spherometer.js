let spherometerDiv = createDiv("practical-file");

let spm_diagramDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_diagramDiv);

spm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let spm_diagram_light = document.createElement("img");
spm_diagram_light.className = "practical-file-diagram light";
spm_diagram_light.src = "Physics-Practicals/Class 11/Diagrams/Light/spherometer.jpg";
spm_diagramDiv.appendChild(spm_diagram_light);
let spm_diagram_dark = document.createElement("img");
spm_diagram_dark.className = "practical-file-diagram dark";
spm_diagram_dark.src = "Physics-Practicals/Class 11/Diagrams/Dark/spherometer.jpg";
spm_diagramDiv.appendChild(spm_diagram_dark);

let spm_objectiveDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_objectiveDiv);

spm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

spm_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let spm_apparatusDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_apparatusDiv);

spm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

spm_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_formulaDiv);

spm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

spm_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

spm_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaBelonging = createDiv("moved-div");
spm_formulaDiv.appendChild(spm_formulaBelonging);

spm_formulaBelonging.appendChild(createTextField("", ""));

let spm_observationDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_observationDiv);

spm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let spm_mainScaleDivInput = createInput(
  "spm-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_spm
);
spm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      spm_mainScaleDivInput
    ),
    true
  )
);

let spm_vernierScaleDivInput = createInput(
  "spm-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_spm
);
spm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      spm_vernierScaleDivInput
    ),
    true
  )
);

let spm_leastCountInput = createInput(
  "spm-least-count-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      spm_leastCountInput,
      "mm"
    ),
    true
  )
);

spm_observationDiv.appendChild(createPAS("6", "Zero Error"));

let spm_zeroErrorDiv = createDiv("moved-div");
spm_observationDiv.appendChild(spm_zeroErrorDiv);

let spm_ze1Input = createInput(
  "spm-zero-error-1-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", spm_ze1Input), true)
);

let spm_ze2Input = createInput(
  "spm-zero-error-2-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", spm_ze2Input), true)
);

let spm_ze3Input = createInput(
  "spm-zero-error-3-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", spm_ze3Input), true)
);

let spm_meanZeroErrorInput = createInput(
  "spm-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", spm_meanZeroErrorInput),
    true
  )
);

let spm_zeroCorrectionInput = createInput(
  "spm-zero-correction-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", spm_zeroCorrectionInput),
    true
  )
);

let spm_diameterTableDiv = createDiv("observation-table-div");
spm_observationDiv.appendChild(spm_diameterTableDiv);

let spm_diameterTable = createDiv("observation-table");
spm_diameterTableDiv.appendChild(spm_diameterTable);

spm_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let spm_meanDiameterInput = createInput(
  "spm-mean-observed-diameter-input",
  "number",
  0
);
spm_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", spm_meanDiameterInput, "mm")
);

let spm_correctedDiameterInput = createInput(
  "spm-corrected-diameter-input",
  "number",
  0
);
spm_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", spm_correctedDiameterInput, "mm")
);

let spm_resultDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_resultDiv);

spm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let spm_masspulInput = createInput(
  "spm-mass-per-unit-length-input",
  "number",
  0
);
spm_masspulInput.style.width = "100px";
spm_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    spm_masspulInput,
    "kg/m"
  )
);

let spm_precautionsDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_precautionsDiv);

spm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

spm_precautionsDiv.appendChild(createPAS("1", ""));
spm_precautionsDiv.appendChild(createPAS("2", ""));
spm_precautionsDiv.appendChild(createPAS("3", ""));
spm_precautionsDiv.appendChild(createPAS("4", ""));
spm_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_spm() { }
