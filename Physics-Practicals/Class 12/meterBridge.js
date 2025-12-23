// #region Functions
let mbr_wireLength = 0;
let mbr_meanR = 0;
let mbr_meanD = 0;
let mbr_sgLeastCount = 0;
let mbr_sgCorrection = 0;
let mbr_rowCount = 0;
let mbr_sgRowCount = 0;

function measureEssentials_mbr() {
  mbr_wireLength = parseFloat(mbr_wireLengthInput.value) || 0;
  mbr_sgLeastCount = parseFloat(mbr_sgLeastCountInput.value) || 0;
  let ze1 = parseFloat(mbr_ze1Input.value) || 0;
  let ze2 = parseFloat(mbr_ze2Input.value) || 0;
  let ze3 = parseFloat(mbr_ze3Input.value) || 0;
  mbr_sgCorrection = -(ze1 + ze2 + ze3) / 3;
  measureDiameter_mbr();
}

function measureDiameter_mbr() {
  let sumD = 0;

  for (let i = 1; i <= mbr_sgRowCount; i++) {
    let MSR = parseFloat(document.getElementById(`mbr-table-msr-${i}`).value) || 0;
    let CSR = parseFloat(document.getElementById(`mbr-table-csr-${i}`).value) || 0;

    let D = MSR + CSR * mbr_sgLeastCount;
    document.getElementById(`mbr-table-sg-D-${i}`).value = D;

    sumD += D;
  }

    mbr_meanD = sumD / mbr_sgRowCount;
    mbr_meanDiameterInput.value = mbr_meanD.toFixed(2);
    let correctedMeanD = mbr_meanD + mbr_sgCorrection;
    mbr_correctedDiameterInput.value = correctedMeanD.toFixed(2);
    measureSpecificResistance_mbr();
}

function measureResistance_mbr() {
  let sumR = 0;

  for (let i = 1; i <= mbr_rowCount; i++) {
    let Q = parseFloat(document.getElementById(`mbr-table-Q-${i}`).value) || 0;
    let D = parseFloat(document.getElementById(`mbr-table-D-${i}`).value) || 0;

    document.getElementById(`mbr-table-AD-${i}`).value = D;

    let DC = 100 - D;
    document.getElementById(`mbr-table-DC-${i}`).value = DC;

    let X = 0;
    if (DC !== 0) {
        X = (D / DC) * Q;
    }
    document.getElementById(`mbr-table-X-${i}`).value = X.toFixed(2);

    sumR += X;
  }
  mbr_meanR = sumR / mbr_rowCount;
  mbr_resistanceInput.value = mbr_meanR.toFixed(2);
  measureSpecificResistance_mbr();
}

function measureSpecificResistance_mbr() {
  if (mbr_wireLength > 0) {
    let D = parseFloat(mbr_meanDiameterInput.value)/100;
    let R = parseFloat(mbr_resistanceInput.value) || 0;
    let SR = (R * 3.14 * D * D) / (mbr_wireLength * 4);
    mbr_specificResistanceInput.value = changeToStandard(SR);
  }
}

function mbr_addRow() {
    mbr_rowCount++;
    setTimeout(() => {
        let inp = createInput(`mbr-s-no-${mbr_rowCount}`, "number", mbr_rowCount, null, true);
        mbr_sNoColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 10);
    setTimeout(() => {
        let inp = createInput(`mbr-table-Q-${mbr_rowCount}`, "number", 0, measureResistance_mbr);
        mbr_QColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 50);
    setTimeout(() => {
        let inp = createInput(`mbr-table-D-${mbr_rowCount}`, "number", 0, measureResistance_mbr);
        mbr_DColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 100);
    setTimeout(() => {
        let inp = createInput(`mbr-table-AD-${mbr_rowCount}`, "number", 0, null, true);
        mbr_ADColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 150);
    setTimeout(() => {
        let inp = createInput(`mbr-table-DC-${mbr_rowCount}`, "number", 0, null, true);
        mbr_DCColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 200);
    setTimeout(() => {
        let inp = createInput(`mbr-table-X-${mbr_rowCount}`, "number", 0, null, true);
        mbr_XColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 250);
}

function mbr_addSGRow() {
    mbr_sgRowCount++;
    setTimeout(() => {
        let inp = createInput(`mbr-table-sg-s-no-${mbr_sgRowCount}`, "number", mbr_sgRowCount, null, true);
        mbr_sgSNoColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 10);
    setTimeout(() => {
        let inp = createInput(`mbr-table-msr-${mbr_sgRowCount}`, "number", 0, measureDiameter_mbr);
        mbr_sgMSRColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 50);
    setTimeout(() => {
        let inp = createInput(`mbr-table-csr-${mbr_sgRowCount}`, "number", 0, measureDiameter_mbr);
        mbr_sgCSRColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 100);
    setTimeout(() => {
        let inp = createInput(`mbr-table-sg-D-${mbr_sgRowCount}`, "number", 0, null, true);
        mbr_sgDColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 150);
}

// #endregion Functions

let meterBridgeDiv = createDiv("practical-file", "physics-practical");

// #region Diagram
let mbr_diagramDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_diagramDiv);

mbr_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

mbr_diagramDiv.appendChild(createImg("practical-file-diagram light", "Physics-Practicals/Class 12/Diagrams/Light/meter bridge.jpg"));
mbr_diagramDiv.appendChild(createImg("practical-file-diagram dark", "Physics-Practicals/Class 12/Diagrams/Dark/meter bridge.jpg"));
// #endregion Diagram

// #region Objective
let mbr_objectiveDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_objectiveDiv);

mbr_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

mbr_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the resistance of a given wire using a meter bridge and hence determine the specific resistance of its material."
  )
);
// #endregion Objective

// #region Apparatus
let mbr_apparatusDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_apparatusDiv);

mbr_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

mbr_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A meter bridge, an unknown resistance in the form of wire, a resistance box, a jockey, a key, a galvanometer, a Lechlanche cell, thick connecting wires, sand paper, screw gauge, etc."
  )
);
// #endregion Apparatus

// #region Formula
let mbr_formulaDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_formulaDiv);

mbr_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

mbr_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Since meter Bridge works on the principle of wheatstone bridge,etc."
  )
);

