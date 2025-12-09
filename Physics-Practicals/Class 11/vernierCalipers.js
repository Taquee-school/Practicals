let vernierCalipersDiv = createDiv("practical-file");

let vnc_diagramDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_diagramDiv);

vnc_diagramDiv.appendChild(
    createTextField("practical-section-header", "DIAGRAM:")
);

let vnc_diagram_light = document.createElement("img");
vnc_diagram_light.className = "practical-file-diagram light";
vnc_diagram_light.src = "Physics-Practicals/Class 11/Diagrams/Light/vernier calipers.jpg";
vnc_diagramDiv.appendChild(vnc_diagram_light);
let vnc_diagram_dark = document.createElement("img");
vnc_diagram_dark.className = "practical-file-diagram dark";
vnc_diagram_dark.src = "Physics-Practicals/Class 11/Diagrams/Dark/vernier calipers.jpg";
vnc_diagramDiv.appendChild(vnc_diagram_dark);

let vnc_objectiveDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_objectiveDiv);

vnc_objectiveDiv.appendChild(
    createTextField("practical-section-header", "OBJECT:")
);

vnc_objectiveDiv.appendChild(
    createTextField(
        "practical-section-content",
        "To find the volume of the material of a hollow cylinder using vernier calipers."
    )
);

let vnc_apparatusDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_apparatusDiv);

vnc_apparatusDiv.appendChild(
    createTextField("practical-section-header", "APPARATUS USED:")
);

vnc_apparatusDiv.appendChild(
    createTextField(
        "practical-section-content",
        "A hollow cylinder, vernier calipers."
    )
);

let vnc_formulaDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_formulaDiv);

vnc_formulaDiv.appendChild(
    createTextField("practical-section-header", "FORMULA USED:")
);

vnc_formulaDiv.appendChild(
    createTextField("practical-main-formula", "V = π(de2he - di2hi)/4")
);

vnc_formulaDiv.appendChild(
    createTextField("practical-section-content", "Where,")
);

let vnc_formulaBelonging = createDiv("moved-div");
vnc_formulaDiv.appendChild(vnc_formulaBelonging);

vnc_formulaBelonging.appendChild(
    createTextField(null, "V = volume of the material of the hollow cylinder.")
);
vnc_formulaBelonging.appendChild(
    createTextField(null, "de = external diameter of the cylinder.")
);
vnc_formulaBelonging.appendChild(
    createTextField(null, "he = external height of the cylinder.")
);
vnc_formulaBelonging.appendChild(
    createTextField(null, "di = internal diameter of the cylinder.")
);
vnc_formulaBelonging.appendChild(
    createTextField(null, "hi = internal height of the cylinder")
);

let vnc_observationDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_observationDiv);

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
            "Value of one smallest division of the main scale (x): ",
            vnc_mainScaleDivInput,
            "cm"
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
            "Number of Total division on vernier scale (y): ",
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
        "3",
        createInputDiv("Least Count: ", vnc_leastCountInput, "mm"),
        true
    )
);

vnc_observationDiv.appendChild(createPAS("4", "Zero Error"));

let vnc_zeroErrorDiv = createDiv("moved-div");
vnc_observationDiv.appendChild(vnc_zeroErrorDiv);

let vnc_ze1Input = createInput(
    "vnc-zero-error-1-input",
    "number",
    0,
    measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
    createPAS("a", createInputDiv("Zero Error: ", vnc_ze1Input, "mm"), true)
);

let vnc_ze2Input = createInput(
    "vnc-zero-error-2-input",
    "number",
    0,
    measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
    createPAS("b", createInputDiv("Zero Error: ", vnc_ze2Input, "mm"), true)
);

let vnc_ze3Input = createInput(
    "vnc-zero-error-3-input",
    "number",
    0,
    measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
    createPAS("c", createInputDiv("Zero Error: ", vnc_ze3Input, "mm"), true)
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
        createInputDiv("Mean zero error: ", vnc_meanZeroErrorInput, "mm"),
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
        createInputDiv("Zero correction: ", vnc_zeroCorrectionInput, "mm"),
        true
    )
);

vnc_observationDiv.appendChild(
    createTextField(
        "observation-table-header",
        "Table for the measurement of external diameter"
    )
);

let vnc_externalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalDiameterTableDiv);

let vnc_externalDiameterTable = createDiv("observation-table");
vnc_externalDiameterTableDiv.appendChild(vnc_externalDiameterTable);

vnc_externalDiameterTable.appendChild(
    createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_externalDiameterTable.appendChild(
    createColumn(
        "Main scale reading",
        5,
        "vnc-ex-d-msr",
        "number",
        0,
        measureExternalDiameter_vnc
    )
);
vnc_externalDiameterTable.appendChild(
    createColumn(
        "Vernier scale divisions",
        5,
        "vnc-ex-d-div",
        "number",
        0,
        measureExternalDiameter_vnc
    )
);
vnc_externalDiameterTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-ex-d-vsr",
        "number",
        0,
        null,
        true
    )
);
vnc_externalDiameterTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-ex-d-obs",
        "number",
        0,
        null,
        true
    )
);

let vnc_meanExternalDiameterInput = createInput(
    "vnc-mean-observed-diameter-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "Mean observed internal height: ",
        vnc_meanExternalDiameterInput,
        "cm"
    )
);

let vnc_correctedExternalDiameterInput = createInput(
    "vnc-corrected-diameter-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "corrected internal height: ",
        vnc_correctedExternalDiameterInput,
        "cm"
    )
);

vnc_observationDiv.appendChild(
    createTextField(
        "observation-table-header",
        "Table for the measurement of internal diameter"
    )
);
let vnc_internalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalDiameterTableDiv);

