let halfDeflectionDiv = createDiv("practical-file", "physics-practical");

// #region Diagram
let hdf_diagramDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_diagramDiv);

hdf_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

hdf_diagramDiv.appendChild(createImg("practical-file-diagram light", "Physics-Practicals/Class 12/Diagrams/Light/half deflection.jpg"));
hdf_diagramDiv.appendChild(createImg("practical-file-diagram dark", "Physics-Practicals/Class 12/Diagrams/Dark/half deflection.jpg"));
// #endregion Diagram

// #region Objective
let hdf_objectiveDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_objectiveDiv);
hdf_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

hdf_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To study the current and voltage relationship (Ohm's Law) using an ammeter and voltmeter."
  )
);
// #endregion Objective

// #region Apparatus
let hdf_apparatusDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_apparatusDiv);

hdf_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

hdf_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Resistance coils, a battery eliminator(0-3 V), DC voltmeter(range: 3V), DC ammeter(range: 500mA), a rheostat one plug key, thick connecting wires, sand paper, etc."
  )
);
// #endregion Apparatus

// #region Formula
let hdf_formulaDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_formulaDiv);

hdf_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

hdf_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Ohm's law states that the ratio of potential difference between any two points of a conductor to the electric current flowing through it is constant, provided the physical conditions namely temperature, pressure,etc. remains constant."
  )
);

hdf_formulaDiv.appendChild(
  createTextField("practical-main-formula", "G = RS/(R-S)")
);

hdf_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "R Is the resistance in series with galvanometer and shunt resistance is S."
  )
);
// #endregion Formula

// #region Observation
let hdf_observationDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_observationDiv);

hdf_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

hdf_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the resistance of galvanometer by half deflection method"
  )
);
let hdf_resistanceTableDiv = createDiv("observation-table-div");
hdf_observationDiv.appendChild(hdf_resistanceTableDiv);

let hdf_resistanceTable = createDiv("observation-table");
hdf_resistanceTableDiv.appendChild(hdf_resistanceTable);

hdf_resistanceTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Resistance R ()",
    5,
    "hdf-table-R",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Deflection in galvanometer div (n)",
    5,
    "hdf-table-N",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Half deflection (n/2)",
    5,
    "hdf-table-half-N",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Required shunt S ()",
    5,
    "hdf-table-S",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Galvanometer resistance G = RS/(R-S) ()",
    5,
    "hdf-table-G",
    "number",
    0,
    null,
    true
  )
);
// #endregion Observation

// #region Result
let hdf_resultDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_resultDiv);

hdf_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let hdf_resistanceInput = createInput(
  "hdf-mass-per-unit-length-input",
  "number",
  0
);
hdf_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Resistance of galvanometer(G) by half deflection method is found to be ",
      hdf_resistanceInput,
      "."
    ),
    true
  )
);
// #endregion Result

// #region Precautions
let hdf_precautionsDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_precautionsDiv);

hdf_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

hdf_precautionsDiv.appendChild(
  createPAS("1", "That resistance connection should be neat and tight.")
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "2",
    "The battery key should be closed to avoid any damage in the galvanometer."
  )
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "3",
    "Deflection in the galvanometer should be as large as possible."
  )
);
hdf_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The value of R must be very large as compared to the value of G."
  )
);
hdf_precautionsDiv.appendChild(
  createPAS("5", "EMF of the battery eliminator should also be constant.")
);
// #endregion Precautions

// #region Sources of Errors
let hdf_soeDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_soeDiv);

hdf_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

hdf_soeDiv.appendChild(
  createPAS(
    "1",
    "The distance of the wire in the resistance box may not exactly be the same as marked."
  )
);
hdf_soeDiv.appendChild(
  createPAS(
    "2",
    "The plug in the resistance box may be loose which will provide large errors in observation."
  )
);
hdf_soeDiv.appendChild(
  createPAS("3", "The EMF of the battery may not be constant.")
);
// #endregion Sources of Errors

// #region Functions
function measureEssentials_hdf() {
  let sumG = 0;
  let validReadings = 0;
  for (let i = 1; i <= 5; i++) {
    let R = document.getElementById(`hdf-table-R-${i}`).value || 0;
    let N = document.getElementById(`hdf-table-N-${i}`).value || 0;
    let S = document.getElementById(`hdf-table-S-${i}`).value || 0;
    document.getElementById(`hdf-table-half-N-${i}`).value = N / 2;
    let G;
    if (R > 0) {
      G = (R * S) / (R - S);
      document.getElementById(`hdf-table-G-${i}`).value = G.toFixed(2);
      sumG += G;
      validReadings++;
    }
  }
  let meanG = sumG/validReadings;
  hdf_resistanceInput.value = meanG.toFixed(2);
}
// #endregion Functions