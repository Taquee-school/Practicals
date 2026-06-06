import {
  createDiv,
  createInput,
  createTextField,
  createImg,
  base,
  createTableColumn,
  toggleEffect,
  createButton,
  createIcon,
  createPAS,
  createInputDiv,
} from "../../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let hdf_rowCount = 0;

function measureResistance_hdf() {
  let sumG = 0;

  for (let i = 1; i <= hdf_rowCount; i++) {
    let R = parseFloat(document.getElementById(`hdf-table-R-${i}`).value) || 0;
    let N = parseFloat(document.getElementById(`hdf-table-N-${i}`).value) || 0;
    let S = parseFloat(document.getElementById(`hdf-table-S-${i}`).value) || 0;
    document.getElementById(`hdf-table-half-N-${i}`).value = N / 2;
    let G;
    if (R > 0 && R !== S) {
      G = (R * S) / (R - S);
      document.getElementById(`hdf-table-G-${i}`).value = G.toFixed(2);
      sumG += G;
    }
  }
  let meanG = sumG / hdf_rowCount;
  hdf_resistanceInput.value = meanG.toFixed(2);
}

function hdf_addRow() {
  hdf_rowCount++;
  setTimeout(() => {
    let inp = createInput(
      `hdf-s-no-${hdf_rowCount}`,
      "number",
      hdf_rowCount,
      null,
      true,
    );
    hdf_sNoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(() => {
    let inp = createInput(
      `hdf-table-R-${hdf_rowCount}`,
      "number",
      0,
      measureResistance_hdf,
    );
    hdf_RColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(() => {
    let inp = createInput(
      `hdf-table-N-${hdf_rowCount}`,
      "number",
      0,
      measureResistance_hdf,
    );
    hdf_NColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(() => {
    let inp = createInput(
      `hdf-table-half-N-${hdf_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    hdf_halfNColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(() => {
    let inp = createInput(
      `hdf-table-S-${hdf_rowCount}`,
      "number",
      0,
      measureResistance_hdf,
    );
    hdf_SColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
  setTimeout(() => {
    let inp = createInput(
      `hdf-table-G-${hdf_rowCount}`,
      "number",
      0,
      null,
      true,
    );
    hdf_GColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 250);
}
// #endregion Functions

// #region Diagram
let hdf_diagramDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_diagramDiv);

hdf_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:"),
);

hdf_diagramDiv.appendChild(
  createImg(
    "practical-file-diagram",
    "light",
    base + "/diagrams/class-12/light/half deflection.jpg",
  ),
);
hdf_diagramDiv.appendChild(
  createImg(
    "practical-file-diagram",
    "dark",
    base + "/diagrams/class-12/dark/half deflection.jpg",
  ),
);
// #endregion Diagram

// #region Objective
let hdf_objectiveDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_objectiveDiv);
hdf_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:"),
);

hdf_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To study the current and voltage relationship (Ohm's Law) using an ammeter and voltmeter.",
  ),
);
// #endregion Objective

// #region Apparatus
let hdf_apparatusDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_apparatusDiv);

hdf_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:"),
);

hdf_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Resistance coils, a battery eliminator(0-3 V), DC voltmeter(range: 3V), DC ammeter(range: 500mA), a rheostat one plug key, thick connecting wires, sand paper, etc.",
  ),
);
// #endregion Apparatus

// #region Formula
let hdf_formulaDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_formulaDiv);

hdf_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:"),
);

hdf_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Ohm's law states that the ratio of potential difference between any two points of a conductor to the electric current flowing through it is constant, provided the physical conditions namely temperature, pressure,etc. remains constant.",
  ),
);

hdf_formulaDiv.appendChild(
  createTextField("practical-main-formula", "G = RS/(R-S)"),
);

hdf_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "R Is the resistance in series with galvanometer and shunt resistance is S.",
  ),
);
// #endregion Formula

// #region Observation
let hdf_observationDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_observationDiv);

hdf_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:"),
);

hdf_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the resistance of galvanometer by half deflection method",
  ),
);
let hdf_resistanceTableDiv = createDiv("observation-table-div");
hdf_observationDiv.appendChild(hdf_resistanceTableDiv);

let hdf_resistanceTable = createDiv("observation-table");
hdf_resistanceTableDiv.appendChild(hdf_resistanceTable);

const hdf_sNoColumn = createTableColumn("S.no");
hdf_resistanceTable.appendChild(hdf_sNoColumn);

const hdf_RColumn = createTableColumn("Resistance R ()");
hdf_resistanceTable.appendChild(hdf_RColumn);

const hdf_NColumn = createTableColumn("Deflection in galvanometer div (n)");
hdf_resistanceTable.appendChild(hdf_NColumn);

const hdf_halfNColumn = createTableColumn("Half deflection (n/2)");
hdf_resistanceTable.appendChild(hdf_halfNColumn);

const hdf_SColumn = createTableColumn("Required shunt S ()");
hdf_resistanceTable.appendChild(hdf_SColumn);

const hdf_GColumn = createTableColumn(
  "Galvanometer resistance G = RS/(R-S) ()",
);
hdf_resistanceTable.appendChild(hdf_GColumn);

hdf_addRow();
hdf_resistanceTableDiv.appendChild(
  toggleEffect(
    createButton(
      "hdf-add-row-btn",
      "add-row-btn toggle-effect ",
      createIcon("bold", "plus"),
      "Add Row",
      hdf_addRow,
    ),
  ),
);
// #endregion Observation

// #region Result
let hdf_resultDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_resultDiv);

hdf_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:"),
);

let hdf_resistanceInput = createInput(
  "hdf-mass-per-unit-length-input",
  "number",
  0,
);
hdf_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Resistance of galvanometer(G) by half deflection method is found to be ",
      hdf_resistanceInput,
      ".",
    ),
    true,
  ),
);
// #endregion Result

// #region Precautions
let hdf_precautionsDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_precautionsDiv);

hdf_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:"),
);

hdf_precautionsDiv.appendChild(
  createPAS("1", "That resistance connection should be neat and tight."),
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "2",
    "The battery key should be closed to avoid any damage in the galvanometer.",
  ),
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "3",
    "Deflection in the galvanometer should be as large as possible.",
  ),
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The value of R must be very large as compared to the value of G.",
  ),
);
hdf_precautionsDiv.appendChild(
  createPAS("5", "EMF of the battery eliminator should also be constant."),
);
// #endregion Precautions

// #region Sources of Errors
let hdf_soeDiv = createDiv("practical-section");
experimentDiv.appendChild(hdf_soeDiv);

hdf_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:"),
);

hdf_soeDiv.appendChild(
  createPAS(
    "1",
    "The distance of the wire in the resistance box may not exactly be the same as marked.",
  ),
);
hdf_soeDiv.appendChild(
  createPAS(
    "2",
    "The plug in the resistance box may be loose which will provide large errors in observation.",
  ),
);
hdf_soeDiv.appendChild(
  createPAS("3", "The EMF of the battery may not be constant."),
);
// #endregion Sources of Errors

// #region Functions
