let acSonometerDiv = createDiv("practical-file", "physics-practical");

// #region Functions
let acs_sgLeastCount = null;
let acs_zeroError = null;
let acs_density = null;
let acs_masspul = null;
let acs_tableRowCount = 0;
let acs_sgTableRowCount = 0;

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

  for (let i = 1; i <= acs_sgTableRowCount; i++) {
    let msr = parseFloat(document.getElementById(`acs-table-MSR-${i}`).value) || 0;
    let csr = parseFloat(document.getElementById(`acs-table-CSR-${i}`).value) || 0;

    let d = (msr + csr * acs_sgLeastCount) / 10;

    document.getElementById(`acs-table-D-${i}`).value = d.toFixed(3);

    d_sum += d;
  }

  let d_mean = d_sum / acs_sgTableRowCount;
  acs_meanDiameterInput.value = d_mean.toFixed(3);

  let d_corrected = d_mean - acs_zeroError / 10;
  acs_correctedDiameterInput.value = d_corrected.toFixed(4);

  acs_masspul = (3.14 * (d_corrected / 100) * (d_corrected / 100) * acs_density) / 4;

  acs_masspulInput.value = acs_masspul.toFixed(10);
  measureFrequency_acs();
}

function measureFrequency_acs() {
  let v_sum = 0;
  if (!(acs_masspul > 0)) { return };

  for (let i = 1; i <= acs_tableRowCount; i++) {
    if (document.getElementById(`acs-table-l1-${i}`).classList.contains("invalid")) {
      document.getElementById(`acs-table-l1-${i}`).classList.remove("invalid");
      document.getElementById(`acs-table-l2-${i}`).classList.remove("invalid");
    }

    let V = 0;
    let M = acs_masspul;
    let T = parseFloat(document.getElementById(`acs-table-T-${i}`).value) || 0;
    let l1 = parseFloat(document.getElementById(`acs-table-l1-${i}`).value) || 0;
    let l2 = parseFloat(document.getElementById(`acs-table-l2-${i}`).value) || 0;

    let L = (l1 + l2) / 2;
    document.getElementById(`acs-table-l-${i}`).value = L.toFixed(2);

    if (!(L > 0)) {
      if (!(document.getElementById(`acs-table-l1-${i}`).classList.contains("invalid"))) {
        document.getElementById(`acs-table-l1-${i}`).classList.add("invalid");
        document.getElementById(`acs-table-l2-${i}`).classList.add("invalid");
      }
      continue;
    }
    V = (T / M) ** 0.5 / (4 * (L / 100));

    document.getElementById(`acs-table-V-${i}`).value = V.toFixed(3);
    v_sum += V;
  }

  let meanV = v_sum / acs_tableRowCount;
  acs_meanFrequencyInput.value = meanV.toFixed(3);
}

