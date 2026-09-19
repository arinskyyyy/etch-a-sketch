const resetButton = document.getElementById("btn");
const sketchBox = document.getElementById("sketch-box");
const gridSizeDisplay = document.getElementById("grid-size-display");

function createRandomRgb() {
    let red = Math.floor(Math.random * 256);
    let green = Math.floor(Math.random * 256);
    let blue = Math.floor(Math.random * 256);
    return `rgb(${red}, ${green} ${blue})`
}

