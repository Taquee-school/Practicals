let acSonometerDiv = createDiv("practical-file");

let acs_diagramDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_diagramDiv);

acs_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let acs_diagram_light = document.createElement("img");
acs_diagram_light.className = "practical-file-diagram light";
acs_diagram_light.src =
  "Physics-Practicals/Class 12/Diagrams/Light/ac sonometer.png";
acs_diagramDiv.appendChild(acs_diagram_light);
let acs_diagram_dark = document.createElement("img");
acs_diagram_dark.className = "practical-file-diagram dark";
acs_diagram_dark.src =
  "Physics-Practicals/Class 12/Diagrams/Dark/ac sonometer.png";
acs_diagramDiv.appendChild(acs_diagram_dark);

let acs_objectiveDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_objectiveDiv);

acs_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

acs_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the frequency of an alternating current (ac mains) by sonometer and an electromagnet."
  )
);

let acs_apparatusDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_apparatusDiv);

acs_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

acs_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A sonometer with soft iron wire stretched over it, an electromagnet, a step-down transformer, slotted half kg weights, a hanger, a screw gauge, etc."
  )
);

let acs_formulaDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_formulaDiv);

acs_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

acs_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The frequency 'v' of the fundamental note of a stretched string of length 'l' and mass per unit length 'm' under tension 'T' is given by:"
  )
);

acs_formulaDiv.appendChild(
  createTextField("practical-main-formula", "v = √(T/m)/4l")
);

acs_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Where, m, the mass per unit length, is given by:"
  )
);

acs_formulaDiv.appendChild(
  createTextField("practical-main-formula", "m = (πD²¶)/4")
);

acs_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);

let acs_formulaBelonging = createDiv("moved-div");
acs_formulaDiv.appendChild(acs_formulaBelonging);

acs_formulaBelonging.appendChild(
  createTextField("", "D is the diameter of the sonometer wire.")
);
acs_formulaBelonging.appendChild(createTextField("", "¶ is its density."));

let acs_observationDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_observationDiv);

acs_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);


//SONOMETER OBSERVATIONS------------
acs_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of resonant length"
  )
);
let acs_sonometerTableDiv = createDiv("observation-table-div");
acs_observationDiv.appendChild(acs_sonometerTableDiv);

let acs_sonometerTable = createDiv("observation-table");
acs_sonometerTableDiv.appendChild(acs_sonometerTable);

acs_sonometerTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
acs_sonometerTable.appendChild(
  createColumn(
    "Load (M) (kg)",
    5,
    "acs-table-M",
    "number",
    [0.5, 1.0, 1.5, 2.0, 2.5],
    null,
    true
  )
);
acs_sonometerTable.appendChild(
  createColumn(
    "Tension (T=Mg) (N)",
    5,
    "acs-table-N",
    "number",
    [4.9, 9.8, 14.7, 19.6, 24.5],
    null,
    true
  )
);
acs_sonometerTable.appendChild(
  createColumn(
    "First Observation l\u2081 (cm)",
    5,
    "acs-table-l1",
    "number",
    0,
    measureFrequency_acs,
    false
  )
);
acs_sonometerTable.appendChild(
  createColumn(
    "Second Observation l\u2082 (cm)",
    5,
    "acs-table-l2",
    "number",
    0,
    measureFrequency_acs,
    false
  )
);
acs_sonometerTable.appendChild(
  createColumn(
    "Mean (l\u2081 + l\u2082)/2 (cm)",
    5,
    "acs-table-l",
    "number",
    0,
    null,
    true
  )
);
acs_sonometerTable.appendChild(
  createColumn(
    "Frequency v = √(T/m)/4l (Hz)",
    5,
    "acs-table-v",
    "number",
    0,
    null,
    true
  )
);

//SCREW GAUGE OBSERVATIONS ---
acs_observationDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Measurement of diameter of wire"
  )
);

