import { createDiv, createInput, createTextField, createImg, physicsFilePath_class12, createInputDiv, createTableColumn, toggleEffect, createButton, createIcon, createPAS } from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let pnj_ammeterLc = null;
let pnj_voltmeterLc = null;
let pnj_rowCount = 0;

function measureEssentials_pnj() {
  pnj_ammeterLc = parseFloat(pnj_ammeterLcInput.value) || 0;
  pnj_voltmeterLc = parseFloat(pnj_voltmeterLcInput.value) || 0;
  measureResistance_pnj();
}

function measureResistance_pnj() {
  let sum_sr = 0;

  for (let i = 1; i <= pnj_rowCount; i++) {
    let a_div =
      parseFloat(document.getElementById(`pnj-table-a-div-${i}`).value) || 0;
    let v_div =
      parseFloat(document.getElementById(`pnj-table-v-div-${i}`).value) || 0;

      let c = a_div * pnj_ammeterLc;
    let v = v_div * pnj_voltmeterLc;
    document.getElementById(`pnj-table-current-${i}`).value = c.toFixed(1);
    document.getElementById(`pnj-table-voltage-${i}`).value = v.toFixed(3);

    if (v_div > 0 && c > 0) {
      sum_sr += v / c;
    }
  }

  let meanSR = sum_sr / pnj_rowCount;
  pnj_staticResistanceInput.value = meanSR.toFixed(2);
}

function pnj_addRow() {
    pnj_rowCount++;
    setTimeout(() => {
        let inp = createInput(`pnj-s-no-${pnj_rowCount}`, "number", pnj_rowCount, null, true);
        pnj_sNoColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 10);
    setTimeout(() => {
        let inp = createInput(`pnj-table-v-div-${pnj_rowCount}`, "number", 0, measureResistance_pnj);
        pnj_vDivColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 50);
    setTimeout(() => {
        let inp = createInput(`pnj-table-voltage-${pnj_rowCount}`, "number", 0, null, true);
        pnj_voltageColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 100);
    setTimeout(() => {
        let inp = createInput(`pnj-table-a-div-${pnj_rowCount}`, "number", 0, measureResistance_pnj);
        pnj_aDivColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 150);
    setTimeout(() => {
        let inp = createInput(`pnj-table-current-${pnj_rowCount}`, "number", 0, null, true);
        pnj_currentColumn.appendChild(inp);
        inp.style.animation = "appear 0.5s ease";
    }, 200);
}
// #endregion Functions

// #region Diagram
let pnj_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_diagramDiv);

pnj_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));
pnj_diagramDiv.appendChild(createImg("practical-file-diagram", "light", physicsFilePath_class12 + "class-12/assets/diagrams/light/pn junction.jpg"));
pnj_diagramDiv.appendChild(createImg("practical-file-diagram", "dark", physicsFilePath_class12 + "class-12/assets/diagrams/dark/pn junction.jpg"));
// #endregion Diagram

// #region Objective
let pnj_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_objectiveDiv);

pnj_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECTIVE:")
);

pnj_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To draw the characteristics curve of a forward biased P-N junction diode and hence to determine the static and dynamic resistance of the same."
  )
);
// #endregion Objective

// #region Apparatus
let pnj_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_apparatusDiv);

pnj_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

pnj_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A P-N junction Diode, a battery eliminator (0-2V), rheostat, a milli-ammeter, a voltmeter, connecting wire etc."
  )
);
// #endregion Apparatus

// #region Formula
let pnj_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_formulaDiv);

pnj_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

pnj_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The static resistance of the junction diode is given by:"
  )
);

pnj_formulaDiv.appendChild(
  createTextField("practical-main-formula", "R(static) = V(av)/I(av)")
);

pnj_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Here V(av) and I(av) are the average values of voltage and current respectively over a segment (starting from origin) of V-I plot."
  )
);

pnj_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Whereas, the dynamic resistance of the junction is given by:"
  )
);
pnj_formulaDiv.appendChild(
  createTextField("practical-main-formula", "R(dynamic) = ∆V/∆I")
);
pnj_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Where, ∆V and ∆I are the changes in applied voltage and current, calculated by drawing a tangent on the V-I plot (to find its slope)."
  )
);
// #endregion Formula

// #region Observation
let pnj_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_observationDiv);

pnj_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let pnj_voltmeterRangeInput = createInput(
  "pnj-voltmeter-range-input",
  "number",
  0,
  null
);
pnj_observationDiv.appendChild(
  createInputDiv("Range of voltmeter: ", pnj_voltmeterRangeInput, "V")
);

