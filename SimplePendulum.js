let bn_simplePendulum = createListButton(class11_list, "simple-pendulum-btn", "Simple Pendulum");
bn_simplePendulum.addEventListener("click", () =>
  openFile(simplePendulumDiv, "Simple Pendulum")
);

let simplePendulumDiv = document.createElement("div");
simplePendulumDiv.className = "practical-file";

let spl_objectiveDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_objectiveDiv);
spl_objectiveDiv.className = "practical-section";

spl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

spl_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let spl_apparatusDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_apparatusDiv);
spl_apparatusDiv.className = "practical-section";

spl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

spl_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let spl_formulaDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_formulaDiv);
spl_formulaDiv.className = "practical-section";

spl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

spl_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

spl_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let spl_formulaBelonging = document.createElement("div");
spl_formulaDiv.appendChild(spl_formulaBelonging);
spl_formulaBelonging.className = "moved-div";

spl_formulaBelonging.appendChild(createTextField("", ""));

let spl_observationDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_observationDiv);
spl_observationDiv.className = "practical-section";

spl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let spl_mainScaleDivInput = createInput(
  "spl-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_spl
);
spl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      spl_mainScaleDivInput
    ),
    true
  )
);

let spl_vernierScaleDivInput = createInput(
  "spl-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_spl
);
spl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      spl_vernierScaleDivInput
    ),
    true
  )
);

let spl_leastCountInput = createInput(
  "spl-least-count-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      spl_leastCountInput,
      "mm"
    ),
    true
  )
);

spl_observationDiv.appendChild(createPAS("6", "Zero Error"));

let spl_zeroErrorDiv = document.createElement("div");
spl_observationDiv.appendChild(spl_zeroErrorDiv);
spl_zeroErrorDiv.className = "moved-div";

let spl_ze1Input = createInput(
  "spl-zero-error-1-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", spl_ze1Input), true)
);

let spl_ze2Input = createInput(
  "spl-zero-error-2-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", spl_ze2Input), true)
);

let spl_ze3Input = createInput(
  "spl-zero-error-3-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", spl_ze3Input), true)
);

let spl_meanZeroErrorInput = createInput(
  "spl-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", spl_meanZeroErrorInput),
    true
  )
);

let spl_zeroCorrectionInput = createInput(
  "spl-zero-correction-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", spl_zeroCorrectionInput),
    true
  )
);

let spl_diameterTableDiv = document.createElement("div");
spl_diameterTableDiv.className = "observation-table-div";
spl_observationDiv.appendChild(spl_diameterTableDiv);

let spl_diameterTable = document.createElement("div");
spl_diameterTable.className = "observation-table";
spl_diameterTableDiv.appendChild(spl_diameterTable);

spl_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let spl_meanDiameterInput = createInput(
  "spl-mean-observed-diameter-input",
  "number",
  0
);
spl_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", spl_meanDiameterInput, "mm")
);

let spl_correctedDiameterInput = createInput(
  "spl-corrected-diameter-input",
  "number",
  0
);
spl_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", spl_correctedDiameterInput, "mm")
);

let spl_resultDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_resultDiv);
spl_resultDiv.className = "practical-section";

spl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let spl_masspulInput = createInput(
  "spl-mass-per-unit-length-input",
  "number",
  0
);
spl_masspulInput.style.width = "100px";
spl_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    spl_masspulInput,
    "kg/m"
  )
);

let spl_precautionsDiv = document.createElement("div");
simplePendulumDiv.appendChild(spl_precautionsDiv);
spl_precautionsDiv.className = "practical-section";

spl_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

spl_precautionsDiv.appendChild(createPAS("1", ""));
spl_precautionsDiv.appendChild(createPAS("2", ""));
spl_precautionsDiv.appendChild(createPAS("3", ""));
spl_precautionsDiv.appendChild(createPAS("4", ""));
spl_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_spl() {}
