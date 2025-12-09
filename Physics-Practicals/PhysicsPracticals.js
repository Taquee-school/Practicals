// Class 11th list buttons
let bn_screwGauge = createListButton(class11_list, "screw-gauge-btn", "Screw Gauge");
bn_screwGauge.addEventListener("click", () => {
  try {
    openFile(screwGaugeDiv, "Screw Gauge");
    currentVideoUrl =
      "https://drive.google.com/file/d/1lBkIvbWmfZWRDs6etad8C4U_xo8DQn25/preview";
  } catch {
    addScript("Physics-Practicals/Class 11/screwGauge.js").onload = () => {
      openFile(screwGaugeDiv, "Screw Gauge");
      currentVideoUrl =
        "https://drive.google.com/file/d/1lBkIvbWmfZWRDs6etad8C4U_xo8DQn25/preview";
    };
  }
});

let bn_vernierCalipers = createListButton(class11_list, "vernier-calipers-btn", "Vernier Calipers");
bn_vernierCalipers.addEventListener("click", () => {
  try {
    openFile(vernierCalipersDiv, "Vernier Calipers");
    currentVideoUrl =
      "https://drive.google.com/file/d/1ZMe6Il6GPCpOwDmVozfzEH7xWi6AZvEn/preview";
  } catch {
    addScript("Physics-Practicals/Class 11/vernierCalipers.js").onload = () => {
      openFile(vernierCalipersDiv, "Vernier Calipers");
      currentVideoUrl =
        "https://drive.google.com/file/d/1ZMe6Il6GPCpOwDmVozfzEH7xWi6AZvEn/preview";
    };
  }
});

let bn_sonometer = createListButton(class11_list, "sonometer-btn", "Sonometer");
bn_sonometer.addEventListener("click", () => {
  try {
    openFile(sonometerDiv, "Sonometer");
    videoFrame =
      "https://drive.google.com/file/d/140FEbQuZcTjWiXsHGKzhvhvzk7ETLBuC/preview";
    helpVideoText.style.display = "none";
  } catch {
    addScript("Physics-Practicals/Class 11/sonometer.js").onload = () => {
      openFile(sonometerDiv, "Sonometer");
      videoFrame =
        "https://drive.google.com/file/d/140FEbQuZcTjWiXsHGKzhvhvzk7ETLBuC/preview";
      helpVideoText.style.display = "none";
    };
  }
});

let bn_parallelogram = createListButton(class11_list, "parallelogram-btn", "Parallelogram");
bn_parallelogram.addEventListener("click", () => {
  try {
    openFile(parallelogramDiv, "Parallelogram");
    videoFrame.src =
      "https://drive.google.com/file/d/1e52vBtlWzb3vhqnFmYRSVS3NfdGcy0eT/preview";
    helpVideoText.style.display = "none";
  } catch {
    addScript("Physics-Practicals/Class 11/parallelogram.js").onload = () => {
      openFile(parallelogramDiv, "Parallelogram");
      videoFrame.src =
        "https://drive.google.com/file/d/1e52vBtlWzb3vhqnFmYRSVS3NfdGcy0eT/preview";
      helpVideoText.style.display = "none";
    };
  }
});

let bn_simplePendulum = createListButton(class11_list, "simple-pendulum-btn", "Simple Pendulum");
bn_simplePendulum.addEventListener("click", () => {
  try {
    openFile(simplePendulumDiv, "Simple Pendulum");
    videoFrame.src =
      "https://drive.google.com/file/d/1qhtfKsVuH3hUYDStS2UO8es-zy8yDg8u/preview";
    helpVideoText.style.display = "none";
  } catch {
    addScript("Physics-Practicals/Class 11/simplePendulum.js").onload = () => {
      openFile(simplePendulumDiv, "Simple Pendulum");
      videoFrame.src =
        "https://drive.google.com/file/d/1qhtfKsVuH3hUYDStS2UO8es-zy8yDg8u/preview";
      helpVideoText.style.display = "none";
    };
  }
});

