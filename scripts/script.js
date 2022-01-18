
const DEFAULT_SIZE = 16;
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("reset-btn");

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++) {
        let gridElement = document.createElement("div");
        gridElement.textContent = "";
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }

}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(200, 33, 49)`;
}

function eraseGrid() {
    let gridPixles = grid.querySelectorAll("div");
    gridPixles.forEach(gridPixle => gridPixle.style.backgroundColor = "white");
}

createGrid(DEFAULT_SIZE);
clearBtn.addEventListener("click", eraseGrid);
