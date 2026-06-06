const inputs: Record<string, null | HTMLInputElement> = {
  disByCsr: null,
  revByCsr: null,
  pitch: null,
  divOnCsr: null,
  leastCount: null,
  zeroError1: null,
  zeroError2: null,
  zeroError3: null,
  meanZeroError: null,
  zeroCorrection: null,
  density: null,
  meanDiameter: null,
  correctedDiameter: null,
  massPerUnitLength: null,
};

const experimentVariables = {
  pitch: 0,
  leastCount: 0,
  zeroError: 0,
  zeroCorrection: 0,
  density: 0,
  meanDiameter: 0,
  correctedDiameter: 0,
  massPerUnitLength: 0,
};

export function reset() {
  experimentVariables.leastCount = 0;
  experimentVariables.zeroError = 0;
  experimentVariables.density = 0;
}

async function initiateElements(parent: HTMLDivElement) {
  inputs.disByCsr = parent.querySelector<HTMLInputElement>(
    "#scg-distance-by-csr-input",
  );
  inputs.revByCsr = parent.querySelector<HTMLInputElement>(
    "#scg-revolution-by-csr-input",
  );
  inputs.pitch = parent.querySelector<HTMLInputElement>("#scg-pitch-input");
  inputs.divOnCsr = parent.querySelector<HTMLInputElement>(
    "#scg-divisions-of-csr-input",
  );
  inputs.leastCount = parent.querySelector<HTMLInputElement>(
    "#scg-least-count-input",
  );
  inputs.zeroError1 = parent.querySelector<HTMLInputElement>(
    "#scg-zero-error-1-input",
  );
  inputs.zeroError2 = parent.querySelector<HTMLInputElement>(
    "#scg-zero-error-2-input",
  );
  inputs.zeroError3 = parent.querySelector<HTMLInputElement>(
    "#scg-zero-error-3-input",
  );
  inputs.meanZeroError = parent.querySelector<HTMLInputElement>(
    "#scg-mean-zero-error-input",
  );
  inputs.zeroCorrection = parent.querySelector<HTMLInputElement>(
    "#scg-zero-correction-input",
  );
  inputs.density = parent.querySelector<HTMLInputElement>("#scg-density-input");
  inputs.meanDiameter = parent.querySelector<HTMLInputElement>(
    "#scg-mean-diameter-input",
  );
  inputs.correctedDiameter = parent.querySelector<HTMLInputElement>(
    "#scg-corrected-diameter-input",
  );
  inputs.massPerUnitLength = parent.querySelector<HTMLInputElement>(
    "#scg-mass-per-unit-length-input",
  );
}

function measureEssentials() {
  // Distance moved by circular scale
  if (!inputs.disByCsr_input)
    return {
      ok: false,
      message: "missing ui",
    };
  const disByCSR = parseFloat(inputs.disByCsr_input.value) || 0;

  // Revolutions made by circular scale
  if (!inputs.revByCsr)
    return {
      ok: false,
      message: "missing ui",
    };
  const revByCSR = parseFloat(inputs.revByCsr.value) || 0;

  // Pitch
  if (!inputs.pitch)
    return {
      ok: false,
      message: "missing ui",
    };
  experimentVariables.pitch = disByCSR / revByCSR;
  inputs.pitch.value = experimentVariables.pitch.toFixed(4);

  // Divisions of circular scale
  if (!inputs.divOnCsr)
    return {
      ok: false,
      message: "missing ui",
    };
  const divOfCSR = parseFloat(inputs.divOnCsr.value) || 1;

  // Least count
  if (!inputs.leastCount)
    return {
      ok: false,
      message: "missing ui",
    };
  experimentVariables.leastCount = experimentVariables.pitch / divOfCSR;
  inputs.leastCount.value = experimentVariables.leastCount.toFixed(3);

  return { ok: true };
}

