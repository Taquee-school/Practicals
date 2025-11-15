let bn_resonanceTube = createListButton(class11_list, "resonance-tube-btn", "Resonance Tube");
bn_resonanceTube.addEventListener("click", () =>
  openFile(resonanceTubeDiv, "Resonance Tube")
);

let resonanceTubeDiv = document.createElement("div");
resonanceTubeDiv.className = "practical-file";

let rst_objectiveDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_objectiveDiv);
rst_objectiveDiv.className = "practical-section";

rst_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

rst_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let rst_apparatusDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_apparatusDiv);
rst_apparatusDiv.className = "practical-section";

rst_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

rst_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let rst_formulaDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_formulaDiv);
rst_formulaDiv.className = "practical-section";

rst_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

rst_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

rst_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let rst_formulaBelonging = document.createElement("div");
rst_formulaDiv.appendChild(rst_formulaBelonging);
rst_formulaBelonging.className = "moved-div";

rst_formulaBelonging.appendChild(createTextField("", ""));

let rst_observationDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_observationDiv);
rst_observationDiv.className = "practical-section";

rst_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let rst_mainScaleDivInput = createInput(
  "rst-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_rst
);
rst_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      rst_mainScaleDivInput
    ),
    true
  )
);

let rst_vernierScaleDivInput = createInput(
  "rst-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_rst
);
rst_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      rst_vernierScaleDivInput
    ),
    true
  )
);

let rst_leastCountInput = createInput(
  "rst-least-count-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      rst_leastCountInput,
      "mm"
    ),
    true
  )
);

rst_observationDiv.appendChild(createPAS("6", "Zero Error"));

let rst_zeroErrorDiv = document.createElement("div");
rst_observationDiv.appendChild(rst_zeroErrorDiv);
rst_zeroErrorDiv.className = "moved-div";

let rst_ze1Input = createInput(
  "rst-zero-error-1-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", rst_ze1Input), true)
);

let rst_ze2Input = createInput(
  "rst-zero-error-2-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", rst_ze2Input), true)
);

let rst_ze3Input = createInput(
  "rst-zero-error-3-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", rst_ze3Input), true)
);

let rst_meanZeroErrorInput = createInput(
  "rst-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", rst_meanZeroErrorInput),
    true
  )
);

let rst_zeroCorrectionInput = createInput(
  "rst-zero-correction-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", rst_zeroCorrectionInput),
    true
  )
);

let rst_diameterTableDiv = document.createElement("div");
rst_diameterTableDiv.className = "observation-table-div";
rst_observationDiv.appendChild(rst_diameterTableDiv);

let rst_diameterTable = document.createElement("div");
rst_diameterTable.className = "observation-table";
rst_diameterTableDiv.appendChild(rst_diameterTable);

rst_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let rst_meanDiameterInput = createInput(
  "rst-mean-observed-diameter-input",
  "number",
  0
);
rst_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", rst_meanDiameterInput, "mm")
);

let rst_correctedDiameterInput = createInput(
  "rst-corrected-diameter-input",
  "number",
  0
);
rst_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", rst_correctedDiameterInput, "mm")
);

let rst_resultDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_resultDiv);
rst_resultDiv.className = "practical-section";

rst_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let rst_masspulInput = createInput(
  "rst-mass-per-unit-length-input",
  "number",
  0
);
rst_masspulInput.style.width = "100px";
rst_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    rst_masspulInput,
    "kg/m"
  )
);

let rst_precautionsDiv = document.createElement("div");
resonanceTubeDiv.appendChild(rst_precautionsDiv);
rst_precautionsDiv.className = "practical-section";

rst_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

rst_precautionsDiv.appendChild(createPAS("1", ""));
rst_precautionsDiv.appendChild(createPAS("2", ""));
rst_precautionsDiv.appendChild(createPAS("3", ""));
rst_precautionsDiv.appendChild(createPAS("4", ""));
rst_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_rst() {}
