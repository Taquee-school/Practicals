addStyle("Physics-Practicals/physicsPracticalFile.css", "physics-practical-style").onload = () => {
  if (physicsTabContent.contains(loadingTab)) {
    physicsTabContent.removeChild(loadingTab);
  }
  load12th_practicals();
};


// #region UI Functions
function createImg(className, path) {
  let img = document.createElement("img");
  img.className = className;
  img.src = path;
  return img;
}


function createPAS(number, content, contentIsDiv = false) {
  let div = document.createElement("div");
  div.className = "pas-div";

  let noDiv = document.createElement("div");
  div.appendChild(noDiv);
  noDiv.className = "pas-number-div";

  let No = document.createElement("p");
  noDiv.appendChild(No);
  No.textContent = `${number}.`;

  if (contentIsDiv) {
    div.appendChild(content);
    content.style.width = "80%";
  } else {
    let pDiv = document.createElement("div");
    div.appendChild(pDiv);
    pDiv.className = "pas-text-div";

    let p = document.createElement("p");
    pDiv.appendChild(p);
    p.textContent = content;
  }

  return div;
}

function createInput(
  id,
  type,
  value = 0,
  inputFunction = null,
  readOnly = false
) {
  let input = document.createElement("input");
  if (id) input.id = id;
  input.type = type;
  input.value = value;
  input.oninput = inputFunction;
  input.readOnly = readOnly;
  return input;
}

function createInputDiv(label, inputElement, extraLabel = null) {
  let div = document.createElement("div");
  div.className = "practical-section-input-div";

  let p1 = document.createElement("p");
  div.appendChild(p1);
  p1.textContent = label;
  p1.appendChild(inputElement);

  if (extraLabel) {
    let p2 = document.createElement("span");
    p2.textContent = extraLabel;
    p1.appendChild(p2);
  }

  return div;
}

function createTableColumn(header) {
  let column = document.createElement("div");
  column.className = "observation-table-column";

  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  columnHeader.appendChild(createTextField(null, header));
  column.appendChild(columnHeader);

  return column;
}

function createColumn(
  header,
  numberOfRows,
  idPattern,
  type,
  value,
  inputFunction,
  readOnly = false
) {
  let column = document.createElement("div");
  column.className = "observation-table-column";

  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  columnHeader.appendChild(createTextField(null, header));
  column.appendChild(columnHeader);

  for (let i = 1; i <= numberOfRows; i++) {
    if (Array.isArray(value)) {
      if (idPattern) {
        column.appendChild(
          createInput(
            `${idPattern}-${i}`,
            type,
            value[i - 1],
            inputFunction,
            readOnly
          )
        );
      } else {
        column.appendChild(
          createInput(null, type, value[i - 1], inputFunction, readOnly)
        );
      }
    } else {
      column.appendChild(
        createInput(`${idPattern}-${i}`, type, value, inputFunction, readOnly)
      );
    }
  }

  return column;
}
// #endregion UI Functions

// #region Helper Functions
function abs(x) {
  return x < 0 ? -x : x;
}

let decimalPlaceInScientificNotation = 2;

function changeToStandard(text) {
  let num = parseFloat(text);
  let order = Math.floor(Math.log10(num));
  let standard = num / Math.pow(10, order);
  return `${standard.toFixed(decimalPlaceInScientificNotation)}x10^${order}`;
}
// #endregion Helper Functions

let physicsPracticalsList = createDiv("practicals-list-div");
physicsTabContent.appendChild(physicsPracticalsList);