let bn_spherometer = createListButton(class11_list, "spherometer-btn", "Spherometer");
bn_spherometer.addEventListener("click", () => {
  try {
    openFile(spherometerDiv, "Spherometer");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 11/spherometer.js").onload = () => {
      openFile(spherometerDiv, "Spherometer");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});


let bn_helicalSpring = createListButton(class11_list, "helical-spring-btn", "Helical Spring");
bn_helicalSpring.addEventListener("click", () => {
  try {
    openFile(helicalSpringDiv, "Helical Spring");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 11/helicalSpring.js").onload = () => {
      openFile(helicalSpringDiv, "Helical Spring");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let bn_resonanceTube = createListButton(class11_list, "resonance-tube-btn", "Resonance Tube");
bn_resonanceTube.addEventListener("click", () => {
  try {
    openFile(resonanceTubeDiv, "Resonance Tube");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 11/resonanceTube.js").onload = () => {
      openFile(resonanceTubeDiv, "Resonance Tube");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});



// Class 12th list buttons
let bn_ohmsLaw = createListButton(class12_list, "ohms-law-btn", "Ohm's Law");
bn_ohmsLaw.addEventListener("click", () => {
  try {
    openFile(ohmsLawDiv, "Ohm's Law");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/ohmsLaw.js").onload = () => {
      openFile(ohmsLawDiv, "Ohm's Law");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let bn_pnJunction = createListButton(class12_list, "pn-junction-btn", "PN Junction");
bn_pnJunction.addEventListener("click", () => {
  try {
    openFile(pnJunctionDiv, "PN Junction");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/pnJunction.js").onload = () => {
      openFile(pnJunctionDiv, "PN Junction");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let bn_meterBridge = createListButton(class12_list, "meter-bridge-btn", "Meter Bridge");
bn_meterBridge.addEventListener("click", () => {
  try {
    openFile(meterBridgeDiv, "Meter Bridge");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/meterBridge.js").onload = () => {
      openFile(meterBridgeDiv, "Meter Bridge");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let bn_halfDeflection = createListButton(class12_list, "half-deflection-btn", "Half Deflection");
bn_halfDeflection.addEventListener("click", () => {
  try {
    openFile(halfDeflectionDiv, "Half Deflection");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/halfDeflection.js").onload = () => {
      openFile(halfDeflectionDiv, "Half Deflection");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let bn_acsonometer = createListButton(class12_list, "ac-sonometer-btn", "AC Sonometer");
bn_acsonometer.addEventListener("click", () => {
  try {
    openFile(acSonometerDiv, "AC Sonometer");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/acSonometer.js").onload = () => {
      openFile(acSonometerDiv, "AC Sonometer");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let convexLens = createListButton(class12_list, "convex-lens-btn", "Convex Lens");
convexLens.addEventListener("click", () => {
  try {
    openFile(convexLensDiv, "Convex Lens");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/convexLens.js").onload = () => {
      openFile(convexLensDiv, "Convex Lens");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let concaveMirror = createListButton(class12_list, "concave-mirror-btn", "Concave Mirror");
concaveMirror.addEventListener("click", () => {
  try {
    openFile(concaveMirrorDiv, "Concave Mirror");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/concaveMirror.js").onload = () => {
      openFile(concaveMirrorDiv, "Concave Mirror");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let convexMirror = createListButton(class12_list, "convex-mirror-btn", "Convex Mirror");
convexMirror.addEventListener("click", () => {
  try {
    openFile(convexMirrorDiv, "Convex Mirror");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/convexMirror.js").onload = () => {
      openFile(convexMirrorDiv, "Convex Mirror");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});

let concaveLens = createListButton(class12_list, "concave-lens-btn", "Concave Lens");
concaveLens.addEventListener("click", () => {
  try {
    openFile(concaveLensDiv, "Concave Lens");
    videoFrame.src = "";
    helpVideoText.style.display = "flex";
  } catch {
    addScript("Physics-Practicals/Class 12/concaveLens.js").onload = () => {
      openFile(concaveLensDiv, "Concave Lens");
      videoFrame.src = "";
      helpVideoText.style.display = "flex";
    };
  }
});



// addScript("Physics-Practicals/Class 11/screwGauge.js");
// addScript("Physics-Practicals/Class 11/vernierCalipers.js");
// addScript("Physics-Practicals/Class 11/sonometer.js");
// addScript("Physics-Practicals/Class 11/parallelogram.js");
// addScript("Physics-Practicals/Class 11/spherometer.js");
// addScript("Physics-Practicals/Class 11/simplePendulum.js");
// addScript("Physics-Practicals/Class 11/helicalSpring.js");
// addScript("Physics-Practicals/Class 11/resonanceTube.js");

// addScript("Physics-Practicals/Class 12/ohmsLaw.js");
// addScript("Physics-Practicals/Class 12/pnJunction.js");
// addScript("Physics-Practicals/Class 12/meterBridge.js");
// addScript("Physics-Practicals/Class 12/halfDeflection.js");
// addScript("Physics-Practicals/Class 12/acSonometer.js");
// addScript("Physics-Practicals/Class 12/convexLens.js");
// addScript("Physics-Practicals/Class 12/concaveMirror.js");
// addScript("Physics-Practicals/Class 12/convexMirror.js");
// addScript("Physics-Practicals/Class 12/concaveLens.js");