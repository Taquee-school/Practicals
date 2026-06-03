let basicGroup1Div = createDiv("practical-file", "chemistry-practical");
let bg1_reagentDiv = createDiv("practical-section-text-div");
basicGroup1Div.appendChild(bg1_reagentDiv);
bg1_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
bg1_reagentDiv.appendChild(createTextField("practical-section-value", "HCl"));
// #region lead Table
basicGroup1Div.appendChild(createTextField("observation-table-header", "lead"));
let bg1_leadTable = createDiv("observation-table");
basicGroup1Div.appendChild(bg1_leadTable);
// #region Experiment
let bg1_leadExperimentDiv = createChemistryColumn("experiment");
bg1_leadTable.appendChild(bg1_leadExperimentDiv);
let bg1_leadExperiment1Div = createDiv("observation-table-inner-div");
bg1_leadExperimentDiv.appendChild(bg1_leadExperiment1Div);
bg1_leadExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add NaOH and heat."));
let bg1_leadExperiment2Div = createDiv("observation-table-inner-div");
bg1_leadExperimentDiv.appendChild(bg1_leadExperiment2Div);
bg1_leadExperiment2Div.appendChild(createTextField("observation-table-text", "02. Bring a filter paper dipped in HCI solution near the mouth of the test tube."));
// #endregion Experiment
// #region Observation
let bg1_leadObservationDiv = createChemistryColumn("observation");
bg1_leadTable.appendChild(bg1_leadObservationDiv);
let bg1_leadObservation1Div = createDiv("observation-table-inner-div");
bg1_leadObservationDiv.appendChild(bg1_leadObservation1Div);
bg1_leadObservation1Div.appendChild(createTextField("observation-table-text", "Smell of ammonia"));
let bg1_leadObservation2Div = createDiv("observation-table-inner-div");
bg1_leadObservationDiv.appendChild(bg1_leadObservation2Div);
bg1_leadObservation2Div.appendChild(createTextField("observation-table-text", "Formation of thick white fumes"));
// #endregion Observation
// #region Inference
let bg1_leadInferenceDiv = createChemistryColumn("inference");
bg1_leadTable.appendChild(bg1_leadInferenceDiv);
let bg1_inference1Div = createDiv("observation-table-inner-div");
bg1_leadInferenceDiv.appendChild(bg1_inference1Div);
bg1_inference1Div.appendChild(createTextField("observation-table-text", "May be NH3"));
let bg1_inference2Div = createDiv("observation-table-inner-div");
bg1_leadInferenceDiv.appendChild(bg1_inference2Div);
bg1_inference2Div.appendChild(createTextField("observation-table-text", "NH3 Confirmed"));
// #endregion Inference
// #endregion lead Table
// #region lead-2 Table
basicGroup1Div.appendChild(createTextField("observation-table-header", "lead"));
let bg1_lead2Table = createDiv("observation-table");
basicGroup1Div.appendChild(bg1_lead2Table);
// #region Experiment
let bg1_lead2ExperimentDiv = createChemistryColumn("experiment");
bg1_lead2Table.appendChild(bg1_lead2ExperimentDiv);
let bg1_lead2Experiment1Div = createDiv("observation-table-inner-div");
bg1_lead2ExperimentDiv.appendChild(bg1_lead2Experiment1Div);
bg1_lead2Experiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add NaOH and heat."));
let bg1_lead2Experiment2Div = createDiv("observation-table-inner-div");
bg1_lead2ExperimentDiv.appendChild(bg1_lead2Experiment2Div);
bg1_lead2Experiment2Div.appendChild(createTextField("observation-table-text", "02. Bring a filter paper dipped in HCI solution near the mouth of the test tube."));
// #endregion Experiment
// #region Observation
let bg1_lead2ObservationDiv = createChemistryColumn("observation");
bg1_lead2Table.appendChild(bg1_lead2ObservationDiv);
let bg1_lead2Observation1Div = createDiv("observation-table-inner-div");
bg1_lead2ObservationDiv.appendChild(bg1_lead2Observation1Div);
bg1_lead2Observation1Div.appendChild(createTextField("observation-table-text", "Smell of ammonia"));
let bg1_lead2Observation2Div = createDiv("observation-table-inner-div");
bg1_lead2ObservationDiv.appendChild(bg1_lead2Observation2Div);
bg1_lead2Observation2Div.appendChild(createTextField("observation-table-text", "Formation of thick white fumes"));
// #endregion Observation
// #region Inference
let bg1_lead2InferenceDiv = createChemistryColumn("inference");
bg1_lead2Table.appendChild(bg1_lead2InferenceDiv);
let bg1_lead2Inference1Div = createDiv("observation-table-inner-div");
bg1_lead2InferenceDiv.appendChild(bg1_lead2Inference1Div);
bg1_lead2Inference1Div.appendChild(createTextField("observation-table-text", "May be NH3"));
let bg1_lead2Inference2Div = createDiv("observation-table-inner-div");
bg1_lead2InferenceDiv.appendChild(bg1_lead2Inference2Div);
bg1_lead2Inference2Div.appendChild(createTextField("observation-table-text", "NH3 Confirmed"));
export {};
// #endregion Inference
// #endregion lead-2 Table
//# sourceMappingURL=group-1.js.map