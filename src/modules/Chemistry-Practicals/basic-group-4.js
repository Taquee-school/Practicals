import {
  createDiv,
  createTextField,
  createChemistryColumn,
} from "../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "chemistry-practical");

let bg4_reagentDiv = createDiv("practical-section-text-div");
experimentDiv.appendChild(bg4_reagentDiv);
bg4_reagentDiv.appendChild(
  createTextField("practical-section-text", "Reagent: "),
);
bg4_reagentDiv.appendChild(
  createTextField("practical-section-value", "NH4Cl + NH4OH + H2S"),
);

// #region zinc Table
experimentDiv.appendChild(createTextField("observation-table-header", "zinc"));

let bg4_zincTable = createDiv("observation-table");
experimentDiv.appendChild(bg4_zincTable);

// #region Experiment
let bg4_zincExperimentDiv = createChemistryColumn("experiment");
bg4_zincTable.appendChild(bg4_zincExperimentDiv);

let bg4_zincExperiment1Div = createDiv("observation-table-inner-div");
bg4_zincExperimentDiv.appendChild(bg4_zincExperiment1Div);
bg4_zincExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare salt solution, add NH4Cl, NH4OH and pass H2S.",
  ),
);

let bg4_zincExperiment2Div = createDiv("observation-table-inner-div");
bg4_zincExperimentDiv.appendChild(bg4_zincExperiment2Div);
bg4_zincExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the precipitate in dil. HCl and NaOH.",
  ),
);
// #endregion Experiment

// #region Observation
let bg4_zincObservationDiv = createChemistryColumn("observation");
bg4_zincTable.appendChild(bg4_zincObservationDiv);

let bg4_zincObservation1Div = createDiv("observation-table-inner-div");
bg4_zincObservationDiv.appendChild(bg4_zincObservation1Div);
bg4_zincObservation1Div.appendChild(
  createTextField("observation-table-text", "Dirty white precipitate."),
);

let bg4_zincObservation2Div = createDiv("observation-table-inner-div");
bg4_zincObservationDiv.appendChild(bg4_zincObservation2Div);
bg4_zincObservation2Div.appendChild(
  createTextField("observation-table-text", "Formation of white precipitate."),
);
// #endregion Observation

// #region Inference
let bg4_zincInferenceDiv = createChemistryColumn("inference");
bg4_zincTable.appendChild(bg4_zincInferenceDiv);

let bg4_zincInference1Div = createDiv("observation-table-inner-div");
bg4_zincInferenceDiv.appendChild(bg4_zincInference1Div);
bg4_zincInference1Div.appendChild(
  createTextField("observation-table-text", "May be Zn"),
);

let bg4_zincInference2Div = createDiv("observation-table-inner-div");
bg4_zincInferenceDiv.appendChild(bg4_zincInference2Div);
bg4_zincInference2Div.appendChild(
  createTextField("observation-table-text", "Zn Confirmed"),
);
// #endregion Inference
// #endregion zinc Table

// #region manganese Table
experimentDiv.appendChild(
  createTextField("observation-table-header", "manganese"),
);

let bg4_manganeseTable = createDiv("observation-table");
experimentDiv.appendChild(bg4_manganeseTable);

// #region Experiment
let bg4_manganeseExperimentDiv = createChemistryColumn("experiment");
bg4_manganeseTable.appendChild(bg4_manganeseExperimentDiv);

let bg4_manganeseExperiment1Div = createDiv("observation-table-inner-div");
bg4_manganeseExperimentDiv.appendChild(bg4_manganeseExperiment1Div);
bg4_manganeseExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare salt solution, add NH4Cl, NH4OH and pass H2S.",
  ),
);

let bg4_manganeseExperiment2Div = createDiv("observation-table-inner-div");
bg4_manganeseExperimentDiv.appendChild(bg4_manganeseExperiment2Div);
bg4_manganeseExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the precipitate in dil. HCl and NaOH.",
  ),
);
// #endregion Experiment

// #region Observation
let bg4_manganeseObservationDiv = createChemistryColumn("observation");
bg4_manganeseTable.appendChild(bg4_manganeseObservationDiv);

let bg4_manganeseObservation1Div = createDiv("observation-table-inner-div");
bg4_manganeseObservationDiv.appendChild(bg4_manganeseObservation1Div);
bg4_manganeseObservation1Div.appendChild(
  createTextField(
    "observation-table-text",
    "Brown or buff colour precipitate.",
  ),
);

let bg4_manganeseObservation2Div = createDiv("observation-table-inner-div");
bg4_manganeseObservationDiv.appendChild(bg4_manganeseObservation2Div);
bg4_manganeseObservation2Div.appendChild(
  createTextField(
    "observation-table-text",
    "White precipitate which turns brown on exposure to the atmosphere.",
  ),
);
// #endregion Observation

// #region Inference
let bg4_manganeseInferenceDiv = createChemistryColumn("inference");
bg4_manganeseTable.appendChild(bg4_manganeseInferenceDiv);