let vnc_internalDiameterTable = createDiv("observation-table");
vnc_internalDiameterTableDiv.appendChild(vnc_internalDiameterTable);

vnc_internalDiameterTable.appendChild(
    createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_internalDiameterTable.appendChild(
    createColumn(
        "Main scale reading",
        5,
        "vnc-in-d-msr",
        "number",
        0,
        measureInternalDiameter_vnc
    )
);
vnc_internalDiameterTable.appendChild(
    createColumn(
        "Vernier scale divisions",
        5,
        "vnc-in-d-div",
        "number",
        0,
        measureInternalDiameter_vnc
    )
);
vnc_internalDiameterTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-in-d-vsr",
        "number",
        0,
        null,
        true
    )
);
vnc_internalDiameterTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-in-d-obs",
        "number",
        0,
        null,
        true
    )
);

let vnc_meanInternalDiameterInput = createInput(
    "vnc-mean-observed-internal-diameter-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "Mean observed internal height: ",
        vnc_meanInternalDiameterInput,
        "cm"
    )
);

let vnc_correctedInternalDiameterInput = createInput(
    "vnc-corrected-internal-diameter-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "corrected internal height: ",
        vnc_correctedInternalDiameterInput,
        "cm"
    )
);

vnc_observationDiv.appendChild(
    createTextField(
        "observation-table-header",
        "Table for the measurement of external height"
    )
);
let vnc_externalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalHeightTableDiv);

let vnc_externalHeightTable = createDiv("observation-table");
vnc_externalHeightTableDiv.appendChild(vnc_externalHeightTable);

vnc_externalHeightTable.appendChild(
    createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_externalHeightTable.appendChild(
    createColumn(
        "Main scale reading",
        5,
        "vnc-ex-h-msr",
        "number",
        0,
        measureExternalHeight_vnc
    )
);
vnc_externalHeightTable.appendChild(
    createColumn(
        "Vernier scale divisions",
        5,
        "vnc-ex-h-div",
        "number",
        0,
        measureExternalHeight_vnc
    )
);
vnc_externalHeightTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-ex-h-vsr",
        "number",
        0,
        null,
        true
    )
);
vnc_externalHeightTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-ex-h-obs",
        "number",
        0,
        null,
        true
    )
);

let vnc_meanExternalHeightInput = createInput(
    "vnc-mean-observed-external-height-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "Mean observed external height: ",
        vnc_meanExternalHeightInput,
        "cm"
    )
);

let vnc_correctedExternalHeightInput = createInput(
    "vnc-corrected-external-height-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "corrected external height: ",
        vnc_correctedExternalHeightInput,
        "cm"
    )
);

vnc_observationDiv.appendChild(
    createTextField(
        "observation-table-header",
        "Table for the measurement of internal height"
    )
);
let vnc_internalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalHeightTableDiv);

let vnc_internalHeightTable = createDiv("observation-table");
vnc_internalHeightTableDiv.appendChild(vnc_internalHeightTable);

vnc_internalHeightTable.appendChild(
    createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_internalHeightTable.appendChild(
    createColumn(
        "Main scale reading",
        5,
        "vnc-in-h-msr",
        "number",
        0,
        measureInternalHeight_vnc
    )
);
vnc_internalHeightTable.appendChild(
    createColumn(
        "Vernier scale divisions",
        5,
        "vnc-in-h-div",
        "number",
        0,
        measureInternalHeight_vnc
    )
);
vnc_internalHeightTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-in-h-vsr",
        "number",
        0,
        null,
        true
    )
);
vnc_internalHeightTable.appendChild(
    createColumn(
        "Vernier scale reading",
        5,
        "vnc-in-h-obs",
        "number",
        0,
        null,
        true
    )
);

let vnc_meanInternalHeightInput = createInput(
    "vnc-mean-observed-internal-height-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "Mean observed internal height: ",
        vnc_meanInternalHeightInput,
        "cm"
    )
);

let vnc_correctedInternalHeightInput = createInput(
    "vnc-corrected-internal-height-input",
    "number",
    0
);
vnc_observationDiv.appendChild(
    createInputDiv(
        "corrected internal height: ",
        vnc_correctedInternalHeightInput,
        "cm"
    )
);

let vnc_resultDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_resultDiv);

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

let vnc_precautionsDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_precautionsDiv);

vnc_precautionsDiv.appendChild(
    createTextField(
        "practical-section-header",
        "PRECAUTIONS AND SOURCES OF ERRORS:"
    )
);

vnc_precautionsDiv.appendChild(
    createPAS(
        "1",
        "We should carefully examine the working of the vernier Calipers before starting the experiment. If its motion is not smooth it should be oiled."
    )
);
vnc_precautionsDiv.appendChild(
    createPAS("2", "We should carefully record zero error.")
);
vnc_precautionsDiv.appendChild(
    createPAS(
        "3",
        "The object should be gripped firmly between the jaws without any pressure."
    )
);
vnc_precautionsDiv.appendChild(
    createPAS(
        "4",
        "The vernier should be first tightly screwed in position only then the observation should be taken. "
    )
);
vnc_precautionsDiv.appendChild(
    createPAS(
        "5",
        "The jaws may not be exactly at right angle to the main scale."
    )
);

function measureEssentials_vnc() {
    measureExternalDiameter_vnc();
    measureInternalDiameter_vnc();
    measureExternalHeight_vnc();
    measureInternalHeight_vnc();
}

function measureExternalDiameter_vnc() {
    measureVolume_vnc();
}

function measureInternalDiameter_vnc() {
    measureVolume_vnc();
}

function measureExternalHeight_vnc() {
    measureVolume_vnc();
}

function measureInternalHeight_vnc() {
    measureVolume_vnc();
}

function measureVolume_vnc() { }
