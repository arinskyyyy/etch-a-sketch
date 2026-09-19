const resetButton = document.getElementById("btn");
const sketchBox = document.getElementById("sketch-box");
const gridSizeDisplay = document.getElementById("grid-size-display");

function createRandomRgb() {
    let red = Math.floor(Math.random * 256);
    let green = Math.floor(Math.random * 256);
    let blue = Math.floor(Math.random * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

function createGrids(size) {
    if (!size) {
        for (let i = 1; i <= 4; i++) {
            let createGrid = document.createElement("div");
            createGrid.classListAdd("smallDivs");
            createGrid.style.backgroundColor = createRandomRgb();
            createGrid.style.border = "2px solid silver";
            sketchBox.appendChild(createGrid);
        }
    } else {
        for (let i = 1; i <= size; i++) {
            let createGrid = document.createElement("div");
            createGrid.classListAdd("smallDivs");
            createGrid.style.backgroundColor = createRandomRgb();
            createGrid.style.border = "2px solid silver";
            sketchBox.appendChild(createGrid);
        }
    }
}
createGrids();

resetButton.addEventListener("click", () => {
    let size = Number.parseInt(prompt("Enter number between 1-100:"));
    createGrids(size);
});