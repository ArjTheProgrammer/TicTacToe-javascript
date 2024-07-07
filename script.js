function Gameboard(){
    const showInputName = document.querySelector("dialog");
    const grids = document.querySelectorAll(".grid");
    const playerXField = document.querySelector(".player-x");
    const playerOField = document.querySelector(".player-o");
    const playerXname = document.querySelector("#player-x-name");
    const playerOname = document.querySelector("#player-o-name");
    const playButton = document.querySelector(".play");

        showInputName.showModal();

    playButton.addEventListener("click", () => {
        const xDiv = document.createElement("div");
        const oDiv = document.createElement("div");

        xDiv.textContent = playerXname.value;
        oDiv.textContent = playerOname.value;
        console.log(`${playerXname.value} ${playerOname.value}`)

        playerXField.appendChild(xDiv);
        playerOField.appendChild(oDiv);
        showInputName.close();
    })

    function player(name, marker){
        let placedMarked = ['','','','','','','','',''];

        function checkWinner(){
            //horizontal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[1] == `${currentPlayer.marker}` && placedMarked[2] == `${currentPlayer.marker}`)||
                (placedMarked[3] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}`) ||
                (placedMarked[6] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                return console.log(`Winner is ${currentPlayer.name}`);
            }

            //horizontal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[3] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)||
                (placedMarked[1] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}`) ||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                return console.log(`Winner is ${currentPlayer.name}`);
            }

            //diagonal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)
            ){
                return console.log(`Winner is ${currentPlayer.name}`);
            }

            else if (turns == 9){
                return console.log("tie!");
            }
        }
        return {name, marker, placedMarked,checkWinner};
        }
    
    const playerX = player("playerX", "X");
    const playerO = player("playerO", "O");
    let currentPlayer = playerX;
    let turns = 0;

    grids.forEach((grid, index) => {
        grid.addEventListener(("click"), () =>{
            if (grid.textContent === ""){
                turns++;
                currentPlayer.placedMarked.splice(index, 1, currentPlayer.marker);
                grid.textContent = currentPlayer.marker;
                currentPlayer.checkWinner();
                currentPlayer = currentPlayer == playerO ? playerX : playerO;
            }
        });   
    });
}

Gameboard();