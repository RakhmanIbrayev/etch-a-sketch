let setting = "draw";
let currentGridSide = 16;
let mouseDown = false;
const grid = document.querySelector(".grid");
const sizeOutput = document.querySelector(".size-text");
const sizeSlider = document.querySelector(".size-slider");
const btnDraw = document.querySelector(".btn-draw");
const btnEraser = document.querySelector(".btn-eraser");
const btnClear = document.querySelector(".btn-clear");

function removeGrid () {
    grid.innerHTML = "";
}

function applySetting (e) {
    if (!mouseDown) {
        return;
    }

    if (setting === "draw") {
        e.target.style.backgroundColor = "#1f2937";
    } else if (setting === "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

function createNewGrid (gridSide) {
    const gridSize = gridSide * gridSide;
    const boxSize = 100 * 1.0 / gridSide;

    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement("div");
        box.style.width = boxSize + "%";
        box.style.height = boxSize + "%";
        box.onmouseenter = applySetting;
        grid.append(box);
    }
}

function updateGrid (gridSide) {
    removeGrid();
    createNewGrid(gridSide);
}

function changeSizeOutput (gridSide) {
    sizeOutput.textContent = gridSide + " x " + gridSide;
}

grid.onmousedown = (e) => {
    mouseDown = true;
    e.preventDefault();
};

grid.onmouseup = () => mouseDown = false;

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