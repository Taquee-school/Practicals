import { createDiv, createTextField, createChemistryColumn } from "../../utils/practical.js";

export let experimentDiv = createDiv("practical-file", "chemistry-practical");

let bg0_reagentDiv = createDiv("practical-section-text-div");
experimentDiv.appendChild(bg0_reagentDiv);
bg0_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
bg0_reagentDiv.appendChild(createTextField("practical-section-value", "NaOH"));

// #region Ammonium Table
experimentDiv.appendChild(createTextField("observation-table-header", "Ammonium"));

let bg0_ammoniumTable = createDiv("observation-table");
experimentDiv.appendChild(bg0_ammoniumTable);

// #region Experiment
let bg0_ammoniumExperimentDiv = createChemistryColumn("experiment");
bg0_ammoniumTable.appendChild(bg0_ammoniumExperimentDiv);

let bg0_ammoniumExperiment1Div = createDiv("observation-table-inner-div");
bg0_ammoniumExperimentDiv.appendChild(bg0_ammoniumExperiment1Div);
bg0_ammoniumExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add NaOH and heat."));

let bg0_ammoniumExperiment2Div = createDiv("observation-table-inner-div");
bg0_ammoniumExperimentDiv.appendChild(bg0_ammoniumExperiment2Div);
bg0_ammoniumExperiment2Div.appendChild(createTextField("observation-table-text", "02. Bring a filter paper dipped in HCI solution near the mouth of the test tube."));
// #endregion Experiment

// #region Observation
let bg0_ammoniumObservationDiv = createChemistryColumn("observation");
bg0_ammoniumTable.appendChild(bg0_ammoniumObservationDiv);

let bg0_ammoniumObservation1Div = createDiv("observation-table-inner-div");
bg0_ammoniumObservationDiv.appendChild(bg0_ammoniumObservation1Div);
bg0_ammoniumObservation1Div.appendChild(createTextField("observation-table-text", "Smell of ammonia"));

let bg0_ammoniumObservation2Div = createDiv("observation-table-inner-div");
bg0_ammoniumObservationDiv.appendChild(bg0_ammoniumObservation2Div);
bg0_ammoniumObservation2Div.appendChild(createTextField("observation-table-text", "Formation of thick white fumes"));
// #endregion Observation

// #region Inference
let bg0_ammoniumInferenceDiv = createChemistryColumn("inference");
bg0_ammoniumTable.appendChild(bg0_ammoniumInferenceDiv);

let bg0_ammoniumInference1Div = createDiv("observation-table-inner-div");
bg0_ammoniumInferenceDiv.appendChild(bg0_ammoniumInference1Div);
bg0_ammoniumInference1Div.appendChild(createTextField("observation-table-text", "May be NH3"));

let bg0_ammoniumInference2Div = createDiv("observation-table-inner-div");
bg0_ammoniumInferenceDiv.appendChild(bg0_ammoniumInference2Div);
bg0_ammoniumInference2Div.appendChild(createTextField("observation-table-text", "NH3 Confirmed"));
// #endregion Inference
// #endregion Ammonium Table