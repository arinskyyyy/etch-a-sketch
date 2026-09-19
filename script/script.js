const resetButton = document.getElementById("btn");
const sketchBox = document.getElementById("sketch-box");
const gridSizeDisplay = document.getElementById("grid-size-display");

function createRandomRgb() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue}, 0.34)`
}

function createGrids(size) {
    sketchBox.innerHTML = '';

    let currentSize = size || 16;
    let totalSquare = currentSize * currentSize;

    for (let i = 0; i < totalSquare; i++) {
        let gridSquare = document.createElement("div");
        
        gridSquare.classList.add("smallDivs");
        gridSquare.style.border = "1px solid silver";
        gridSquare.style.width = `calc(100% / ${currentSize})`;
        gridSquare.style.height = `calc(100% / ${currentSize})`;
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = createRandomRgb();
        });
        sketchBox.appendChild(gridSquare);
    }

    gridSizeDisplay.innerText = `${currentSize} X ${currentSize}`;
}
createGrids();

resetButton.addEventListener("click", () => {
    let size = Number.parseInt(prompt("Enter number between 1-100:"));

    if (size > 0 && size <= 100) {
        createGrids(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});