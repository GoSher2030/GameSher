const board = document.getElementById("board");

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
}

function startTwoPlayers() {
    alert("Режим на 2 игроков");
}

function showDifficulty() {
    document.getElementById("difficulty").style.display = "block";
}

function startBot(level) {
    alert("Выбрана сложность: " + level);
}