let acs_sgLeastCountInput = createInput(
  "acs-sg-lc-input",
  "number",
  0,
  measureEssentials_acs
);
acs_observationDiv.appendChild(
  createInputDiv(
    "Least count of screw gauge (LC) = Pitch/(no. of circular division) = ",
    acs_sgLeastCountInput,
    "mm"
  )
);

acs_observationDiv.appendChild(
  createTextField("practical-section-content", "Zero error (e):")
);

let acs_zeroErrorDiv = createDiv("moved-div");
acs_observationDiv.appendChild(acs_zeroErrorDiv);

let acs_ze1Input = createInput(
  "acs-zero-error-1-input",
  "number",
  0,
  measureEssentials_acs
);
acs_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", acs_ze1Input), true)
);

let acs_ze2Input = createInput(
  "acs-zero-error-2-input",
  "number",
  0,
  measureEssentials_acs
);
acs_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", acs_ze2Input), true)
);

let acs_ze3Input = createInput(
  "acs-zero-error-3-input",
  "number",
  0,
  measureEssentials_acs
);
acs_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", acs_ze3Input), true)
);

let acs_meanZeroErrorInput = createInput(
  "acs-sg-mean-ze-input",
  "number",
  0,
  null,
  true
);
acs_observationDiv.appendChild(
  createInputDiv("Mean zero error = ", acs_meanZeroErrorInput, "")
);

let acs_zeroCorrectionInput = createInput(
  "acs-sg-zc-input",
  "number",
  0,
  null,
  true
);
acs_observationDiv.appendChild(
  createInputDiv("Zero correction = ", acs_zeroCorrectionInput, "")
);

let acs_densityInput = createInput(
  "acs-sg-lc-input",
  "number",
  7850,
  measureEssentials_acs
);
acs_observationDiv.appendChild(
  createInputDiv("Density of the wire:", acs_densityInput, "kg/m³")
);

acs_observationDiv.appendChild(
  createTextField(
    "observation-table-header",
    "Table for the measurement of diameter of wire"
  )
);
let acs_sgTableDiv = createDiv("observation-table-div");
acs_observationDiv.appendChild(acs_sgTableDiv);

let acs_sgTable = createDiv("observation-table");
acs_sgTableDiv.appendChild(acs_sgTable);

acs_sgTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
acs_sgTable.appendChild(
  createColumn(
    "Main scale reading (MSR) (mm)",
    5,
    "acs-table-msr",
    "number",
    0,
    measureDiameter_acs,
    false
  )
);
acs_sgTable.appendChild(
  createColumn(
    "Circular scale reading (CSR)",
    5,
    "acs-table-csr",
    "number",
    0,
    measureDiameter_acs,
    false
  )
);
acs_sgTable.appendChild(
  createColumn(
    "Observed Diameter (mm)",
    5,
    "acs-table-D",
    "number",
    0,
    null,
    true
  )
);

let acs_meanDiameterInput = createInput(
  "acs-sg-mean-d-input",
  "number",
  0,
  null,
  true
);
acs_observationDiv.appendChild(
  createInputDiv("Mean diameter = ", acs_meanDiameterInput, "cm")
);

let acs_correctedDiameterInput = createInput(
  "acs-sg-mean-corr-d-input",
  "number",
  0,
  null,
  true
);
acs_observationDiv.appendChild(
  createInputDiv("Mean corrected diameter = ", acs_correctedDiameterInput, "cm")
);

let acs_masspulInput = createInput(
  "acs-wire-mass-input",
  "number",
  0,
  null,
  true
);
acs_observationDiv.appendChild(
  createInputDiv(
    "Mass per unit length of the wire (m) = ",
    acs_masspulInput,
    "kg/m"
  )
);


let acs_resultDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_resultDiv);

acs_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let acs_meanFrequencyInput = createInput(
  "acs-final-freq-input",
  "number",
  0,
  null,
  true
);

acs_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "The frequency of a.c. mains as determined by sonometer and an electromagnet is found to be: ",
      acs_meanFrequencyInput,
      "Hz"
    ),
    true
  )
);

let acs_precautionsDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_precautionsDiv);

acs_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

