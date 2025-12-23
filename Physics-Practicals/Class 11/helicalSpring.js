// #region Functions
let hls_rowCount = 0;

function measureEssentials_hls() {
}

function hls_addRow() {
    hls_rowCount++;
}
// #endregion Functions

let helicalSpringDiv = createDiv("practical-file", "physics-practical");

let hls_diagramDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_diagramDiv);

hls_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let hls_diagram_light = document.createElement("img");
hls_diagram_light.className = "practical-file-diagram light";
hls_diagram_light.src = "Physics-Practicals/Class 11/Diagrams/Light/helical spring.jpg";
hls_diagramDiv.appendChild(hls_diagram_light);
let hls_diagram_dark = document.createElement("img");
hls_diagram_dark.className = "practical-file-diagram dark";
hls_diagram_dark.src = "Physics-Practicals/Class 11/Diagrams/Dark/helical spring.jpg";
hls_diagramDiv.appendChild(hls_diagram_dark);

let hls_objectiveDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_objectiveDiv);

hls_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

hls_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let hls_apparatusDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_apparatusDiv);

hls_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

hls_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let hls_formulaDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_formulaDiv);

hls_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

hls_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

hls_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let hls_formulaBelonging = createDiv("moved-div");
hls_formulaDiv.appendChild(hls_formulaBelonging);

hls_formulaBelonging.appendChild(createTextField("", ""));

let hls_observationDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_observationDiv);

hls_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let hls_mainScaleDivInput = createInput(
  "hls-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_hls
);
hls_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      hls_mainScaleDivInput
    ),
    true
  )
);

let hls_vernierScaleDivInput = createInput(
  "hls-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_hls
);
hls_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      hls_vernierScaleDivInput
    ),
    true
  )
);

let hls_leastCountInput = createInput(
  "hls-least-count-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      hls_leastCountInput,
      "mm"
    ),
    true
  )
);

hls_observationDiv.appendChild(createPAS("6", "Zero Error"));

let hls_zeroErrorDiv = createDiv("moved-div");
hls_observationDiv.appendChild(hls_zeroErrorDiv);

let hls_ze1Input = createInput(
  "hls-zero-error-1-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", hls_ze1Input), true)
);

let hls_ze2Input = createInput(
  "hls-zero-error-2-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", hls_ze2Input), true)
);

let hls_ze3Input = createInput(
  "hls-zero-error-3-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", hls_ze3Input), true)
);

let hls_meanZeroErrorInput = createInput(
  "hls-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", hls_meanZeroErrorInput),
    true
  )
);

let hls_zeroCorrectionInput = createInput(
  "hls-zero-correction-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", hls_zeroCorrectionInput),
    true
  )
);

let hls_diameterTableDiv = createDiv("observation-table-div");
hls_observationDiv.appendChild(hls_diameterTableDiv);

let hls_diameterTable = createDiv("observation-table");
hls_diameterTableDiv.appendChild(hls_diameterTable);

const hls_sNoColumn = createTableColumn("S.no");
hls_diameterTable.appendChild(hls_sNoColumn);

hls_addRow();


let hls_meanDiameterInput = createInput(
  "hls-mean-observed-diameter-input",
  "number",
  0
);
hls_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", hls_meanDiameterInput, "mm")
);

let hls_correctedDiameterInput = createInput(
  "hls-corrected-diameter-input",
  "number",
  0
);
hls_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", hls_correctedDiameterInput, "mm")
);

let hls_resultDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_resultDiv);

hls_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let hls_masspulInput = createInput(
  "hls-mass-per-unit-length-input",
  "number",
  0
);
hls_masspulInput.style.width = "100px";
hls_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    hls_masspulInput,
    "kg/m"
  )
);

let hls_precautionsDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_precautionsDiv);

hls_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

hls_precautionsDiv.appendChild(createPAS("1", ""));
hls_precautionsDiv.appendChild(createPAS("2", ""));
hls_precautionsDiv.appendChild(createPAS("3", ""));
hls_precautionsDiv.appendChild(createPAS("4", ""));
hls_precautionsDiv.appendChild(createPAS("5", ""));


