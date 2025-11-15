let bn_vernierCalipers = createListButton(class11_list, "vernier-calipers-btn", "Vernier Calipers");
bn_vernierCalipers.addEventListener("click", () =>
  openFile(vernierCalipersDiv, "Vernier Calipers")
);

let vernierCalipersDiv = document.createElement("div");
vernierCalipersDiv.className = "practical-file";

let vnc_objectiveDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_objectiveDiv);
vnc_objectiveDiv.className = "practical-section";

vnc_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

vnc_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let vnc_apparatusDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_apparatusDiv);
vnc_apparatusDiv.className = "practical-section";

vnc_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

vnc_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let vnc_formulaDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_formulaDiv);
vnc_formulaDiv.className = "practical-section";

vnc_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

vnc_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

vnc_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let vnc_formulaBelonging = document.createElement("div");
vnc_formulaDiv.appendChild(vnc_formulaBelonging);
vnc_formulaBelonging.className = "moved-div";

vnc_formulaBelonging.appendChild(createTextField("", ""));

let vnc_observationDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_observationDiv);
vnc_observationDiv.className = "practical-section";

vnc_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let vnc_mainScaleDivInput = createInput(
  "vnc-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      vnc_mainScaleDivInput
    ),
    true
  )
);

let vnc_vernierScaleDivInput = createInput(
  "vnc-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      vnc_vernierScaleDivInput
    ),
    true
  )
);

let vnc_leastCountInput = createInput(
  "vnc-least-count-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      vnc_leastCountInput,
      "mm"
    ),
    true
  )
);

vnc_observationDiv.appendChild(createPAS("6", "Zero Error"));

let vnc_zeroErrorDiv = document.createElement("div");
vnc_observationDiv.appendChild(vnc_zeroErrorDiv);
vnc_zeroErrorDiv.className = "moved-div";

let vnc_ze1Input = createInput(
  "vnc-zero-error-1-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", vnc_ze1Input), true)
);

let vnc_ze2Input = createInput(
  "vnc-zero-error-2-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", vnc_ze2Input), true)
);

let vnc_ze3Input = createInput(
  "vnc-zero-error-3-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", vnc_ze3Input), true)
);

let vnc_meanZeroErrorInput = createInput(
  "vnc-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", vnc_meanZeroErrorInput),
    true
  )
);

let vnc_zeroCorrectionInput = createInput(
  "vnc-zero-correction-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", vnc_zeroCorrectionInput),
    true
  )
);

let vnc_diameterTableDiv = document.createElement("div");
vnc_diameterTableDiv.className = "observation-table-div";
vnc_observationDiv.appendChild(vnc_diameterTableDiv);

let vnc_diameterTable = document.createElement("div");
vnc_diameterTable.className = "observation-table";
vnc_diameterTableDiv.appendChild(vnc_diameterTable);

vnc_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let vnc_meanDiameterInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", vnc_meanDiameterInput, "mm")
);

let vnc_correctedDiameterInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", vnc_correctedDiameterInput, "mm")
);

let vnc_resultDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_resultDiv);
vnc_resultDiv.className = "practical-section";

vnc_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let vnc_masspulInput = createInput(
  "vnc-mass-per-unit-length-input",
  "number",
  0
);
vnc_masspulInput.style.width = "100px";
vnc_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    vnc_masspulInput,
    "kg/m"
  )
);

let vnc_precautionsDiv = document.createElement("div");
vernierCalipersDiv.appendChild(vnc_precautionsDiv);
vnc_precautionsDiv.className = "practical-section";

vnc_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

vnc_precautionsDiv.appendChild(createPAS("1", ""));
vnc_precautionsDiv.appendChild(createPAS("2", ""));
vnc_precautionsDiv.appendChild(createPAS("3", ""));
vnc_precautionsDiv.appendChild(createPAS("4", ""));
vnc_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_vnc() {}

function measureExternalDiameter_vnc() {}

function measureinternalDiameter_vnc() {}

function measureExternalHeight_vnc() {}

function measureinternalHeight_vnc() {}

function measureVolume_vnc() {}
