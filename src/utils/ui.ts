import { createElement } from "./create-dom.js";

export function createSlider(label: string, slider: HTMLInputElement) {
  const sliderDiv = createElement("div", {
    className: "slider",
    id: "",
  });

  const header = createElement("div", {
    id: "slider-header",
    className: "slider-header"
  });
  const sliderLabel = createElement("p", { textContent: label });
  header.appendChild( sliderLabel );

  const content = createElement("div", {
    className: "content slider-content"
  });
  slider.className = "slider-input";
  content.append( slider );
  sliderDiv.append( header, content );

  return sliderDiv;
}

export function createFileButton() {
  const btn = createElement("button", {
    className: "file-btn",
  });

  return btn;
}