let pnj_voltmeterLcInput = createInput(
  "pnj-voltmeter-least-count-input",
  "number",
  0,
  measureEssentials_pnj
);
pnj_observationDiv.appendChild(
  createInputDiv("Least count of voltmeter: ", pnj_voltmeterLcInput, "V")
);

let pnj_ammeterRangeInput = createInput(
  "pnj-ammeter-range-input",
  "number",
  0,
  null
);
pnj_observationDiv.appendChild(
  createInputDiv("Range of ammeter: ", pnj_ammeterRangeInput, "mA")
);

let pnj_ammeterLcInput = createInput(
  "pnj-ammeter-least-count-input",
  "number",
  0,
  measureEssentials_pnj
);
pnj_observationDiv.appendChild(
  createInputDiv("Least count of ammeter: ", pnj_ammeterLcInput, "mA")
);

pnj_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of current"
  )
);
let pnj_characteristicsTableDiv = createDiv("observation-table-div");
pnj_observationDiv.appendChild(pnj_characteristicsTableDiv);

let pnj_characteristicsTable = createDiv("observation-table");
pnj_characteristicsTableDiv.appendChild(pnj_characteristicsTable);

const pnj_sNoColumn = createTableColumn("S.no");
pnj_characteristicsTable.appendChild(pnj_sNoColumn);

const pnj_vDivColumn = createTableColumn("Divisions on voltmeter");
pnj_characteristicsTable.appendChild(pnj_vDivColumn);

const pnj_voltageColumn = createTableColumn("Voltage (V)");
pnj_characteristicsTable.appendChild(pnj_voltageColumn);

const pnj_aDivColumn = createTableColumn("Divisions on ammeter");
pnj_characteristicsTable.appendChild(pnj_aDivColumn);

const pnj_currentColumn = createTableColumn("Current (I) (mA)");
pnj_characteristicsTable.appendChild(pnj_currentColumn);

pnj_addRow();

pnj_characteristicsTableDiv.appendChild(toggleEffect(createButton("pnj-add-row-btn", "add-row-btn toggle-effect ", createIcon("bold", "plus"), "Add Row", pnj_addRow)));
// #endregion Observation

// #region Result
let pnj_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_resultDiv);

pnj_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

pnj_resultDiv.appendChild(
  createPAS(
    "1",
    "The V-I characteristics of a p-n junction is not a straight line, therefore p-n junction diode is a non-ohmic resistance in nature."
  )
);

let pnj_staticResistanceInput = createInput(
  "pnj-static-resistance-input",
  "number",
  0,
  null,
  true
);

let pnj_dynamicResistanceInput = createInput(
  "pnj-dynamic-resistance-input",
  "number",
  0,
  null,
  true
);

let pnj_resultPDiv = createDiv("practical-section");
pnj_resultPDiv.className = "practical-section-input-div";

let resultP = document.createElement("p");
pnj_resultPDiv.appendChild(resultP);
resultP.textContent =
  "The static and dynamic resistances of the p-n junction diode under forward biased condition are found to be";
resultP.appendChild(pnj_staticResistanceInput);
let resultPspan1 = document.createElement("span");
resultPspan1.textContent = "Ω and";
resultP.appendChild(resultPspan1);
resultP.appendChild(pnj_dynamicResistanceInput);
let resultPspan2 = document.createElement("span");
resultPspan2.textContent = "Ω respectively.";
resultP.appendChild(resultPspan2);

pnj_resultDiv.appendChild(createPAS("2", pnj_resultPDiv, true));
// #endregion Result

// #region Precautions
let pnj_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_precautionsDiv);

pnj_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

pnj_precautionsDiv.appendChild(
  createPAS("1", "All connections should be tight and neat.")
);
pnj_precautionsDiv.appendChild(
  createPAS(
    "2",
    "Voltmeter and milli-ammeter of appropriate least counts and ranges should be selected."
  )
);
pnj_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The pointer of meters should either be adjusted to read zero, when no current is passing through them, or zero error of the instrument should be taken into account."
  )
);
pnj_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The battery connections of p-n junction diode should be checked and in forward biasing, it should be ensured that p is connected to positive and n to the negative of the battery."
  )
);
pnj_precautionsDiv.appendChild(
  createPAS(
    "5",
    "Never cross the limits specified by the manufacturer otherwise the diode will get damaged."
  )
);
// #endregion Precautions

// #region Sources of Errors
let pnj_soeDiv = createDiv("practical-section");
experimentDiv.appendChild(pnj_soeDiv);

pnj_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

pnj_soeDiv.appendChild(createPAS("1", "The diode is not suitably biased."));
pnj_soeDiv.appendChild(
  createPAS("2", "Zero error is not correctly estimated.")
);
pnj_soeDiv.appendChild(
  createPAS("3", "Current is fixed through the diode for long duration.")
);
// #endregion Sources of Errors



