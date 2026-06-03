export function createElement(name, props = {}, nodes = []) {
    const element = document.createElement(name);
    Object.assign(element, props);
    element.append(...nodes);
    return element;
}
//# sourceMappingURL=create-dom.js.map