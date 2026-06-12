import {
  createDiv,
  createTextField,
  createChemistryColumn,
} from "../../utils/practical.js";

export const experimentDiv = createDiv("practical-file", "chemistry-practical");

let bg2_reagentDiv = createDiv("practical-section-text-div");
experimentDiv.appendChild(bg2_reagentDiv);
bg2_reagentDiv.appendChild(
  createTextField("practical-section-text", "Reagent: "),
);
bg2_reagentDiv.appendChild(
  createTextField("practical-section-value", "dil. HCl + H2S"),
);

// #region Lead Table
experimentDiv.appendChild(createTextField("observation-table-header", "lead"));

let bg2_leadTable = createDiv("observation-table");
experimentDiv.appendChild(bg2_leadTable);

// #region Experiment
let bg2_leadExperimentDiv = createChemistryColumn("experiment");
bg2_leadTable.appendChild(bg2_leadExperimentDiv);

let bg2_leadExperiment1Div = createDiv("observation-table-inner-div");
bg2_leadExperimentDiv.appendChild(bg2_leadExperiment1Div);
bg2_leadExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare aqueous solution, add dil. HCI and pass H2S gas.",
  ),
);

let bg2_leadExperiment2Div = createDiv("observation-table-inner-div");
bg2_leadExperimentDiv.appendChild(bg2_leadExperiment2Div);
bg2_leadExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the precipitate in 50% nitric acid and divide in the two parts.",
  ),
);

let bg2_leadExperiment3Div = createDiv("observation-table-inner-div");
bg2_leadExperimentDiv.appendChild(bg2_leadExperiment3Div);
bg2_leadExperiment3Div.appendChild(
  createTextField(
    "observation-table-text",
    "a) To the first portion add potassium chromate solution.",
  ),
);

let bg2_leadExperiment4Div = createDiv("observation-table-inner-div");
bg2_leadExperimentDiv.appendChild(bg2_leadExperiment4Div);
bg2_leadExperiment4Div.appendChild(
  createTextField(
    "observation-table-text",
    "b) To the second portion add potassium iodide solution.",
  ),
);

// #endregion Experiment

// #region Observation
let bg2_leadObservationDiv = createChemistryColumn("observation");
bg2_leadTable.appendChild(bg2_leadObservationDiv);

let bg2_leadObservation1Div = createDiv("observation-table-inner-div");
bg2_leadObservationDiv.appendChild(bg2_leadObservation1Div);
bg2_leadObservation1Div.appendChild(
  createTextField("observation-table-text", "Formation of black precipitate."),
);

let bg2_leadObservation2Div = createDiv("observation-table-inner-div");
bg2_leadObservationDiv.appendChild(bg2_leadObservation2Div);
bg2_leadObservation2Div.appendChild(
  createTextField("observation-table-text", "Colourless clear solution."),
);

let bg2_leadObservation3Div = createDiv("observation-table-inner-div");
bg2_leadObservationDiv.appendChild(bg2_leadObservation3Div);
bg2_leadObservation3Div.appendChild(
  createTextField("observation-table-text", "Formation of yellow precipitate."),
);

let bg2_leadObservation4Div = createDiv("observation-table-inner-div");
bg2_leadObservationDiv.appendChild(bg2_leadObservation4Div);
bg2_leadObservation4Div.appendChild(
  createTextField("observation-table-text", "Formation of orange precipitate."),
);
// #endregion Observation

// #region Inference
let bg2_leadInferenceDiv = createChemistryColumn("inference");
bg2_leadTable.appendChild(bg2_leadInferenceDiv);

let bg2_leadInference1Div = createDiv("observation-table-inner-div");
bg2_leadInferenceDiv.appendChild(bg2_leadInference1Div);
bg2_leadInference1Div.appendChild(
  createTextField("observation-table-text", "May be Pb2+,Cu2+"),
);

