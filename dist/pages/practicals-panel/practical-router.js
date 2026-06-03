import { generateUI } from "./handler.js";
const class12_practicals = {
    "screw_gauge": ["screw-gauge", ""],
};
const class11_practicals = {
    "screw_gauge": ["screw-gauge", ""],
};
const classMap = {
    "class=11": class11_practicals,
    "class=12": class12_practicals,
};
async function showPractical(info) {
    const UI = await fetch(info.UIPath);
    const UIJson = await UI.json();
    const a = generateUI(UIJson);
    const { run, clear } = await import(info.solverPath);
}
export function handlePracticalHash(attributes) {
    const info = {
        UIPath: "",
        solverPath: "",
    };
    // [ class=11, practical=screw_gauge]
    attributes.forEach(pr => {
        if (pr.startsWith("class=")) {
            const UIPathRecord = classMap.pr;
            if (!UIPathRecord) {
                window.location.hash = "#home";
                return;
            }
            const UIPath = UIPathRecord;
        }
        else if (pr.startsWith("practical=")) {
            window.location.hash = "#home";
            return;
        }
    });
}
//# sourceMappingURL=practical-router.js.map