let bg4_manganeseInference1Div = createDiv("observation-table-inner-div");
bg4_manganeseInferenceDiv.appendChild(bg4_manganeseInference1Div);
bg4_manganeseInference1Div.appendChild(
  createTextField("observation-table-text", "May be Mn"),
);

let bg4_manganeseInference2Div = createDiv("observation-table-inner-div");
bg4_manganeseInferenceDiv.appendChild(bg4_manganeseInference2Div);
bg4_manganeseInference2Div.appendChild(
  createTextField("observation-table-text", "Mn Confirmed"),
);
// #endregion Inference
// #endregion manganese Table

// #region nickelCobalt Table
experimentDiv.appendChild(
  createTextField("observation-table-header", "Nickel & Cobalt"),
);

let bg4_nickelCobaltTable = createDiv("observation-table");
experimentDiv.appendChild(bg4_nickelCobaltTable);

// #region Experiment
let bg4_nickelCobaltExperimentDiv = createChemistryColumn("experiment");
bg4_nickelCobaltTable.appendChild(bg4_nickelCobaltExperimentDiv);

let bg4_nickelCobaltExperiment1Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltExperimentDiv.appendChild(bg4_nickelCobaltExperiment1Div);
bg4_nickelCobaltExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare salt solution, add NH4Cl, NH4OH and pass H2S.",
  ),
);

let bg4_nickelCobaltExperiment2Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltExperimentDiv.appendChild(bg4_nickelCobaltExperiment2Div);
bg4_nickelCobaltExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the black precipitates in aqua regia, evaporate to dryness cool and add water, divide in two parts.",
  ),
);

let bg4_nickelCobaltExperiment3Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltExperimentDiv.appendChild(bg4_nickelCobaltExperiment3Div);
bg4_nickelCobaltExperiment3Div.appendChild(
  createTextField(
    "observation-table-text",
    "a) To the first part add (2-5m) Dimethylglyoxime and NH⁴OH Solution.",
  ),
);

let bg4_nickelCobaltExperiment4Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltExperimentDiv.appendChild(bg4_nickelCobaltExperiment4Div);
bg4_nickelCobaltExperiment4Div.appendChild(
  createTextField(
    "observation-table-text",
    "b) If Ni is absent. To the second part add 1 ml amyl alcohol and add ammonium sulphocyanide.",
  ),
);
// #endregion Experiment

// #region Observation
let bg4_nickelCobaltObservationDiv = createChemistryColumn("observation");
bg4_nickelCobaltTable.appendChild(bg4_nickelCobaltObservationDiv);

let bg4_nickelCobaltObservation1Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltObservationDiv.appendChild(bg4_nickelCobaltObservation1Div);
bg4_nickelCobaltObservation1Div.appendChild(
  createTextField(
    "observation-table-text",
    "Formation of black colour precipitate.",
  ),
);

let bg4_nickelCobaltObservation2Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltObservationDiv.appendChild(bg4_nickelCobaltObservation2Div);
bg4_nickelCobaltObservation2Div.appendChild(
  createTextField("observation-table-text", ""),
);

let bg4_nickelCobaltObservation3Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltObservationDiv.appendChild(bg4_nickelCobaltObservation3Div);
bg4_nickelCobaltObservation3Div.appendChild(
  createTextField(
    "observation-table-text",
    "Formation of pink color precipitate.",
  ),
);

let bg4_nickelCobaltObservation4Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltObservationDiv.appendChild(bg4_nickelCobaltObservation4Div);
bg4_nickelCobaltObservation4Div.appendChild(
  createTextField(
    "observation-table-text",
    "Deep blue colour in alcoholic layer.",
  ),
);
// #endregion Observation

// #region Inference
let bg4_nickelCobaltInferenceDiv = createChemistryColumn("inference");
bg4_nickelCobaltTable.appendChild(bg4_nickelCobaltInferenceDiv);

let bg4_nickelCobaltInference1Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltInferenceDiv.appendChild(bg4_nickelCobaltInference1Div);
bg4_nickelCobaltInference1Div.appendChild(
  createTextField("observation-table-text", "May be Ni or Co"),
);

let bg4_nickelCobaltInference2Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltInferenceDiv.appendChild(bg4_nickelCobaltInference2Div);
bg4_nickelCobaltInference2Div.appendChild(
  createTextField("observation-table-text", ""),
);

let bg4_nickelCobaltInference3Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltInferenceDiv.appendChild(bg4_nickelCobaltInference3Div);
bg4_nickelCobaltInference3Div.appendChild(
  createTextField("observation-table-text", "Ni confirmed"),
);

let bg4_nickelCobaltInference4Div = createDiv("observation-table-inner-div");
bg4_nickelCobaltInferenceDiv.appendChild(bg4_nickelCobaltInference4Div);
bg4_nickelCobaltInference4Div.appendChild(
  createTextField("observation-table-text", "Cu confirmed"),
);
// #endregion Inference
// #endregion nickelCobalt Table
