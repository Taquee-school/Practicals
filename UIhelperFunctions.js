function createDiv(className, id = null) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }
  return div;
}

function createListButton(container, id, buttonText) {
  let btn = document.createElement("button");
  container.appendChild(btn);
  btn.id = id;
  btn.classList.add("ripple");

  btn.appendChild(createTextField(null, buttonText));

  let ic = document.createElement("i");
  ic.className = "ph-bold ph-caret-right";
  btn.appendChild(ic);
  setRippleStyle();
  return btn;
}

function createTextField(className, content) {
  let p = document.createElement("p");
  p.className = className;
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
  column.appendChild(columnHeader);
  let columnHeaderp = document.createElement("p");
  columnHeaderp.textContent = header;
  columnHeader.appendChild(columnHeaderp);

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

function createButton(
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

function createIcon(type = null, name, clickFunction = null, id = null) {
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

function createConfirmationPanel(header, content, btnText, btnFunction, cancelFunction) {
  let div = createDiv("confirmation-panel");
  let divHeader = createTextField("confirmation-panel-header", header);
  div.appendChild(divHeader);
  let divContent = createTextField("confirmation-panel-content", content);
  div.appendChild(divContent);
  let opt1 = createButton(null, "confirmation-panel-btn confirm", null, btnText, btnFunction);
  div.appendChild(opt1);
  let opt2 = createButton(null, "confirmation-panel-btn cancel", null, "Cancel", cancelFunction);
  div.appendChild(opt2);
  return div;
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}