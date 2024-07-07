function Gameboard(){
    const showInputName = document.querySelector("dialog");
    const grids = document.querySelectorAll(".grid");
    const playerXField = document.querySelector(".player-x");
    const playerOField = document.querySelector(".player-o");

    function inputName(){
        showInputName.showModal();
    }

    function player(name, marker){
        let placedMarked = ['','','','','','','','',''];

        function checkWinner(){
            //horizontal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[1] == `${currentPlayer.marker}` && placedMarked[2] == `${currentPlayer.marker}`)||
                (placedMarked[3] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}`) ||
                (placedMarked[6] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                return currentPlayer.marker == `X` ? playerXField.textContent = `X is the winner` : playerOField.textContent = "O is the Winner";
            }

            //horizontal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[3] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)||
                (placedMarked[1] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}`) ||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                return currentPlayer.marker == `X` ? playerXField.textContent = `X is the winner` : playerOField.textContent = "O is the Winner";
            }

            //diagonal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)
            ){
                return currentPlayer.marker == `X` ? playerXField.textContent = `X is the winner` : playerOField.textContent = "O is the Winner";
            }
        }
        return {name, marker, placedMarked,checkWinner};
        }
    
    const playerX = player("playerX", "X");
    const playerO = player("playerO", "O");
    let currentPlayer = playerX;

    grids.forEach((grid, index) => {
        grid.addEventListener(("click"), () =>{
            if (grid.textContent === ""){
                currentPlayer.placedMarked.splice(index, 1, currentPlayer.marker);
                grid.textContent = currentPlayer.marker;
                currentPlayer.checkWinner();
                currentPlayer = currentPlayer == playerO ? playerX : playerO;
            }
        });   
    });

    inputName();
}

Gameboard();