const inputBox = document.querySelector(".inputBox");
const grid = document.querySelector(".gridContainer");
const submitButton = document.querySelector(".submitButton");
const colorWheel = document.querySelector(".colorWheel");
const back = document.querySelector(".back");
const reset = document.querySelector(".reset");
const forward = document.querySelector(".forward");
const warning = document.querySelector(".warning");
let notWarned = true;
let color = "black";
let click = false;
let gridSize = 0;

submitButton.addEventListener("click", () => {
    if (inputBox.value > 1 && inputBox.value < 101) {
        if(warning.children.length)
        {notWarned = true;
        warning.removeChild(warning.firstChild);}

        gridSize = inputBox.value;
        resizeGrid();
        updateGrid(gridSize);
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
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

back.addEventListener("click", () => {

});

reset.addEventListener("click", () => {
    if (notWarned == false) {
        notWarned = true;
        warning.removeChild(warning.firstChild);
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].style.backgroundColor = "white";
    }
});

forward.addEventListener("click", () => {

});

colorWheel.addEventListener("change", () => {
    color = colorWheel.value;
});

function resizeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function updateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let content = document.createElement("div");
        content.classList.add("gridChild");
        content.addEventListener("mouseover", () => {
            if (click) {
                content.style.backgroundColor = color;
            }
        });
        grid.appendChild(content);
    }
}

grid.addEventListener("click", () => {
    click = !click;
});

grid.addEventListener("mouseleave", () => {
    click = false;
});