acs_precautionsDiv.appendChild(
  createPAS("1", "The sonometer wire should be of magnetic material, free from the kinks and strecthed horizontally.")
);
acs_precautionsDiv.appendChild(
  createPAS("2", "The pole of the electromagnet should be held quite close to the middle of the vibrating segment.")
);
acs_precautionsDiv.appendChild(
  createPAS("3", "The resonant length should be observed at least twice for each load.")
);
acs_precautionsDiv.appendChild(
  createPAS("4", "While finding the resonant length, start with a small distance between the wedges.")
);
acs_precautionsDiv.appendChild(
  createPAS("5", "The weight of the hanger should also be counted while calculating the tension on the string.")
);

let acs_soeDiv = createDiv("practical-file");
acSonometerDiv.appendChild(acs_soeDiv);

acs_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

acs_soeDiv.appendChild(
  createPAS("1", "The wire may not be of uniform area of cross section. Its composition may not be uniform.")
);
acs_soeDiv.appendChild(
  createPAS("2", "Some friction might be present at the pulley and hence the tension is less than that actually applied.")
);

//VARIABLES--------------------------
let acs_sgLeastCount = null;
let acs_zeroError = null;
let acs_density = null;
let acs_masspul = null;

//FUNCTIONS--------------------------
function measureEssentials_acs() {
  acs_sgLeastCount = parseFloat(acs_sgLeastCountInput.value) || 0;

  let acs_ze1 = parseFloat(acs_ze1Input.value) || 0;
  let acs_ze2 = parseFloat(acs_ze2Input.value) || 0;
  let acs_ze3 = parseFloat(acs_ze3Input.value) || 0;

  acs_zeroError = (acs_ze1 + acs_ze2 + acs_ze3) / 3;
  acs_meanZeroErrorInput.value = acs_zeroError.toFixed(4);

  acs_zeroCorrectionInput.value = -acs_zeroError;

  acs_density = parseFloat(acs_densityInput.value) || 0;

  measureDiameter_acs();
}

function measureDiameter_acs() {
  let d_sum = 0;
  let validReadings = 0;

  for (let i = 1; i <= 5; i++) {
    let msr = parseFloat(document.getElementById(`acs-table-msr-${i}`).value) || 0;
    let csr = parseFloat(document.getElementById(`acs-table-csr-${i}`).value) || 0;

    let d = (msr + csr * acs_sgLeastCount) / 10;

    document.getElementById(`acs-table-D-${i}`).value = d.toFixed(3);

    if (d > 0) {
      d_sum += d;
      validReadings += 1;
    }
  }

  let d_mean = d_sum / validReadings;
  acs_meanDiameterInput.value = d_mean.toFixed(3);

  let d_corrected = d_mean - acs_zeroError / 10;
  acs_correctedDiameterInput.value = d_corrected.toFixed(4);

  acs_masspul =
    (3.14 * (d_corrected / 100) * (d_corrected / 100) * acs_density) / 4;

  acs_masspulInput.value = acs_masspul.toFixed(10);
  measureFrequency_acs();
}

function measureFrequency_acs() {
  let v_sum = 0;
  let validReadings = 0;

  for (let i = 1; i <= 5; i++) {
    let V = 0;
    let M = acs_masspul;
    let T = parseFloat(document.getElementById(`acs-table-N-${i}`).value) || 0;
    let l1 = parseFloat(document.getElementById(`acs-table-l1-${i}`).value) || 0;
    let l2 = parseFloat(document.getElementById(`acs-table-l2-${i}`).value) || 0;
    let L = (l1 + l2) / 2;
    document.getElementById(`acs-table-l-${i}`).value = L.toFixed(2);
    if (M > 0 && L > 0) {
      V = (T / M) ** 0.5 / (4 * (L / 100));
    }
    document.getElementById(`acs-table-v-${i}`).value = V.toFixed(3);

    if (V > 0) {
      v_sum += V;
      validReadings++;
    }
  }

  meanV = v_sum / validReadings;
  acs_meanFrequencyInput.value = meanV.toFixed(3);
}