let bg2_leadInference2Div = createDiv("observation-table-inner-div");
bg2_leadInferenceDiv.appendChild(bg2_leadInference2Div);
bg2_leadInference2Div.appendChild(
  createTextField("observation-table-text", "May be Pb2+"),
);

let bg2_leadInference3Div = createDiv("observation-table-inner-div");
bg2_leadInferenceDiv.appendChild(bg2_leadInference3Div);
bg2_leadInference3Div.appendChild(
  createTextField("observation-table-text", "Pb2+ Confirmed"),
);

let bg2_leadInference4Div = createDiv("observation-table-inner-div");
bg2_leadInferenceDiv.appendChild(bg2_leadInference4Div);
bg2_leadInference4Div.appendChild(
  createTextField("observation-table-text", "Pb2+ Confirmed"),
);
// #endregion Inference
// #endregion lead Table

// #region Copper Table
experimentDiv.appendChild(
  createTextField("observation-table-header", "copper"),
);

let bg2_copperTable = createDiv("observation-table");
experimentDiv.appendChild(bg2_copperTable);

// #region Experiment
let bg2_copperExperimentDiv = createChemistryColumn("experiment");
bg2_copperTable.appendChild(bg2_copperExperimentDiv);

let bg2_copperExperiment1Div = createDiv("observation-table-inner-div");
bg2_copperExperimentDiv.appendChild(bg2_copperExperiment1Div);
bg2_copperExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare aqueous solution, add dil. HCI and pass H2S gas.",
  ),
);

let bg2_copperExperiment2Div = createDiv("observation-table-inner-div");
bg2_copperExperimentDiv.appendChild(bg2_copperExperiment2Div);
bg2_copperExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the precipitate in 50% nitric acid and divide in the two parts.",
  ),
);

let bg2_copperExperiment3Div = createDiv("observation-table-inner-div");
bg2_copperExperimentDiv.appendChild(bg2_copperExperiment3Div);
bg2_copperExperiment3Div.appendChild(
  createTextField("observation-table-text", "a) To the first part add NH4OH."),
);

let bg2_copperExperiment4Div = createDiv("observation-table-inner-div");
bg2_copperExperimentDiv.appendChild(bg2_copperExperiment4Div);
bg2_copperExperiment4Div.appendChild(
  createTextField(
    "observation-table-text",
    "b) To the second part add acetic acid and K3[Fe(CN)6] (potassium Ferrocyanide).",
  ),
);
// #endregion Experiment

// #region Observation
let bg2_copperObservationDiv = createChemistryColumn("observation");
bg2_copperTable.appendChild(bg2_copperObservationDiv);

let bg2_copperObservation1Div = createDiv("observation-table-inner-div");
bg2_copperObservationDiv.appendChild(bg2_copperObservation1Div);
bg2_copperObservation1Div.appendChild(
  createTextField("observation-table-text", "Formation of black precipitate."),
);

let bg2_copperObservation2Div = createDiv("observation-table-inner-div");
bg2_copperObservationDiv.appendChild(bg2_copperObservation2Div);
bg2_copperObservation2Div.appendChild(
  createTextField(
    "observation-table-text",
    "Formation of bluish green solution.",
  ),
);

let bg2_copperObservation3Div = createDiv("observation-table-inner-div");
bg2_copperObservationDiv.appendChild(bg2_copperObservation3Div);
bg2_copperObservation3Div.appendChild(
  createTextField("observation-table-text", "Formation of deep blue solution."),
);

let bg2_copperObservation4Div = createDiv("observation-table-inner-div");
bg2_copperObservationDiv.appendChild(bg2_copperObservation4Div);
bg2_copperObservation4Div.appendChild(
  createTextField("observation-table-text", "Chocolate color precipitate."),
);
// #endregion Observation

// #region Inference
let bg2_copperInferenceDiv = createChemistryColumn("inference");
bg2_copperTable.appendChild(bg2_copperInferenceDiv);

