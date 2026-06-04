import { createDiv, createTextField, createChemistryColumn } from "../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "chemistry-practical");

let ag2_reagentDiv = createDiv("practical-section-text-div");
experimentDiv.appendChild(ag2_reagentDiv);
ag2_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
ag2_reagentDiv.appendChild(createTextField("practical-section-value", "Conc. H2SO4"));

// #region Chloride Table
experimentDiv.appendChild(createTextField("observation-table-header", "chloride"));

let ag2_chlorideTable = createDiv("observation-table");
experimentDiv.appendChild(ag2_chlorideTable);

// #region Experiment
let ag2_chlorideExperimentDiv = createChemistryColumn("experiment");
ag2_chlorideTable.appendChild(ag2_chlorideExperimentDiv);

let ag2_chlorideExperiment1Div = createDiv("observation-table-inner-div");
ag2_chlorideExperimentDiv.appendChild(ag2_chlorideExperiment1Div);
ag2_chlorideExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add conc. H2SO4."));

let ag2_chlorideExperiment2Div = createDiv("observation-table-inner-div");
ag2_chlorideExperimentDiv.appendChild(ag2_chlorideExperiment2Div);
ag2_chlorideExperiment2Div.appendChild(createTextField("observation-table-text", "02. Take a pinch of salt in another dry test tube, add H2SO4 and bring a glass rod dipped in ammonium hydroxide solution."));

let ag2_chlorideExperiment3Div = createDiv("observation-table-inner-div");
ag2_chlorideExperimentDiv.appendChild(ag2_chlorideExperiment3Div);
ag2_chlorideExperiment3Div.appendChild(createTextField("observation-table-text", "03. Take 0.5 gm salt, add K2Cr2O7 in a dry test tube and add conc. H2SO4 heat pass the evolved gas through water with the help of a delivery tube. Add acetic acid and lead acetate solution in the yellow water."));
// #endregion Experiment

// #region Observation
let ag2_chlorideObservationDiv = createChemistryColumn("observation");
ag2_chlorideTable.appendChild(ag2_chlorideObservationDiv);

let ag2_chlorideObservation1Div = createDiv("observation-table-inner-div");
ag2_chlorideObservationDiv.appendChild(ag2_chlorideObservation1Div);
ag2_chlorideObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of colourless gas with pungent smell."));

let ag2_chlorideObservation2Div = createDiv("observation-table-inner-div");
ag2_chlorideObservationDiv.appendChild(ag2_chlorideObservation2Div);
ag2_chlorideObservation2Div.appendChild(createTextField("observation-table-text", "Formation of white dense fumes."));

let ag2_chlorideObservation3Div = createDiv("observation-table-inner-div");
ag2_chlorideObservationDiv.appendChild(ag2_chlorideObservation3Div);
ag2_chlorideObservation3Div.appendChild(createTextField("observation-table-text", "Formation of yellow precipitate."));

// #endregion Observation

// #region Inference
let ag2_chlorideInferenceDiv = createChemistryColumn("inference");
ag2_chlorideTable.appendChild(ag2_chlorideInferenceDiv);

let ag2_chlorideInference1Div = createDiv("observation-table-inner-div");
ag2_chlorideInferenceDiv.appendChild(ag2_chlorideInference1Div);
ag2_chlorideInference1Div.appendChild(createTextField("observation-table-text", "May be Cl"));

let ag2_chlorideInference2Div = createDiv("observation-table-inner-div");
ag2_chlorideInferenceDiv.appendChild(ag2_chlorideInference2Div);
ag2_chlorideInference2Div.appendChild(createTextField("observation-table-text", "May be Cl"));

let ag2_chlorideInference3Div = createDiv("observation-table-inner-div");
ag2_chlorideInferenceDiv.appendChild(ag2_chlorideInference3Div);
ag2_chlorideInference3Div.appendChild(createTextField("observation-table-text", "Cl Confirmed"));
// #endregion Inference
// #endregion chloride Table


// #region Bromide Table
experimentDiv.appendChild(createTextField("observation-table-header", "bromide"));

let ag2_bromideTable = createDiv("observation-table");
experimentDiv.appendChild(ag2_bromideTable);

// #region Experiment
let ag2_bromideExperimentDiv = createChemistryColumn("experiment");
ag2_bromideTable.appendChild(ag2_bromideExperimentDiv);

let ag2_bromideExperiment1Div = createDiv("observation-table-inner-div");
ag2_bromideExperimentDiv.appendChild(ag2_bromideExperiment1Div);
ag2_bromideExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add conc. H2SO4."));

let ag2_bromideExperiment2Div = createDiv("observation-table-inner-div");
ag2_bromideExperimentDiv.appendChild(ag2_bromideExperiment2Div);
ag2_bromideExperiment2Div.appendChild(createTextField("observation-table-text", "02. Prepare aqueous solution, add CCl⁴(2-5 ml), acetic acid(1 ml) and Cl² water shake the test tube."));
// #endregion Experiment

// #region Observation
let ag2_bromideObservationDiv = createChemistryColumn("observation");
ag2_bromideTable.appendChild(ag2_bromideObservationDiv);

let ag2_bromideObservation1Div = createDiv("observation-table-inner-div");
ag2_bromideObservationDiv.appendChild(ag2_bromideObservation1Div);
ag2_bromideObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of brown fumes."));

let ag2_bromideObservation2Div = createDiv("observation-table-inner-div");
ag2_bromideObservationDiv.appendChild(ag2_bromideObservation2Div);
ag2_bromideObservation2Div.appendChild(createTextField("observation-table-text", "Lower organic layer(CCl4 layer) turns brown."));
// #endregion Observation

