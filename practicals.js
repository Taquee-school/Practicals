// SCREW GAUGE SECTION ============================================
// #region Screw Gauge
let bn_screwGauge = createListButton(
  class11_list,
  "screw-gauge-btn",
  "Screw Gauge"
);
bn_screwGauge.addEventListener("click", () => {
  openFile(screwGaugeDiv, "Screw Gauge");
  videoFrame.src =
    "https://drive.google.com/file/d/1lBkIvbWmfZWRDs6etad8C4U_xo8DQn25/preview";
});

let screwGaugeDiv = createDiv("practical-file");

let scg_diagramDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_diagramDiv);

scg_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let scg_diagram_light = document.createElement("img");
scg_diagram_light.className = "practical-file-diagram light";
scg_diagram_light.src =
  "https://www.dropbox.com/scl/fi/0t8x3qj3bfeju67oyoqua/Screw-Gauge-Diagram-light.png?rlkey=tz4p4s2g49bpw6jyhka7p9jvi&st=k84i05zg&raw=1";
scg_diagramDiv.appendChild(scg_diagram_light);
let scg_diagram_dark = document.createElement("img");
scg_diagram_dark.className = "practical-file-diagram dark";
scg_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/vfp3hslgkw6p87b3r19rc/Screw-Gauge-Diagram-dark.jpg?rlkey=mqvpq526oynsix4gkbegy3g6b&st=e5filnag&raw=1";
scg_diagramDiv.appendChild(scg_diagram_dark);

let scg_objectiveDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_objectiveDiv);

scg_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECTIVE:")
);

scg_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To determine the mass per unit length of a given wire, by measuring its diameter, using a screw gauge."
  )
);

let scg_apparatusDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_apparatusDiv);

scg_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

scg_apparatusDiv.appendChild(
  createTextField("practical-section-content", "A screw gauge, a thin wire.")
);

let scg_formulaDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_formulaDiv);

scg_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

scg_formulaDiv.appendChild(
  createTextField("practical-main-formula", "m = πd²¶/4")
);

scg_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);

let scg_formulaBelonging = createDiv("moved-div");
scg_formulaDiv.appendChild(scg_formulaBelonging);

scg_formulaBelonging.appendChild(
  createTextField("", "m = mass per unit length of the wire.")
);
scg_formulaBelonging.appendChild(
  createTextField("", "d = diameter of the wire.")
);
scg_formulaBelonging.appendChild(
  createTextField("", "¶ = Density of the material of the wire.")
);

let scg_observationDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_observationDiv);

scg_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let scg_dByCsrInput = createInput(
  "scg-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
scg_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      scg_dByCsrInput
    ),
    true
  )
);

let scg_revByCsrInput = createInput(
  "scg-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
scg_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular scale along main scale (y): ",
      scg_revByCsrInput
    ),
    true
  )
);

let scg_pitchInput = createInput("scg-pitch-input", "number", 0, null, true);
scg_observationDiv.appendChild(
  createPAS("3", createInputDiv("Pitch (x/y): ", scg_pitchInput), true)
);

let scg_divOfCsrInput = createInput(
  "scg-division-of-circular-scale-input",
  "number",
  0,
  measureEssentials_scg
);
scg_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Total number of divisions of circular scale (n): ",
      scg_divOfCsrInput
    ),
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
scg_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      scg_leastCountInput,
      "mm"
    ),
    true
  )
);

scg_observationDiv.appendChild(createPAS("6", "Zero Error"));

let scg_zeroErrorDiv = createDiv("moved-div");
scg_observationDiv.appendChild(scg_zeroErrorDiv);

let scg_ze1Input = createInput(
  "scg-zero-error-1-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", scg_ze1Input), true)
);

let scg_ze2Input = createInput(
  "scg-zero-error-2-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", scg_ze2Input), true)
);

let scg_ze3Input = createInput(
  "scg-zero-error-3-input",
  "number",
  0,
  measureEssentials_scg
);
scg_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", scg_ze3Input), true)
);

let scg_meanzeInput = createInput(
  "scg-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
scg_observationDiv.appendChild(
  createPAS("7", createInputDiv("Mean zero error: ", scg_meanzeInput), true)
);

let scg_zeroCorrectionInput = createInput(
  "scg-zero-correction-input",
  "number",
  0,
  null,
  true
);
scg_observationDiv.appendChild(
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
scg_observationDiv.appendChild(
  createPAS(
    "9",
    createInputDiv("Density of the material: ", scg_densityInput, "kg/m³"),
    true
  )
);

let scg_diameterTableDiv = createDiv("observation-table-div");
scg_observationDiv.appendChild(scg_diameterTableDiv);

let scg_diameterTable = createDiv("observation-table");
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
  createColumn("Value (L.C)", 5, "scg-lc", "number", 0, null, true)
);
scg_diameterTable.appendChild(
  createColumn("Observed diameter", 5, "scg-d-obs", "number", 0, null, true)
);

let scg_meanDiameterInput = createInput(
  "scg-mean-observed-diameter-input",
  "number",
  0,
  null,
  true
);
scg_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", scg_meanDiameterInput, "mm")
);

let scg_correctedDiameterInput = createInput(
  "scg-corrected-diameter-input",
  "number",
  0,
  null,
  true
);
scg_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", scg_correctedDiameterInput, "mm")
);

let scg_resultDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_resultDiv);

scg_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let scg_masspulInput = createInput(
  "scg-mass-per-unit-length-input",
  "number",
  0,
  null,
  true
);
scg_masspulInput.style.width = "100px";
scg_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    scg_masspulInput,
    "kg/m"
  )
);

let scg_precautionsDiv = createDiv("practical-section");
screwGaugeDiv.appendChild(scg_precautionsDiv);

scg_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

scg_precautionsDiv.appendChild(
  createPAS(
    "1",
    "We should check the working of the screw gauge to ensure the free movement of the screw"
  )
);
scg_precautionsDiv.appendChild(
  createPAS("2", "We should check the functioning of the ratchet.")
);
scg_precautionsDiv.appendChild(
  createPAS(
    "3",
    "The screw gauge should always be rotated in the same direction to avoid backlash errors."
  )
);
scg_precautionsDiv.appendChild(
  createPAS("4", "We should make the final adjustment by using ratchet.")
);
scg_precautionsDiv.appendChild(
  createPAS("5", "We should stop turning the ratchet when it starts slipping.")
);
scg_precautionsDiv.appendChild(
  createPAS(
    "6",
    "We should take the reading of diameter at various places of the wire."
  )
);

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
      validReadings++;
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

// #endregion

// VERNIER CALIPERS SECTION========================================
// #region Vernier Calipers
let bn_vernierCalipers = createListButton(
  class11_list,
  "vernier-calipers-btn",
  "Vernier Calipers"
);
bn_vernierCalipers.addEventListener("click", () => {
  openFile(vernierCalipersDiv, "Vernier Calipers");
  videoFrame.src =
    "https://drive.google.com/file/d/1ZMe6Il6GPCpOwDmVozfzEH7xWi6AZvEn/preview";
});

let vernierCalipersDiv = createDiv("practical-file");

let vnc_diagramDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_diagramDiv);

vnc_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let vnc_diagram_light = document.createElement("img");
vnc_diagram_light.className = "practical-file-diagram light";
vnc_diagram_light.src =
  "https://www.dropbox.com/scl/fi/wl3zleglj1aj1a4ijfj7y/Vernier-Calipers-Diagram-light.jpg?rlkey=cd9aqh5ifho9jovb6546smce2&st=ahb8ukt5&raw=1";
vnc_diagramDiv.appendChild(vnc_diagram_light);
let vnc_diagram_dark = document.createElement("img");
vnc_diagram_dark.className = "practical-file-diagram dark";
vnc_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/chnhtt7npo9gwvsi089t7/Vernier-Calipers-Diagram-dark.jpg?rlkey=asp55ewpzdb9mdezxey12ea11&st=nlrajks7&raw=1";
vnc_diagramDiv.appendChild(vnc_diagram_dark);

let vnc_objectiveDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_objectiveDiv);

vnc_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

vnc_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the volume of the material of a hollow cylinder using vernier calipers."
  )
);

let vnc_apparatusDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_apparatusDiv);

vnc_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

vnc_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A hollow cylinder, vernier calipers."
  )
);

let vnc_formulaDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_formulaDiv);

vnc_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

vnc_formulaDiv.appendChild(
  createTextField("practical-main-formula", "V = π(de2he - di2hi)/4")
);

vnc_formulaDiv.appendChild(
  createTextField("practical-section-content", "Where,")
);

let vnc_formulaBelonging = createDiv("moved-div");
vnc_formulaDiv.appendChild(vnc_formulaBelonging);

vnc_formulaBelonging.appendChild(createTextField(null, "V = volume of the material of the hollow cylinder."));
vnc_formulaBelonging.appendChild(createTextField(null, "de = external diameter of the cylinder."));
vnc_formulaBelonging.appendChild(createTextField(null, "he = external height of the cylinder."));
vnc_formulaBelonging.appendChild(createTextField(null, "di = internal diameter of the cylinder."));
vnc_formulaBelonging.appendChild(createTextField(null, "hi = internal height of the cylinder"));

let vnc_observationDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_observationDiv);

vnc_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let vnc_mainScaleDivInput = createInput(
  "vnc-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Value of one smallest division of the main scale (x): ",
      vnc_mainScaleDivInput,
      "cm"
    ),
    true
  )
);

let vnc_vernierScaleDivInput = createInput(
  "vnc-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total division on vernier scale (y): ",
      vnc_vernierScaleDivInput
    ),
    true
  )
);

let vnc_leastCountInput = createInput(
  "vnc-least-count-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv("Least Count: ", vnc_leastCountInput, "mm"),
    true
  )
);

vnc_observationDiv.appendChild(createPAS("4", "Zero Error"));

let vnc_zeroErrorDiv = createDiv("moved-div");
vnc_observationDiv.appendChild(vnc_zeroErrorDiv);

let vnc_ze1Input = createInput(
  "vnc-zero-error-1-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", vnc_ze1Input, "mm"), true)
);

let vnc_ze2Input = createInput(
  "vnc-zero-error-2-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", vnc_ze2Input, "mm"), true)
);

let vnc_ze3Input = createInput(
  "vnc-zero-error-3-input",
  "number",
  0,
  measureEssentials_vnc
);
vnc_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", vnc_ze3Input, "mm"), true)
);

let vnc_meanZeroErrorInput = createInput(
  "vnc-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", vnc_meanZeroErrorInput, "mm"),
    true
  )
);

let vnc_zeroCorrectionInput = createInput(
  "vnc-zero-correction-input",
  "number",
  0,
  null,
  true
);
vnc_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", vnc_zeroCorrectionInput, "mm"),
    true
  )
);

