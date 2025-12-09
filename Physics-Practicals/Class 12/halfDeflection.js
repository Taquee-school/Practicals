let halfDeflectionDiv = createDiv("practical-file");

let hdf_diagramDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_diagramDiv);

hdf_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

let hdf_diagram_light = document.createElement("img");
hdf_diagram_light.className = "practical-file-diagram light";
hdf_diagram_light.src = "Physics-Practicals/Class 12/Diagrams/Light/half deflection.jpg";
hdf_diagramDiv.appendChild(hdf_diagram_light);
let hdf_diagram_dark = document.createElement("img");
hdf_diagram_dark.className = "practical-file-diagram dark";
hdf_diagram_dark.src = "Physics-Practicals/Class 12/Diagrams/Dark/half deflection.jpg";
hdf_diagramDiv.appendChild(hdf_diagram_dark);

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
    "hdf-R",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Deflection in galvanometer div (n)",
    5,
    "hdf-N",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Half deflection (n/2)",
    5,
    "hdf-half-N",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Required shunt S ()",
    5,
    "hdf-S",
    "number",
    0,
    measureEssentials_hdf
  )
);
hdf_resistanceTable.appendChild(
  createColumn(
    "Galvanometer resistance G = RS/(R-S) ()",
    5,
    "hdf-G",
    "number",
    0,
    null,
    true
  )
);

let hdf_meanDiameterInput = createInput(
  "hdf-mean-observed-diameter-input",
  "number",
  0
);

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

function measureEssentials_hdf() { }
