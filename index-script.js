const inputBox = document.querySelector(".inputBox");
const grid = document.querySelector(".gridContainer");
const submitButton = document.querySelector(".submitButton");
const colorWheel = document.querySelector(".colorWheel");
const eraserMode = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const colorMode = document.querySelector(".color");
const warning = document.querySelector(".warning");
let notWarned = true;
let color = "black";
let tempColor = "black";
let click = false;
let gridSize = 0;

submitButton.addEventListener("click", () => {
    if (inputBox.value > 1 && inputBox.value < 101) {
        if(warning.children.length)
        {notWarned = true;
        warning.removeChild(warning.firstChild);}

        gridSize = inputBox.value;
        clearGrid();
        updateGrid(gridSize);
    }
    else if (notWarned) {
        let content = document.createElement("div");
        content.classList.add("text");
        content.textContent = "Please input a number between 2 and 100";
        content.style.display = "flex";
        content.style.justifyContent = "center";

        warning.append(content);
        notWarned = false;
    }
});

reset.addEventListener("click", () => {
    if (notWarned == false) {
        notWarned = true;
        warning.removeChild(warning.firstChild);
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].style.backgroundColor = "#eeeeee";
    }
});

colorWheel.addEventListener("change", () => {
    color = colorWheel.value;
});

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function updateGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let content = document.createElement("div");
        content.classList.add("gridChild");
        content.addEventListener("mouseover", changeColor);
        content.addEventListener("mousedown", changeColor);
        grid.appendChild(content);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

eraserMode.addEventListener("click", () => {
    tempColor = color;
    color = "#eeeeee";
});

colorMode.addEventListener("click", () => {
    color = tempColor;
});

function changeColor(e) {
    if(e.type === "mouseover" && !mouseDown)
    {
      return;
    }
    e.target.style.backgroundColor = color;
}