vnc_observationDiv.appendChild(createTextField("observation-table-header", "Table for the measurement of external diameter"));

let vnc_externalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalDiameterTableDiv);

let vnc_externalDiameterTable = createDiv("observation-table");
vnc_externalDiameterTableDiv.appendChild(vnc_externalDiameterTable);

vnc_externalDiameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_externalDiameterTable.appendChild(
  createColumn(
    "Main scale reading",
    5,
    "vnc-ex-d-msr",
    "number",
    0,
    measureExternalDiameter_vnc
  )
);
vnc_externalDiameterTable.appendChild(
  createColumn(
    "Vernier scale divisions",
    5,
    "vnc-ex-d-div",
    "number",
    0,
    measureExternalDiameter_vnc
  )
);
vnc_externalDiameterTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-ex-d-vsr",
    "number",
    0,
    null,
    true
  )
);
vnc_externalDiameterTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-ex-d-obs",
    "number",
    0,
    null,
    true
  )
);

let vnc_meanExternalDiameterInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("Mean observed internal height: ", vnc_meanExternalDiameterInput, "cm")
);

let vnc_correctedExternalDiameterInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("corrected internal height: ", vnc_correctedExternalDiameterInput, "cm")
);


vnc_observationDiv.appendChild(createTextField("observation-table-header", "Table for the measurement of internal diameter"));
let vnc_internalDiameterTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalDiameterTableDiv);

let vnc_internalDiameterTable = createDiv("observation-table");
vnc_internalDiameterTableDiv.appendChild(vnc_internalDiameterTable);

vnc_internalDiameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_internalDiameterTable.appendChild(
  createColumn(
    "Main scale reading",
    5,
    "vnc-in-d-msr",
    "number",
    0,
    measureInternalDiameter_vnc
  )
);
vnc_internalDiameterTable.appendChild(
  createColumn(
    "Vernier scale divisions",
    5,
    "vnc-in-d-div",
    "number",
    0,
    measureInternalDiameter_vnc
  )
);
vnc_internalDiameterTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-in-d-vsr",
    "number",
    0,
    null,
    true
  )
);
vnc_internalDiameterTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-in-d-obs",
    "number",
    0,
    null,
    true
  )
);

let vnc_meanInternalDiameterInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("Mean observed internal height: ", vnc_meanInternalDiameterInput, "cm")
);

let vnc_correctedInternalDiameterInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("corrected internal height: ", vnc_correctedInternalDiameterInput, "cm")
);


vnc_observationDiv.appendChild(createTextField("observation-table-header", "Table for the measurement of external height"));
let vnc_externalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_externalHeightTableDiv);

let vnc_externalHeightTable = createDiv("observation-table");
vnc_externalHeightTableDiv.appendChild(vnc_externalHeightTable);

vnc_externalHeightTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_externalHeightTable.appendChild(
  createColumn(
    "Main scale reading",
    5,
    "vnc-ex-h-msr",
    "number",
    0,
    measureExternalHeight_vnc
  )
);
vnc_externalHeightTable.appendChild(
  createColumn(
    "Vernier scale divisions",
    5,
    "vnc-ex-h-div",
    "number",
    0,
    measureExternalHeight_vnc
  )
);
vnc_externalHeightTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-ex-h-vsr",
    "number",
    0,
    null,
    true
  )
);
vnc_externalHeightTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-ex-h-obs",
    "number",
    0,
    null,
    true
  )
);

let vnc_meanExternalHeightInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("Mean observed external height: ", vnc_meanExternalHeightInput, "cm")
);

let vnc_correctedExternalHeightInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("corrected external height: ", vnc_correctedExternalHeightInput, "cm")
);


vnc_observationDiv.appendChild(createTextField("observation-table-header", "Table for the measurement of internal height"));
let vnc_internalHeightTableDiv = createDiv("observation-table-div");
vnc_observationDiv.appendChild(vnc_internalHeightTableDiv);

let vnc_internalHeightTable = createDiv("observation-table");
vnc_internalHeightTableDiv.appendChild(vnc_internalHeightTable);

vnc_internalHeightTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);
vnc_internalHeightTable.appendChild(
  createColumn(
    "Main scale reading",
    5,
    "vnc-in-h-msr",
    "number",
    0,
    measureInternalHeight_vnc
  )
);
vnc_internalHeightTable.appendChild(
  createColumn(
    "Vernier scale divisions",
    5,
    "vnc-in-h-div",
    "number",
    0,
    measureInternalHeight_vnc
  )
);
vnc_internalHeightTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-in-h-vsr",
    "number",
    0,
    null,
    true
  )
);
vnc_internalHeightTable.appendChild(
  createColumn(
    "Vernier scale reading",
    5,
    "vnc-in-h-obs",
    "number",
    0,
    null,
    true
  )
);

let vnc_meanInternalHeightInput = createInput(
  "vnc-mean-observed-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("Mean observed internal height: ", vnc_meanInternalHeightInput, "cm")
);

let vnc_correctedInternalHeightInput = createInput(
  "vnc-corrected-diameter-input",
  "number",
  0
);
vnc_observationDiv.appendChild(
  createInputDiv("corrected internal height: ", vnc_correctedInternalHeightInput, "cm")
);

let vnc_resultDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_resultDiv);

vnc_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let vnc_masspulInput = createInput(
  "vnc-mass-per-unit-length-input",
  "number",
  0
);
vnc_masspulInput.style.width = "100px";
vnc_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    vnc_masspulInput,
    "kg/m"
  )
);

let vnc_precautionsDiv = createDiv("practical-section");
vernierCalipersDiv.appendChild(vnc_precautionsDiv);

vnc_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

vnc_precautionsDiv.appendChild(createPAS("1", "We should carefully examine the working of the vernier Calipers before starting the experiment. If its motion is not smooth it should be oiled."));
vnc_precautionsDiv.appendChild(createPAS("2", "We should carefully record zero error."));
vnc_precautionsDiv.appendChild(createPAS("3", "The object should be gripped firmly between the jaws without any pressure."));
vnc_precautionsDiv.appendChild(createPAS("4", "The vernier should be first tightly screwed in position only then the observation should be taken. "));
vnc_precautionsDiv.appendChild(createPAS("5", "The jaws may not be exactly at right angle to the main scale."));

function measureEssentials_vnc() {
  measureExternalDiameter_vnc();
  measureInternalDiameter_vnc();
  measureExternalHeight_vnc();
  measureInternalHeight_vnc();
}

function measureExternalDiameter_vnc() {
  measureVolume_vnc();
}

function measureInternalDiameter_vnc() {
  measureVolume_vnc();
}

function measureExternalHeight_vnc() {
  measureVolume_vnc();
}

function measureInternalHeight_vnc() {
  measureVolume_vnc();
}

function measureVolume_vnc() {}

// #endregion

// SONOMETER SECTION===============================================
// #region Sonometer
let bn_sonometer = createListButton(class11_list, "sonometer-btn", "Sonometer");
bn_sonometer.addEventListener("click", () => {
  openFile(sonometerDiv, "Sonometer");
  videoFrame =
    "https://drive.google.com/file/d/140FEbQuZcTjWiXsHGKzhvhvzk7ETLBuC/preview";
});

let sonometerDiv = createDiv("practical-file");

let snm_diagramDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_diagramDiv);

snm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let snm_diagram_light = document.createElement("img");
snm_diagram_light.className = "practical-file-diagram light";
snm_diagram_light.src =
  "https://www.dropbox.com/scl/fi/2vh93jqg3hn7iadfgj1n9/Sonometer-Diagram-light.png?rlkey=kkqhqxid06t8pmq9dyvgk05f9&st=gyr009i7&raw=1";
snm_diagramDiv.appendChild(snm_diagram_light);
let snm_diagram_dark = document.createElement("img");
snm_diagram_dark.className = "practical-file-diagram dark";
snm_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/udgi59ayakrev24hrz4tt/Sonometer-Diagram-dark.jpg?rlkey=nny8ojv7mjxtvk7fz3aa9ijc4&st=lx7qez7s&raw=1";
snm_diagramDiv.appendChild(snm_diagram_dark);

let snm_objectiveDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_objectiveDiv);

snm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

snm_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let snm_apparatusDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_apparatusDiv);

snm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

snm_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let snm_formulaDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_formulaDiv);

snm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

snm_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

snm_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let snm_formulaBelonging = createDiv("moved-div");
snm_formulaDiv.appendChild(snm_formulaBelonging);

snm_formulaBelonging.appendChild(createTextField("", ""));

let snm_observationDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_observationDiv);

snm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let snm_mainScaleDivInput = createInput(
  "snm-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_snm
);
snm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      snm_mainScaleDivInput
    ),
    true
  )
);

let snm_vernierScaleDivInput = createInput(
  "snm-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_snm
);
snm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      snm_vernierScaleDivInput
    ),
    true
  )
);

let snm_leastCountInput = createInput(
  "snm-least-count-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      snm_leastCountInput,
      "mm"
    ),
    true
  )
);

snm_observationDiv.appendChild(createPAS("6", "Zero Error"));

let snm_zeroErrorDiv = createDiv("moved-div");
snm_observationDiv.appendChild(snm_zeroErrorDiv);

let snm_ze1Input = createInput(
  "snm-zero-error-1-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", snm_ze1Input), true)
);

let snm_ze2Input = createInput(
  "snm-zero-error-2-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", snm_ze2Input), true)
);

let snm_ze3Input = createInput(
  "snm-zero-error-3-input",
  "number",
  0,
  measureEssentials_snm
);
snm_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", snm_ze3Input), true)
);

let snm_meanZeroErrorInput = createInput(
  "snm-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", snm_meanZeroErrorInput),
    true
  )
);

let snm_zeroCorrectionInput = createInput(
  "snm-zero-correction-input",
  "number",
  0,
  null,
  true
);
snm_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", snm_zeroCorrectionInput),
    true
  )
);

let snm_diameterTableDiv = createDiv("observation-table-div");
snm_observationDiv.appendChild(snm_diameterTableDiv);

let snm_diameterTable = createDiv("observation-table");
snm_diameterTableDiv.appendChild(snm_diameterTable);

snm_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let snm_meanDiameterInput = createInput(
  "snm-mean-observed-diameter-input",
  "number",
  0
);
snm_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", snm_meanDiameterInput, "mm")
);

let snm_correctedDiameterInput = createInput(
  "snm-corrected-diameter-input",
  "number",
  0
);
snm_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", snm_correctedDiameterInput, "mm")
);

let snm_resultDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_resultDiv);

snm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let snm_masspulInput = createInput(
  "snm-mass-per-unit-length-input",
  "number",
  0
);
snm_masspulInput.style.width = "100px";
snm_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    snm_masspulInput,
    "kg/m"
  )
);

let snm_precautionsDiv = createDiv("practical-section");
sonometerDiv.appendChild(snm_precautionsDiv);

