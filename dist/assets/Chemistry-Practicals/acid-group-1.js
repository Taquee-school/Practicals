import { createChemistryColumn, createDiv, createTextField } from "../../utils/practical.js";
export const experimentDiv = createDiv("practical-file", "chemistry-practical");
let ag1_reagentDiv = createDiv("practical-section-text-div");
experimentDiv.appendChild(ag1_reagentDiv);
ag1_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
ag1_reagentDiv.appendChild(createTextField("practical-section-value", "Dil. H2SO4"));
// #region Carbonate Table
experimentDiv.appendChild(createTextField("observation-table-header", "Carbonate"));
let ag1_carbonateTable = createDiv("observation-table");
experimentDiv.appendChild(ag1_carbonateTable);
// #region Experiment
let ag1_carbonateExperimentDiv = createChemistryColumn("experiment");
ag1_carbonateTable.appendChild(ag1_carbonateExperimentDiv);
let ag1_carbonateExperiment1Div = createDiv("observation-table-inner-div");
ag1_carbonateExperimentDiv.appendChild(ag1_carbonateExperiment1Div);
ag1_carbonateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add 1-2ml dil. H2SO4."));
let ag1_carbonateExperiment2Div = createDiv("observation-table-inner-div");
ag1_carbonateExperimentDiv.appendChild(ag1_carbonateExperiment2Div);
ag1_carbonateExperiment2Div.appendChild(createTextField("observation-table-text", "02. Take a pinch of salt in another dry test tube, add 1-2ml dil. H2SO4 and pass the evolved gas through lime water with the help of a delivery tube."));
// #endregion Experiment
// #region Observation
let ag1_carbonateObservationDiv = createChemistryColumn("observation");
ag1_carbonateTable.appendChild(ag1_carbonateObservationDiv);
let ag1_carbonateObservation1Div = createDiv("observation-table-inner-div");
ag1_carbonateObservationDiv.appendChild(ag1_carbonateObservation1Div);
ag1_carbonateObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of colorless and odorless gas with effervescence"));
let ag1_carbonateObservation2Div = createDiv("observation-table-inner-div");
ag1_carbonateObservationDiv.appendChild(ag1_carbonateObservation2Div);
ag1_carbonateObservation2Div.appendChild(createTextField("observation-table-text", "Lime water turns milky"));
// #endregion Observation
// #region Inference
let ag1_carbonateInferenceDiv = createChemistryColumn("inference");
ag1_carbonateTable.appendChild(ag1_carbonateInferenceDiv);
let ag1_carbonateInference1Div = createDiv("observation-table-inner-div");
ag1_carbonateInferenceDiv.appendChild(ag1_carbonateInference1Div);
ag1_carbonateInference1Div.appendChild(createTextField("observation-table-text", "May be CO3"));
let ag1_carbonateInference2Div = createDiv("observation-table-inner-div");
ag1_carbonateInferenceDiv.appendChild(ag1_carbonateInference2Div);
ag1_carbonateInference2Div.appendChild(createTextField("observation-table-text", "CO3 Confirmed"));
// #endregion Inference
// #endregion Carbonate Table
// #region Sulphide Table
experimentDiv.appendChild(createTextField("observation-table-header", "Sulphide"));
let ag1_sulphideTable = createDiv("observation-table");
experimentDiv.appendChild(ag1_sulphideTable);
// #region Experiment
let ag1_sulphideExperimentDiv = createChemistryColumn("experiment");
ag1_sulphideTable.appendChild(ag1_sulphideExperimentDiv);
let ag1_sulphideExperiment1Div = createDiv("observation-table-inner-div");
ag1_sulphideExperimentDiv.appendChild(ag1_sulphideExperiment1Div);
ag1_sulphideExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add 1-2ml dil. H2SO4."));
let ag1_sulphideExperiment2Div = createDiv("observation-table-inner-div");
ag1_sulphideExperimentDiv.appendChild(ag1_sulphideExperiment2Div);
ag1_sulphideExperiment2Div.appendChild(createTextField("observation-table-text", "02. Take aqueous solution and add sodium nitropasside solution."));
// #endregion Experiment
// #region Observation
let ag1_sulphideObservationDiv = createChemistryColumn("observation");
ag1_sulphideTable.appendChild(ag1_sulphideObservationDiv);
let ag1_sulphideObservation1Div = createDiv("observation-table-inner-div");
ag1_sulphideObservationDiv.appendChild(ag1_sulphideObservation1Div);
ag1_sulphideObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of gas with a smell of rotten egg."));
let ag1_sulphideObservation2Div = createDiv("observation-table-inner-div");
ag1_sulphideObservationDiv.appendChild(ag1_sulphideObservation2Div);
ag1_sulphideObservation2Div.appendChild(createTextField("observation-table-text", "Purple coloration"));
// #endregion Observation
// #region Inference
let ag1_sulphideInferenceDiv = createChemistryColumn("inference");
ag1_sulphideTable.appendChild(ag1_sulphideInferenceDiv);
let ag1_sulphideInference1Div = createDiv("observation-table-inner-div");
ag1_sulphideInferenceDiv.appendChild(ag1_sulphideInference1Div);
ag1_sulphideInference1Div.appendChild(createTextField("observation-table-text", "May be S2"));
let ag1_sulphideInference2Div = createDiv("observation-table-inner-div");
ag1_sulphideInferenceDiv.appendChild(ag1_sulphideInference2Div);
ag1_sulphideInference2Div.appendChild(createTextField("observation-table-text", "S2 Confirmed"));
// #endregion Inference
// #endregion Sulphide Table
// #region Sulphite Table
experimentDiv.appendChild(createTextField("observation-table-header", "Sulphite"));
let ag1_sulphiteTable = createDiv("observation-table");
experimentDiv.appendChild(ag1_sulphiteTable);
// #region Experiment
let ag1_sulphiteExperimentDiv = createChemistryColumn("experiment");
ag1_sulphiteTable.appendChild(ag1_sulphiteExperimentDiv);
let ag1_sulphiteExperiment1Div = createDiv("observation-table-inner-div");
ag1_sulphiteExperimentDiv.appendChild(ag1_sulphiteExperiment1Div);
ag1_sulphiteExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add 1-2ml dil. H2SO4."));
let ag1_sulphiteExperiment2Div = createDiv("observation-table-inner-div");
ag1_sulphiteExperimentDiv.appendChild(ag1_sulphiteExperiment2Div);
ag1_sulphiteExperiment2Div.appendChild(createTextField("observation-table-text", "02. Take a pinch of salt in another dry test tube and add dil. H2SO4 and bring a paper dipped in acidified potassium dichromate solution."));
// #endregion Experiment
// #region Observation
let ag1_sulphiteObservationDiv = createChemistryColumn("observation");
ag1_sulphiteTable.appendChild(ag1_sulphiteObservationDiv);
let ag1_sulphiteObservation1Div = createDiv("observation-table-inner-div");
ag1_sulphiteObservationDiv.appendChild(ag1_sulphiteObservation1Div);
ag1_sulphiteObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of gas with a smell of burning sulphur."));
let ag1_sulphiteObservation2Div = createDiv("observation-table-inner-div");
ag1_sulphiteObservationDiv.appendChild(ag1_sulphiteObservation2Div);
ag1_sulphiteObservation2Div.appendChild(createTextField("observation-table-text", "Paper turns green"));
// #endregion Observation
// #region Inference
let ag1_sulphiteInferenceDiv = createChemistryColumn("inference");
ag1_sulphiteTable.appendChild(ag1_sulphiteInferenceDiv);
let ag1_sulphiteInference1Div = createDiv("observation-table-inner-div");
ag1_sulphiteInferenceDiv.appendChild(ag1_sulphiteInference1Div);
ag1_sulphiteInference1Div.appendChild(createTextField("observation-table-text", "May be SO3"));
let ag1_sulphiteInference2Div = createDiv("observation-table-inner-div");
ag1_sulphiteInferenceDiv.appendChild(ag1_sulphiteInference2Div);
ag1_sulphiteInference2Div.appendChild(createTextField("observation-table-text", "SO3 Confirmed"));
// #endregion Inference
// #endregion Sulphite Table
// #region Nitrate Table
experimentDiv.appendChild(createTextField("observation-table-header", "Nitrate"));
let ag1_nitrateTable = createDiv("observation-table");
experimentDiv.appendChild(ag1_nitrateTable);
// #region Experiment
let ag1_nitrateExperimentDiv = createChemistryColumn("experiment");
ag1_nitrateTable.appendChild(ag1_nitrateExperimentDiv);
let ag1_nitrateExperiment1Div = createDiv("observation-table-inner-div");
ag1_nitrateExperimentDiv.appendChild(ag1_nitrateExperiment1Div);
ag1_nitrateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add 1-2ml dil. H2SO4."));
let ag1_nitrateExperiment2Div = createDiv("observation-table-inner-div");
ag1_nitrateExperimentDiv.appendChild(ag1_nitrateExperiment2Div);
ag1_nitrateExperiment2Div.appendChild(createTextField("observation-table-text", "02. Prepare salt solution, add thiourea and FeCl2."));
// #endregion Experiment
// #region Observation
let ag1_nitrateObservationDiv = createChemistryColumn("observation");
ag1_nitrateTable.appendChild(ag1_nitrateObservationDiv);
let ag1_nitrateObservation1Div = createDiv("observation-table-inner-div");
ag1_nitrateObservationDiv.appendChild(ag1_nitrateObservation1Div);
ag1_nitrateObservation1Div.appendChild(createTextField("observation-table-text", "Evolution of brown colour gas."));
let ag1_nitrateObservation2Div = createDiv("observation-table-inner-div");
ag1_nitrateObservationDiv.appendChild(ag1_nitrateObservation2Div);
ag1_nitrateObservation2Div.appendChild(createTextField("observation-table-text", "Blood red coloration."));
// #endregion Observation
// #region Inference
let ag1_nitrateInferenceDiv = createChemistryColumn("inference");
ag1_nitrateTable.appendChild(ag1_nitrateInferenceDiv);
let ag1_nitrateInference1Div = createDiv("observation-table-inner-div");
ag1_nitrateInferenceDiv.appendChild(ag1_nitrateInference1Div);
ag1_nitrateInference1Div.appendChild(createTextField("observation-table-text", "May be NO2"));
let ag1_nitrateInference2Div = createDiv("observation-table-inner-div");
ag1_nitrateInferenceDiv.appendChild(ag1_nitrateInference2Div);
ag1_nitrateInference2Div.appendChild(createTextField("observation-table-text", "NO2 Confirmed"));
// #endregion Inference
// #endregion Nitrate Table
// #region Acetate Table
experimentDiv.appendChild(createTextField("observation-table-header", "Acetate"));
let ag1_acetateTable = createDiv("observation-table");
experimentDiv.appendChild(ag1_acetateTable);
// #region Experiment
let ag1_acetateExperimentDiv = createChemistryColumn("experiment");
ag1_acetateTable.appendChild(ag1_acetateExperimentDiv);
let ag1_acetateExperiment1Div = createDiv("observation-table-inner-div");
ag1_acetateExperimentDiv.appendChild(ag1_acetateExperiment1Div);
ag1_acetateExperiment1Div.appendChild(createTextField("observation-table-text", "01. Take a pinch of salt in a dry test tube, add 1-2ml dil. H2SO4."));
let ag1_acetateExperiment2Div = createDiv("observation-table-inner-div");
ag1_acetateExperimentDiv.appendChild(ag1_acetateExperiment2Div);
ag1_acetateExperiment2Div.appendChild(createTextField("observation-table-text", "02. Prepare aqueous solution of salt and add FeCl2 solution."));
// #endregion Experiment
// #region Observation
let ag1_acetateObservationDiv = createChemistryColumn("observation");
ag1_acetateTable.appendChild(ag1_acetateObservationDiv);
let ag1_acetateObservation1Div = createDiv("observation-table-inner-div");
ag1_acetateObservationDiv.appendChild(ag1_acetateObservation1Div);
ag1_acetateObservation1Div.appendChild(createTextField("observation-table-text", "Smell of vinegar"));
let ag1_acetateObservation2Div = createDiv("observation-table-inner-div");
ag1_acetateObservationDiv.appendChild(ag1_acetateObservation2Div);
ag1_acetateObservation2Div.appendChild(createTextField("observation-table-text", "Blood red coloration."));
// #endregion Observation
// #region Inference
let ag1_acetateInferenceDiv = createChemistryColumn("inference");
ag1_acetateTable.appendChild(ag1_acetateInferenceDiv);
let ag1_acetateInference1Div = createDiv("observation-table-inner-div");
ag1_acetateInferenceDiv.appendChild(ag1_acetateInference1Div);
ag1_acetateInference1Div.appendChild(createTextField("observation-table-text", "May be CH3COO"));
let ag1_acetateInference2Div = createDiv("observation-table-inner-div");
ag1_acetateInferenceDiv.appendChild(ag1_acetateInference2Div);
ag1_acetateInference2Div.appendChild(createTextField("observation-table-text", "CH3COO Confirmed"));
// #endregion Inference
// #endregion Acetate Table
//# sourceMappingURL=acid-group-1.js.map