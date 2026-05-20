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
const backBtn = createElement("button", {
  title: "Back",
  className: "toggle",
}, [ createElement("i", { className: "ph-bold ph-caret-left" }) ]);
backBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Practical",
});
panelNameDiv.append( backBtn, panelName );

const utilityDiv = createElement("div", { });

topBar.append( panelNameDiv, utilityDiv );
//#endregion top bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});


const class12_practicals: Record<string,string> = {
  "path": "../../assets/Physics-Practicals/class-12/",
  "ohms_law": "ohms-law",
  "pn_junction": "pn-junction",
  "meter_bridge": "meter-bridge",
  "half_deflection": "half-deflection",
  "ac_sonometer": "ac-sonometer",
  "convex_lens": "convex-lens",
  "concave_mirror": "concave-mirror",
  "convex_mirror": "convex-mirror",
  "concave_lens": "concave-lens",
}

const class11_practicals: Record<string,string> = {
  "path": "../../assets/Physics-Practicals/class-11/",
  "screw_gauge": "screw-gauge",
  "vernier_calipers": "vernier-calipers",
  "parallelogram": "parallelogram",
  "spherometer": "spherometer",
  "simple_pendulum": "simple-pendulum",
  "somometer": "sonometer",
  "helical_spring": "helical-spring",
  "resonance_tube": "resonance-tube",
}

const classMap: Record<string, Record<string, string>> = {
  "class=11": class11_practicals,
  "class=12": class12_practicals,
}

export function practicalsHashHandler(attr: string[]) {
  let practical = "";
  let _class = "";
  
  attr.forEach(pr => {
    if (pr.startsWith("class=")) {
      _class = pr;
    }
    else if (pr.startsWith("practical=")) {
      practical = pr.split("=")[1] ?? "";
    }
  });
  
  if (!practical || !_class) {
    window.location.hash = "#home";
    return;
  }
  
  const sourcePathRecord = classMap[_class];
  if (!sourcePathRecord) {
    window.location.hash = "#home";
    return;
  }
  const pathExt = sourcePathRecord["path"]!;
  const UIPath = sourcePathRecord[practical];
  if (!UIPath) {
    window.location.hash = "#home";
    return;
  }

  showPractical(pathExt+UIPath+".js");
}

async function showPractical(path: string) {
  contentDiv.innerHTML = "";

  const { experimentDiv } = await import(path);
  contentDiv.appendChild( experimentDiv );
}

contentDiv.append( );
//#endregion content

practicalsPanel.append( topBar, contentDiv );