snm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

snm_precautionsDiv.appendChild(createPAS("1", ""));
snm_precautionsDiv.appendChild(createPAS("2", ""));
snm_precautionsDiv.appendChild(createPAS("3", ""));
snm_precautionsDiv.appendChild(createPAS("4", ""));
snm_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_snm() {}

// #endregion

// PARALLELOGRAM SECTION===========================================
// #region Parallelogram
let bn_parallelogram = createListButton(
  class11_list,
  "parallelogram-btn",
  "Parallelogram"
);
bn_parallelogram.addEventListener("click", () => {
  openFile(parallelogramDiv, "Parallelogram");
  videoFrame.src =
    "https://drive.google.com/file/d/1e52vBtlWzb3vhqnFmYRSVS3NfdGcy0eT/preview";
});

let parallelogramDiv = createDiv("practical-file");

let prl_diagramDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_diagramDiv);

prl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let prl_diagram_light = document.createElement("img");
prl_diagram_light.className = "practical-file-diagram light";
prl_diagram_light.src =
  "https://www.dropbox.com/scl/fi/kuano782syg3np3ukg6dw/Parallelogram-Diagram-light.png?rlkey=5zitd9o4g20zkec2truu48umx&st=wb7mbgyx&raw=1";
prl_diagramDiv.appendChild(prl_diagram_light);
let prl_diagram_dark = document.createElement("img");
prl_diagram_dark.className = "practical-file-diagram dark";
prl_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/xdpu878hwajakwylndumd/Parallelogram-Diagram-dark.jpg?rlkey=zt6ndmvwhmv9juc0eu4en4eap&st=7871vubr&raw=1";
prl_diagramDiv.appendChild(prl_diagram_dark);

let prl_objectiveDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_objectiveDiv);

prl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

prl_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let prl_apparatusDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_apparatusDiv);

prl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

prl_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_formulaDiv);

prl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

prl_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

prl_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let prl_formulaBelonging = createDiv("moved-div");
prl_formulaDiv.appendChild(prl_formulaBelonging);

prl_formulaBelonging.appendChild(createTextField("", ""));

let prl_observationDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_observationDiv);

prl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let prl_mainScaleDivInput = createInput(
  "prl-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_prl
);
prl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      prl_mainScaleDivInput
    ),
    true
  )
);

let prl_vernierScaleDivInput = createInput(
  "prl-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_prl
);
prl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      prl_vernierScaleDivInput
    ),
    true
  )
);

let prl_leastCountInput = createInput(
  "prl-least-count-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      prl_leastCountInput,
      "mm"
    ),
    true
  )
);

prl_observationDiv.appendChild(createPAS("6", "Zero Error"));

let prl_zeroErrorDiv = createDiv("moved-div");
prl_observationDiv.appendChild(prl_zeroErrorDiv);

let prl_ze1Input = createInput(
  "prl-zero-error-1-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", prl_ze1Input), true)
);

let prl_ze2Input = createInput(
  "prl-zero-error-2-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", prl_ze2Input), true)
);

let prl_ze3Input = createInput(
  "prl-zero-error-3-input",
  "number",
  0,
  measureEssentials_prl
);
prl_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", prl_ze3Input), true)
);

let prl_meanZeroErrorInput = createInput(
  "prl-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", prl_meanZeroErrorInput),
    true
  )
);

let prl_zeroCorrectionInput = createInput(
  "prl-zero-correction-input",
  "number",
  0,
  null,
  true
);
prl_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", prl_zeroCorrectionInput),
    true
  )
);

let prl_diameterTableDiv = createDiv("observation-table-div");
prl_observationDiv.appendChild(prl_diameterTableDiv);

let prl_diameterTable = createDiv("observation-table");
prl_diameterTableDiv.appendChild(prl_diameterTable);

prl_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let prl_meanDiameterInput = createInput(
  "prl-mean-observed-diameter-input",
  "number",
  0
);
prl_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", prl_meanDiameterInput, "mm")
);

let prl_correctedDiameterInput = createInput(
  "prl-corrected-diameter-input",
  "number",
  0
);
prl_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", prl_correctedDiameterInput, "mm")
);

let prl_resultDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_resultDiv);

prl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let prl_masspulInput = createInput(
  "prl-mass-per-unit-length-input",
  "number",
  0
);
prl_masspulInput.style.width = "100px";
prl_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    prl_masspulInput,
    "kg/m"
  )
);

let prl_precautionsDiv = createDiv("practical-section");
parallelogramDiv.appendChild(prl_precautionsDiv);

prl_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

prl_precautionsDiv.appendChild(createPAS("1", ""));
prl_precautionsDiv.appendChild(createPAS("2", ""));
prl_precautionsDiv.appendChild(createPAS("3", ""));
prl_precautionsDiv.appendChild(createPAS("4", ""));
prl_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_prl() {}

// #endregion

// SIMPLE PENDULUM SECTION=========================================
// #region Simple Pendulum
let bn_simplePendulum = createListButton(
  class11_list,
  "simple-pendulum-btn",
  "Simple Pendulum"
);
bn_simplePendulum.addEventListener("click", () => {
  openFile(simplePendulumDiv, "Simple Pendulum");
  videoFrame.src =
    "https://drive.google.com/file/d/1qhtfKsVuH3hUYDStS2UO8es-zy8yDg8u/preview";
});

let simplePendulumDiv = createDiv("practical-file");

let spl_diagramDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_diagramDiv);

spl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let spl_diagram_light = document.createElement("img");
spl_diagram_light.className = "practical-file-diagram light";
spl_diagram_light.src =
  "https://www.dropbox.com/scl/fi/645s00mlxr51tuddel3g7/Simple-Pendulum-Diagram-light.jpg?rlkey=nd3plj84wn3tg0i4ktp7a3757&st=h1ai22f9&raw=1";
spl_diagramDiv.appendChild(spl_diagram_light);
let spl_diagram_dark = document.createElement("img");
spl_diagram_dark.className = "practical-file-diagram dark";
spl_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/v9h2untytsdsnj537g7it/Simple-Pendulum-Diagram-dark.jpg?rlkey=dia8j5o9ylmeg2t1cbvssnexh&st=8q7d6jc1&raw=1";
spl_diagramDiv.appendChild(spl_diagram_dark);

let spl_objectiveDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_objectiveDiv);

spl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

spl_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let spl_apparatusDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_apparatusDiv);

spl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

spl_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let spl_formulaDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_formulaDiv);

spl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

spl_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

spl_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let spl_formulaBelonging = createDiv("moved-div");
spl_formulaDiv.appendChild(spl_formulaBelonging);

spl_formulaBelonging.appendChild(createTextField("", ""));

let spl_observationDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_observationDiv);

spl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let spl_mainScaleDivInput = createInput(
  "spl-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_spl
);
spl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      spl_mainScaleDivInput
    ),
    true
  )
);

let spl_vernierScaleDivInput = createInput(
  "spl-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_spl
);
spl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      spl_vernierScaleDivInput
    ),
    true
  )
);

let spl_leastCountInput = createInput(
  "spl-least-count-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      spl_leastCountInput,
      "mm"
    ),
    true
  )
);

spl_observationDiv.appendChild(createPAS("6", "Zero Error"));

let spl_zeroErrorDiv = createDiv("moved-div");
spl_observationDiv.appendChild(spl_zeroErrorDiv);

let spl_ze1Input = createInput(
  "spl-zero-error-1-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", spl_ze1Input), true)
);

let spl_ze2Input = createInput(
  "spl-zero-error-2-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", spl_ze2Input), true)
);

let spl_ze3Input = createInput(
  "spl-zero-error-3-input",
  "number",
  0,
  measureEssentials_spl
);
spl_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", spl_ze3Input), true)
);

let spl_meanZeroErrorInput = createInput(
  "spl-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", spl_meanZeroErrorInput),
    true
  )
);

let spl_zeroCorrectionInput = createInput(
  "spl-zero-correction-input",
  "number",
  0,
  null,
  true
);
spl_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", spl_zeroCorrectionInput),
    true
  )
);

let spl_diameterTableDiv = createDiv("observation-table-div");
spl_observationDiv.appendChild(spl_diameterTableDiv);

let spl_diameterTable = createDiv("observation-table");
spl_diameterTableDiv.appendChild(spl_diameterTable);

spl_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let spl_meanDiameterInput = createInput(
  "spl-mean-observed-diameter-input",
  "number",
  0
);
spl_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", spl_meanDiameterInput, "mm")
);

let spl_correctedDiameterInput = createInput(
  "spl-corrected-diameter-input",
  "number",
  0
);
spl_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", spl_correctedDiameterInput, "mm")
);

let spl_resultDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_resultDiv);

spl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let spl_masspulInput = createInput(
  "spl-mass-per-unit-length-input",
  "number",
  0
);
spl_masspulInput.style.width = "100px";
spl_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    spl_masspulInput,
    "kg/m"
  )
);

let spl_precautionsDiv = createDiv("practical-section");
simplePendulumDiv.appendChild(spl_precautionsDiv);

spl_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

spl_precautionsDiv.appendChild(createPAS("1", ""));
spl_precautionsDiv.appendChild(createPAS("2", ""));
spl_precautionsDiv.appendChild(createPAS("3", ""));
spl_precautionsDiv.appendChild(createPAS("4", ""));
spl_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_spl() {}

// #endregion

// SPHEROMETER SECTION ============================================
// #region Spherometer
let bn_spherometer = createListButton(
  class11_list,
  "spherometer-btn",
  "Spherometer"
);
bn_spherometer.addEventListener("click", () => {
  openFile(spherometerDiv, "Spherometer");
  videoFrame.src = "";
});

let spherometerDiv = createDiv("practical-file");

let spm_diagramDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_diagramDiv);

spm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let spm_diagram_light = document.createElement("img");
spm_diagram_light.className = "practical-file-diagram light";
spm_diagram_light.src =
  "https://www.dropbox.com/scl/fi/x343fl0cxnbb9obkzvjpk/Spherometer-Diagram-light.png?rlkey=9t5kts4xru330pfauxmuqtnf3&st=exudfma8&raw=1";
spm_diagramDiv.appendChild(spm_diagram_light);
let spm_diagram_dark = document.createElement("img");
spm_diagram_dark.className = "practical-file-diagram dark";
spm_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/grc0wcc9untoowukergyc/Spherometer-Diagram-dark.jpg?rlkey=caa7jgjxnjyy6c83aeaot9u26&st=becbdlva&raw=1";
spm_diagramDiv.appendChild(spm_diagram_dark);

let spm_objectiveDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_objectiveDiv);

spm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

spm_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let spm_apparatusDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_apparatusDiv);

spm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

spm_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_formulaDiv);

spm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

spm_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

spm_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let spm_formulaBelonging = createDiv("moved-div");
spm_formulaDiv.appendChild(spm_formulaBelonging);

