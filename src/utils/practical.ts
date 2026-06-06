export const base = import.meta.env.BASE_URL;

const physicsFilePath = "./src/assets/Physics-Practicals/";
export const physicsFilePath_class11 = physicsFilePath + "class-11/";
export const physicsFilePath_class12 = physicsFilePath;

const decimalPlaceInScientificNotation = 2;
export function changeToStandard(text: string) {
  const num = parseFloat(text);
  const order = Math.floor(Math.log10(num));
  const standard = num / Math.pow(10, order);
  return `${standard.toFixed(decimalPlaceInScientificNotation)}x10^${order}`;
}

export function toggleEffect(el: HTMLElement) {
  return el;
}

export function createDiv(className: string, id?: string) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }
  return div;
}

export function createTextField(className: string | null, content: string) {
  let p = document.createElement("p");
  p.className = className ?? "";
  p.textContent = content;

  return p;
}

export function createButton(
  id: string | null = null,
  className: string | null = null,
  icon: HTMLElement | null = null,
  text: string | null = null,
  clickFunction: (() => any) | null = null,
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

export function createIcon(
  type: string | null = null,
  name: string,
  clickFunction?: () => any,
  id?: string,
) {
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

export function addScript(path: string, id: string) {
  if (document.getElementById(id)) return;
  let newScipt = document.createElement("script");
  newScipt.id = id;
  newScipt.src = path;
  document.body.appendChild(newScipt);
  return newScipt;
}

export function addStyle(path: string, id: string) {
  if (document.getElementById(id)) return;
  let newStyle = document.createElement("link");
  newStyle.id = id;
  newStyle.rel = "stylesheet";
  newStyle.href = path;
  document.head.appendChild(newStyle);
  return newStyle;
}

export function createImg(className: string, mode: string, path: string) {
  const imgWrapper = createDiv(`img-wrapper ${mode} loading-img`);

  imgWrapper.appendChild(
    createTextField("img-error-text", "Error loading image"),
  );

  let img = document.createElement("img");
  img.className = className;
  img.src = path;
  img.onload = () => {
    imgWrapper.classList.remove("loading-img");
  };
  img.onerror = () => {
    imgWrapper.classList.replace("loading-img", "error-img");
  };
  imgWrapper.appendChild(img);
  return imgWrapper;
}

export function createPAS(
  number: string,
  content: HTMLElement | string,
  contentIsDiv = false,
) {
  let div = document.createElement("div");
  div.className = "pas-div";

  let noDiv = document.createElement("div");
  div.appendChild(noDiv);
  noDiv.className = "pas-number-div";

  let No = document.createElement("p");
  noDiv.appendChild(No);
  No.textContent = `${number}.`;

  if (contentIsDiv) {
    content = content as HTMLElement;
    div.appendChild(content);
    content.style.width = "80%";
  } else {
    let pDiv = document.createElement("div");
    div.appendChild(pDiv);
    pDiv.className = "pas-text-div";

    let p = document.createElement("p");
    pDiv.appendChild(p);
    p.textContent = content as string;
  }

  return div;
}

export function createInput(
  id: string | null,
  type: string,
  value = 0,
  inputFunction?: (() => any) | null,
  readOnly = false,
) {
  let input = document.createElement("input");
  if (id) input.id = id;
  input.type = type;
  input.value = String(value);
  if (inputFunction) input.oninput = inputFunction;
  input.readOnly = readOnly;
  return input;
}

export function createInputDiv(
  label: string,
  inputElement: HTMLElement,
  extraLabel: string | null = null,
) {
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

export function createTableColumn(header: string) {
  let column = document.createElement("div");
  column.className = "observation-table-column";

  let columnHeader = document.createElement("div");
  columnHeader.className = "observation-table-column-header";
  columnHeader.appendChild(createTextField(null, header));
  column.appendChild(columnHeader);

  return column;
}

export function createColumn(
  header: string,
  numberOfRows: number,
  idPattern: string,
  type: string,
  value: any,
  inputFunction: () => any,
  readOnly = false,
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
            readOnly,
          ),
        );
      } else {
        column.appendChild(
          createInput(null, type, value[i - 1], inputFunction, readOnly),
        );
      }
    } else {
      column.appendChild(
        createInput(`${idPattern}-${i}`, type, value, inputFunction, readOnly),
      );
    }
  }

  return column;
}

export function createChemistryColumn(type: string) {
  let column = createDiv(`observation-table-column ${type}`);

  let columnHeader = createDiv("observation-table-column-header");
  columnHeader.appendChild(
    createTextField("observation-table-column-header-text", type),
  );
  column.appendChild(columnHeader);

  return column;
}
