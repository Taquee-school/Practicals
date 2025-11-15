let bn_spherometer = createListButton(class11_list, "spherometer-btn", "Spherometer");
bn_spherometer.addEventListener("click", () =>
  openFile(spherometerDiv, "Spherometer")
);

let spherometerDiv = document.createElement("div");
spherometerDiv.className = "practical-file";

let spm_objectiveDiv = document.createElement("div");
spherometerDiv.appendChild(spm_objectiveDiv);
spm_objectiveDiv.className = "practical-section";

spm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

spm_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let spm_apparatusDiv = document.createElement("div");
spherometerDiv.appendChild(spm_apparatusDiv);
spm_apparatusDiv.className = "practical-section";

spm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

spm_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaDiv = document.createElement("div");
spherometerDiv.appendChild(spm_formulaDiv);
spm_formulaDiv.className = "practical-section";

spm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

spm_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

spm_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaBelonging = document.createElement("div");
spm_formulaDiv.appendChild(spm_formulaBelonging);
spm_formulaBelonging.className = "moved-div";

spm_formulaBelonging.appendChild(createTextField("", ""));

let spm_observationDiv = document.createElement("div");
spherometerDiv.appendChild(spm_observationDiv);
spm_observationDiv.className = "practical-section";

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

let spm_zeroErrorDiv = document.createElement("div");
spm_observationDiv.appendChild(spm_zeroErrorDiv);
spm_zeroErrorDiv.className = "moved-div";

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

let spm_diameterTableDiv = document.createElement("div");
spm_diameterTableDiv.className = "observation-table-div";
spm_observationDiv.appendChild(spm_diameterTableDiv);

let spm_diameterTable = document.createElement("div");
spm_diameterTable.className = "observation-table";
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

let spm_resultDiv = document.createElement("div");
spherometerDiv.appendChild(spm_resultDiv);
spm_resultDiv.className = "practical-section";

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

let spm_precautionsDiv = document.createElement("div");
spherometerDiv.appendChild(spm_precautionsDiv);
spm_precautionsDiv.className = "practical-section";

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

function measureEssentials_spm() {}