spm_formulaBelonging.appendChild(createTextField("", ""));

let spm_observationDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_observationDiv);

spm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let spm_mainScaleDivInput = createInput(
  "spm-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_spm
);
spm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      spm_mainScaleDivInput
    ),
    true
  )
);

let spm_vernierScaleDivInput = createInput(
  "spm-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_spm
);
spm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      spm_vernierScaleDivInput
    ),
    true
  )
);

let spm_leastCountInput = createInput(
  "spm-least-count-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      spm_leastCountInput,
      "mm"
    ),
    true
  )
);

spm_observationDiv.appendChild(createPAS("6", "Zero Error"));

let spm_zeroErrorDiv = createDiv("moved-div");
spm_observationDiv.appendChild(spm_zeroErrorDiv);

let spm_ze1Input = createInput(
  "spm-zero-error-1-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", spm_ze1Input), true)
);

let spm_ze2Input = createInput(
  "spm-zero-error-2-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", spm_ze2Input), true)
);

let spm_ze3Input = createInput(
  "spm-zero-error-3-input",
  "number",
  0,
  measureEssentials_spm
);
spm_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", spm_ze3Input), true)
);

let spm_meanZeroErrorInput = createInput(
  "spm-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", spm_meanZeroErrorInput),
    true
  )
);

let spm_zeroCorrectionInput = createInput(
  "spm-zero-correction-input",
  "number",
  0,
  null,
  true
);
spm_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", spm_zeroCorrectionInput),
    true
  )
);

let spm_diameterTableDiv = createDiv("observation-table-div");
spm_observationDiv.appendChild(spm_diameterTableDiv);

let spm_diameterTable = createDiv("observation-table");
spm_diameterTableDiv.appendChild(spm_diameterTable);

spm_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let spm_meanDiameterInput = createInput(
  "spm-mean-observed-diameter-input",
  "number",
  0
);
spm_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", spm_meanDiameterInput, "mm")
);

let spm_correctedDiameterInput = createInput(
  "spm-corrected-diameter-input",
  "number",
  0
);
spm_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", spm_correctedDiameterInput, "mm")
);

let spm_resultDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_resultDiv);

spm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let spm_masspulInput = createInput(
  "spm-mass-per-unit-length-input",
  "number",
  0
);
spm_masspulInput.style.width = "100px";
spm_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    spm_masspulInput,
    "kg/m"
  )
);

let spm_precautionsDiv = createDiv("practical-section");
spherometerDiv.appendChild(spm_precautionsDiv);

spm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

spm_precautionsDiv.appendChild(createPAS("1", ""));
spm_precautionsDiv.appendChild(createPAS("2", ""));
spm_precautionsDiv.appendChild(createPAS("3", ""));
spm_precautionsDiv.appendChild(createPAS("4", ""));
spm_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_spm() {}

// #endregion

// HELICAL SPRING SECTION =========================================
// #region Helical Spring
let bn_helicalSpring = createListButton(
  class11_list,
  "helical-spring-btn",
  "Helical Spring"
);
bn_helicalSpring.addEventListener("click", () => {
  openFile(helicalSpringDiv, "Helical Spring");
  videoFrame.src = "";
});

let helicalSpringDiv = createDiv("practical-file");

let hls_diagramDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_diagramDiv);

hls_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let hls_diagram_light = document.createElement("img");
hls_diagram_light.className = "practical-file-diagram light";
hls_diagram_light.src =
  "https://www.dropbox.com/scl/fi/g57cj1s2go0eohrtzai9u/Helical-Spring-Diagram-light.png?rlkey=6hpds11tklxixbw2gmkayf695&st=e6o54ixl&raw=1";
hls_diagramDiv.appendChild(hls_diagram_light);
let hls_diagram_dark = document.createElement("img");
hls_diagram_dark.className = "practical-file-diagram dark";
hls_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/jb4nysu4m4xrxl9lpdmzk/Helical-Spring-Diagram-dark.jpg?rlkey=xrr276k4r2zoqqah4skhhnyje&st=8dcnfodn&raw=1";
hls_diagramDiv.appendChild(hls_diagram_dark);

let hls_objectiveDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_objectiveDiv);

hls_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

hls_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let hls_apparatusDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_apparatusDiv);

hls_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

hls_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let hls_formulaDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_formulaDiv);

hls_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

hls_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

hls_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let hls_formulaBelonging = createDiv("moved-div");
hls_formulaDiv.appendChild(hls_formulaBelonging);

hls_formulaBelonging.appendChild(createTextField("", ""));

let hls_observationDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_observationDiv);

hls_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let hls_mainScaleDivInput = createInput(
  "hls-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_hls
);
hls_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      hls_mainScaleDivInput
    ),
    true
  )
);

let hls_vernierScaleDivInput = createInput(
  "hls-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_hls
);
hls_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      hls_vernierScaleDivInput
    ),
    true
  )
);

let hls_leastCountInput = createInput(
  "hls-least-count-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      hls_leastCountInput,
      "mm"
    ),
    true
  )
);

hls_observationDiv.appendChild(createPAS("6", "Zero Error"));

let hls_zeroErrorDiv = createDiv("moved-div");
hls_observationDiv.appendChild(hls_zeroErrorDiv);

let hls_ze1Input = createInput(
  "hls-zero-error-1-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", hls_ze1Input), true)
);

let hls_ze2Input = createInput(
  "hls-zero-error-2-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", hls_ze2Input), true)
);

let hls_ze3Input = createInput(
  "hls-zero-error-3-input",
  "number",
  0,
  measureEssentials_hls
);
hls_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", hls_ze3Input), true)
);

let hls_meanZeroErrorInput = createInput(
  "hls-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", hls_meanZeroErrorInput),
    true
  )
);

let hls_zeroCorrectionInput = createInput(
  "hls-zero-correction-input",
  "number",
  0,
  null,
  true
);
hls_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", hls_zeroCorrectionInput),
    true
  )
);

let hls_diameterTableDiv = createDiv("observation-table-div");
hls_observationDiv.appendChild(hls_diameterTableDiv);

let hls_diameterTable = createDiv("observation-table");
hls_diameterTableDiv.appendChild(hls_diameterTable);

hls_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let hls_meanDiameterInput = createInput(
  "hls-mean-observed-diameter-input",
  "number",
  0
);
hls_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", hls_meanDiameterInput, "mm")
);

let hls_correctedDiameterInput = createInput(
  "hls-corrected-diameter-input",
  "number",
  0
);
hls_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", hls_correctedDiameterInput, "mm")
);

let hls_resultDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_resultDiv);

hls_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let hls_masspulInput = createInput(
  "hls-mass-per-unit-length-input",
  "number",
  0
);
hls_masspulInput.style.width = "100px";
hls_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    hls_masspulInput,
    "kg/m"
  )
);

let hls_precautionsDiv = createDiv("practical-section");
helicalSpringDiv.appendChild(hls_precautionsDiv);

hls_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

hls_precautionsDiv.appendChild(createPAS("1", ""));
hls_precautionsDiv.appendChild(createPAS("2", ""));
hls_precautionsDiv.appendChild(createPAS("3", ""));
hls_precautionsDiv.appendChild(createPAS("4", ""));
hls_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_hls() {}

// #endregion

// RESONANCE TUBE SECTION =========================================
// #region Resonance Tube
let bn_resonanceTube = createListButton(
  class11_list,
  "resonance-tube-btn",
  "Resonance Tube"
);
bn_resonanceTube.addEventListener("click", () => {
  openFile(resonanceTubeDiv, "Resonance Tube");
  videoFrame.src = "";
});

let resonanceTubeDiv = createDiv("practical-file");

let rst_diagramDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_diagramDiv);

rst_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let rst_diagram_light = document.createElement("img");
rst_diagram_light.className = "practical-file-diagram light";
rst_diagram_light.src =
  "https://www.dropbox.com/scl/fi/17bh2v4to4jzr8ydx6u63/Resonance-Tube-Diagram-light.png?rlkey=qm6bc7c8r1twjjvgiu468shny&st=6s6hpfcx&raw=1";
rst_diagramDiv.appendChild(rst_diagram_light);
let rst_diagram_dark = document.createElement("img");
rst_diagram_dark.className = "practical-file-diagram dark";
rst_diagram_dark.src =
  "https://www.dropbox.com/scl/fi/orrpruzgi6m6rmzs28gmh/Resonance-Tube-Diagram-dark.jpg?rlkey=y3eq5ra3wq84qvo9vnpuqn9pg&st=uavcnvpq&raw=1";
rst_diagramDiv.appendChild(rst_diagram_dark);

let rst_objectiveDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_objectiveDiv);

rst_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

rst_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let rst_apparatusDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_apparatusDiv);

rst_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

rst_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let rst_formulaDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_formulaDiv);

rst_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

rst_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

rst_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let rst_formulaBelonging = createDiv("moved-div");
rst_formulaDiv.appendChild(rst_formulaBelonging);

rst_formulaBelonging.appendChild(createTextField("", ""));

let rst_observationDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_observationDiv);

rst_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let rst_mainScaleDivInput = createInput(
  "rst-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_rst
);
rst_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      rst_mainScaleDivInput
    ),
    true
  )
);

let rst_vernierScaleDivInput = createInput(
  "rst-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_rst
);
rst_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      rst_vernierScaleDivInput
    ),
    true
  )
);

let rst_leastCountInput = createInput(
  "rst-least-count-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      rst_leastCountInput,
      "mm"
    ),
    true
  )
);

rst_observationDiv.appendChild(createPAS("6", "Zero Error"));

let rst_zeroErrorDiv = createDiv("moved-div");
rst_observationDiv.appendChild(rst_zeroErrorDiv);

let rst_ze1Input = createInput(
  "rst-zero-error-1-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", rst_ze1Input), true)
);

let rst_ze2Input = createInput(
  "rst-zero-error-2-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", rst_ze2Input), true)
);

let rst_ze3Input = createInput(
  "rst-zero-error-3-input",
  "number",
  0,
  measureEssentials_rst
);
rst_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", rst_ze3Input), true)
);

let rst_meanZeroErrorInput = createInput(
  "rst-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", rst_meanZeroErrorInput),
    true
  )
);

let rst_zeroCorrectionInput = createInput(
  "rst-zero-correction-input",
  "number",
  0,
  null,
  true
);
rst_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", rst_zeroCorrectionInput),
    true
  )
);

let rst_diameterTableDiv = createDiv("observation-table-div");
rst_observationDiv.appendChild(rst_diameterTableDiv);

let rst_diameterTable = createDiv("observation-table");
rst_diameterTableDiv.appendChild(rst_diameterTable);

rst_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let rst_meanDiameterInput = createInput(
  "rst-mean-observed-diameter-input",
  "number",
  0
);
rst_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", rst_meanDiameterInput, "mm")
);

