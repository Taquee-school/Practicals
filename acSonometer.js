let bn_acsonometer = createListButton(class12_list, "ac-sonometer-btn", "AC Sonometer");
bn_acsonometer.addEventListener("click", () =>
  openFile(acSonometerDiv, "AC Sonometer")
);

let acSonometerDiv = document.createElement("div");
acSonometerDiv.className = "practical-file";

let acs_objectiveDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_objectiveDiv);
acs_objectiveDiv.className = "practical-section";

acs_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

acs_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the frequency of an alternating current (ac mains) by sonometer and electromagnet."
  )
);

let acs_apparatusDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_apparatusDiv);
acs_apparatusDiv.className = "practical-section";

acs_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

acs_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A sonometer with soft iron, a step-down transformer, slotted half kg weights, a hanger, a screw gauge, etc."
  )
);

let acs_formulaDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_formulaDiv);
acs_formulaDiv.className = "practical-section";

acs_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

acs_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The frequency of the fundamental note of a stretched string of length l and mass per unit length m under tension T is given by:"
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
  createTextField("practical-main-formula", "m = πD²¶/4")
);

acs_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);

let acs_formulaBelonging = document.createElement("div");
acs_formulaDiv.appendChild(acs_formulaBelonging);
acs_formulaBelonging.className = "moved-div";

acs_formulaBelonging.appendChild(
  createTextField("", "D is the diameter of the sonometer wire.")
);
acs_formulaBelonging.appendChild(createTextField("", "¶ is its density."));

let acs_observationDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_observationDiv);
acs_observationDiv.className = "practical-section";

acs_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
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

let acs_zeroErrorDiv = document.createElement("div");
acs_observationDiv.appendChild(acs_zeroErrorDiv);
acs_zeroErrorDiv.className = "moved-div";

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

let acs_sgTableDiv = document.createElement("div");
acs_sgTableDiv.className = "observation-table-div";
acs_observationDiv.appendChild(acs_sgTableDiv);

let acs_sgTable = document.createElement("div");
acs_sgTable.className = "observation-table";
acs_sgTableDiv.appendChild(acs_sgTable);

acs_sgTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
acs_sgTable.appendChild(
  createColumn(
    "Main scale reading (MSR) (mm)",
    5,
    "acs-msr",
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
    "acs-csr",
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
    "acs-d-obs",
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

//SONOMETER OBSERVATIONS------------
let acs_sonometerTableDiv = document.createElement("div");
acs_sonometerTableDiv.className = "observation-table-div";
acs_observationDiv.appendChild(acs_sonometerTableDiv);

let acs_sonometerTable = document.createElement("div");
acs_sonometerTable.className = "observation-table";
acs_sonometerTableDiv.appendChild(acs_sonometerTable);

acs_sonometerTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
acs_sonometerTable.appendChild(
  createColumn(
    "Load (M) (kg)",
    5,
    "acs-load",
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
    "acs-tension",
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
    "acs-l1",
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
    "acs-l2",
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
    "acs-mean-l",
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
    "acs-freq",
    "number",
    0,
    null,
    true
  )
);

let acs_resultDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_resultDiv);
acs_resultDiv.className = "practical-section";

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

let acs_precautionsDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_precautionsDiv);
acs_precautionsDiv.className = "practical-section";

acs_precautionsDiv.appendChild(
  createTextField("practical-section-header", "PRECAUTIONS:")
);

acs_precautionsDiv.appendChild(
  createPAS("1", "All connections should be tight and neat.")
);
acs_precautionsDiv.appendChild(
  createPAS("2", "The frequency of the a.c. supply must be constant.")
);
acs_precautionsDiv.appendChild(
  createPAS("3", "The wire must be stretched horizontally between the bridges.")
);
acs_precautionsDiv.appendChild(
  createPAS("4", "The screw gauge should be checked for zero error before use.")
);
acs_precautionsDiv.appendChild(
  createPAS("5", "The paper rider should be very light.")
);
acs_precautionsDiv.appendChild(
  createPAS("6", "The two bridges should be sharp and exactly parallel.")
);

let acs_soeDiv = document.createElement("div");
acSonometerDiv.appendChild(acs_soeDiv);
acs_soeDiv.className = "practical-section";

acs_soeDiv.appendChild(
  createTextField("practical-section-header", "SOURCES OF ERRORS:")
);

acs_soeDiv.appendChild(
  createPAS("1", "The wire may not have uniform density or diameter.")
);
acs_soeDiv.appendChild(
  createPAS("2", "The bridges may not be exactly at the nodes.")
);
acs_soeDiv.appendChild(
  createPAS("3", "The mass per unit length may not be measured accurately.")
);
acs_soeDiv.appendChild(
  createPAS("4", "Friction in the pulley may affect the tension T.")
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
    let msr = parseFloat(document.getElementById(`acs-msr-${i}`).value) || 0;
    let csr = parseFloat(document.getElementById(`acs-csr-${i}`).value) || 0;

    let d = (msr + csr * acs_sgLeastCount) / 10;

    document.getElementById(`acs-d-obs-${i}`).value = d.toFixed(3);

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
    let T = parseFloat(document.getElementById(`acs-tension-${i}`).value) || 0;
    let l1 = parseFloat(document.getElementById(`acs-l1-${i}`).value) || 0;
    let l2 = parseFloat(document.getElementById(`acs-l2-${i}`).value) || 0;
    let L = (l1 + l2) / 2;
    document.getElementById(`acs-mean-l-${i}`).value = L.toFixed(2);
    if (M > 0 && L > 0) {
      V = (T / M) ** 0.5 / (4 * (L / 100));
    }
    document.getElementById(`acs-freq-${i}`).value = V.toFixed(3);

    if (V > 0) {
      v_sum += V;
      validReadings += 1;
    }
  }

  meanV = v_sum / validReadings;
  acs_meanFrequencyInput.value = meanV.toFixed(3);
}