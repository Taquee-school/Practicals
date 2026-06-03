
const physicsFilePath = "./src/assets/Physics-Practicals/"
export const physicsFilePath_class11 = physicsFilePath + "class-11/";
export const physicsFilePath_class12 = physicsFilePath;

export function toggleEffect(el) {return el}

export function createDiv(className, id = null) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }
  return div;
}

export function createTextField(className, content) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = content;

  return p;
}

export function createButton(
  id = null,
  className = null,
  icon = null,
  text = null,
  clickFunction = null
) {
  let button = document.createElement("button");
  if (id) {
    button.id = id;
  }
  if (className) {
    button.className = className;
  }
  if (icon) {
    button.appendChild(icon);
  }
  if (text) {
    let p = document.createElement("p");
    p.textContent = text;
    button.appendChild(p);
  }
  if (clickFunction) {
    button.addEventListener("click", clickFunction);
  }
  return button;
}

export function createIcon(type = null, name, clickFunction = null, id = null) {
  if (!type) {
    type = "regular";
  }
  let icon = document.createElement("i");
  icon.className = `ph-${type} ph-${name}`;

  if (clickFunction) {
    icon.addEventListener("click", clickFunction);
  }

  return icon;
}

export function addScript(path, id) {
  if (document.getElementById(id)) return;
  let newScipt = document.createElement("script");
  newScipt.id = id;
  newScipt.src = path;
  document.body.appendChild(newScipt);
  return newScipt;
}

export function addStyle(path, id) {
  if (document.getElementById(id)) return;
  let newStyle = document.createElement("link");
  newStyle.id = id;
  newStyle.rel = "stylesheet";
  newStyle.href = path;
  document.head.appendChild(newStyle);
  return newStyle;
}

export function createImg(className, mode, path) {
  const imgWrapper = createDiv(`img-wrapper ${mode} loading-img`);

  imgWrapper.appendChild(createTextField("img-error-text", "Error loading image"));

  let img = document.createElement("img");
  img.className = className;
  img.src = path;
  img.onload = () => { imgWrapper.classList.remove("loading-img"); }
  img.onerror = () => { imgWrapper.classList.replace("loading-img", "error-img"); }
  imgWrapper.appendChild(img);
  return imgWrapper;
}


export function createPAS(number, content, contentIsDiv = false) {
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

export function createInput(
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

export function createInputDiv(label, inputElement, extraLabel = null) {
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

export function createTableColumn(header) {
  let column = document.createElement("div");
  column.className = "observation-table-column";

  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  columnHeader.appendChild(createTextField(null, header));
  column.appendChild(columnHeader);

  return column;
}

export function createColumn(
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

export function createChemistryColumn(type) {
  let column = createDiv(`observation-table-column ${type}`);
  
  let columnHeader = createDiv("observation-table-column-header");
  columnHeader.appendChild(createTextField("observation-table-column-header-text", type));
  column.appendChild(columnHeader);
  
  return column;
}