mbr_formulaDiv.appendChild(
  createPAS(
    "1",
    "Under the balance condition, we have the following working formula:"
  )
);

mbr_formulaDiv.appendChild(
  createTextField("practical-main-formula", "P/Q = R/X")
);

mbr_formulaDiv.appendChild(
  createPAS("2", "For a meter Bridge, the unknown resistance is given by:")
);

mbr_formulaDiv.appendChild(
  createTextField("practical-main-formula", "X = {l/(100-l)}Q")
);

mbr_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);
let mbr_formulaBelonging = createDiv("moved-div");
mbr_formulaDiv.appendChild(mbr_formulaBelonging);

mbr_formulaBelonging.appendChild(
  createTextField(null, "X is the resistor of unknown value,")
);
mbr_formulaBelonging.appendChild(
  createTextField(null, "l is the balancing length and")
);
mbr_formulaBelonging.appendChild(
  createTextField(null, "Q is the resistance from the resistance box.")
);

mbr_formulaDiv.appendChild(
  createPAS("3", "Specific resistance(¶) of the of the material is given by:")
);

mbr_formulaDiv.appendChild(
  createTextField("practical-main-formula", "¶ = (RA)/l = (XπD2)/4l")
);

mbr_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);
let mbr_formulaBelonging2 = createDiv("moved-div");
mbr_formulaDiv.appendChild(mbr_formulaBelonging2);

mbr_formulaBelonging2.appendChild(
  createTextField(null, "X is the resistor of unknown value,")
);
mbr_formulaBelonging2.appendChild(
  createTextField(null, "l is the length of wire and")
);
mbr_formulaBelonging2.appendChild(
  createTextField(null, "D is the diameter of the wire.")
);
// #endregion Formula

// #region Observation
let mbr_observationDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_observationDiv);

mbr_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

// #region Meter bridge observations
let mbr_scaleLcInput = createInput(
  "mbr-scale-least-count-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv("Least count of meter scale:", mbr_scaleLcInput, "cm."),
    true
  )
);

let mbr_wireLengthInput = createInput(
  "mbr-wire-length-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv("Length of wire:", mbr_wireLengthInput, "cm."),
    true
  )
);

mbr_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of balancing length"
  )
);
let mbr_sonometerTableDiv = createDiv("observation-table-div");
mbr_observationDiv.appendChild(mbr_sonometerTableDiv);

let mbr_sonometerTable = createDiv("observation-table");
mbr_sonometerTableDiv.appendChild(mbr_sonometerTable);

const mbr_sNoColumn = createTableColumn("S.no");
mbr_sonometerTable.appendChild(mbr_sNoColumn);

const mbr_QColumn = createTableColumn("Resistance Q ()");
mbr_sonometerTable.appendChild(mbr_QColumn);

const mbr_DColumn = createTableColumn("Position of balance point D (cm)");
mbr_sonometerTable.appendChild(mbr_DColumn);

const mbr_ADColumn = createTableColumn("Balancing length AD = l (cm)");
mbr_sonometerTable.appendChild(mbr_ADColumn);

const mbr_DCColumn = createTableColumn("Length DC = 100-l (cm)");
mbr_sonometerTable.appendChild(mbr_DCColumn);

const mbr_XColumn = createTableColumn("X = Q/100-l ()");
mbr_sonometerTable.appendChild(mbr_XColumn);

mbr_addRow();
mbr_sonometerTableDiv.appendChild(setRippleStyle(createButton("mbr-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", mbr_addRow)));
// #endregion Meter bridge observations

// #region Screw gauge observations
let mbr_sgLeastCountInput = createInput(
  "mbr-sg-lc-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Least count of screw gauge (LC) = Pitch/(no. of circular division) = ",
      mbr_sgLeastCountInput,
      "mm"
    ),
    true
  )
);

mbr_observationDiv.appendChild(
  createPAS(
    "4",
    createTextField("practical-section-content", "Zero error (e):"),
    true
  )
);

