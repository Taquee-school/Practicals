import { createDiv, createTextField, createChemistryColumn } from "../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "chemistry-practical");

// #region Sulphate Table
experimentDiv.appendChild(createTextField("observation-table-header", "sulphate"));

let ag3_sulphateTable = createDiv("observation-table");
experimentDiv.appendChild(ag3_sulphateTable);

// #region Experiment
let ag3_sulphateExperimentDiv = createChemistryColumn("experiment");
ag3_sulphateTable.appendChild(ag3_sulphateExperimentDiv);

let ag3_sulphateExperiment1Div = createDiv("observation-table-inner-div");
ag3_sulphateExperimentDiv.appendChild(ag3_sulphateExperiment1Div);
ag3_sulphateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare salt solution, add barium chloride."));

let ag3_sulphateExperiment2Div = createDiv("observation-table-inner-div");
ag3_sulphateExperimentDiv.appendChild(ag3_sulphateExperiment2Div);
ag3_sulphateExperiment2Div.appendChild(createTextField("observation-table-text", "02. Try to dissolve white precipitate in conc. HCl and HNO3."));
// #endregion Experiment

// #region Observation
let ag3_sulphateObservationDiv = createChemistryColumn("observation");
ag3_sulphateTable.appendChild(ag3_sulphateObservationDiv);

let ag3_sulphateObservation1Div = createDiv("observation-table-inner-div");
ag3_sulphateObservationDiv.appendChild(ag3_sulphateObservation1Div);
ag3_sulphateObservation1Div.appendChild(createTextField("observation-table-text", "Formation of white precipitate."));

let ag3_sulphateObservation2Div = createDiv("observation-table-inner-div");
ag3_sulphateObservationDiv.appendChild(ag3_sulphateObservation2Div);
ag3_sulphateObservation2Div.appendChild(createTextField("observation-table-text", "Insoluble in conc. HCl and HNO3."));
// #endregion Observation

// #region Inference
let ag3_sulphateInferenceDiv = createChemistryColumn("inference");
ag3_sulphateTable.appendChild(ag3_sulphateInferenceDiv);

let ag3_sulphateInference1Div = createDiv("observation-table-inner-div");
ag3_sulphateInferenceDiv.appendChild(ag3_sulphateInference1Div);
ag3_sulphateInference1Div.appendChild(createTextField("observation-table-text", "May be SO4"));

let ag3_sulphateInference2Div = createDiv("observation-table-inner-div");
ag3_sulphateInferenceDiv.appendChild(ag3_sulphateInference2Div);
ag3_sulphateInference2Div.appendChild(createTextField("observation-table-text", "SO4 Confirmed"));
// #endregion Inference
// #endregion sulphate Table


// #region Phosphate Table
experimentDiv.appendChild(createTextField("observation-table-header", "phosphate"));

let ag3_phosphateTable = createDiv("observation-table");
experimentDiv.appendChild(ag3_phosphateTable);

// #region Experiment
let ag3_phosphateExperimentDiv = createChemistryColumn("experiment");
ag3_phosphateTable.appendChild(ag3_phosphateExperimentDiv);

let ag3_phosphateExperiment1Div = createDiv("observation-table-inner-div");
ag3_phosphateExperimentDiv.appendChild(ag3_phosphateExperiment1Div);
ag3_phosphateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare aqueous solution of salt add 2 ml conc. HNO³ and 2-5 ml ammonium molybdate solution in another test tube. Warm both solution, mix and heat."));
// #endregion Experiment

// #region Observation
let ag3_phosphateObservationDiv = createChemistryColumn("observation");
ag3_phosphateTable.appendChild(ag3_phosphateObservationDiv);

let ag3_phosphateObservation1Div = createDiv("observation-table-inner-div");
ag3_phosphateObservationDiv.appendChild(ag3_phosphateObservation1Div);
ag3_phosphateObservation1Div.appendChild(createTextField("observation-table-text", "Formation of canary yellow precipitate."));
// #endregion Observation

// #region Inference
let ag3_phosphateInferenceDiv = createChemistryColumn("inference");
ag3_phosphateTable.appendChild(ag3_phosphateInferenceDiv);

let ag3_phosphateInference1Div = createDiv("observation-table-inner-div");
ag3_phosphateInferenceDiv.appendChild(ag3_phosphateInference1Div);
ag3_phosphateInference1Div.appendChild(createTextField("observation-table-text", "PO4 Confirmed"));
// #endregion Inference
// #endregion phosphate Table

