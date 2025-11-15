let bn_parallelogram = createListButton(class11_list, "parallelogram-btn", "Parallelogram");
bn_parallelogram.addEventListener("click", () =>
  openFile(parallelogramDiv, "Parallelogram")
);

let parallelogramDiv = document.createElement("div");
parallelogramDiv.className = "practical-file";

let prl_objectiveDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_objectiveDiv);
prl_objectiveDiv.className = "practical-section";

prl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

prl_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let prl_apparatusDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_apparatusDiv);
prl_apparatusDiv.className = "practical-section";

prl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

prl_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_formulaDiv);
prl_formulaDiv.className = "practical-section";

prl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

prl_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

prl_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaBelonging = document.createElement("div");
prl_formulaDiv.appendChild(prl_formulaBelonging);
prl_formulaBelonging.className = "moved-div";

prl_formulaBelonging.appendChild(createTextField("", ""));

let prl_observationDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_observationDiv);
prl_observationDiv.className = "practical-section";

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

let prl_zeroErrorDiv = document.createElement("div");
prl_observationDiv.appendChild(prl_zeroErrorDiv);
prl_zeroErrorDiv.className = "moved-div";

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

let prl_diameterTableDiv = document.createElement("div");
prl_diameterTableDiv.className = "observation-table-div";
prl_observationDiv.appendChild(prl_diameterTableDiv);

let prl_diameterTable = document.createElement("div");
prl_diameterTable.className = "observation-table";
prl_diameterTableDiv.appendChild(prl_diameterTable);

prl_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

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

let prl_resultDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_resultDiv);
prl_resultDiv.className = "practical-section";

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

let prl_precautionsDiv = document.createElement("div");
parallelogramDiv.appendChild(prl_precautionsDiv);
prl_precautionsDiv.className = "practical-section";

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

function measureEssentials_prl() {}
