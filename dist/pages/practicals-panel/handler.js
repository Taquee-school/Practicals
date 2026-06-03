import { createElement } from "../../utils/create-dom.js";
export function generateUI(source) {
    const experimentDiv = createElement("div", {});
    source.experiment.forEach(sectionSrc => {
        const section = createElement("div", {
            className: "section",
        });
        const sectionHeader = createElement("p", {
            className: "section-header",
            textContent: sectionSrc.header,
        });
        section.append(sectionHeader, ...sectionSrc.content.map(child => createElementFromJson(child)));
        experimentDiv.appendChild(section);
    });
    return experimentDiv;
}
export function createElementFromJson(src) {
    if (src.element == "experiment-table") {
        const element = createTable(src);
        return element;
    }
    const element = createElement(src.element, src.properties || {}, src.children?.map(child => createElementFromJson(child)) || []);
    return element;
}
function createTable(src) {
    const tableDiv = createElement("div", {
        className: "table-wrapper",
    });
    const tableTitle = createElement("p", {
        className: "table-title",
        textContent: src.header,
    });
    const table = createElement("div", {
        className: "table"
    });
    src.columns.forEach(colSrc => {
        const element = createElement("div");
        table.appendChild(element);
        colSrc;
    });
    tableDiv.append(tableTitle, table);
    return tableDiv;
}
//# sourceMappingURL=handler.js.map