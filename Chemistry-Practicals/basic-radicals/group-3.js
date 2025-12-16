let basicGroup3Div = createDiv("practical-file", "chemistry-practical");

let bg3_reagentDiv = createDiv("practical-section-text-div");
basicGroup3Div.appendChild(bg3_reagentDiv);
bg3_reagentDiv.appendChild(createTextField("practical-section-text", "Reagent: "));
bg3_reagentDiv.appendChild(createTextField("practical-section-value", "NH4Cl + NH4OH"));

// #region aluminum Table
basicGroup3Div.appendChild(createTextField("observation-table-header", "aluminum"));

let bg3_aluminumTable = createDiv("observation-table");
basicGroup3Div.appendChild(bg3_aluminumTable);

// #region Experiment
let bg3_aluminumExperimentDiv = createChemistryColumn("experiment");
bg3_aluminumTable.appendChild(bg3_aluminumExperimentDiv);

let bg3_aluminumExperiment1Div = createDiv("observation-table-inner-div");
bg3_aluminumExperimentDiv.appendChild(bg3_aluminumExperiment1Div);
bg3_aluminumExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare salt solution, add 1 ml conc. HNO3, boil to dryness, cool & add ammonium chloride and ammonium hydroxide in excess."));

let bg3_aluminumExperiment2Div = createDiv("observation-table-inner-div");
bg3_aluminumExperimentDiv.appendChild(bg3_aluminumExperiment2Div);
bg3_aluminumExperiment2Div.appendChild(createTextField("observation-table-text", "02. Dissolve the precipitate by boiling in sodium hydroxide and add solid NH4Cl."));
// #endregion Experiment

// #region Observation
let bg3_aluminumObservationDiv = createChemistryColumn("observation");
bg3_aluminumTable.appendChild(bg3_aluminumObservationDiv);

let bg3_aluminumObservation1Div = createDiv("observation-table-inner-div");
bg3_aluminumObservationDiv.appendChild(bg3_aluminumObservation1Div);
bg3_aluminumObservation1Div.appendChild(createTextField("observation-table-text", "Formation of white gelatinous precipitate."));

let bg3_aluminumObservation2Div = createDiv("observation-table-inner-div");
bg3_aluminumObservationDiv.appendChild(bg3_aluminumObservation2Div);
bg3_aluminumObservation2Div.appendChild(createTextField("observation-table-text", "Reappearance of white gelatinous precipitate."));
// #endregion Observation

// #region Inference
let bg3_aluminumInferenceDiv = createChemistryColumn("inference");
bg3_aluminumTable.appendChild(bg3_aluminumInferenceDiv);

let bg3_aluminumInference1Div = createDiv("observation-table-inner-div");
bg3_aluminumInferenceDiv.appendChild(bg3_aluminumInference1Div);
bg3_aluminumInference1Div.appendChild(createTextField("observation-table-text", "May be Al3+"));

let bg3_aluminumInference2Div = createDiv("observation-table-inner-div");
bg3_aluminumInferenceDiv.appendChild(bg3_aluminumInference2Div);
bg3_aluminumInference2Div.appendChild(createTextField("observation-table-text", "Al3+ Confirmed"));
// #endregion Inference
// #endregion aluminum Table


// #region iron Table
basicGroup3Div.appendChild(createTextField("observation-table-header", "iron"));

let bg3_ironTable = createDiv("observation-table");
basicGroup3Div.appendChild(bg3_ironTable);

// #region Experiment
let bg3_ironExperimentDiv = createChemistryColumn("experiment");
bg3_ironTable.appendChild(bg3_ironExperimentDiv);

let bg3_ironExperiment1Div = createDiv("observation-table-inner-div");
bg3_ironExperimentDiv.appendChild(bg3_ironExperiment1Div);
bg3_ironExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare salt solution, add 1 ml conc. HNO3, boil to dryness, cool & add ammonium chloride and ammonium hydroxide in excess."));

let bg3_ironExperiment2Div = createDiv("observation-table-inner-div");
bg3_ironExperimentDiv.appendChild(bg3_ironExperiment2Div);
bg3_ironExperiment2Div.appendChild(createTextField("observation-table-text", "02. Dissolve the precipitate in minimum HCI and divide in two parts."));

let bg3_ironExperiment3Div = createDiv("observation-table-inner-div");
bg3_ironExperimentDiv.appendChild(bg3_ironExperiment3Div);
bg3_ironExperiment3Div.appendChild(createTextField("observation-table-text", "a) To the first part add K3[Fe(CN)6]."));

