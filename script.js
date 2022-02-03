const grid = document.querySelector(".grid");
const sizeOutput = document.querySelector(".size-text");
const sizeSlider = document.querySelector(".size-slider");
const btnDraw = document.querySelector(".btn-draw");
const btnEraser = document.querySelector(".btn-eraser");
const btnClear = document.querySelector(".btn-clear");
let setting = "draw";
let currentGridSide = 16;

function removeGrid () {
    grid.innerHTML = "";
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createNewGrid (gridSide) {
    const gridSize = gridSide * gridSide;
    const boxSize = 100 * 1.0 / gridSide;

    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement("div");
        box.style.width = boxSize + "%";
        box.style.height = boxSize + "%";
        box.addEventListener("mouseover", applySetting);
        box.addEventListener("mousedown", applySetting);
        grid.append(box);
    }
}

function applySetting (e) {
    if (e.type === "mouseover" && !mouseDown) {
        return;
    }

    if (setting === "draw") {
        e.target.style.backgroundColor = "black";
    } else if (setting === "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

function updateGrid (gridSide) {
    removeGrid();
    createNewGrid(gridSide);
}

function changeSizeOutput (gridSide) {
    sizeOutput.textContent = gridSide + " x " + gridSide;
}

btnDraw.addEventListener("click", () => setting = "draw");
btnClear.addEventListener("click", () => updateGrid(currentGridSide));
btnEraser.addEventListener("click", () => setting = "eraser");

sizeSlider.oninput = (e) => {
    currentGridSide = e.target.value;
    updateGrid(currentGridSide);
    changeSizeOutput(currentGridSide);
};

window.onload = () => {
    createNewGrid(currentGridSide);
}