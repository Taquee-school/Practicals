let bn_meterBridge = createListButton(class12_list, "meter-bridge-btn", "Meter Bridge");
bn_meterBridge.addEventListener("click", () =>
  openFile(meterBridgeDiv, "Meter Bridge")
);

let meterBridgeDiv = document.createElement("div");
meterBridgeDiv.className = "practical-file";

let mbr_objectiveDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_objectiveDiv);
mbr_objectiveDiv.className = "practical-section";

mbr_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

mbr_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let mbr_apparatusDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_apparatusDiv);
mbr_apparatusDiv.className = "practical-section";

mbr_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

mbr_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let mbr_formulaDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_formulaDiv);
mbr_formulaDiv.className = "practical-section";

mbr_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

mbr_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

mbr_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let mbr_formulaBelonging = document.createElement("div");
mbr_formulaDiv.appendChild(mbr_formulaBelonging);
mbr_formulaBelonging.className = "moved-div";

mbr_formulaBelonging.appendChild(createTextField("", ""));

let mbr_observationDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_observationDiv);
mbr_observationDiv.className = "practical-section";

mbr_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let mbr_mainScaleDivInput = createInput(
  "mbr-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      mbr_mainScaleDivInput
    ),
    true
  )
);

let mbr_vernierScaleDivInput = createInput(
  "mbr-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      mbr_vernierScaleDivInput
    ),
    true
  )
);

let mbr_leastCountInput = createInput(
  "mbr-least-count-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      mbr_leastCountInput,
      "mm"
    ),
    true
  )
);

mbr_observationDiv.appendChild(createPAS("6", "Zero Error"));

let mbr_zeroErrorDiv = document.createElement("div");
mbr_observationDiv.appendChild(mbr_zeroErrorDiv);
mbr_zeroErrorDiv.className = "moved-div";

let mbr_ze1Input = createInput(
  "mbr-zero-error-1-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", mbr_ze1Input), true)
);

let mbr_ze2Input = createInput(
  "mbr-zero-error-2-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", mbr_ze2Input), true)
);

let mbr_ze3Input = createInput(
  "mbr-zero-error-3-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", mbr_ze3Input), true)
);

let mbr_meanZeroErrorInput = createInput(
  "mbr-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", mbr_meanZeroErrorInput),
    true
  )
);

let mbr_zeroCorrectionInput = createInput(
  "mbr-zero-correction-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", mbr_zeroCorrectionInput),
    true
  )
);

let mbr_diameterTableDiv = document.createElement("div");
mbr_diameterTableDiv.className = "observation-table-div";
mbr_observationDiv.appendChild(mbr_diameterTableDiv);

let mbr_diameterTable = document.createElement("div");
mbr_diameterTable.className = "observation-table";
mbr_diameterTableDiv.appendChild(mbr_diameterTable);

mbr_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let mbr_meanDiameterInput = createInput(
  "mbr-mean-observed-diameter-input",
  "number",
  0
);
mbr_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", mbr_meanDiameterInput, "mm")
);

let mbr_correctedDiameterInput = createInput(
  "mbr-corrected-diameter-input",
  "number",
  0
);
mbr_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", mbr_correctedDiameterInput, "mm")
);

let mbr_resultDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_resultDiv);
mbr_resultDiv.className = "practical-section";

mbr_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let mbr_masspulInput = createInput(
  "mbr-mass-per-unit-length-input",
  "number",
  0
);
mbr_masspulInput.style.width = "100px";
mbr_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    mbr_masspulInput,
    "kg/m"
  )
);

let mbr_precautionsDiv = document.createElement("div");
meterBridgeDiv.appendChild(mbr_precautionsDiv);
mbr_precautionsDiv.className = "practical-section";

mbr_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

mbr_precautionsDiv.appendChild(createPAS("1", ""));
mbr_precautionsDiv.appendChild(createPAS("2", ""));
mbr_precautionsDiv.appendChild(createPAS("3", ""));
mbr_precautionsDiv.appendChild(createPAS("4", ""));
mbr_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_mbr() {}