let rst_correctedDiameterInput = createInput(
  "rst-corrected-diameter-input",
  "number",
  0
);
rst_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", rst_correctedDiameterInput, "mm")
);

let rst_resultDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_resultDiv);

rst_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let rst_masspulInput = createInput(
  "rst-mass-per-unit-length-input",
  "number",
  0
);
rst_masspulInput.style.width = "100px";
rst_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    rst_masspulInput,
    "kg/m"
  )
);

let rst_precautionsDiv = createDiv("practical-section");
resonanceTubeDiv.appendChild(rst_precautionsDiv);

rst_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

rst_precautionsDiv.appendChild(createPAS("1", ""));
rst_precautionsDiv.appendChild(createPAS("2", ""));
rst_precautionsDiv.appendChild(createPAS("3", ""));
rst_precautionsDiv.appendChild(createPAS("4", ""));
rst_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_rst() {}

// #endregion Resonance Tube

// OHMS LAW SECTION ===============================================
// #region Ohms Law
let bn_OhmsLaw = createListButton(class12_list, "ohms-law-btn", "Ohm's Law");
bn_OhmsLaw.addEventListener("click", () => {
  openFile(ohmsLawDiv, "Ohms Law");
  videoFrame.src = "";
});

let ohmsLawDiv = createDiv("practical-file");



let ohl_diagramDiv = createDiv("practical-section");
ohmsLawDiv.appendChild(ohl_diagramDiv);

ohl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let ohl_diagram_light = document.createElement("img");
ohl_diagram_light.className = "practical-file-diagram light";
ohl_diagram_light.src = "https://www.dropbox.com/scl/fi/whmdoej0i7eeips0myoej/Ohms-Law-Diagram-light.png?rlkey=o1qu81cgncd0awiw3fpr2i3ez&st=d1755qgt&raw=1";
ohl_diagramDiv.appendChild(ohl_diagram_light);
let ohl_diagram_dark = document.createElement("img");
ohl_diagram_dark.className = "practical-file-diagram dark";
ohl_diagram_dark.src = "https://www.dropbox.com/scl/fi/i1045hhk50lit3uo4i184/Ohms-Law-Diagram-dark.jpg?rlkey=efee7vrdl0c8bua2ln8rrqo4s&st=3il3wycv&raw=1";
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

let ohl_ammeterRangeInput = createInput(
  "ohl-ammeter-range-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_observationDiv.appendChild(
  createInputDiv("Range of milli-ammeter: ", ohl_ammeterRangeInput, "mA")
);

let ohl_voltmeterRangeInput = createInput(
  "ohl-voltmeter-range-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_observationDiv.appendChild(
  createInputDiv("Range of voltmeter: ", ohl_voltmeterRangeInput, "V")
);

let ohl_ammeterLcInput = createInput(
  "ohl-ammeter-least-count-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_observationDiv.appendChild(
  createInputDiv("Least count of milli-ammeter: ", ohl_ammeterLcInput, "mA")
);

let ohl_voltmeterLcInput = createInput(
  "ohl-voltmeter-least-count-input",
  "number",
  0,
  measureEssentials_ohl
);
ohl_observationDiv.appendChild(
  createInputDiv("Least count of voltmeter: ", ohl_voltmeterLcInput, "V")
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
    "The voltmeter should be connected in parallel and the ammeter in series and these should be so connected that the current enters at the positive terminal and leaves at the negative terminal."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "4",
    "The connecting wires used should be thick copper wires and the insulation of their ends should be removed by rubbing them with sandpaper."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "5",
    "Before plugging in the key, it should be ensured that the circuit and connections are right."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "6",
    "The plug should be inserted only while taking observations, otherwise current would cause unnecessary heating in the circuit."
  )
);
ohl_precautionsDiv.appendChild(
  createPAS(
    "7",
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
      validReadings ++;
    }
  }

  meanR = sum_r / validReadings;

  ohl_resistanceInput.value = meanR.toFixed(2);
}
// #endregion

// PN Junction SECTION ====================================
// #region PN Junction
let bn_pnJunction = createListButton(class12_list, "pn-junction-btn", "PN Junction");
bn_pnJunction.addEventListener("click", () => {
  openFile(pnJunctionDiv, "PN Junction");
  videoFrame.src = "";
});

let pnJunctionDiv = createDiv("practical-file");



let pnj_diagramDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_diagramDiv);

pnj_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let pnj_diagram_light = document.createElement("img");
pnj_diagram_light.className = "practical-file-diagram light";
pnj_diagram_light.src = "https://www.dropbox.com/scl/fi/dtl830l22dosovrvkxzjd/PN-Junction-Diagram-light.png?rlkey=ko5r25q1im4jkp2in9j4vqh6g&st=9acp7ww1&raw=1";
pnj_diagramDiv.appendChild(pnj_diagram_light);
let pnj_diagram_dark = document.createElement("img");
pnj_diagram_dark.className = "practical-file-diagram dark";
pnj_diagram_dark.src = "https://www.dropbox.com/scl/fi/0maucl2ced013svrz0cpw/PN-Junction-Diagram-dark.jpg?rlkey=fhdpvtaxszfsbd52g3xytlm4l&st=h7kr1hcs&raw=1";
pnj_diagramDiv.appendChild(pnj_diagram_dark);



let pnj_objectiveDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_objectiveDiv);

pnj_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECTIVE:")
);

pnj_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To draw the characteristics curve of a forward biased P-N junction diode and hence to determine the static and dynamic resistance of the same."
  )
);

let pnj_apparatusDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_apparatusDiv);

pnj_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

pnj_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "A P-N junction Diode, a battery eliminator (0-2V), rheostat, a milli-ammeter, a voltmeter, connecting wire etc."
  )
);

let pnj_formulaDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_formulaDiv);

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

let pnj_observationDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_observationDiv);

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

let pnj_characteristicsTableDiv = createDiv("observation-table-div");
pnj_observationDiv.appendChild(pnj_characteristicsTableDiv);

let pnj_characteristicsTable = createDiv("observation-table");
pnj_characteristicsTableDiv.appendChild(pnj_characteristicsTable);

pnj_characteristicsTable.appendChild(
  createColumn(
    "S.no",
    25,
    null,
    "number",
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
    null,
    true
  )
);
pnj_characteristicsTable.appendChild(
  createColumn(
    "Divisions on voltmeter",
    25,
    "pnj-v-div",
    "number",
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
    null,
    true
  )
);
pnj_characteristicsTable.appendChild(
  createColumn("Voltage (V)", 25, "pnj-voltage", "number", 0, null, true)
);
pnj_characteristicsTable.appendChild(
  createColumn(
    "Divisions on ammeter",
    25,
    "pnj-a-div",
    "number",
    0,
    measureResistance_pnj,
    false
  )
);
pnj_characteristicsTable.appendChild(
  createColumn("Current (I) (mA)", 25, "pnj-current", "number", 0, null, true)
);

let pnj_resultDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_resultDiv);

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

let pnj_resultPDiv = createDiv("practical-file");
pnj_resultPDiv.className = "practical-section-input-div";

let resultP = document.createElement("p");
pnj_resultPDiv.appendChild(resultP);
resultP.textContent = "The static and dynamic resistances of the p-n junction diode under forward biased condition are found to be";
resultP.appendChild(pnj_staticResistanceInput);
let resultPspan1 = document.createElement("span");
resultPspan1.textContent = "Ω and";
resultP.appendChild(resultPspan1);
resultP.appendChild(pnj_dynamicResistanceInput);
let resultPspan2 = document.createElement("span");
resultPspan2.textContent = "Ω respectively.";
resultP.appendChild(resultPspan2);

pnj_resultDiv.appendChild(
  createPAS(
    "2",
    pnj_resultPDiv,
    true
  )
);

let pnj_precautionsDiv = createDiv("practical-section");
pnJunctionDiv.appendChild(pnj_precautionsDiv);

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

let pnj_soeDiv = createDiv("practical-file");
pnJunctionDiv.appendChild(pnj_soeDiv);

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

//VARIABLES--------------------------
let pnj_ammeterLc = null;
let pnj_voltmeterLc = null;

// FUNCTIONS--------------------------
function measureEssentials_pnj() {
  pnj_ammeterLc = parseFloat(pnj_ammeterLcInput.value) || 0;
  pnj_voltmeterLc = parseFloat(pnj_voltmeterLcInput.value) || 0;
  measureResistance_pnj();
}

function measureResistance_pnj() {
  let sum_sr = 0;
  let validReadings = 0;

  for (let i = 1; i <= 25; i++) {
    let a_div =
      parseFloat(document.getElementById(`pnj-a-div-${i}`).value) || 0;
    let v_div =
      parseFloat(document.getElementById(`pnj-v-div-${i}`).value) || 0;
    let c = a_div * pnj_ammeterLc;
    let v = v_div * pnj_voltmeterLc;
    document.getElementById(`pnj-current-${i}`).value = c.toFixed(1);
    document.getElementById(`pnj-voltage-${i}`).value = v.toFixed(3);

    if (v_div > 0) {
      sum_sr += v / c;
      validReadings ++;
    }
  }
  meanSR = sum_sr / validReadings;
  pnj_staticResistanceInput.value = meanSR.toFixed(2);
}
// #endregion

// METER BRIDGE SECTION ===================================
// #region Meter Bridge
let bn_meterBridge = createListButton(class12_list, "meter-bridge-btn", "Meter Bridge");
bn_meterBridge.addEventListener("click", () => {
  openFile(meterBridgeDiv, "Meter Bridge");
  videoFrame.src = "";
});

let meterBridgeDiv = createDiv("practical-file");



let mbr_diagramDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_diagramDiv);

mbr_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let mbr_diagram_light = document.createElement("img");
mbr_diagram_light.className = "practical-file-diagram light";
mbr_diagram_light.src = "https://www.dropbox.com/scl/fi/d76l9ffrs915x3cgde96h/Meter-Bridge-Diagram-light.jpg?rlkey=j1u7r8jbeu35zlvt8jnzxdthb&st=ln1ubssz&raw=1";
mbr_diagramDiv.appendChild(mbr_diagram_light);
let mbr_diagram_dark = document.createElement("img");
mbr_diagram_dark.className = "practical-file-diagram dark";
mbr_diagram_dark.src = "https://www.dropbox.com/scl/fi/lm49teqr7w9yw5jpedpm6/Meter-Bridge-Diagram-dark.png?rlkey=8j9s6ofhfd4ny6wrhkss4hk8e&st=jk5oru9d&raw=1";
mbr_diagramDiv.appendChild(mbr_diagram_dark);



let mbr_objectiveDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_objectiveDiv);

mbr_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

mbr_objectiveDiv.appendChild(createTextField("practical-section-content", "To find the resistance of a given wire using a meter Bridge and hence determine the specific resistance of its material."));

