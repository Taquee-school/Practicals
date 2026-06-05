import { createDiv, createInput, createTextField, createImg, base, createPAS, createInputDiv, createTableColumn, toggleEffect, createButton, createIcon } from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let ohl_ammeterLc = null;
let ohl_voltmeterLc = null;
let ohl_rowCount = 0;

function measureEssentials_ohl() {
  ohl_ammeterLc = parseFloat(ohl_ammeterLcInput.value) || 0;
  ohl_voltmeterLc = parseFloat(ohl_voltmeterLcInput.value) || 0;
  measureResistance_ohl();
}

function measureResistance_ohl() {
  let sum_r = 0;

  for (let i = 1; i <= ohl_rowCount; i++) {
    // Remove invalid check if it was added.
    if (document.getElementById(`ohl-a-div-${i}`).classList.contains("invalid")) {
      document.getElementById(`ohl-a-div-${i}`).classList.remove("invalid");
    }
    if (document.getElementById(`ohl-v-div-${i}`).classList.contains("invalid")) {
      document.getElementById(`ohl-v-div-${i}`).classList.remove("invalid");
    }

    let a_div = parseFloat(document.getElementById(`ohl-a-div-${i}`).value) || 0;
    let v_div = parseFloat(document.getElementById(`ohl-v-div-${i}`).value) || 0;

    let c = (a_div * ohl_ammeterLc) / 1000;
    let v = v_div * ohl_voltmeterLc;
    document.getElementById(`ohl-current-${i}`).value = c.toFixed(4);
    document.getElementById(`ohl-voltage-${i}`).value = v.toFixed(4);

    if (!(c > 0)) {
      // Addind invalid check because there sould be current to find resistance.
      if (!(document.getElementById(`ohl-a-div-${i}`).classList.contains("invalid"))) {
        document.getElementById(`ohl-a-div-${i}`).classList.add("invalid");
      }
      continue;
    }
    if (!(v > 0)) {
      // Addind invalid check because there sould be voltage to find resistance.
      if (!(document.getElementById(`ohl-v-div-${i}`).classList.contains("invalid"))) {
        document.getElementById(`ohl-v-div-${i}`).classList.add("invalid");
      }
      continue;
    }

    let r = v / c;
    document.getElementById(`ohl-res-${i}`).value = r.toFixed(2);

    sum_r += r;
  }

  let meanR = sum_r / ohl_rowCount;
  ohl_resistanceInput.value = meanR.toFixed(2);
}

function ohl_addRow() {
  ohl_rowCount++;
  setTimeout(() => {
    let inp = createInput(`ohl-s-no-${ohl_rowCount}`, "number", ohl_rowCount, measureResistance_ohl);
    ohl_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(`ohl-a-div-${ohl_rowCount}`, "number", 0, measureResistance_ohl);
    ohl_aDivColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(`ohl-current-${ohl_rowCount}`, "number", 0, null, true);
    ohl_currentColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(`ohl-v-div-${ohl_rowCount}`, "number", 0, measureResistance_ohl);
    ohl_vDivColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(`ohl-voltage-${ohl_rowCount}`, "number", 0, null, true);
    ohl_voltageColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
  setTimeout(() => {
    let inp = createInput(`ohl-res-${ohl_rowCount}`, "number", 0, null, true);
    ohl_resistanceColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 250);
}
// #endregion Functions

// #region Diagram
let ohl_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_diagramDiv);

ohl_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

ohl_diagramDiv.appendChild(createImg("practical-file-diagram", "light", base+"/diagrams/class-12/light/ohms law.jpg"));
ohl_diagramDiv.appendChild(createImg("practical-file-diagram", "dark", base+"/diagrams/class-12/dark/ohms law.jpg"));
// #endregion Diagram

// #region Objective
let ohl_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_objectiveDiv);

ohl_objectiveDiv.appendChild(createTextField("practical-section-header", "OBJECTIVE:"));

ohl_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To study the current and voltage relationship (Ohm's Law) using an ammeter and voltmeter."
  )
);
// #endregion Objective

// #region Apparatus
let ohl_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_apparatusDiv);

ohl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

ohl_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Resistance coils, a battery eliminator(0-3 V), DC voltmeter(range: 3V), DC ammeter(range: 500mA), a rheostat one plug key, thick connecting wires, sand paper, etc."
  )
);
// #endregion Apparatus

// #region Formula
let ohl_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_formulaDiv);

ohl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

ohl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Ohm's law states that the ratio of potential difference between any two points of a conductor to the electric current flowing through it is constant, provided the physical conditions namely temperature, pressure,etc. remains constant."
  )
);

ohl_formulaDiv.appendChild(
  createTextField("practical-main-formula", "V/I = constant = R")
);
// #endregion Formula

// #region Observation
let ohl_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_observationDiv);

ohl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

