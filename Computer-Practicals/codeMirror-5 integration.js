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

runButton.addEventListener("click", () => {
    if (runButton.classList.contains("disabled")) return;
    innerApp.style.animation = "fade-drop 0.2s ease";
    setTimeout(() => {
        innerApp.replaceChild(outputPanel, editorTab);
        runPythonCode();
    }, 100);
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

const outputTextDiv = createDiv("scroll", "output-text-div");
outputPanelContent.appendChild(outputTextDiv);


// WARNING! (Code below is written by AI(Gemini) Don't make any changes here) ------

let pyodide = null;

async function initializePyodide() {
    try {
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
        });

        runButton.classList.remove("disabled");
        showMessage("Pyodide Ready");
    } catch {
    }
}
initializePyodide();

const decoder = new TextDecoder();

let lastOutElement = createTextField("output-text", null);

async function runPythonCode() {
    if (!pyodide) return;

    outputTextDiv.innerHTML = "";
    const code = codeMirrorEditor.getValue();
    lastOutElement = createTextField("output-text", null);

    try {
        // 2. Setup Input (Stdin)
        pyodide.setStdin({
            stdin: () => {
                const result = prompt(lastOutElement.textContent);
                const inputSpan = document.createElement("span");
                inputSpan.className = "output-text input";
                inputSpan.textContent = result;
                lastOutElement.appendChild(inputSpan);
                return result !== null ? result + "\n" : "\n";
            }
        });

        // 3. Setup Output (Stdout)
        pyodide.setStdout({
            write: (buffer) => {
                const text = decoder.decode(buffer);
                lastOutElement =  createTextField("output-text", text);
                outputTextDiv.appendChild(lastOutElement);
                updateTerminalText();
                return buffer.length;
            }
        });

        // 4. Setup Error Handling (Stderr)
        pyodide.setStderr({
            write: (buffer) => {
                const text = decoder.decode(buffer);
                outputTextDiv.appendChild(createTextField("output-text", text));
                updateTerminalText();
                return buffer.length;
            }
        });

        await pyodide.runPythonAsync(code);

    } catch (err) {
        outputTextDiv.appendChild(createTextField("output-text error system", err.message));
        updateTerminalText()
    }
}

function updateTerminalText() {
    window.requestAnimationFrame(() => {
        outputPanelContent.scrollTop = outputPanelContent.scrollHeight;
    });
}