function measureZeroError() {
  if (!inputs.zeroError1)
    return {
      ok: false,
      message: "missing ui",
    };
  const zeroError1 = parseFloat(inputs.zeroError1.value) || 0;

  if (!inputs.zeroError2)
    return {
      ok: false,
      message: "missing ui",
    };
  const zeroError2 = parseFloat(inputs.zeroError2.value) || 0;

  if (!inputs.zeroError3)
    return {
      ok: false,
      message: "missing ui",
    };
  const zeroError3 = parseFloat(inputs.zeroError3.value) || 0;

  // Mean Zero Error
  if (!inputs.meanZeroError)
    return {
      ok: false,
      message: "missing ui",
    };
  experimentVariables.zeroError = (zeroError1 + zeroError2 + zeroError3) / 3;
  inputs.meanZeroError.value = experimentVariables.zeroError.toFixed(4);

  // Zero Correction
  if (!inputs.zeroCorrection)
    return {
      ok: false,
      message: "missing ui",
    };
  experimentVariables.zeroCorrection = -experimentVariables.zeroError;
  inputs.zeroCorrection.value = experimentVariables.zeroCorrection.toFixed(4);

  return { ok: true };
}

function evaluate_diameter_table(parent: HTMLDivElement) {
  const table = parent.querySelector<HTMLDivElement>("#scg-diameter-table");
  if (!table)
    return {
      ok: false,
      message: "missing ui",
    };

  let diameter_sum = 0;
  let row = 1;
  while (true) {
    // least count
    const lc_input = table.querySelector<HTMLInputElement>(`#scg-lc-${row}`);
    if (!lc_input) break;
    lc_input.value = experimentVariables.leastCount.toFixed(3);

    // main scale reading
    const msr_input = table.querySelector<HTMLInputElement>(`#scg-msr-${row}`);
    if (!msr_input) break;
    const msr = parseFloat(msr_input.value) || 0;

    // circular scale reading
    const csr_input = table.querySelector<HTMLInputElement>(`#scg-csr-${row}`);
    if (!csr_input) break;
    const csr = parseFloat(csr_input.value) || 0;

    // diameter
    const diameter_input = table.querySelector<HTMLInputElement>(
      `#scg-d-obs-${row}`,
    );
    if (!diameter_input) break;
    const diameter = msr + csr * experimentVariables.leastCount;
    diameter_input.value = diameter.toFixed(3);

    diameter_sum += diameter;
    row++;
  }

  if (row < 2)
    return {
      ok: false,
      message: "No rows",
    };
  experimentVariables.meanDiameter = diameter_sum / (row - 1);

  return { ok: true };
}

function measureDiameter() {
  // mean diameter
  if (!inputs.meanDiameter)
    return {
      ok: false,
      message: "missing ui",
    };
  inputs.meanDiameter.value = experimentVariables.meanDiameter.toFixed(3);

  // corrected diameter
  if (!inputs.correctedDiameter)
    return {
      ok: false,
      message: "missing ui",
    };
  const correctedDiameter =
    experimentVariables.meanDiameter + experimentVariables.zeroCorrection;
  inputs.correctedDiameter.value = correctedDiameter.toFixed(4);

  return { ok: true };
}

function measureMassPerUnitLength() {
  // Density
  if (!inputs.density)
    return {
      ok: false,
      message: "missing ui",
    };
  experimentVariables.density = parseFloat(inputs.density.value) || 0;

  // Mass per unit length
  if (!inputs.massPerUnitLength)
    return {
      ok: false,
      message: "missing ui",
    };
  const area =
    Math.PI * ((experimentVariables.correctedDiameter / 2) * 1000) ** 2;
  experimentVariables.massPerUnitLength = area * experimentVariables.density;
  inputs.massPerUnitLength.value =
    experimentVariables.massPerUnitLength.toFixed(10);

  return { ok: true };
}

export async function run(
  parent: HTMLDivElement,
  options = {
    zeroError: true,
    mass: true,
  },
) {
  await initiateElements(parent);

  let response = measureEssentials();
  if (!response.ok) return response.message;

  if (options.zeroError) {
    response = measureZeroError();
    if (!response.ok) return response.message;
  }

  response = evaluate_diameter_table(parent);
  if (!response.ok) return response.message;

  response = measureDiameter();
  if (!response.ok) return response.message;

  if (options.mass) {
    response = measureMassPerUnitLength();
    if (!response.ok) return response.message;
  }
}
