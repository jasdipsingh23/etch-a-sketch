const grid = document.getElementById("grid");
const DEFAULT_SIZE = 16;


function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${DEFAULT_SIZE}, 1fr)`

    for(let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
        let gridElement = document.createElement("div");
        gridElement.textContent = "x";
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }

}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(200, 33, 49)`;
}

createGrid();