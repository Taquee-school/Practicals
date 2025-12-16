let basicGroup6Div = createDiv("practical-file", "chemistry-practical");

let bg6_reagentDiv = createDiv("practical-section-text-div");
basicGroup6Div.appendChild(bg6_reagentDiv);
bg6_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
bg6_reagentDiv.appendChild(createTextField("practical-section-value", "NH4CI + NH4OH + (NH4)2CO3 + Na2HPO4"));

// #region magnesium Table
basicGroup6Div.appendChild(createTextField("observation-table-header", "magnesium"));

let bg6_magnesiumTable = createDiv("observation-table");
basicGroup6Div.appendChild(bg6_magnesiumTable);

// #region Experiment
let bg6_magnesiumExperimentDiv = createChemistryColumn("experiment");
bg6_magnesiumTable.appendChild(bg6_magnesiumExperimentDiv);

let bg6_magnesiumExperiment1Div = createDiv("observation-table-inner-div");
bg6_magnesiumExperimentDiv.appendChild(bg6_magnesiumExperiment1Div);
bg6_magnesiumExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare salt solution, add NH4CI, NH4OH, (NH4)2CO3 and Na2HPO4."));
// #endregion Experiment

// #region Observation
let bg6_magnesiumObservationDiv = createChemistryColumn("observation");
bg6_magnesiumTable.appendChild(bg6_magnesiumObservationDiv);

let bg6_magnesiumObservation1Div = createDiv("observation-table-inner-div");
bg6_magnesiumObservationDiv.appendChild(bg6_magnesiumObservation1Div);
bg6_magnesiumObservation1Div.appendChild(createTextField("observation-table-text", "White precipitate"));
// #endregion Observation

// #region Inference
let bg6_magnesiumInferenceDiv = createChemistryColumn("inference");
bg6_magnesiumTable.appendChild(bg6_magnesiumInferenceDiv);

let bg6_magnesiumInference1Div = createDiv("observation-table-inner-div");
bg6_magnesiumInferenceDiv.appendChild(bg6_magnesiumInference1Div);
bg6_magnesiumInference1Div.appendChild(createTextField("observation-table-text", "Mg confirmed"));
// #endregion Inference
// #endregion magnesium Table