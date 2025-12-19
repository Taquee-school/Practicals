const editorTextArea = document.getElementById("editor");

const codeMirrorEditor = CodeMirror.fromTextArea(editorTextArea, {
    lineNumbers: true,
    mode: "python",
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
});

const STORAGE_KEY = 'my-code-editor-content';

function changeEditorContent(content, type) {
    codeMirrorEditor.setValue(content);
    // codeMirrorEditor.setOption("mode", type);
}

function refreshEditor() {
    const code = codeMirrorEditor.getValue();
    codeMirrorEditor.setValue(code);
}


// #region Output panel
const runButton = document.getElementById("run-btn");
runButton.classList.add("disabled");
runButton.addEventListener("click", () => {
    if (runButton.classList.contains("disabled")) return;
    runPythonCode();
    innerApp.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        innerApp.replaceChild(outputPanel, editorTab);
    }, 100);
    innerApp.addEventListener("animationend", () => {
        innerApp.style.animation = "none";
    }, { once: true });
});

function closeOutputPanel() {
  innerApp.style.animation = "fade-drop 0.2s ease";
  setTimeout(() => {
    innerApp.replaceChild(editorTab, outputPanel);
  }, 100);
  innerApp.addEventListener("animationend", () => {
    innerApp.style.animation = "none";
  }, { once: true });
}

const outputPanel = createDiv("inner-app-tab", "output-area");

const outputPanelHeader = createDiv("top-bar", "settings-top-bar");
outputPanel.appendChild(outputPanelHeader);

outputPanelHeader.appendChild(createButton(null, "toggle-btn back-btn", createIcon("bold", "arrow-left"), null, closeOutputPanel));

const outputPanelContent = createDiv("content");
outputPanel.appendChild(outputPanelContent);

const outputTextElement = createTextField("output-text", null);
outputPanelContent.appendChild(outputTextElement);



let pyodide = null;

async function initializePyodide() {
    try {
        // Await the loading so 'pyodide' is the actual instance, not a Promise
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });

        runButton.classList.remove("disabled");
        console.log("Pyodide Ready");
    } catch (e) {
        console.error("Failed to load Pyodide:", e);
    }
}
initializePyodide();


// Add this at the top of your script (outside the function)
const decoder = new TextDecoder();

async function runPythonCode() {
    if (!pyodide) return;

    outputTextElement.textContent = "";
    const code = codeMirrorEditor.getValue();

    try {
        pyodide.setStdout({
            write: (buffer) => {
                const text = decoder.decode(buffer);
                outputTextElement.textContent += text;
                return buffer.length;
            }
        });

        pyodide.setStderr({
            write: (buffer) => {
                const text = decoder.decode(buffer);
                const errorSpan = document.createElement("span");
                errorSpan.className = "output-error-text";
                errorSpan.textContent = text;
                outputTextElement.appendChild(errorSpan);
                return buffer.length;
            }
        });

        await pyodide.runPythonAsync(code);

    } catch (err) {
        outputTextElement.textContent += `\nSystem Error: ${err.message}`;
    }
}