let bn_screwGauge = createListButton(class11_list, "screw-gauge-btn", "Screw Gauge");
bn_screwGauge.addEventListener("click", () => openFile(screwGaugeDiv, 'Screw Gauge'))


let screwGaugeDiv = document.createElement("div");
screwGaugeDiv.className = "practical-file";



let screwGauge_objectiveDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_objectiveDiv);
screwGauge_objectiveDiv.className = "practical-section";

screwGauge_objectiveDiv.appendChild(
  createTextField(
    "practical-section-header",
    "OBJECTIVE:"
    )
);

screwGauge_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To determine the mass per unit length of a given wire, by measuring its diameter, using a screw gauge."
    )
);



let screwGauge_apparatusDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_apparatusDiv);
screwGauge_apparatusDiv.className = "practical-section";

screwGauge_apparatusDiv.appendChild(
  createTextField(
    "practical-section-header",
    "APPARATUS USED:"
    )
);

screwGauge_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A screw gauge, a thin wire."
    )
);



let screwGauge_formulaDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_formulaDiv);
screwGauge_formulaDiv.className = "practical-section";

screwGauge_formulaDiv.appendChild(
  createTextField(
    "practical-section-header",
    "FORMULA USED:"
    )
);

screwGauge_formulaDiv.appendChild(
  createTextField(
    "practical-main-formula",
    "m = πd²¶/4"
    )
);

screwGauge_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Where,"
    )
);

let scg_formulaBelonging = document.createElement("div");
screwGauge_formulaDiv.appendChild(scg_formulaBelonging);
scg_formulaBelonging.className = "moved-div";

scg_formulaBelonging.appendChild(
  createTextField(
    "",
    "m = mass per unit length of the wire."
    )
);
scg_formulaBelonging.appendChild(
  createTextField(
    "",
    "d = diameter of the wire."
    )
);
scg_formulaBelonging.appendChild(
  createTextField(
    "",
    "¶ = Density of the material of the wire."
    )
);



let screwGauge_observationDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_observationDiv);
screwGauge_observationDiv.className = "practical-section";

screwGauge_observationDiv.appendChild(
  createTextField(
    "practical-section-header",
    "OBSERVATION:"
    )
);

let scg_dByCsrInput = createInput(
  "scg-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv("Distance moved by the circular scale along the main scale(x): ", scg_dByCsrInput),
    true
    )
);

let scg_revByCsrInput = createInput(
  "scg-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv("Number of Total revolutions made by the circular scale along main scale (y): ", scg_revByCsrInput),
    true
    )
);

let scg_pitchInput = createInput(
  "scg-pitch-input",
  "number",
  0,
  null,
  true
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv("Pitch (x/y): ", scg_pitchInput),
    true
    )
);

let scg_divOfCsrInput = createInput(
  "scg-division-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv("Total number of divisions of circular scale (n): ", scg_divOfCsrInput),
    true
    )
);

let scg_leastCountInput = createInput(
  "scg-least-count-input",
  "number",
  0,
  null,
  true
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv("Least Count of the screw Gauge (L.C) = (Pitch/n): ", scg_leastCountInput, "mm"),
    true
    )
);

screwGauge_observationDiv.appendChild(
  createPAS(
    "6",
    "Zero Error"
    )
);

let scg_zeroErrorDiv = document.createElement("div");
screwGauge_observationDiv.appendChild(scg_zeroErrorDiv);
scg_zeroErrorDiv.className = "moved-div";

let scg_ze1Input = createInput(
  "scg-zero-error-1-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS(
    "a",
    createInputDiv("Zero Error: ", scg_ze1Input),
    true
    )
);

let scg_ze2Input = createInput(
  "scg-zero-error-2-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS(
    "b",
    createInputDiv("Zero Error: ", scg_ze2Input),
    true
    )
);

let scg_ze3Input = createInput(
  "scg-zero-error-3-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS(
    "c",
    createInputDiv("Zero Error: ", scg_ze3Input),
    true
    )
);

let scg_meanzeInput = createInput(
  "scg-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", scg_meanzeInput),
    true
    )
);

let scg_zeroCorrectionInput = createInput(
  "scg-zero-correction-input",
  "number",
  0,
  null,
  true
);
screwGauge_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", scg_zeroCorrectionInput),
    true
    )
);

let scg_densityInput = createInput(
  "scg-density-input",
  "number",
  7850,
  measureEssentials_scg
);
scg_densityInput.style.width = "100px";
screwGauge_observationDiv.appendChild(
  createPAS(
    "9",
    createInputDiv("Density of the material: ", scg_densityInput, "kg/m³"),
    true
    )
);



let scg_diameterTableDiv = document.createElement("div");
scg_diameterTableDiv.className = "observation-table-div";
screwGauge_observationDiv.appendChild(scg_diameterTableDiv);

let scg_diameterTable = document.createElement("div");
scg_diameterTable.className = "observation-table";
scg_diameterTableDiv.appendChild(scg_diameterTable);