let mbr_apparatusDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_apparatusDiv);

mbr_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

mbr_apparatusDiv.appendChild(createTextField("practical-section-content", "A meter Bridge,an unknown resistance in the form of wire, a resistance box, a jockey, a key, a galvanometer, a Lechlanche cell, thick connecting wires, sand paper,screw gauge,etc."));

let mbr_formulaDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_formulaDiv);

mbr_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

mbr_formulaDiv.appendChild(createTextField("practical-section-content", "Since meter Bridge works on the principle of wheatstone bridge,etc."));

mbr_formulaDiv.appendChild(createPAS("1", "Under the balance condition, we have the following working formula:"));

mbr_formulaDiv.appendChild(createTextField("practical-main-formula", "P/Q = R/X"));

mbr_formulaDiv.appendChild(createPAS("2", "For a meter Bridge, the unknown resistance is given by:"));

mbr_formulaDiv.appendChild(createTextField("practical-main-formula", "X = lQ/(100-l)"));

mbr_formulaDiv.appendChild(createTextField("practical-section-content", "Where,"));
let mbr_formulaBelonging = createDiv("moved-div");
mbr_formulaDiv.appendChild(mbr_formulaBelonging);

mbr_formulaBelonging.appendChild(createTextField(null, "X = is the resistor of unknown value,"));
mbr_formulaBelonging.appendChild(createTextField(null, "l = is the balancing length and"));
mbr_formulaBelonging.appendChild(createTextField(null, "Q = is the resistance from the resistance box."));

mbr_formulaDiv.appendChild(createPAS("3", "Specific resistance() of the of the material is given by:"));

mbr_formulaDiv.appendChild(createTextField("practical-main-formula", "¶ = RA/l = XπD2/4l"));

mbr_formulaDiv.appendChild(createTextField("practical-section-content", "Where,"));
let mbr_formulaBelonging2 = createDiv("moved-div");
mbr_formulaDiv.appendChild(mbr_formulaBelonging2);

mbr_formulaBelonging2.appendChild(createTextField(null, "X = is the resistor of unknown value,"));
mbr_formulaBelonging2.appendChild(createTextField(null, "l = is the balancing length and"));
mbr_formulaBelonging2.appendChild(createTextField(null, "D = is the diameter of the wire."));



let mbr_observationDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_observationDiv);

mbr_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);


let mbr_leastCountInput = createInput(
  "mbr-least-count-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/no of circular divisions): ",
      mbr_leastCountInput,
      "mm"
    ),
    true
  )
);

mbr_observationDiv.appendChild(createPAS("6", "Zero Error"));

let mbr_zeroErrorDiv = createDiv("moved-div");
mbr_observationDiv.appendChild(mbr_zeroErrorDiv);

let mbr_ze1Input = createInput(
  "mbr-zero-error-1-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", mbr_ze1Input, "mm"), true)
);

let mbr_ze2Input = createInput(
  "mbr-zero-error-2-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", mbr_ze2Input, "mm"), true)
);

let mbr_ze3Input = createInput(
  "mbr-zero-error-3-input",
  "number",
  0,
  measureEssentials_mbr
);
mbr_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", mbr_ze3Input, "mm"), true)
);

let mbr_meanZeroErrorInput = createInput(
  "mbr-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", mbr_meanZeroErrorInput, "mm"),
    true
  )
);

let mbr_zeroCorrectionInput = createInput(
  "mbr-zero-correction-input",
  "number",
  0,
  null,
  true
);
mbr_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", mbr_zeroCorrectionInput, "mm"),
    true
  )
);

let mbr_diameterTableDiv = createDiv("observation-table-div");
mbr_observationDiv.appendChild(mbr_diameterTableDiv);

let mbr_diameterTable = createDiv("observation-table");
mbr_diameterTableDiv.appendChild(mbr_diameterTable);

mbr_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let mbr_meanDiameterInput = createInput(
  "mbr-mean-observed-diameter-input",
  "number",
  0
);
mbr_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", mbr_meanDiameterInput, "mm")
);

let mbr_correctedDiameterInput = createInput(
  "mbr-corrected-diameter-input",
  "number",
  0
);
mbr_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", mbr_correctedDiameterInput, "mm")
);

let mbr_resultDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_resultDiv);

mbr_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let mbr_resistanceInput = createInput(
  "mbr-mass-per-unit-length-input",
  "number",
  0
);
mbr_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "The value of resistance of the given wire is found to be: ",
      mbr_resistanceInput,
      "."
    )
  )
);

let mbr_specificResistanceInput = createInput(
  "mbr-mass-per-unit-length-input",
  "number",
  0
);
mbr_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "The value of specific resistance of the material of the wire is found to be: ",
      mbr_specificResistanceInput,
      "m."
    )
  )
);

let mbr_precautionsDiv = createDiv("practical-section");
meterBridgeDiv.appendChild(mbr_precautionsDiv);

mbr_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

mbr_precautionsDiv.appendChild(createPAS("1", ""));
mbr_precautionsDiv.appendChild(createPAS("2", ""));
mbr_precautionsDiv.appendChild(createPAS("3", ""));
mbr_precautionsDiv.appendChild(createPAS("4", ""));
mbr_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_mbr() {}

// #endregion

// HALF DEFLECTION SECTION =================================
// #region Half Deflection
let bn_halfDeflection = createListButton(class12_list, "half-deflection-btn", "Half Deflection");
bn_halfDeflection.addEventListener("click", () => {
  openFile(halfDeflectionDiv, "Half Deflection");
  videoFrame.src = "";
});

let halfDeflectionDiv = createDiv("practical-file");



let hdf_diagramDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_diagramDiv);

hdf_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let hdf_diagram_light = document.createElement("img");
hdf_diagram_light.className = "practical-file-diagram light";
hdf_diagram_light.src = "https://www.dropbox.com/scl/fi/5evszrk8ta01xvmqyyisf/Half-Deflection-Diagram-light.png?rlkey=tvrt0n2sgzmpxmheyfqvmfcr4&st=vtzcnafu&raw=1";
hdf_diagramDiv.appendChild(hdf_diagram_light);
let hdf_diagram_dark = document.createElement("img");
hdf_diagram_dark.className = "practical-file-diagram dark";
hdf_diagram_dark.src = "https://www.dropbox.com/scl/fi/zroghzg59g6fj8663pq80/Half-Deflection-Diagram-dark.jpg?rlkey=1ha3fnvbevtkgvtghpdynsjhj&st=vjcju4rh&raw=1";
hdf_diagramDiv.appendChild(hdf_diagram_dark);



let hdf_objectiveDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_objectiveDiv);

hdf_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

hdf_objectiveDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_apparatusDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_apparatusDiv);

hdf_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

hdf_apparatusDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_formulaDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_formulaDiv);

hdf_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

hdf_formulaDiv.appendChild(createTextField("practical-main-formula", ""));

hdf_formulaDiv.appendChild(createTextField("practical-section-content", ""));

let hdf_formulaBelonging = createDiv("moved-div");
hdf_formulaDiv.appendChild(hdf_formulaBelonging);

hdf_formulaBelonging.appendChild(createTextField("", ""));

let hdf_observationDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_observationDiv);

hdf_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let hdf_mainScaleDivInput = createInput(
  "hdf-distance-moved-by-circular-scale-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Distance moved by the circular scale along the main scale(x): ",
      hdf_mainScaleDivInput
    ),
    true
  )
);

let hdf_vernierScaleDivInput = createInput(
  "hdf-revolution-of-circular-scale-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Number of Total revolutions made by the circular is scared along many scale (y): ",
      hdf_vernierScaleDivInput
    ),
    true
  )
);

let hdf_leastCountInput = createInput(
  "hdf-least-count-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Least Count of the screw Gauge (L.C) = (Pitch/n): ",
      hdf_leastCountInput,
      "mm"
    ),
    true
  )
);

hdf_observationDiv.appendChild(createPAS("6", "Zero Error"));

let hdf_zeroErrorDiv = createDiv("moved-div");
hdf_observationDiv.appendChild(hdf_zeroErrorDiv);

let hdf_ze1Input = createInput(
  "hdf-zero-error-1-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("a", createInputDiv("Zero Error: ", hdf_ze1Input), true)
);

let hdf_ze2Input = createInput(
  "hdf-zero-error-2-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("b", createInputDiv("Zero Error: ", hdf_ze2Input), true)
);

let hdf_ze3Input = createInput(
  "hdf-zero-error-3-input",
  "number",
  0,
  measureEssentials_hdf
);
hdf_zeroErrorDiv.appendChild(
  createPAS("c", createInputDiv("Zero Error: ", hdf_ze3Input), true)
);

let hdf_meanZeroErrorInput = createInput(
  "hdf-mean-zero-error-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv("Mean zero error: ", hdf_meanZeroErrorInput),
    true
  )
);

let hdf_zeroCorrectionInput = createInput(
  "hdf-zero-correction-input",
  "number",
  0,
  null,
  true
);
hdf_observationDiv.appendChild(
  createPAS(
    "8",
    createInputDiv("Zero correction: ", hdf_zeroCorrectionInput),
    true
  )
);

let hdf_diameterTableDiv = createDiv("observation-table-div");
hdf_observationDiv.appendChild(hdf_diameterTableDiv);

let hdf_diameterTable = createDiv("observation-table");
hdf_diameterTableDiv.appendChild(hdf_diameterTable);

hdf_diameterTable.appendChild(
  createColumn("S.no", 5, null, "number", [1, 2, 3, 4, 5], null, true)
);

let hdf_meanDiameterInput = createInput(
  "hdf-mean-observed-diameter-input",
  "number",
  0
);
hdf_observationDiv.appendChild(
  createInputDiv("Mean observed diameter: ", hdf_meanDiameterInput, "mm")
);

let hdf_correctedDiameterInput = createInput(
  "hdf-corrected-diameter-input",
  "number",
  0
);
hdf_observationDiv.appendChild(
  createInputDiv("corrected diameter: ", hdf_correctedDiameterInput, "mm")
);

let hdf_resultDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_resultDiv);

hdf_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let hdf_masspulInput = createInput(
  "hdf-mass-per-unit-length-input",
  "number",
  0
);
hdf_masspulInput.style.width = "100px";
hdf_resultDiv.appendChild(
  createInputDiv(
    "The mass per unit length of the wire is found to be: ",
    hdf_masspulInput,
    "kg/m"
  )
);

let hdf_precautionsDiv = createDiv("practical-section");
halfDeflectionDiv.appendChild(hdf_precautionsDiv);

hdf_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS AND SOURCES OF ERRORS:"
  )
);

hdf_precautionsDiv.appendChild(createPAS("1", ""));
hdf_precautionsDiv.appendChild(createPAS("2", ""));
hdf_precautionsDiv.appendChild(createPAS("3", ""));
hdf_precautionsDiv.appendChild(createPAS("4", ""));
hdf_precautionsDiv.appendChild(createPAS("5", ""));

