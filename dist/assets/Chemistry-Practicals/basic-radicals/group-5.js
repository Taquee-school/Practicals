let basicGroup5Div = createDiv("practical-file", "chemistry-practical");
let bg5_reagentDiv = createDiv("practical-section-text-div");
basicGroup5Div.appendChild(bg5_reagentDiv);
bg5_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
bg5_reagentDiv.appendChild(createTextField("practical-section-value", "NH4CI + NH4OH + (NH4)2CO3"));
// #region Ammonium Table
basicGroup5Div.appendChild(createTextField("observation-table-header", "Test for Ba, Sr and Ca"));
let bg5_ammoniumTable = createDiv("observation-table");
basicGroup5Div.appendChild(bg5_ammoniumTable);
// #region Experiment
let bg5_ammoniumExperimentDiv = createChemistryColumn("experiment");
bg5_ammoniumTable.appendChild(bg5_ammoniumExperimentDiv);
let bg5_ammoniumExperiment1Div = createDiv("observation-table-inner-div");
bg5_ammoniumExperimentDiv.appendChild(bg5_ammoniumExperiment1Div);
bg5_ammoniumExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare salt solution, add NH4CI, NH4OH and (NH4)2CO3."));
let bg5_ammoniumExperiment2Div = createDiv("observation-table-inner-div");
bg5_ammoniumExperimentDiv.appendChild(bg5_ammoniumExperiment2Div);
bg5_ammoniumExperiment2Div.appendChild(createTextField("observation-table-text", "02. Dissolve the precipitate in hot acetic acid and divide in three parts."));
let bg5_ammoniumExperiment3Div = createDiv("observation-table-inner-div");
bg5_ammoniumExperimentDiv.appendChild(bg5_ammoniumExperiment3Div);
bg5_ammoniumExperiment3Div.appendChild(createTextField("observation-table-text", "a) To the first part add K2Cr2O7."));
let bg5_ammoniumExperiment4Div = createDiv("observation-table-inner-div");
bg5_ammoniumExperimentDiv.appendChild(bg5_ammoniumExperiment4Div);
bg5_ammoniumExperiment4Div.appendChild(createTextField("observation-table-text", "b) To the second part add (NH4)2SO4."));
let bg5_ammoniumExperiment5Div = createDiv("observation-table-inner-div");
bg5_ammoniumExperimentDiv.appendChild(bg5_ammoniumExperiment5Div);
bg5_ammoniumExperiment5Div.appendChild(createTextField("observation-table-text", "c) To the third part add (NH4)2CO3."));
// #endregion Experiment
// #region Observation
let bg5_ammoniumObservationDiv = createChemistryColumn("observation");
bg5_ammoniumTable.appendChild(bg5_ammoniumObservationDiv);
let bg5_ammoniumObservation1Div = createDiv("observation-table-inner-div");
bg5_ammoniumObservationDiv.appendChild(bg5_ammoniumObservation1Div);
bg5_ammoniumObservation1Div.appendChild(createTextField("observation-table-text", "White precipitate."));
let bg5_ammoniumObservation2Div = createDiv("observation-table-inner-div");
bg5_ammoniumObservationDiv.appendChild(bg5_ammoniumObservation2Div);
bg5_ammoniumObservation2Div.appendChild(createTextField("observation-table-text", ""));
let bg5_ammoniumObservation3Div = createDiv("observation-table-inner-div");
bg5_ammoniumObservationDiv.appendChild(bg5_ammoniumObservation3Div);
bg5_ammoniumObservation3Div.appendChild(createTextField("observation-table-text", "Yellow precipitate"));
let bg5_ammoniumObservation4Div = createDiv("observation-table-inner-div");
bg5_ammoniumObservationDiv.appendChild(bg5_ammoniumObservation4Div);
bg5_ammoniumObservation4Div.appendChild(createTextField("observation-table-text", "White precipitate"));
let bg5_ammoniumObservation5Div = createDiv("observation-table-inner-div");
bg5_ammoniumObservationDiv.appendChild(bg5_ammoniumObservation5Div);
bg5_ammoniumObservation5Div.appendChild(createTextField("observation-table-text", "White precipitate"));
// #endregion Observation
// #region Inference
let bg5_ammoniumInferenceDiv = createChemistryColumn("inference");
bg5_ammoniumTable.appendChild(bg5_ammoniumInferenceDiv);
let bg5_ammoniumInference1Div = createDiv("observation-table-inner-div");
bg5_ammoniumInferenceDiv.appendChild(bg5_ammoniumInference1Div);
bg5_ammoniumInference1Div.appendChild(createTextField("observation-table-text", "Group V present"));
let bg5_ammoniumInference2Div = createDiv("observation-table-inner-div");
bg5_ammoniumInferenceDiv.appendChild(bg5_ammoniumInference2Div);
bg5_ammoniumInference2Div.appendChild(createTextField("observation-table-text", ""));
let bg5_ammoniumInference3Div = createDiv("observation-table-inner-div");
bg5_ammoniumInferenceDiv.appendChild(bg5_ammoniumInference3Div);
bg5_ammoniumInference3Div.appendChild(createTextField("observation-table-text", "Ba confirmed"));
let bg5_ammoniumInference4Div = createDiv("observation-table-inner-div");
bg5_ammoniumInferenceDiv.appendChild(bg5_ammoniumInference4Div);
bg5_ammoniumInference4Div.appendChild(createTextField("observation-table-text", "Sr confirmed"));
let bg5_ammoniumInference5Div = createDiv("observation-table-inner-div");
bg5_ammoniumInferenceDiv.appendChild(bg5_ammoniumInference5Div);
bg5_ammoniumInference5Div.appendChild(createTextField("observation-table-text", "Ca confirmed"));
export {};
// #endregion Inference
// #endregion Ammonium Table
//# sourceMappingURL=group-5.js.map