let mbr_zeroErrorDiv = createDiv("moved-div");
mbr_observationDiv.appendChild(mbr_zeroErrorDiv);

let mbr_ze1Input = createInput(
  "mbr-zero-error-1-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", mbr_ze1Input, "mm."), true)
);

let mbr_ze2Input = createInput(
  "mbr-zero-error-2-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", mbr_ze2Input, "mm."), true)
);

let mbr_ze3Input = createInput(
  "mbr-zero-error-3-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", mbr_ze3Input, "mm."), true)
);

let mbr_meanZeroErrorInput = createInput(
  "mbr-sg-mean-ze-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv("Mean zero error = ", mbr_meanZeroErrorInput, "mm."),
    true
  )
);

let mbr_zeroCorrectionInput = createInput(
  "mbr-sg-zc-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv("Zero correction = ", mbr_zeroCorrectionInput, "mm."),
    true
  )
);

mbr_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of diameter of wire"
  )
);
let mbr_sgTableDiv = createDiv("observation-table-div");
mbr_observationDiv.appendChild(mbr_sgTableDiv);

let mbr_sgTable = createDiv("observation-table");
mbr_sgTableDiv.appendChild(mbr_sgTable);

const mbr_sgSNoColumn = createTableColumn("S.no");
mbr_sgTable.appendChild(mbr_sgSNoColumn);

const mbr_sgMSRColumn = createTableColumn("Main scale reading (MSR) (mm)");
mbr_sgTable.appendChild(mbr_sgMSRColumn);

const mbr_sgCSRColumn = createTableColumn("Circular scale reading (CSR)");
mbr_sgTable.appendChild(mbr_sgCSRColumn);

const mbr_sgDColumn = createTableColumn("Observed Diameter (mm)");
mbr_sgTable.appendChild(mbr_sgDColumn);

mbr_addSGRow();
mbr_sgTableDiv.appendChild(setRippleStyle(createButton("mbr-sg-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", mbr_addSGRow)));

let mbr_meanDiameterInput = createInput(
  "mbr-sg-mean-d-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createInputDiv("Mean diameter = ", mbr_meanDiameterInput, "cm")
);

let mbr_correctedDiameterInput = createInput(
  "mbr-sg-mean-corr-d-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createInputDiv("Mean corrected diameter = ", mbr_correctedDiameterInput, "cm")
);
// #endregion Screw gauge observations
// #endregion Observation

// #region Result
let mbr_masspulInput = createInput(
  "mbr-wire-mass-input",
  "number",
  0,
  null,
  true
);

let mbr_resultDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_resultDiv);

mbr_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let mbr_resistanceInput = createInput(
  "mbr-resistance-input",
  "number",
  0
);
mbr_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "The value of resistance of the given wire is found to be: ",
      mbr_resistanceInput,
      "."
    ),
    true
  )
);

let mbr_specificResistanceInput = createInput(
  "mbr-specific-resistance-input",
  "text",
  0
);
mbr_specificResistanceInput.style.width = "100px";
mbr_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The value of specific resistance of the material of the wire is found to be: ",
      mbr_specificResistanceInput,
      "m."
    ),
    true
  )
);
// #endregion Result

// #region Precautions
let mbr_precautionsDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_precautionsDiv);

mbr_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

mbr_precautionsDiv.appendChild(
  createPAS("1", "The ends of connecting wires should be rubbed and cleaned with a sand paper. The connections should be neat, clean and tight.")
);
mbr_precautionsDiv.appendChild(
  createPAS(
    "2",
    "Plugs in the resistance box should be pressed and tightened by screwing them a little in the clockwise direction."
  )
);
mbr_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The wire should not be pressed with the jockey too hard otherwise the uniformity of the wire will not be maintained."
  )
);
mbr_precautionsDiv.appendChild(
  createPAS(
    "4",
    "To avoid any error due to non-uniformity of bridge wire, the balance point should always be obtaied near mid-point."
  )
);
mbr_precautionsDiv.appendChild(
  createPAS(
    "5",
    "To locate the balance point, the jockey should be lifted and placed on the new position, and should not be slided on the wire."
  )
);
mbr_precautionsDiv.appendChild(
  createPAS(
    "6",
    "The key of the battery or the cell should be closed first and then the jockey is touched on the wire, when the reading is to be taken."
  )
);
// #endregion Precautions

// #region Sources of errors
let mbr_soeDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_soeDiv);

mbr_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

mbr_soeDiv.appendChild(createPAS("1", "The wire of the meter bridge may not be of uniform area of cross-section throughout its entire length."));
mbr_soeDiv.appendChild(createPAS("2", "The thick copper strips at the two ends of the wire offer some resistance. They are called end resistance and the error due to them is called end error and the corresponding correction is called end correction."));
mbr_soeDiv.appendChild(createPAS("3", "The wire may get heated due to the passage of current and its resistance might change. Therefore, to minimize this error, the current is passed for a short period of time and the reading is taken quickly."));
mbr_soeDiv.appendChild(createPAS("4", "The screw gauge may have a backlash error due to loose fittings of its screw."));
// #endregion Sources of errors