scg_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
scg_diameterTable.appendChild(
  createColumn(
    "Main scale reading",
    5,
    "scg-msr",
    "number",
    0,
    measureDiameter_scg,
    false
  )
);
scg_diameterTable.appendChild(
  createColumn(
    "Divisions (n)",
    5,
    "scg-div",
    "number",
    0,
    measureDiameter_scg,
    false
  )
);
scg_diameterTable.appendChild(
  createColumn(
    "Value (L.C)",
    5,
    "scg-lc",
    "number",
    0,
    measureDiameter_scg,
    false
  )
);
scg_diameterTable.appendChild(
  createColumn("Observed diameter", 5, "scg-d-obs", "number", 0, null, true)
);




let scg_meanDiameterInput = createInput(
  "scg-mean-observed-diameter-input",
  "number",
  0
);
screwGauge_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", scg_meanDiameterInput, "mm")
);

let scg_correctedDiameterInput = createInput(
  "scg-corrected-diameter-input",
  "number",
  0
);
screwGauge_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", scg_correctedDiameterInput, "mm")
);



let screwGauge_resultDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_resultDiv);
screwGauge_resultDiv.className = "practical-section";

screwGauge_resultDiv.appendChild(
  createTextField(
    "practical-section-header",
    "RESULT:"
    )
);

let scg_masspulInput = createInput("scg-mass-per-unit-length-input", "number", 0);
scg_masspulInput.style.width = "100px";
screwGauge_resultDiv.appendChild(
  createInputDiv("The mass per unit length of the wire is found to be: ", scg_masspulInput, "kg/m")
);



let screwGauge_precautionsDiv = document.createElement("div");
screwGaugeDiv.appendChild(screwGauge_precautionsDiv);
screwGauge_precautionsDiv.className = "practical-section";

screwGauge_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
    )
);

screwGauge_precautionsDiv.appendChild(createPAS("1","We should check the working of the screw gauge to ensure the free movement of the screw"));
screwGauge_precautionsDiv.appendChild(createPAS("2","We should check the functioning of the ratchet."));
screwGauge_precautionsDiv.appendChild(createPAS("3","The screw gauge should always be rotated in the same direction to avoid backlash errors."));
screwGauge_precautionsDiv.appendChild(createPAS("4","We should make the final adjustment by using ratchet."));
screwGauge_precautionsDiv.appendChild(createPAS("5","We should stop turning the ratchet when it starts slipping."));
screwGauge_precautionsDiv.appendChild(createPAS("6","We should take the reading of diameter at various places of the wire."));






let scg_leastCount = null;
let scg_zeroError = null;
let scg_density = null;

function measureEssentials_scg() {
  let scg_dByCsr = parseFloat(scg_dByCsrInput.value) || 0;
  let scg_revByCsr = parseFloat(scg_revByCsrInput.value) || 0;
  let scg_pitch = scg_dByCsr / scg_revByCsr;
  scg_pitchInput.value = scg_pitch.toFixed(4);
  scg_leastCount = scg_pitch / parseFloat(scg_divOfCsrInput.value) || 1;
  scg_leastCountInput.value = scg_leastCount.toFixed(3);

  let scg_ze1 = parseFloat(scg_ze1Input.value) || 0;
  let scg_ze2 = parseFloat(scg_ze2Input.value) || 0;
  let scg_ze3 = parseFloat(scg_ze3Input.value) || 0;

  scg_zeroError = ((scg_ze1 + scg_ze2 + scg_ze3) / 3).toFixed(4);
  scg_meanzeInput.value = scg_zeroError;

  scg_zeroCorrectionInput.value = -scg_zeroError;

  scg_density = parseFloat(scg_densityInput.value) || 0;

  measureDiameter_scg();
}

function measureDiameter_scg() {
  let d_sum = 0;
  let validReadings = 0;
  
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`scg-lc-${i}`).value = scg_leastCount.toFixed(3);
    
    let msr = parseFloat(document.getElementById(`scg-msr-${i}`).value) || 0;
    let csr = parseFloat(document.getElementById(`scg-div-${i}`).value) || 0;
    
    let d = msr + csr * scg_leastCount;
    
    document.getElementById(`scg-d-obs-${i}`).value = d.toFixed(3);
    
    if (d > 0) {
      d_sum += d;
      validReadings += 1;
    }
  }
  let d_mean = d_sum / validReadings;
  scg_meanDiameterInput.value = d_mean.toFixed(3);

  let d_corrected = d_mean + parseFloat(scg_zeroCorrectionInput.value) || 0;
  scg_correctedDiameterInput.value = d_corrected.toFixed(4);

  massPerUnitLength =
    (3.14 * (d_corrected / 1000) * (d_corrected / 1000) * scg_density) / 4;

  scg_masspulInput.value = massPerUnitLength.toFixed(10);
}