function load11th_practicals() {
  let class11_list = createDiv("practicals-list list-view");
  physicsPracticalsList.appendChild(createTextField("practicals-list-class-header", "Class 11"));
  physicsPracticalsList.appendChild(class11_list);


  let bn_screwGauge = createListButton(class11_list, "screw-gauge-btn", "Screw Gauge");
  bn_screwGauge.addEventListener("click", () => {
    try {
      openFile(screwGaugeDiv, "Screw Gauge");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/screwGauge.js", "screw-gauge-script").onload = () => {
        openFile(screwGaugeDiv, "Screw Gauge");
      };
    }
    currentVideoUrl =
      "https://drive.google.com/file/d/1lBkIvbWmfZWRDs6etad8C4U_xo8DQn25/preview";
  });

  let bn_vernierCalipers = createListButton(class11_list, "vernier-calipers-btn", "Vernier Calipers");
  bn_vernierCalipers.addEventListener("click", () => {
    try {
      openFile(vernierCalipersDiv, "Vernier Calipers");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/vernierCalipers.js", "vernier-calipers-script").onload = () => {
        openFile(vernierCalipersDiv, "Vernier Calipers");
      };
    }
    currentVideoUrl =
      "https://drive.google.com/file/d/1ZMe6Il6GPCpOwDmVozfzEH7xWi6AZvEn/preview";
  });

  let bn_sonometer = createListButton(class11_list, "sonometer-btn", "Sonometer");
  bn_sonometer.addEventListener("click", () => {
    try {
      openFile(sonometerDiv, "Sonometer");
      helpVideoText.style.display = "none";
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/sonometer.js", "sonometer-script").onload = () => {
        openFile(sonometerDiv, "Sonometer");
      };
    }
    videoFrame =
      "https://drive.google.com/file/d/140FEbQuZcTjWiXsHGKzhvhvzk7ETLBuC/preview";
    helpVideoText.style.display = "none";
  });

  let bn_parallelogram = createListButton(class11_list, "parallelogram-btn", "Parallelogram");
  bn_parallelogram.addEventListener("click", () => {
    try {
      openFile(parallelogramDiv, "Parallelogram");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/parallelogram.js", "parallelogram-script").onload = () => {
        openFile(parallelogramDiv, "Parallelogram");
      };
    }
    videoFrame.src =
    "https://drive.google.com/file/d/1e52vBtlWzb3vhqnFmYRSVS3NfdGcy0eT/preview";
    helpVideoText.style.display = "none";
  });

  let bn_simplePendulum = createListButton(class11_list, "simple-pendulum-btn", "Simple Pendulum");
  bn_simplePendulum.addEventListener("click", () => {
    try {
      openFile(simplePendulumDiv, "Simple Pendulum");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/simplePendulum.js", "simple-pendulum-script").onload = () => {
        openFile(simplePendulumDiv, "Simple Pendulum");
      };
    }
    videoFrame.src =
      "https://drive.google.com/file/d/1qhtfKsVuH3hUYDStS2UO8es-zy8yDg8u/preview";
    helpVideoText.style.display = "none";
  });

  let bn_spherometer = createListButton(class11_list, "spherometer-btn", "Spherometer");
  bn_spherometer.addEventListener("click", () => {
    try {
      openFile(spherometerDiv, "Spherometer");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/spherometer.js", "spherometer-script").onload = () => {
        openFile(spherometerDiv, "Spherometer");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });


  let bn_helicalSpring = createListButton(class11_list, "helical-spring-btn", "Helical Spring");
  bn_helicalSpring.addEventListener("click", () => {
    try {
      openFile(helicalSpringDiv, "Helical Spring");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/helicalSpring.js", "helical-spring-script").onload = () => {
        openFile(helicalSpringDiv, "Helical Spring");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let bn_resonanceTube = createListButton(class11_list, "resonance-tube-btn", "Resonance Tube");
  bn_resonanceTube.addEventListener("click", () => {
    try {
      openFile(resonanceTubeDiv, "Resonance Tube");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 11/resonanceTube.js", "resonance-tube-script").onload = () => {
        openFile(resonanceTubeDiv, "Resonance Tube");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });
}

function load12th_practicals() {
  let class12_list = createDiv("practicals-list list-view");
  physicsPracticalsList.appendChild(createTextField("practicals-list-class-header", "Class 12"));
  physicsPracticalsList.appendChild(class12_list);


  let bn_ohmsLaw = createListButton(class12_list, "ohms-law-btn", "Ohm's Law");
  bn_ohmsLaw.addEventListener("click", () => {
    try {
      openFile(ohmsLawDiv, "Ohm's Law");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/ohmsLaw.js", "ohms-law-script").onload = () => {
        openFile(ohmsLawDiv, "Ohm's Law");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let bn_pnJunction = createListButton(class12_list, "pn-junction-btn", "PN Junction");
  bn_pnJunction.addEventListener("click", () => {
    try {
      openFile(pnJunctionDiv, "PN Junction");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/pnJunction.js", "pn-junction-script").onload = () => {
        openFile(pnJunctionDiv, "PN Junction");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let bn_meterBridge = createListButton(class12_list, "meter-bridge-btn", "Meter Bridge");
  bn_meterBridge.addEventListener("click", () => {
    try {
      openFile(meterBridgeDiv, "Meter Bridge");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/meterBridge.js", "meter-bridge-script").onload = () => {
        openFile(meterBridgeDiv, "Meter Bridge");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let bn_halfDeflection = createListButton(class12_list, "half-deflection-btn", "Half Deflection");
  bn_halfDeflection.addEventListener("click", () => {
    try {
      openFile(halfDeflectionDiv, "Half Deflection");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/halfDeflection.js", "half-deflection-script").onload = () => {
        openFile(halfDeflectionDiv, "Half Deflection");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let bn_acsonometer = createListButton(class12_list, "ac-sonometer-btn", "AC Sonometer");
  bn_acsonometer.addEventListener("click", () => {
    try {
      openFile(acSonometerDiv, "AC Sonometer");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/acSonometer.js", "ac-sonometer-script").onload = () => {
        openFile(acSonometerDiv, "AC Sonometer");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let convexLens = createListButton(class12_list, "convex-lens-btn", "Convex Lens");
  convexLens.addEventListener("click", () => {
    try {
      openFile(convexLensDiv, "Convex Lens");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/convexLens.js", "convex-lens-script").onload = () => {
        openFile(convexLensDiv, "Convex Lens");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let concaveMirror = createListButton(class12_list, "concave-mirror-btn", "Concave Mirror");
  concaveMirror.addEventListener("click", () => {
    try {
      openFile(concaveMirrorDiv, "Concave Mirror");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/concaveMirror.js", "concave-mirror-script").onload = () => {
        openFile(concaveMirrorDiv, "Concave Mirror");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let convexMirror = createListButton(class12_list, "convex-mirror-btn", "Convex Mirror");
  convexMirror.addEventListener("click", () => {
    try {
      openFile(convexMirrorDiv, "Convex Mirror");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/convexMirror.js", "convex-mirror-script").onload = () => {
        openFile(convexMirrorDiv, "Convex Mirror");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });

  let concaveLens = createListButton(class12_list, "concave-lens-btn", "Concave Lens");
  concaveLens.addEventListener("click", () => {
    try {
      openFile(concaveLensDiv, "Concave Lens");
    } catch {
      showPracticalLoading();
      addScript("Physics-Practicals/Class 12/concaveLens.js", "concave-lens-script").onload = () => {
        openFile(concaveLensDiv, "Concave Lens");
      };
    }
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  });
}
