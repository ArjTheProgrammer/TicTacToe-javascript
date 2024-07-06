function Gameboard(){
    const grids = document.querySelectorAll(".grid");

    const playerX = player("Rj", "X");
    const playerO = player("Jear", "O");
    let currentPlayer = playerX;

    grids.forEach(grid => {
        grid.addEventListener(("click"), () =>{
            grid.textContent = currentPlayer == playerX ? playerX.marker : playerO.marker;
            currentPlayer = currentPlayer == playerO ? playerX : playerO;
        })
    });
}

function player(name, marker){
return {name, marker}
}

Gameboard();