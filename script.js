let loadingScreen = document.getElementById("loading-screen");

let app = document.getElementById("app");
let innerApp = document.getElementById("inner-app");

let homeTab = document.getElementById("home-tab");
let practicalTab = document.getElementById("practical-tab");

let bnHome = document.getElementById("home-button");
bnHome.addEventListener("click", () => changeTab(homeTab, homeIcon));
let homeIcon = document.getElementById("home-icon");

let bnPractical = document.getElementById("practical-button");
bnPractical.addEventListener("click", () =>
  changeTab(practicalTab, practicalIcon)
);
let practicalIcon = document.getElementById("practical-icon");

let practicalContainer = document.getElementById("practical-container");
let experimentName = document.getElementById("experiment-name");

let class11_list = document.getElementById("class-11");
let class12_list = document.getElementById("class-12");

let class11_practicals = {};

function createListButton(cr, id, btT) {
  let btn = document.createElement("button");
  cr.appendChild(btn);
  btn.id = id;

  btn.appendChild(createTextField(null, btT));

  let ic = document.createElement("i");
  ic.className = "ph-bold ph-caret-right";
  btn.appendChild(ic);

  return btn;
}

function createTextField(clas, content) {
  let p = document.createElement("p");
  p.className = clas;
  p.textContent = content;

  return p;
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

function createInputDiv(label, input, extra = null) {
  let div = document.createElement("div");
  div.className = "practical-section-input-div";
  let p1 = document.createElement("p");
  p1.textContent = label;
  div.appendChild(p1);
  p1.appendChild(input);
  if (extra) {
    let p2 = document.createElement("span");
    p2.textContent = extra;
    p1.appendChild(p2);
  }
  return div;
}

function createColumn(
  header,
  no,
  pattern,
  type,
  value,
  inputFunction,
  readOnly = false
) {
  let column = document.createElement("div");
  column.className = "observation-table-column";
  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  column.appendChild(columnHeader);
  let columnHeaderp = document.createElement("p");
  columnHeaderp.textContent = header;
  columnHeader.appendChild(columnHeaderp);

  for (let i = 1; i <= no; i++) {
    if (Array.isArray(value)) {
      if (pattern) {
        column.appendChild(
          createInput(
            `${pattern}-${i}`,
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
        createInput(`${pattern}-${i}`, type, value, inputFunction, readOnly)
      );
    }
  }

  return column;
}

function createPAS(number, content, aDiv = false) {
  let div = document.createElement("div");
  div.className = "pas-div";

  let noDiv = document.createElement("div");
  div.appendChild(noDiv);
  noDiv.className = "pas-number-div";

  let No = document.createElement("p");
  noDiv.appendChild(No);
  No.textContent = `${number}.`;

  if (aDiv) {
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

function abs(x) {
  return x < 0 ? -x : x;
}

currentPractical = null;
function openFile(file, message) {
  changeTab(practicalTab, practicalIcon);
  if (currentPractical) {
    practicalContainer.removeChild(currentPractical);
  }
  practicalContainer.appendChild(file);
  currentPractical = file;
  experimentName.textContent = message;
}

currentTabBtn = homeIcon;
function changeTab(dTab, dTabBtn) {
  dTab.scrollIntoView();
}

innerApp.addEventListener("scroll", checkTabInView);

function checkTabInView() {
  currentTabBtn.style.animation = "none";
  currentTabBtn.classList.remove("active");
  if (isElementCentered(homeTab)) {
    currentTabBtn = homeIcon;
  } else if (isElementCentered(practicalTab)) {
    currentTabBtn = practicalIcon;
  }
  currentTabBtn.classList.add("active");
  currentTabBtn.style.animation = "expand 0.15s ease-out 1";
}

tolerance = 1;
scrollParent = innerApp;

function isElementCentered(element) {
  const currentScrollPosition = scrollParent.scrollLeft;
  const containerWidth = scrollParent.offsetWidth;

  const elementCenterPosition = element.offsetLeft + element.offsetWidth / 2;

  const requiredScrollPosition = elementCenterPosition - containerWidth / 2;

  return Math.abs(currentScrollPosition - requiredScrollPosition) <= tolerance;
}
