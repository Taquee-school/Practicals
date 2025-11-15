let bn_halfDeflection = createListButton(class12_list, "half-deflection-btn", "Half Deflection");
bn_halfDeflection.addEventListener("click", () =>
  openFile(halfDeflectionDiv, "Half Deflection")
);

let halfDeflectionDiv = document.createElement("div");
halfDeflectionDiv.className = "practical-file";

let hdf_objectiveDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_objectiveDiv);
hdf_objectiveDiv.className = "practical-section";

hdf_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

hdf_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_apparatusDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_apparatusDiv);
hdf_apparatusDiv.className = "practical-section";

hdf_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

hdf_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_formulaDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_formulaDiv);
hdf_formulaDiv.className = "practical-section";

hdf_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

hdf_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

hdf_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_formulaBelonging = document.createElement("div");
hdf_formulaDiv.appendChild(hdf_formulaBelonging);
hdf_formulaBelonging.className = "moved-div";

hdf_formulaBelonging.appendChild(createTextField("", ""));

let hdf_observationDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_observationDiv);
hdf_observationDiv.className = "practical-section";

hdf_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let hdf_mainScaleDivInput = createInput(
  "hdf-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      hdf_mainScaleDivInput
    ),
    true
  )
);

let hdf_vernierScaleDivInput = createInput(
  "hdf-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      hdf_vernierScaleDivInput
    ),
    true
  )
);

let hdf_leastCountInput = createInput(
  "hdf-least-count-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      hdf_leastCountInput,
      "mm"
    ),
    true
  )
);

hdf_observationDiv.appendChild(createPAS("6", "Zero Error"));

let hdf_zeroErrorDiv = document.createElement("div");
hdf_observationDiv.appendChild(hdf_zeroErrorDiv);
hdf_zeroErrorDiv.className = "moved-div";

let hdf_ze1Input = createInput(
  "hdf-zero-error-1-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", hdf_ze1Input), true)
);

let hdf_ze2Input = createInput(
  "hdf-zero-error-2-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", hdf_ze2Input), true)
);

let hdf_ze3Input = createInput(
  "hdf-zero-error-3-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", hdf_ze3Input), true)
);

let hdf_meanZeroErrorInput = createInput(
  "hdf-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", hdf_meanZeroErrorInput),
    true
  )
);

let hdf_zeroCorrectionInput = createInput(
  "hdf-zero-correction-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", hdf_zeroCorrectionInput),
    true
  )
);

let hdf_diameterTableDiv = document.createElement("div");
hdf_diameterTableDiv.className = "observation-table-div";
hdf_observationDiv.appendChild(hdf_diameterTableDiv);

let hdf_diameterTable = document.createElement("div");
hdf_diameterTable.className = "observation-table";
hdf_diameterTableDiv.appendChild(hdf_diameterTable);

hdf_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let hdf_meanDiameterInput = createInput(
  "hdf-mean-observed-diameter-input",
  "number",
  0
);
hdf_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", hdf_meanDiameterInput, "mm")
);

let hdf_correctedDiameterInput = createInput(
  "hdf-corrected-diameter-input",
  "number",
  0
);
hdf_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", hdf_correctedDiameterInput, "mm")
);

let hdf_resultDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_resultDiv);
hdf_resultDiv.className = "practical-section";

hdf_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let hdf_masspulInput = createInput(
  "hdf-mass-per-unit-length-input",
  "number",
  0
);
hdf_masspulInput.style.width = "100px";
hdf_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    hdf_masspulInput,
    "kg/m"
  )
);

let hdf_precautionsDiv = document.createElement("div");
halfDeflectionDiv.appendChild(hdf_precautionsDiv);
hdf_precautionsDiv.className = "practical-section";

hdf_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

hdf_precautionsDiv.appendChild(createPAS("1", ""));
hdf_precautionsDiv.appendChild(createPAS("2", ""));
hdf_precautionsDiv.appendChild(createPAS("3", ""));
hdf_precautionsDiv.appendChild(createPAS("4", ""));
hdf_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_hdf() {}
