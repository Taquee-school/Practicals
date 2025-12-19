function createFileButton(fileId, btnIcon, btnText, clickFunction) {
    const btn = document.createElement("button");
    btn.id = fileId;
    btn.className = "file-btn";

    const div1 = createDiv("file-btn-info-div");
    div1.appendChild(btnIcon);
    div1.appendChild(createTextField(null, btnText));
    btn.appendChild(div1);
    div1.addEventListener("click", clickFunction);

    btn.appendChild(createButton(null, "option-btn", createIcon("bold", "dots-three-vertical"), null, () => {
        fileInFocus = fileId;
        showOptionsPanel();
    }));

    return btn;
}


let fileInFocus = null;
let fileCount = 0;
let currentFileId = null;
let allFiles = {};

async function fetchLocalStorage() {
    console.log("Checking localStorage...");
    let storedFiles = localStorage.getItem("allFiles");
    console.log(`File: ${storedFiles}`);
    console.log(`type: ${typeof storedFiles}`);
    if (storedFiles == "null" || storedFiles == null) {
        console.log("No files found");
        if (Object.keys(allFiles).length == 0) {
            Object.assign(allFiles, {
                "file-0": {
                    id: "file-0",
                    name: "untitled",
                    content: "",
                    type: "text",
                    extension: "txt",
                }
            });
        }
    } else {
        try {
            console.log("file found");
            storedFiles = JSON.parse(storedFiles);
            console.log(`File: ${storedFiles}`);
            console.log(`type: ${typeof storedFiles}`);
            Object.assign(allFiles, storedFiles);
            console.log(`data added succesfuly \nfile: ${allFiles}`);
        } catch (e) {
            console.log("Invalid data in localStorage");
            console.log(e);
            localStorage.setItem("allFiles", null);
        }
    }
    console.log(allFiles);
    currentFileId = Object.keys(allFiles)[0];
    console.log(`currentFileId: ${currentFileId}`);
    await loadFiles();
    openFile(currentFileId);
}

const fileIconNameMap = {
    "txt": { icon: "file-text", type: "text" },
    "text": { icon: "file-text", type: "text" },
    "py": { icon: "file-py", type: "python" },
    "js": { icon: "file-js", type: "javaScript" },
    "html": { icon: "file-html", type: "HTML" },
}

// #region new file form
const newFileForm = createDiv("added-panel", "new-file-form");
innerApp.appendChild(newFileForm);
newFileForm.addEventListener("animationend", () => {
    newFileForm.style.animation = "none";
})

newFileForm.appendChild(createTextField("file-name", "Enter file name"));

function showNewFilePanel() {
    newFileForm.style.display = "flex";
    newFileForm.style.animation = "appear 0.3s ease";
}

function hideNewFilePanel() {
    newFileForm.style.animation = "disappear 0.3s ease";
    newFileForm.addEventListener("animationend", () => {
        newFileForm.style.display = "none";
    }, { once: true });
}


const newFileNameInput = document.createElement("input");
newFileNameInput.type = "text";
newFileNameInput.id = "new-file-name";
newFileForm.appendChild(newFileNameInput);

const newFileFormBtnDiv = createDiv("added-panel-btn-div");
newFileForm.appendChild(newFileFormBtnDiv);

newFileFormBtnDiv.appendChild(createButton("new-file-btn", "added-panel-btn", null, "Cancel", () => {
    newFileNameInput.value = "";
    hideNewFilePanel();
}));

newFileFormBtnDiv.appendChild(createButton("new-file-btn", "added-panel-btn", null, "Add File", () => {
    let fileName = newFileNameInput.value;
    if (!isValidFileName(fileName)) return;
    createFile(fileName);
    newFileNameInput.value = "";
    hideNewFilePanel();
}));

function isValidFileName(fileName) {
    if (fileName.trim() === "") {
        alert("File name cannot be empty");
        return false;
    }
    for (let fileId of Object.keys(allFiles)) {
        if (`${allFiles[fileId].name}.${allFiles[fileId].extension}` === fileName) {
            alert("File already exists");
            return false;
        }
    }
    if (fileName.split(".").length > 2) {
        alert("File name cannot contain more than one dot");
        return false;
    }
    if (!fileIconNameMap[fileName.split(".")[1]]) {
        alert("File type not supported");
        return false;
    }
    try {
        if (fileName.split(".")[0].trim() == "") {
            alert("Enter file name");
            return false
        }
    } catch {
        alert("Invalid file name");
        return false;
    }
    return true;
}

const addFileBtn = document.getElementById("new-file-btn");
addFileBtn.addEventListener("click", showNewFilePanel);

// #endregion new file form

const filesList = document.getElementById("files-list");

function openFile(fileId) {
    document.getElementById( "file-title" ).textContent = `${ allFiles[fileId].name }.${ allFiles[fileId].extension }`;
    codeMirrorEditor.setValue( allFiles[fileId].content );
    console.log(allFiles[fileId].type);
    codeMirrorEditor.setOption( "mode", allFiles[fileId].type );
    hideSidebar();
    currentFileId = fileId;
}

function createFile(rawFileName) {
    // Takes file name and creates file
    let fileId = `file-${fileCount}`;
    fileCount++;
    let fileName;
    let fileContent = "";
    let fileType;
    let fileExtension;
    if (rawFileName.includes(".")) {
        fileName = rawFileName.split(".")[0];
        fileExtension = rawFileName.split(".")[1];
    } else {
        fileName = rawFileName;
        fileExtension = "py";
    }
    fileType = fileIconNameMap[fileExtension].type;
    let file = {
        id: fileId,
        name: fileName,
        content: fileContent,
        type: fileType,
        extension: fileExtension,
    }
    allFiles[fileId] = file;
    let fileBtn = createButton("file-btn", "file-btn", createIcon("bold", fileIconNameMap[fileExtension].icon), `${allFiles[fileId].name}.${allFiles[fileId].extension}`, () => { openFile(allFiles[fileId].id) });
    filesList.appendChild(fileBtn);
    openFile(fileId);
    showMessage("File created!")
}