// #region Inference
let ag2_bromideInferenceDiv = createChemistryColumn("inference");
ag2_bromideTable.appendChild(ag2_bromideInferenceDiv);

let ag2_bromideInference1Div = createDiv("observation-table-inner-div");
ag2_bromideInferenceDiv.appendChild(ag2_bromideInference1Div);
ag2_bromideInference1Div.appendChild(createTextField("observation-table-text", "May be Br"));

let ag2_bromideInference2Div = createDiv("observation-table-inner-div");
ag2_bromideInferenceDiv.appendChild(ag2_bromideInference2Div);
ag2_bromideInference2Div.appendChild(createTextField("observation-table-text", "Br Confirmed"));
// #endregion Inference
// #endregion bromide Table


// #region Nitrate Table
experimentDiv.appendChild(createTextField("observation-table-header", "nitrate"));

let ag2_nitrateTable = createDiv("observation-table");
experimentDiv.appendChild(ag2_nitrateTable);

// #region Experiment
let ag2_nitrateExperimentDiv = createChemistryColumn("experiment");
ag2_nitrateTable.appendChild(ag2_nitrateExperimentDiv);

let ag2_nitrateExperiment1Div = createDiv("observation-table-inner-div");
ag2_nitrateExperimentDiv.appendChild(ag2_nitrateExperiment1Div);
ag2_nitrateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add conc. H2SO4."));

let ag2_nitrateExperiment2Div = createDiv("observation-table-inner-div");
ag2_nitrateExperimentDiv.appendChild(ag2_nitrateExperiment2Div);
ag2_nitrateExperiment2Div.appendChild(createTextField("observation-table-text", "02. Prepare aqueous solution, add freshly prepared FeSO4 and conc. H2SO4."));
// #endregion Experiment

// #region Observation
let ag2_nitrateObservationDiv = createChemistryColumn("observation");
ag2_nitrateTable.appendChild(ag2_nitrateObservationDiv);

let ag2_nitrateObservation1Div = createDiv("observation-table-inner-div");
ag2_nitrateObservationDiv.appendChild(ag2_nitrateObservation1Div);
ag2_nitrateObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of brown fumes."));

let ag2_nitrateObservation2Div = createDiv("observation-table-inner-div");
ag2_nitrateObservationDiv.appendChild(ag2_nitrateObservation2Div);
ag2_nitrateObservation2Div.appendChild(createTextField("observation-table-text", "Formation of brown rings at the junction of layers."));
// #endregion Observation

// #region Inference
let ag2_nitrateInferenceDiv = createChemistryColumn("inference");
ag2_nitrateTable.appendChild(ag2_nitrateInferenceDiv);

let ag2_nitrateInference1Div = createDiv("observation-table-inner-div");
ag2_nitrateInferenceDiv.appendChild(ag2_nitrateInference1Div);
ag2_nitrateInference1Div.appendChild(createTextField("observation-table-text", "May be NO"));

let ag2_nitrateInference2Div = createDiv("observation-table-inner-div");
ag2_nitrateInferenceDiv.appendChild(ag2_nitrateInference2Div);
ag2_nitrateInference2Div.appendChild(createTextField("observation-table-text", "NO Confirmed"));
// #endregion Inference
// #endregion nitrate Table


// #region Iodide Table
experimentDiv.appendChild(createTextField("observation-table-header", "iodide"));

let ag2_iodideTable = createDiv("observation-table");
experimentDiv.appendChild(ag2_iodideTable);

// #region Experiment
let ag2_iodideExperimentDiv = createChemistryColumn("experiment");
ag2_iodideTable.appendChild(ag2_iodideExperimentDiv);

let ag2_iodideExperiment1Div = createDiv("observation-table-inner-div");
ag2_iodideExperimentDiv.appendChild(ag2_iodideExperiment1Div);
ag2_iodideExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add conc. H2SO4."));

let ag2_iodideExperiment2Div = createDiv("observation-table-inner-div");
ag2_iodideExperimentDiv.appendChild(ag2_iodideExperiment2Div);
ag2_iodideExperiment2Div.appendChild(createTextField("observation-table-text", "02. Prepare aqueous solution, add CCl4(2-5 ml), acetic acid(1 ml) and Cl2 water and shake the test tube."));
// #endregion Experiment

// #region Observation
let ag2_iodideObservationDiv = createChemistryColumn("observation");
ag2_iodideTable.appendChild(ag2_iodideObservationDiv);

let ag2_iodideObservation1Div = createDiv("observation-table-inner-div");
ag2_iodideObservationDiv.appendChild(ag2_iodideObservation1Div);
ag2_iodideObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of violet or purple colour gas."));

let ag2_iodideObservation2Div = createDiv("observation-table-inner-div");
ag2_iodideObservationDiv.appendChild(ag2_iodideObservation2Div);
ag2_iodideObservation2Div.appendChild(createTextField("observation-table-text", "Lower organic layer(CCl4 layer) turns purple."));
// #endregion Observation

// #region Inference
let ag2_iodideInferenceDiv = createChemistryColumn("inference");
ag2_iodideTable.appendChild(ag2_iodideInferenceDiv);

let ag2_iodideInference1Div = createDiv("observation-table-inner-div");
ag2_iodideInferenceDiv.appendChild(ag2_iodideInference1Div);
ag2_iodideInference1Div.appendChild(createTextField("observation-table-text", "May be I"));

let ag2_iodideInference2Div = createDiv("observation-table-inner-div");
ag2_iodideInferenceDiv.appendChild(ag2_iodideInference2Div);
ag2_iodideInference2Div.appendChild(createTextField("observation-table-text", "I Confirmed"));
// #endregion Inference
// #endregion iodide Table