let bg3_ironExperiment4Div = createDiv("observation-table-inner-div");
bg3_ironExperimentDiv.appendChild(bg3_ironExperiment4Div);
bg3_ironExperiment4Div.appendChild(createTextField("observation-table-text", "b) To the second part add KSCN (potassium sulphocyanide)."));
// #endregion Experiment

// #region Observation
let bg3_ironObservationDiv = createChemistryColumn("observation");
bg3_ironTable.appendChild(bg3_ironObservationDiv);

let bg3_ironObservation1Div = createDiv("observation-table-inner-div");
bg3_ironObservationDiv.appendChild(bg3_ironObservation1Div);
bg3_ironObservation1Div.appendChild(createTextField("observation-table-text", "Formation of brown precipitate."));

let bg3_ironObservation2Div = createDiv("observation-table-inner-div");
bg3_ironObservationDiv.appendChild(bg3_ironObservation2Div);
bg3_ironObservation2Div.appendChild(createTextField("observation-table-text", "Blue colour solution or precipitate."));

let bg3_ironObservation3Div = createDiv("observation-table-inner-div");
bg3_ironObservationDiv.appendChild(bg3_ironObservation3Div);
bg3_ironObservation3Div.appendChild(createTextField("observation-table-text", "Deep red coloration."));
// #endregion Observation

// #region Inference
let bg3_ironInferenceDiv = createChemistryColumn("inference");
bg3_ironTable.appendChild(bg3_ironInferenceDiv);

let bg3_ironInference1Div = createDiv("observation-table-inner-div");
bg3_ironInferenceDiv.appendChild(bg3_ironInference1Div);
bg3_ironInference1Div.appendChild(createTextField("observation-table-text", "May be Fe3+"));

let bg3_ironInference2Div = createDiv("observation-table-inner-div");
bg3_ironInferenceDiv.appendChild(bg3_ironInference2Div);
bg3_ironInference2Div.appendChild(createTextField("observation-table-text", "Fe3+ Confirmed"));

let bg3_ironInference3Div = createDiv("observation-table-inner-div");
bg3_ironInferenceDiv.appendChild(bg3_ironInference3Div);
bg3_ironInference3Div.appendChild(createTextField("observation-table-text", "Fe3+ Confirmed"));
// #endregion Inference
// #endregion iron Table


// #region Fe Table
basicGroup3Div.appendChild(createTextField("observation-table-header", "Fe"));

let bg3_FeTable = createDiv("observation-table");
basicGroup3Div.appendChild(bg3_FeTable);

// #region Experiment
let bg3_FeExperimentDiv = createChemistryColumn("experiment");
bg3_FeTable.appendChild(bg3_FeExperimentDiv);

let bg3_FeExperiment1Div = createDiv("observation-table-inner-div");
bg3_FeExperimentDiv.appendChild(bg3_FeExperiment1Div);
bg3_FeExperiment1Div.appendChild(createTextField("observation-table-text", "01. Prepare aqueous solution of salt, add K3[Fe(CN)6]."));
// #endregion Experiment

// #region Observation
let bg3_FeObservationDiv = createChemistryColumn("observation");
bg3_FeTable.appendChild(bg3_FeObservationDiv);

let bg3_FeObservation1Div = createDiv("observation-table-inner-div");
bg3_FeObservationDiv.appendChild(bg3_FeObservation1Div);
bg3_FeObservation1Div.appendChild(createTextField("observation-table-text", "Deep blue color."));

let bg3_FeObservation2Div = createDiv("observation-table-inner-div");
bg3_FeObservationDiv.appendChild(bg3_FeObservation2Div);
bg3_FeObservation2Div.appendChild(createTextField("observation-table-text", "Brown precipitate or color."));
// #endregion Observation

// #region Inference
let bg3_FeInferenceDiv = createChemistryColumn("inference");
bg3_FeTable.appendChild(bg3_FeInferenceDiv);

let bg3_FeInference1Div = createDiv("observation-table-inner-div");
bg3_FeInferenceDiv.appendChild(bg3_FeInference1Div);
bg3_FeInference1Div.appendChild(createTextField("observation-table-text", "May be Fe2+"));

let bg3_FeInference2Div = createDiv("observation-table-inner-div");
bg3_FeInferenceDiv.appendChild(bg3_FeInference2Div);
bg3_FeInference2Div.appendChild(createTextField("observation-table-text", "Fe3+ Confirmed"));
// #endregion Inference
// #endregion Fe Table