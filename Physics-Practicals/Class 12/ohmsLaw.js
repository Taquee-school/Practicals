let ohmsLawDiv = createDiv("practical-file");

let ohl_diagramDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_diagramDiv);

ohl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let ohl_diagram_light = document.createElement("img");
ohl_diagram_light.className = "practical-file-diagram light";
ohl_diagram_light.src = "Physics-Practicals/Class 12/Diagrams/Light/ohms law.jpg";
ohl_diagramDiv.appendChild(ohl_diagram_light);
let ohl_diagram_dark = document.createElement("img");
ohl_diagram_dark.className = "practical-file-diagram dark";
ohl_diagram_dark.src = "Physics-Practicals/Class 12/Diagrams/Dark/ohms law.jpg";
ohl_diagramDiv.appendChild(ohl_diagram_dark);

let ohl_objectiveDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_objectiveDiv);

ohl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECTIVE:")
);

ohl_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To study the current and voltage relationship (Ohm's Law) using an ammeter and voltmeter."
  )
);

let ohl_apparatusDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_apparatusDiv);

ohl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

ohl_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Resistance coils, a battery eliminator(0-3 V), DC voltmeter(range: 3V), DC ammeter(range: 500mA), a rheostat one plug key, thick connecting wires, sand paper, etc."
  )
);

let ohl_formulaDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_formulaDiv);

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

let ohl_observationDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_observationDiv);

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

ohl_resistanceTable.appendChild(
  createColumn(
    "S.no",
    10,
    null,
    "number",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    null,
    true
  )
);
ohl_resistanceTable.appendChild(
  createColumn(
    "Divisions on ammeter",
    10,
    "ohl-a-div",
    "number",
    0,
    measureResistance_ohl,
    false
  )
);
ohl_resistanceTable.appendChild(
  createColumn("Current (I) (A)", 10, "ohl-current", "number", 0, null, true)
);
ohl_resistanceTable.appendChild(
  createColumn(
    "Divisions on voltmeter",
    10,
    "ohl-v-div",
    "number",
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    null,
    true
  )
);
ohl_resistanceTable.appendChild(
  createColumn("Voltage (V) (V)", 10, "ohl-voltage", "number", 0, null, true)
);
ohl_resistanceTable.appendChild(
  createColumn("R = V/I (Ω)", 10, "ohl-res", "number", 0, null, true)
);

let ohl_resultDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_resultDiv);

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

let ohl_precautionsDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_precautionsDiv);

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

let ohmsLaw_soeDiv = createDiv("practical-file");
ohmsLawDiv.appendChild(ohmsLaw_soeDiv);

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

//VARIABLES--------------------------
let ohl_ammeterLc = 0.01;
let ohl_voltmeterLc = 0.1;

function measureEssentials_ohl() {
  ohl_ammeterLc = parseFloat(ohl_ammeterLcInput.value) || 0;
  ohl_voltmeterLc = parseFloat(ohl_voltmeterLcInput.value) || 0;
  measureResistance_ohl();
}

function measureResistance_ohl() {
  let sum_r = 0;
  let validReadings = 0;

  for (let i = 1; i <= 10; i++) {
    let a_div =
      parseFloat(document.getElementById(`ohl-a-div-${i}`).value) || 0;
    let v_div =
      parseFloat(document.getElementById(`ohl-v-div-${i}`).value) || 0;
    let c = (a_div * ohl_ammeterLc) / 1000;
    let v = v_div * ohl_voltmeterLc;
    document.getElementById(`ohl-current-${i}`).value = c.toFixed(4);
    document.getElementById(`ohl-voltage-${i}`).value = v.toFixed(4);
    let r = v / c;
    document.getElementById(`ohl-res-${i}`).value = r.toFixed(2);

    if (a_div > 0) {
      sum_r += r;
      validReadings++;
    }
  }

  meanR = sum_r / validReadings;

  ohl_resistanceInput.value = meanR.toFixed(2);
}