function measureEssentials_hdf() {}

// #endregion

// AC SONOMETER SECTION ====================================
// #region AC Sonometer
let bn_acsonometer = createListButton(class12_list, "ac-sonometer-btn", "AC Sonometer");
bn_acsonometer.addEventListener("click", () => {
  openFile(acSonometerDiv, "AC Sonometer");
  videoFrame.src = "";
});

let acSonometerDiv = createDiv("practical-file");



let acs_diagramDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_diagramDiv);

acs_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let acs_diagram_light = document.createElement("img");
acs_diagram_light.className = "practical-file-diagram light";
acs_diagram_light.src = "https://www.dropbox.com/scl/fi/xaw4w9h4enspf22tnsx7r/AC-Sonometer-Diagram-light.png?rlkey=n4n2b2baxhiimyxpe96wn6tsz&st=06oenawp&raw=1";
acs_diagramDiv.appendChild(acs_diagram_light);
let acs_diagram_dark = document.createElement("img");
acs_diagram_dark.className = "practical-file-diagram dark";
acs_diagram_dark.src = "https://www.dropbox.com/scl/fi/5upv53sqleb7vsqirlf1e/AC-Sonometer-Diagram-dark.jpg?rlkey=jaj5vt4883utifrjb86zk2d8n&st=fio4t3ko&raw=1";
acs_diagramDiv.appendChild(acs_diagram_dark);



let acs_objectiveDiv = createDiv("practical-section");
acSonometerDiv.appendChild(acs_objectiveDiv);

acs_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

acs_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the frequency of an alternating current (ac mains) by sonometer and electromagnet."
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
    "A sonometer with soft iron, a step-down transformer, slotted half kg weights, a hanger, a screw gauge, etc."
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

let acs_soeDiv = createDiv("practical-file");
acSonometerDiv.appendChild(acs_soeDiv);

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
      validReadings ++;
    }
  }

  meanV = v_sum / validReadings;
  acs_meanFrequencyInput.value = meanV.toFixed(3);
}
// #endregion

// CONVEX LENS SECTION =====================================
// #region Convex Lens
let bn_convexLens = createListButton(
  class12_list,
  "convex-lens-btn",
  "Convex Lens"
);
bn_convexLens.addEventListener("click", () => {
  openFile(convexLensDiv, "Convex Lens");
  videoFrame.src = "";
});

let convexLensDiv = createDiv("practical-file");



let cvl_diagramDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_diagramDiv);

cvl_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let cvl_diagram_light = document.createElement("img");
cvl_diagram_light.className = "practical-file-diagram light";
cvl_diagram_light.src = "";
cvl_diagramDiv.appendChild(cvl_diagram_light);
let cvl_diagram_dark = document.createElement("img");
cvl_diagram_dark.className = "practical-file-diagram dark";
cvl_diagram_dark.src = "";
cvl_diagramDiv.appendChild(cvl_diagram_dark);



let cvl_objectiveDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_objectiveDiv);

cvl_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

cvl_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the value of 'v' for different values of 'u' in case of a convex lens and hence, to find the focal length 'f' of the lens by plotting a graph between 'u'& 'v'."
  )
);

let cvl_apparatusDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_apparatusDiv);

cvl_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

cvl_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with three uprights, one lens holder, two needles, convex lens, a knitting needle and a meter scale."
  )
);

let cvl_formulaDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_formulaDiv);

cvl_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

cvl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The relation between the object distance u, the image distance v and the focal length f of a lens (here for convex lens) is given by,"
  )
);

cvl_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v - 1/u")
);

cvl_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "Where,"
  )
);

let cvl_observationDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_observationDiv);

cvl_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let cvl_lengthOfNeedleInput = createInput(
  "cvl-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (x): ",
      cvl_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

let cvl_distanceLensObjectInput = createInput(
  "cvl-distance-between-Lens-and-object-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance between the Lens and the object needle 'O' when the Knitting needle is introduced between them (y): ",
      cvl_distanceLensObjectInput,
      "cm."
    ),
    true
  )
);

let cvl_distanceLensImageInput = createInput(
  "cvl-distance-between-Lens-and-image-input",
  "number",
  0,
  measureEssentials_cvl
);
cvl_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Observed distance between the Lens and the iamge needle 'I' when the Knitting needle is introduced between them (z): ",
      cvl_distanceLensImageInput,
      "cm."
    ),
    true
  )
);

let cvl_indexErrorUInput = createInput(
  "cvl-index-error-u-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index error for 'u' = e1 = (y-x) :",
      cvl_indexErrorUInput,
      "cm."
    ),
    true
  )
);

let cvl_indexCorrectionUInput = createInput(
  "cvl-index-correction-u-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Index correction for 'u' = (-e1) :",
      cvl_indexCorrectionUInput,
      "cm."
    ),
    true
  )
);

let cvl_indexErrorVInput = createInput(
  "cvl-index-error-v-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x) :",
      cvl_indexErrorVInput,
      "cm."
    ),
    true
  )
);

let cvl_indexCorrectionVInput = createInput(
  "cvl-index-correction-v-input",
  "number",
  0,
  null,
  true
);
cvl_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2) :",
      cvl_indexCorrectionVInput,
      "cm."
    ),
    true
  )
);

let cvl_distanceTableDiv = createDiv("observation-table-div");
cvl_observationDiv.appendChild(cvl_distanceTableDiv);

let cvl_distanceTable = createDiv("observation-table");
cvl_distanceTableDiv.appendChild(cvl_distanceTable);

cvl_distanceTable.appendChild(
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

cvl_distanceTable.appendChild(
  createColumn(
    "The Lens (P) cm",
    10,
    "cvl-table-P",
    "number",
    75,
    measureFocalLength_cvl,
    false
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Object Needle (O) cm",
    10,
    "cvl-table-O",
    "number",
    0,
    measureFocalLength_cvl,
    false
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Image Needle (I) cm",
    10,
    "cvl-table-I",
    "number",
    0,
    measureFocalLength_cvl,
    false
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Object Distance Observed (cm)",
    10,
    "cvl-table-obj-obs",
    "number",
    0,
    null,
    true
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Object Distance Corrected (cm)",
    10,
    "cvl-table-obj-cor",
    "number",
    0,
    null,
    true
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Image Distance Observed (cm)",
    10,
    "cvl-table-img-obs",
    "number",
    0,
    null,
    true
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "Image Distance Corrected (cm)",
    10,
    "cvl-table-img-cor",
    "number",
    0,
    null,
    true
  )
);

cvl_distanceTable.appendChild(
  createColumn(
    "f = uv/(u-v) (cm)",
    10,
    "cvl-table-focal-length",
    "number",
    0,
    null,
    true
  )
);

let cvl_resultDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_resultDiv);

cvl_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let cvl_focalLengthCalculatedInput = createInput(
  "cvl-mean-focal-length-calculated-input",
  "number",
  0
);
cvl_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      cvl_focalLengthCalculatedInput,
      "cm."
    ),
    true
  )
);

let cvl_focalLengthGraphInput = createInput(
  "cvl-mean-focal-length-by-graph-input",
  "number",
  0
);
cvl_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given convex Lens as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      cvl_focalLengthGraphInput,
      "cm."
    ),
    true
  )
);

let cvl_precautionsDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_precautionsDiv);

cvl_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS:"
  )
);

cvl_precautionsDiv.appendChild(createPAS("1", "The tips of the needles should be as high as the optical centre of the lens."));
cvl_precautionsDiv.appendChild(createPAS("2", "The uprights supporting the needles and the mirror should be rigid."));
cvl_precautionsDiv.appendChild(createPAS("3", "Parallax of the image and object needle should be removed tip to tip."));
cvl_precautionsDiv.appendChild(createPAS("4", "The object and the image needles should be clearly distinguished from each other and they should not be interchanged for different sets of observations."));
cvl_precautionsDiv.appendChild(createPAS("5", "Index correction for both u and v should be properly determined and must be applied."));



let cvl_SOEDiv = createDiv("practical-section");
convexLensDiv.appendChild(cvl_SOEDiv);

cvl_SOEDiv.appendChild(
  createTextField(
    "practical-section-header",
    "SOURCES OF ERRORS:"
  )
);

cvl_SOEDiv.appendChild(createPAS("1", "The uprights may not be vertical."));
cvl_SOEDiv.appendChild(createPAS("2", "Parallax removal may not be perfect."));
cvl_SOEDiv.appendChild(createPAS("3", "The convex lens is very thick."));
cvl_SOEDiv.appendChild(createPAS("4", "The principal axis of the lens may not be parallel to the optical bench."));

// VARIABLES =============================
let cvl_lengthOfNeedle = null;
let cvl_distanceLensObject = null;
let cvl_distanceLensImage = null;

let cvl_indexCorrectionU = 0;
let cvl_indexCorrectionV = 0;

// FUNCTIONS =============================
function measureEssentials_cvl() {
  let X = parseFloat(cvl_lengthOfNeedleInput.value) || 0;
  let Y = parseFloat(cvl_distanceLensObjectInput.value) || 0;
  let Z = parseFloat(cvl_distanceLensImageInput.value) || 0;

  let cvl_indexErrorU = Y - X;
  cvl_indexCorrectionU = -cvl_indexErrorU;
  cvl_indexErrorUInput.value = cvl_indexErrorU.toFixed(2);
  cvl_indexCorrectionUInput.value = cvl_indexCorrectionU.toFixed(2);

  let cvl_indexErrorV = Z - X;
  cvl_indexCorrectionV = -cvl_indexErrorV;
  cvl_indexErrorVInput.value = cvl_indexErrorV.toFixed(2);
  cvl_indexCorrectionVInput.value = cvl_indexCorrectionV.toFixed(2);

  measureFocalLength_cvl();
}

function measureFocalLength_cvl() {
  let sumF = 0;
  let validReadings = 0;

  for (let i = 1; i <= 10; i++) {
    let P = parseFloat(document.getElementById(`cvl-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`cvl-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`cvl-table-I-${i}`).value) || 0;

    let u_obs = abs(P - O);
    let u_cor = u_obs + cvl_indexCorrectionU;
    document.getElementById(`cvl-table-obj-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`cvl-table-obj-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = abs(P - I);
    let v_cor = v_obs + cvl_indexCorrectionV;
    document.getElementById(`cvl-table-img-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`cvl-table-img-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`cvl-table-focal-length-${i}`).value = f.toFixed(3);

    if (I != 0) {
      sumF += f;
      validReadings++;
    }
  }

  focalLength = sumF / validReadings;
  cvl_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}
// #endregion

// CONCAVE MIRROR SECTION ==================================
// #region Concave Mirror
let bn_concaveMirror = createListButton(
  class12_list,
  "conave-mirror-btn",
  "Concave Mirror"
);
bn_concaveMirror.addEventListener("click", () => {
  openFile(concaveMirrorDiv, "Concave Mirror");
  videoFrame.src = "";
});

let concaveMirrorDiv = createDiv("practical-file");



let ccm_diagramDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_diagramDiv);

