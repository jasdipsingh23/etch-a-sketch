function createGrid() {
    const container = document.getElementById("container");
    for(let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.setAttribute("display", "inline-block");
        row.textContent = "test";
        for(let j = 0; j < 16; j++) {
            let column = document.createElement("div");
            column.textContent = "test2";
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

createGrid();