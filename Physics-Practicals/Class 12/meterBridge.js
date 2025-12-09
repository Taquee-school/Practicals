let meterBridgeDiv = createDiv("practical-file");

let mbr_diagramDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_diagramDiv);

mbr_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let mbr_diagram_light = document.createElement("img");
mbr_diagram_light.className = "practical-file-diagram light";
mbr_diagram_light.src = "Physics-Practicals/Class 12/Diagrams/Light/meter bridge.jpg";
mbr_diagramDiv.appendChild(mbr_diagram_light);
let mbr_diagram_dark = document.createElement("img");
mbr_diagram_dark.className = "practical-file-diagram dark";
mbr_diagram_dark.src = "Physics-Practicals/Class 12/Diagrams/Dark/meter bridge.jpg";
mbr_diagramDiv.appendChild(mbr_diagram_dark);

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

let mbr_observationDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_observationDiv);

mbr_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

//METER BRIDGE OBSERVATIONS------------
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
  "mbr-scale-least-count-input",
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

mbr_sonometerTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
mbr_sonometerTable.appendChild(
  createColumn(
    "Resistance Q ()",
    5,
    "mbr-Q",
    "number",
    0,
    measureResistance_mbr
  )
);
mbr_sonometerTable.appendChild(
  createColumn(
    "Position of balance point D (cm)",
    5,
    "mbr-D",
    "number",
    [4.9, 9.8, 14.7, 19.6, 24.5],
    null,
    true
  )
);
mbr_sonometerTable.appendChild(
  createColumn(
    "Balancing length AD = l (cm)",
    5,
    "mbr-AD",
    "number",
    0,
    measureResistance_mbr
  )
);
mbr_sonometerTable.appendChild(
  createColumn(
    "Length DC = 100-l (cm)",
    5,
    "mbr-DC",
    "number",
    0,
    measureResistance_mbr
  )
);
mbr_sonometerTable.appendChild(
  createColumn("X = Q/100-l ()", 5, "acs-X", "number", 0, null, true)
);

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

mbr_sgTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
mbr_sgTable.appendChild(
  createColumn(
    "Main scale reading (MSR) (mm)",
    5,
    "mbr-msr",
    "number",
    0,
    measureDiameter_mbr,
    false
  )
);
mbr_sgTable.appendChild(
  createColumn(
    "Circular scale reading (CSR)",
    5,
    "mbr-csr",
    "number",
    0,
    measureDiameter_mbr,
    false
  )
);
mbr_sgTable.appendChild(
  createColumn(
    "Observed Diameter (mm)",
    5,
    "mbr-d-obs",
    "number",
    0,
    null,
    true
  )
);

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
  "mbr-mass-per-unit-length-input",
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
  "mbr-mass-per-unit-length-input",
  "number",
  0
);
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

let mbr_soeDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_soeDiv);

mbr_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

mbr_soeDiv.appendChild(createPAS("1", "The wire of the meter bridge may not be of uniform area of cross-section throughout its entire length."));
mbr_soeDiv.appendChild(createPAS("2", "The thick copper strips at the two ends of the wire offer some resistance. They are called end resistance and the error due to them is called end error and the corresponding correction is called end correction."));
mbr_soeDiv.appendChild(createPAS("3", "The wire may get heated due to the passage of current and its resistance might change. Therefore, to minimize this error, the current is passed for a short period of time and the reading is taken quickly."));
mbr_soeDiv.appendChild(createPAS("4", "The screw gauge may have a backlash error due to loose fittings of its screw."));

function measureEssentials_mbr() { }

function measureDiameter_mbr() { }

function measureResistance_mbr() { }