let bg2_copperInference1Div = createDiv("observation-table-inner-div");
bg2_copperInferenceDiv.appendChild(bg2_copperInference1Div);
bg2_copperInference1Div.appendChild(
  createTextField("observation-table-text", "May be Cu2+, Pb2+"),
);

let bg2_copperInference2Div = createDiv("observation-table-inner-div");
bg2_copperInferenceDiv.appendChild(bg2_copperInference2Div);
bg2_copperInference2Div.appendChild(
  createTextField("observation-table-text", "May be Cu2+"),
);

let bg2_copperInference3Div = createDiv("observation-table-inner-div");
bg2_copperInferenceDiv.appendChild(bg2_copperInference3Div);
bg2_copperInference3Div.appendChild(
  createTextField("observation-table-text", "Cu2+ Confirmed"),
);

let bg2_copperInference4Div = createDiv("observation-table-inner-div");
bg2_copperInferenceDiv.appendChild(bg2_copperInference4Div);
bg2_copperInference4Div.appendChild(
  createTextField("observation-table-text", "Cu2+ Confirmed"),
);
// #endregion Inference
// #endregion copper Table

// #region Cadmium Table
experimentDiv.appendChild(
  createTextField("observation-table-header", "cadmium"),
);

let bg2_cadmiumTable = createDiv("observation-table");
experimentDiv.appendChild(bg2_cadmiumTable);

// #region Experiment
let bg2_cadmiumExperimentDiv = createChemistryColumn("experiment");
bg2_cadmiumTable.appendChild(bg2_cadmiumExperimentDiv);

let bg2_cadmiumExperiment1Div = createDiv("observation-table-inner-div");
bg2_cadmiumExperimentDiv.appendChild(bg2_cadmiumExperiment1Div);
bg2_cadmiumExperiment1Div.appendChild(
  createTextField(
    "observation-table-text",
    "01. Prepare aqueous solution, add dil. HCI and pass H2S gas.",
  ),
);

let bg2_cadmiumExperiment2Div = createDiv("observation-table-inner-div");
bg2_cadmiumExperimentDiv.appendChild(bg2_cadmiumExperiment2Div);
bg2_cadmiumExperiment2Div.appendChild(
  createTextField(
    "observation-table-text",
    "02. Dissolve the yellow precipitate in dil. HCI add sodium hydroxide solution.",
  ),
);
// #endregion Experiment

// #region Observation
let bg2_cadmiumObservationDiv = createChemistryColumn("observation");
bg2_cadmiumTable.appendChild(bg2_cadmiumObservationDiv);

let bg2_cadmiumObservation1Div = createDiv("observation-table-inner-div");
bg2_cadmiumObservationDiv.appendChild(bg2_cadmiumObservation1Div);
bg2_cadmiumObservation1Div.appendChild(
  createTextField("observation-table-text", "Formation of yellow precipitate"),
);

let bg2_cadmiumObservation2Div = createDiv("observation-table-inner-div");
bg2_cadmiumObservationDiv.appendChild(bg2_cadmiumObservation2Div);
bg2_cadmiumObservation2Div.appendChild(
  createTextField("observation-table-text", "Formation of white precipitate"),
);
// #endregion Observation

// #region Inference
let bg2_cadmiumInferenceDiv = createChemistryColumn("inference");
bg2_cadmiumTable.appendChild(bg2_cadmiumInferenceDiv);

let bg2_cadmiumInference1Div = createDiv("observation-table-inner-div");
bg2_cadmiumInferenceDiv.appendChild(bg2_cadmiumInference1Div);
bg2_cadmiumInference1Div.appendChild(
  createTextField("observation-table-text", "May be Cd2+"),
);

let bg2_cadmiumInference2Div = createDiv("observation-table-inner-div");
bg2_cadmiumInferenceDiv.appendChild(bg2_cadmiumInference2Div);
bg2_cadmiumInference2Div.appendChild(
  createTextField("observation-table-text", "Cd2+ Confirmed"),
);
// #endregion Inference
// #endregion cadmium Table
