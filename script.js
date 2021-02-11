for(let i = 0; i < 4; i++) {
    let row = document.createElement("div");
    row.id = i + "-";
    
    for(let j = 0; j < 4; j++) {
        let column = document.createElement("div");
        column.id = i + "-" + j;
        column.textContent = column.id;
        column.style.cssFloat = "left";
        column.style.marginRight = "10px";
        
        row.appendChild(column);
    }
    row.style.clear = "left";
    row.style.marginBottom = "auto";
    
    
    let grid = document.getElementById("grid");
    grid.appendChild(row);
}

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        let box = document.getElementById(i + "-" + j);
        box.addEventListener("mouseenter", function(event) {
            event.target.style.color = "red";
        });
    }
}