function acs_addRowSonometer() {
  acs_tableRowCount++;
  setTimeout(()=> {
    let inp = createInput(`acs-table-S-no-${acs_tableRowCount}`, "number", acs_tableRowCount, null, true);
    acs_SnoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(()=> {
    let inp = createInput(`acs-table-M-${acs_tableRowCount}`, "number", 0, measureFrequency_acs);
    acs_loadColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(()=> {
    let inp = createInput(`acs-table-T-${acs_tableRowCount}`, "number", 0, null, true);
    acs_tensionColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(()=> {
    let inp = createInput(`acs-table-l1-${acs_tableRowCount}`, "number", 0, measureFrequency_acs);
    acs_l1Column.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
  setTimeout(()=> {
    let inp = createInput(`acs-table-l2-${acs_tableRowCount}`, "number", 0, measureFrequency_acs);
    acs_l2Column.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 200);
  setTimeout(()=> {
    let inp = createInput(`acs-table-l-${acs_tableRowCount}`, "number", 0, null, true);
    acs_meanLColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 250);
  setTimeout(()=> {
    let inp = createInput(`acs-table-V-${acs_tableRowCount}`, "number", 0, null, true)
    acs_frequencyColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 300);
}

function acs_addRowScrewGauge() {
  acs_sgTableRowCount++;
  setTimeout(()=> {
    let inp = createInput(`acs-table-S-no-${acs_sgTableRowCount}`, "number", acs_sgTableRowCount, null, true);
    acs_sgSnoColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 10);
  setTimeout(()=> {
    let inp = createInput(`acs-table-MSR-${acs_sgTableRowCount}`, "number", 0, measureDiameter_acs);
    acs_sgMSRColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 50);
  setTimeout(()=> {
    let inp = createInput(`acs-table-CSR-${acs_sgTableRowCount}`, "number", 0, measureDiameter_acs);
    acs_sgCSRColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 100);
  setTimeout(()=> {
    let inp = createInput(`acs-table-D-${acs_sgTableRowCount}`, "number", 0, null, true);
    acs_sgDiameterColumn.appendChild(inp);
    inp.style.animation = "appear 0.5s ease";
  }, 150);
}
// #endregion Functions



// #region Diagram
let acs_diagramDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_diagramDiv);

acs_diagramDiv.appendChild(createTextField("practical-section-header", "DIAGRAM:"));

acs_diagramDiv.appendChild(createImg("practical-file-diagram light", "Physics-Practicals/Class 12/Diagrams/Light/ac sonometer.jpg"));
acs_diagramDiv.appendChild(createImg("practical-file-diagram dark", "Physics-Practicals/Class 12/Diagrams/Dark/ac sonometer.jpg"));
// #endregion Diagram

// #region Objective
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
// #endregion Objective

// #region Apparatus
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
// #endregion Apparatus

// #region Formula
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
// #endregion Formula

// #region Observation
let acs_observationDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_observationDiv);

acs_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

// #region Sonometer
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

const acs_SnoColumn = createTableColumn("S.no");
acs_sonometerTable.appendChild(acs_SnoColumn);

const acs_loadColumn = createTableColumn("Load (M) kg");
acs_sonometerTable.appendChild(acs_loadColumn);

const acs_tensionColumn = createTableColumn("Tension (T=Mg) (N)");
acs_sonometerTable.appendChild(acs_tensionColumn);

const acs_l1Column = createTableColumn("First Observation l\u2081 (cm)");
acs_sonometerTable.appendChild(acs_l1Column);

const acs_l2Column = createTableColumn("Second Observation l\u2082 (cm)");
acs_sonometerTable.appendChild(acs_l2Column);

const acs_meanLColumn = createTableColumn("Mean (l\u2081 + l\u2082)/2 (cm)");
acs_sonometerTable.appendChild(acs_meanLColumn);

const acs_frequencyColumn = createTableColumn("Frequency v = \u221a(T/m)/4l (Hz)");
acs_sonometerTable.appendChild(acs_frequencyColumn);

acs_addRowSonometer();
acs_sonometerTableDiv.appendChild(setRippleStyle(createButton("acs-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", acs_addRowSonometer)));

acs_addRowSonometer();
acs_sonometerTableDiv.appendChild(setRippleStyle(createButton("acs-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", acs_addRowSonometer)));
// #endregion Sonometer

// #region Screw Gauge
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

const acs_sgSnoColumn = createTableColumn("S.no");
acs_sgTable.appendChild(acs_sgSnoColumn);

const acs_sgMSRColumn = createTableColumn("Main scale reading (MSR) (mm)");
acs_sgTable.appendChild(acs_sgMSRColumn);

const acs_sgCSRColumn = createTableColumn("Circular scale reading (CSR)");
acs_sgTable.appendChild(acs_sgCSRColumn);

const acs_sgDiameterColumn = createTableColumn("Diameter (mm)");
acs_sgTable.appendChild(acs_sgDiameterColumn);

acs_addRowScrewGauge();
acs_sgTableDiv.appendChild(setRippleStyle(createButton("acs-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", acs_addRowScrewGauge)));

acs_addRowScrewGauge();
acs_sgTableDiv.appendChild(setRippleStyle(createButton("acs-add-row-btn", "add-row-btn ripple", createIcon("bold", "plus"), "Add Row", acs_addRowScrewGauge)));


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

// #endregion Screw Gauge

// #endregion Observation

// #region Result
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
// #endregion Result

// #region Precautions
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
// #endregion Precautions

// #region Sources of Errors
let acs_soeDiv = createDiv("practical-section");
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
// #endregion sources of errors