const inputBox = document.querySelector(".inputBox");
const grid = document.querySelector(".gridContainer");
const submitButton = document.querySelector(".submitButton");
let gridSize = 2;
//let constant = 0.5;

submitButton.addEventListener("click", () => {
    if (inputBox.value > 1 && inputBox.value < 101) {
        clearGrid(gridSize);
        gridSize = inputBox.value;
        updateGrid(gridSize);
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }
});

function clearGrid(size) {
    for(let i = 4; i < size * size; i++)
    {
        grid.removeChild(grid.lastChild);
    }
}

function updateGrid(size) {
    for (let i = 4; i < size * size; i++) {
        let content = document.createElement("div");
        content.classList.add("gridChild");
        //content.textContent = i + 1;
        //content.style.backgroundColor = `rgb(${255-i*constant},${255-i*constant},${255-i*constant})`;
        grid.appendChild(content);
    }
}