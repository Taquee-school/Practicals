import "./page.css";

import { errorScreen, showError } from "../../components/error/script.js";
import { loader } from "../../components/loader/script.js";
import { createElement } from "../../utils/create-dom.js";

export const practicalsPanel = createElement("div", {
  id: "practicals-panel",
  className: "app-panel",
});

//#region top bar
const topBar = createElement("div", {
  className: "panel-bar",
});

const panelNameDiv = createElement("div", {
  className: "panel-name-div",
});
const backBtn = createElement(
  "button",
  {
    title: "Back",
    className: "toggle",
  },
  [createElement("i", { className: "ph-bold ph-caret-left" })],
);
backBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Practical",
});
panelNameDiv.append(backBtn, panelName);

const utilityDiv = createElement("div", {});

topBar.append(panelNameDiv, utilityDiv);
//#endregion top bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

//#region hash handler
type HashMap = Record<string, string>;
type HashMapSource = Record<string, Record<string, string>>;

const class12_physics_practicals: HashMap = {
  path: "Physics-Practicals/class-12/",
  ohms_law: "ohms-law",
  pn_junction: "pn-junction",
  meter_bridge: "meter-bridge",
  half_deflection: "half-deflection",
  ac_sonometer: "ac-sonometer",
  convex_lens: "convex-lens",
  concave_mirror: "concave-mirror",
  convex_mirror: "convex-mirror",
  concave_lens: "concave-lens",
};

const class11_physics_practicals: HashMap = {
  path: "Physics-Practicals/class-11/",
  screw_gauge: "screw-gauge",
  vernier_calipers: "vernier-calipers",
  parallelogram: "parallelogram",
  spherometer: "spherometer",
  simple_pendulum: "simple-pendulum",
  somometer: "sonometer",
  helical_spring: "helical-spring",
  resonance_tube: "resonance-tube",
};

const chemistry_practicals: HashMap = {
  path: "Chemistry-Practicals/",
  acid_group_1: "acid-group-1",
  acid_group_2: "acid-group-2",
  acid_group_3: "acid-group-3",
  basic_group_0: "basic-group-0",
  basic_group_1: "basic-group-1",
  basic_group_2: "basic-group-2",
  basic_group_3: "basic-group-3",
  basic_group_4: "basic-group-4",
  basic_group_5: "basic-group-5",
  basic_group_6: "basic-group-6",
};

const class11_subject_map: HashMapSource = {
  chemistry: chemistry_practicals,
  physics: class11_physics_practicals,
};

const class12_subject_map: HashMapSource = {
  chemistry: chemistry_practicals,
  physics: class12_physics_practicals,
};

const classMap: Record<string, HashMapSource> = {
  "class=11": class11_subject_map,
  "class=12": class12_subject_map,
};

type ExperimentInfo = {
  subject: string;
  eclass: string;
  practical: string;
};

/** The hash handler for practicals page */
export async function hashHandler(attr: string[]) {
  const experimentInfo: ExperimentInfo = {
    subject: "",
    eclass: "",
    practical: "",
  };

  attr.forEach((part) => {
    part = part.toLocaleLowerCase();

    if (part.startsWith("class=")) {
      experimentInfo.eclass = part;
    } else if (part.startsWith("practical=")) {
      experimentInfo.practical = part.split("=")[1] ?? "";
    } else if (part.startsWith("subject=")) {
      experimentInfo.subject = part.split("=")[1] ?? "";
    }
  });

  const response = getPath(experimentInfo);
  if (!response) {
    window.location.hash = "#home";
    return;
  }
  showPractical(response);
}

function getPath(ei: ExperimentInfo): false | string {
  if (!ei.subject || !ei.practical) return false;

  let practicalMap: HashMap | undefined;

  if (ei.subject == "chemistry") {
    practicalMap = chemistry_practicals;
  } else if (ei.subject == "physics") {
    if (ei.eclass.length <= 0) return false;

    const subjectMap = classMap[ei.eclass];
    if (!subjectMap) return false;

    practicalMap = subjectMap[ei.subject];
  }

  if (!practicalMap) return false;

  const word = practicalMap[ei.practical];
  if (!word) return false;

  const pathExtension = practicalMap["path"]!;

  return pathExtension + word + ".js";
}

const modules = import.meta.glob("../../modules/**/*.js");

type ErrorResponse = {
  ok: false;
  retry: boolean;
  message: string;
};
type SuccessResponse = {
  ok: true;
  element: HTMLDivElement;
};

/** It takes the experiment file path and displays it. */
async function loadModule(
  path: string,
): Promise<ErrorResponse | SuccessResponse> {
  const fullPath = `../../modules/${path}`;
  const src = modules[fullPath];
  if (!src) {
    return {
      ok: false,
      retry: false,
      message: "file not found",
    };
  }
  try {
    const module: any = await src();
    return {
      ok: true,
      element: module.experimentDiv as HTMLDivElement,
    };
  } catch {
    return {
      ok: false,
      retry: true,
      message: "network error",
    };
  }
}

async function showPractical(path: string, wait = 200) {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(loader);

  const response2 = await loadModule(path);

  if (!response2.ok) {
    if (response2.retry) {
      const icon = createElement("i", {
        className: "ph-bold ph-link-break",
      });

      const retrybtn = createElement(
        "button",
        {
          title: "Retry",
          id: "retry-btn",
          className: "error-btn",
        },
        [
          createElement("i", {
            className: "ph-bold ph-arrow-counter-clockwise",
          }),
          createElement("p", {
            textContent: "retry",
          }),
        ],
      );

      retrybtn.addEventListener("click", async () => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(loader);
        setTimeout(() => {
          showPractical(path, wait * 1.5);
        }, wait);
      });
      showError(response2.message, icon, retrybtn);
    } else {
      showError(response2.message);
    }

    contentDiv.innerHTML = "";
    contentDiv.appendChild(errorScreen);
  } else {
    if (contentDiv.contains(loader)) contentDiv.removeChild(loader);
    contentDiv.appendChild(response2.element);
  }
}
//#endregion hash handler

contentDiv.append();
//#endregion content

practicalsPanel.append(topBar, contentDiv);