ohl_observationDiv.appendChild(createPAS("1", "Range of:"));

let ohl_rangeObservationDiv = createDiv("moved-div");
ohl_observationDiv.appendChild(ohl_rangeObservationDiv);

let ohl_ammeterRangeInput = createInput(
  "ohl-ammeter-range-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_rangeObservationDiv.appendChild(
  createInputDiv("Milli-ammeter: ", ohl_ammeterRangeInput, "mA")
);

let ohl_voltmeterRangeInput = createInput(
  "ohl-voltmeter-range-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_rangeObservationDiv.appendChild(
  createInputDiv("Voltmeter: ", ohl_voltmeterRangeInput, "V")
);

ohl_observationDiv.appendChild(createPAS("2", "Least count of:"));

let ohl_leastCountObservationDiv = createDiv("moved-div");
ohl_observationDiv.appendChild(ohl_leastCountObservationDiv);

let ohl_ammeterLcInput = createInput(
  "ohl-ammeter-least-count-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_leastCountObservationDiv.appendChild(
  createInputDiv("Milli-ammeter: ", ohl_ammeterLcInput, "mA")
);

let ohl_voltmeterLcInput = createInput(
  "ohl-voltmeter-least-count-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_leastCountObservationDiv.appendChild(
  createInputDiv("Voltmeter: ", ohl_voltmeterLcInput, "V")
);

ohl_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of resistance of wire"
  )
);
let ohl_resistanceTableDiv = createDiv("observation-table-div");
ohl_observationDiv.appendChild(ohl_resistanceTableDiv);

let ohl_resistanceTable = createDiv("observation-table");
ohl_resistanceTableDiv.appendChild(ohl_resistanceTable);

const ohl_sNoColumn = createTableColumn("S.no");
ohl_resistanceTable.appendChild(ohl_sNoColumn);

const ohl_aDivColumn = createTableColumn("Divisions on ammeter");
ohl_resistanceTable.appendChild(ohl_aDivColumn);

const ohl_currentColumn = createTableColumn("Current (I) (A)");
ohl_resistanceTable.appendChild(ohl_currentColumn);

const ohl_vDivColumn = createTableColumn("Divisions on voltmeter");
ohl_resistanceTable.appendChild(ohl_vDivColumn);

const ohl_voltageColumn = createTableColumn("Voltage (V) (V)");
ohl_resistanceTable.appendChild(ohl_voltageColumn);

const ohl_resistanceColumn = createTableColumn("R = V/I (Ω)");
ohl_resistanceTable.appendChild(ohl_resistanceColumn);

ohl_addRow();
ohl_resistanceTableDiv.appendChild(toggleEffect(createButton("ohl-add-row-btn", "add-row-btn toggle-effect ", createIcon("bold", "plus"), "Add Row", ohl_addRow)));
// #endregion Observation

// #region Result
let ohl_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_resultDiv);

ohl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

ohl_resultDiv.appendChild(
  createPAS(
    "1",
    "Graph between potential drop V and the current through the conductor I is a straight line."
  )
);

let ohl_resistanceInput = createInput(
  "ohl-resistance-input",
  "number",
  0,
  null,
  true
);

ohl_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The value of the given resistance is found to be: ",
      ohl_resistanceInput,
      "Ω"
    ),
    true
  )
);
// #endregion Result

// #region Precautions
let ohl_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(ohl_precautionsDiv);

ohl_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

ohl_precautionsDiv.appendChild(
  createPAS("1", "The ends of the wire should be neat and clean.")
);
ohl_precautionsDiv.appendChild(
  createPAS("2", "The connection should be tight.")
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The current passed should not be high and it should be passed for a short interval of time."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The voltmeter should be connected in parallel and the ammeter in series and these should be so connected that the current enters at the positive terminal and leaves at the negative terminal."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "5",
    "The connecting wires used should be thick copper wires and the insulation of their ends should be removed by rubbing them with sandpaper."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "6",
    "Before plugging in the key, it should be ensured that the circuit and connections are right."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "7",
    "The plug should be inserted only while taking observations, otherwise current would cause unnecessary heating in the circuit."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "8",
    "Measuring instruments of appropriate ranges should be used and zero error in them if any must be taken into account."
  )
);
// #endregion Precautions

// #region Sources of Errors
let ohmsLaw_soeDiv = createDiv("practical-section");
experimentDiv.appendChild(ohmsLaw_soeDiv);

ohmsLaw_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

ohmsLaw_soeDiv.appendChild(createPAS("1", "The connection may be loose."));
ohmsLaw_soeDiv.appendChild(
  createPAS(
    "2",
    "The ratio of V/I may not be constant due to heating caused by passage of current for a longer interval of time."
  )
);
ohmsLaw_soeDiv.appendChild(
  createPAS("3", "The wire may not have uniform thickness.")
);
// #endregion Sources of Errors
