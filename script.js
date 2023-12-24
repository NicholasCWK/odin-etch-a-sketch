const container = document.querySelector("#container");

function createGridItem() {
    const div = document.createElement("div");
    div.style.flex = "1";
    return div;
}

function createGridRow() {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flex = 1;
    div.style.width = "600px";
    div.style.height = "1px";
    return div;
}

function createGridContainer() {
    const div = document.createElement("div");
    div.style.border = "3px solid black";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.height = "600px";
    div.style.width = "600px";
    div.id = "grid-container";
    div.addEventListener("mouseover", (event) => {
        let target = event.target;
        changeColor(target);
    })
    return div;
}

function createGrid(num) {
    const oldGridContainer = document.querySelector("#grid-container");
    if (oldGridContainer != null) {
        container.removeChild(oldGridContainer);
    }        
    const newGridContainer = createGridContainer();
    for (let i = 0; i < num; i++) {
        const row = createGridRow();
        for (let i = 0; i < num; i++) {
            row.appendChild(createGridItem());
        }
        newGridContainer.append(row);
    }
    container.appendChild(newGridContainer);
}

function selectGridSize() {
    let num = prompt("Select Grid Size");
    num = Number(num);
    if (num !== NaN && num >= 1 && num <= 100) {
        createGrid(num);
    }
}

function changeColor(target) {
    if (target.id !== "grid-container")
    target.style.backgroundColor = "black";
}

createGrid(16);

const button = document.querySelector("#button");
button.addEventListener("click", () => selectGridSize());