async function loadFiles() {
    console.log(`Creating buttons from ${allFiles}`);
    for (let fileId of Object.keys(allFiles)) {
        let fileBtn = createFileButton(fileId, createIcon("bold", fileIconNameMap[allFiles[fileId].extension].icon), `${allFiles[fileId].name}.${allFiles[fileId].extension}`, () => { openFile(fileId) });
        filesList.appendChild(fileBtn);
        fileCount++;
    }
}

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
    console.log(codeMirrorEditor.getValue());
    console.log(allFiles)
    allFiles[currentFileId].content = codeMirrorEditor.getValue();
    localStorage.setItem("allFiles", JSON.stringify(allFiles));
    showMessage("All files saved !");
});

// #region options panel
const optionsPanel = createDiv("added-panel", "options-panel");
innerApp.appendChild(optionsPanel);
optionsPanel.addEventListener("animationend", () => {
    optionsPanel.style.animation = "none";
})

function showOptionsPanel() {
    optionsPanel.style.display = "flex";
    optionsPanel.style.animation = "appear 0.3s ease";
}

function hideOptionsPanel() {
    optionsPanel.style.animation = "disappear 0.3s ease";
    optionsPanel.addEventListener("animationend", () => {
        optionsPanel.style.display = "none";
    }, { once:true });
}

optionsPanel.appendChild(createButton("rename-btn", "tab-btn", createIcon("fill", "pencil"), "rename", showRenamePanel));

optionsPanel.appendChild(createButton("delete-btn", "tab-btn", createIcon("fill", "trash"), "delete", showDeletePanel));

optionsPanel.appendChild(createButton("cancel-btn", "tab-btn", createIcon("fill", "x"), "cancel", hideOptionsPanel));

// #region rename panel
const renamePanel = createDiv("added-panel", "rename-panel");
innerApp.appendChild(renamePanel);
renamePanel.addEventListener("animationend", () => {
    renamePanel.style.animation = "none";
})

renamePanel.appendChild(createTextField("added-panel-header", "Rename file"));

function showRenamePanel() {
    hideOptionsPanel();
    renameInput.value = `${allFiles[fileInFocus].name}.${allFiles[fileInFocus].extension}`
    renamePanel.style.display = "flex";
    renamePanel.style.animation = "appear 0.3s ease";
}
function hideRenamePanel() {
    renamePanel.style.animation = "disappear 0.3s ease";
    renamePanel.addEventListener("animationend", () => {
        renamePanel.style.display = "none";
    }, { once:true });
}

const renameInput = document.createElement("input");
renameInput.type = "text";
renamePanel.appendChild(renameInput);

const renamePanelBtnDiv = createDiv("added-panel-btn-div");
renamePanel.appendChild(renamePanelBtnDiv);

renamePanelBtnDiv.appendChild(createButton("", "added-panel-btn", null, "cancel", () => {
    hideRenamePanel();
}));


renamePanelBtnDiv.appendChild(createButton("", "added-panel-btn", null, "rename", () => {
    const newName = renameInput.value;
    if (!isValidFileName(newName)) return;
    renameFile( fileInFocus, newName.split(".")[0], newName.split(".")[1] );
}));

function renameFile(fileId, name, extension) {
    allFiles[fileId].name = name;
    allFiles[fileId].extension = extension;
    allFiles[fileId].type = fileIconNameMap[extension].type;
    document.querySelector(`#files-list #${fileId} p`).textContent = `${name}.${extension}`;
    if (currentFileId == fileId) {
        openFile(fileId);
    }
    hideRenamePanel();
    showMessage("File renamed!");
}

// #endregion rename panel

// #region delete panel
const deletePanel = createDiv("added-panel", "delete-panel");
innerApp.appendChild(deletePanel);
deletePanel.addEventListener("animationend", () => {
    deletePanel.style.animation = "none";
})

deletePanel.appendChild(createTextField("added-panel-header", "Delete file"));

deletePanel.appendChild(createTextField("added-panel-text delete", ""))

function showDeletePanel() {
    deletePanel.style.display = "flex";
    deletePanel.style.animation = "appear 0.3s ease";
    document.querySelector("#delete-panel .added-panel-text.delete").textContent = `Are you sure you want to delete '${allFiles[fileInFocus].name}.${allFiles[fileInFocus].extension}'`;
    hideOptionsPanel();
}
function hideDeletePanel() {
    deletePanel.style.animation = "disappear 0.3s ease";
    deletePanel.addEventListener("animationend", () => {
        deletePanel.style.display = "none";
    }, { once:true });
}

const deletePanelBtnDiv = createDiv("added-panel-btn-div");
deletePanel.appendChild(deletePanelBtnDiv);

deletePanelBtnDiv.appendChild(createButton(null, "added-panel-btn", null, "cancel", hideDeletePanel));
deletePanelBtnDiv.appendChild(createButton(null, "added-panel-btn", null, "Delete", () => deleteFile(fileInFocus)));

function deleteFile(fileId) {
    hideDeletePanel();
    delete allFiles[fileId];
    showMessage("File deleted!");
    document.querySelector(`#files-list #${fileId}`).remove();
    if (fileId == currentFileId) {
        currentFileId = Object.keys(allFiles)[0];
        openFile(currentFileId);
    }
}
// #endregion options panel