ccm_diagramDiv.appendChild(
  createTextField("practical-section-header", "DIAGRAM:")
);

let ccm_diagram_light = document.createElement("img");
ccm_diagram_light.className = "practical-file-diagram light";
ccm_diagram_light.src = "https://www.dropbox.com/scl/fi/a6xgzzzzonu7s2ov7kjwu/Concave-Mirror-Diagram-light.jpg?rlkey=hp30jp9xxgj4tngc55l5mz81h&st=l997u7qs&raw=1";
ccm_diagramDiv.appendChild(ccm_diagram_light);
let ccm_diagram_dark = document.createElement("img");
ccm_diagram_dark.className = "practical-file-diagram dark";
ccm_diagram_dark.src = "https://www.dropbox.com/scl/fi/723aztc9lp7x2uqiaiush/Concave-Mirror-Diagram-dark.jpg?rlkey=sr2clqviq6z8l6vlzwphqdb0s&st=tx5edilk&raw=1";
ccm_diagramDiv.appendChild(ccm_diagram_dark);



let ccm_objectiveDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_objectiveDiv);

ccm_objectiveDiv.appendChild(
  createTextField("practical-section-header", "OBJECT:")
);

ccm_objectiveDiv.appendChild(
  createTextField(
    "practical-section-content",
    "To find the value of 'v' for different values of 'u' in case of a concave mirror and hence, to find the focal length 'f' of the mirrors by plotting graph between 'u' & 'v'."
  )
);

let ccm_apparatusDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_apparatusDiv);

ccm_apparatusDiv.appendChild(
  createTextField("practical-section-header", "APPARATUS USED:")
);

ccm_apparatusDiv.appendChild(
  createTextField(
    "practical-section-content",
    "An optical bench along with three uprights, one mirror holder, two needles, concave mirror, a knitting needle and a meter scale."
  )
);

let ccm_formulaDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_formulaDiv);

ccm_formulaDiv.appendChild(
  createTextField("practical-section-header", "FORMULA USED:")
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "The relation between the object distance 'u' and the image distance 'v' and the focal length of a concave mirror is given by"
  )
);

ccm_formulaDiv.appendChild(
  createTextField("practical-main-formula", "1/f = 1/v + 1/u  OR  f = uv/(u+v)")
);

ccm_formulaDiv.appendChild(
  createTextField(
    "practical-section-content",
    "In the case of concave mirrors, for real images both 'u' & 'v' are negative as per noro Cartesian sign convention. The focal length 'f' is also negative."
  )
);

let ccm_observationDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_observationDiv);

ccm_observationDiv.appendChild(
  createTextField("practical-section-header", "OBSERVATION:")
);

let ccm_lengthOfNeedleInput = createInput(
  "ccm-length-of-knitting-needle-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Length of knitting needle (x): ",
      ccm_lengthOfNeedleInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceMirrorObjectInput = createInput(
  "ccm-distance-between-mirror-and-object-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "Observed distance between the mirror and the object needle 'O' when the Knitting needle is introduced between them (y): ",
      ccm_distanceMirrorObjectInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceMirrorImageInput = createInput(
  "ccm-distance-between-mirror-and-image-input",
  "number",
  0,
  measureEssentials_ccm
);
ccm_observationDiv.appendChild(
  createPAS(
    "3",
    createInputDiv(
      "Observed distance between the mirror and the iamge needle 'I' when the Knitting needle is introduced between them (z): ",
      ccm_distanceMirrorImageInput,
      "cm."
    ),
    true
  )
);

let ccm_indexErrorUInput = createInput(
  "ccm-index-error-u-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "4",
    createInputDiv(
      "Index error for 'u' = e1 = (y-x) :",
      ccm_indexErrorUInput,
      "cm."
    ),
    true
  )
);

let ccm_indexCorrectionUInput = createInput(
  "ccm-index-correction-u-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "5",
    createInputDiv(
      "Index correction for 'u' = (-e1) :",
      ccm_indexCorrectionUInput,
      "cm."
    ),
    true
  )
);

let ccm_indexErrorVInput = createInput(
  "ccm-index-error-v-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "6",
    createInputDiv(
      "Index error for 'v' = e2 = (z-x) :",
      ccm_indexErrorVInput,
      "cm."
    ),
    true
  )
);

let ccm_indexCorrectionVInput = createInput(
  "ccm-index-correction-v-input",
  "number",
  0,
  null,
  true
);
ccm_observationDiv.appendChild(
  createPAS(
    "7",
    createInputDiv(
      "Index correction for 'v' = (-e2) :",
      ccm_indexCorrectionVInput,
      "cm."
    ),
    true
  )
);

let ccm_distanceTableDiv = createDiv("observation-table-div");
ccm_observationDiv.appendChild(ccm_distanceTableDiv);

let ccm_distanceTable = createDiv("observation-table");
ccm_distanceTableDiv.appendChild(ccm_distanceTable);

ccm_distanceTable.appendChild(
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

ccm_distanceTable.appendChild(
  createColumn(
    "The mirror (P) cm",
    10,
    "ccm-table-P",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Needle (O) cm",
    10,
    "ccm-table-O",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Needle (I) cm",
    10,
    "ccm-table-I",
    "number",
    0,
    measureFocalLength_ccm,
    false
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Distance Observed (cm)",
    10,
    "ccm-table-obj-obs",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Object Distance Corrected (cm)",
    10,
    "ccm-table-obj-cor",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Distance Observed (cm)",
    10,
    "ccm-table-img-obs",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "Image Distance Corrected (cm)",
    10,
    "ccm-table-img-cor",
    "number",
    0,
    null,
    true
  )
);

ccm_distanceTable.appendChild(
  createColumn(
    "f = uv/(u+v) (cm)",
    10,
    "ccm-table-focal-length",
    "number",
    0,
    null,
    true
  )
);

let ccm_resultDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_resultDiv);

ccm_resultDiv.appendChild(
  createTextField("practical-section-header", "RESULT:")
);

let ccm_focalLengthCalculatedInput = createInput(
  "ccm-mean-focal-length-calculated-input",
  "number",
  0
);
ccm_resultDiv.appendChild(
  createPAS(
    "1",
    createInputDiv(
      "Mean value of focal length by computations found to be: ",
      ccm_focalLengthCalculatedInput,
      "cm."
    ),
    true
  )
);

let ccm_focalLengthGraphInput = createInput(
  "ccm-mean-focal-length-by-graph-input",
  "number",
  0
);
ccm_resultDiv.appendChild(
  createPAS(
    "2",
    createInputDiv(
      "The focal length of the given cocave mirror as determined by plotting graph(Hyperbola) between 'u' and 'v' is found to be: ",
      ccm_focalLengthGraphInput,
      "cm."
    ),
    true
  )
);

let ccm_precautionsDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_precautionsDiv);

ccm_precautionsDiv.appendChild(
  createTextField(
    "practical-section-header",
    "PRECAUTIONS:"
  )
);

ccm_precautionsDiv.appendChild(createPAS("1", ""));
ccm_precautionsDiv.appendChild(createPAS("2", ""));
ccm_precautionsDiv.appendChild(createPAS("3", ""));
ccm_precautionsDiv.appendChild(createPAS("4", ""));
ccm_precautionsDiv.appendChild(createPAS("5", ""));



let ccm_SOEDiv = createDiv("practical-section");
concaveMirrorDiv.appendChild(ccm_SOEDiv);

ccm_SOEDiv.appendChild(
  createTextField(
    "practical-section-header",
    "SOURCES OF ERRORS:"
  )
);

ccm_SOEDiv.appendChild(createPAS("1", ""));
ccm_SOEDiv.appendChild(createPAS("2", ""));
ccm_SOEDiv.appendChild(createPAS("3", ""));
ccm_SOEDiv.appendChild(createPAS("4", ""));
ccm_SOEDiv.appendChild(createPAS("5", ""));

// VARIABLES =============================
let ccm_lengthOfNeedle = null;
let ccm_distanceMirrorObject = null;
let ccm_distanceMirrorImage = null;

let ccm_indexCorrectionU = 0;
let ccm_indexCorrectionV = 0;

// FUNCTIONS =============================
function measureEssentials_ccm() {
  let X = parseFloat(ccm_lengthOfNeedleInput.value) || 0;
  let Y = parseFloat(ccm_distanceMirrorObjectInput.value) || 0;
  let Z = parseFloat(ccm_distanceMirrorImageInput.value) || 0;

  let ccm_indexErrorU = Y - X;
  ccm_indexCorrectionU = -ccm_indexErrorU;
  ccm_indexErrorUInput.value = ccm_indexErrorU.toFixed(2);
  ccm_indexCorrectionUInput.value = ccm_indexCorrectionU.toFixed(2);

  let ccm_indexErrorV = Z - X;
  ccm_indexCorrectionV = -ccm_indexErrorV;
  ccm_indexErrorVInput.value = ccm_indexErrorV.toFixed(2);
  ccm_indexCorrectionVInput.value = ccm_indexCorrectionV.toFixed(2);
}

function measureFocalLength_ccm() {
  let sumF = 0;
  let validReadings = 0;

  for (let i = 1; i <= 9; i++) {
    let P = parseFloat(document.getElementById(`ccm-table-P-${i}`).value) || 0;
    let O = parseFloat(document.getElementById(`ccm-table-O-${i}`).value) || 0;
    let I = parseFloat(document.getElementById(`ccm-table-I-${i}`).value) || 0;

    let u_obs = abs(P - O);
    let u_cor = u_obs + ccm_indexCorrectionU;
    document.getElementById(`ccm-table-obj-obs-${i}`).value = u_obs.toFixed(2);
    document.getElementById(`ccm-table-obj-cor-${i}`).value = u_cor.toFixed(2);

    let v_obs = abs(P - I);
    let v_cor = v_obs + ccm_indexCorrectionV;
    document.getElementById(`ccm-table-img-obs-${i}`).value = v_obs.toFixed(2);
    document.getElementById(`ccm-table-img-cor-${i}`).value = v_cor.toFixed(2);

    let f = (u_cor * v_cor) / (u_cor + v_cor);
    document.getElementById(`ccm-table-focal-length-${i}`).value = f.toFixed(3);

    if (
      f >
      (ccm_indexCorrectionU * ccm_indexCorrectionV) /
        (ccm_indexCorrectionU + ccm_indexCorrectionV)
    ) {
      sumF += f;
      validReadings++;
    }
  }

  focalLength = sumF / validReadings;
  ccm_focalLengthCalculatedInput.value = focalLength.toFixed(3);
}

// #endregion