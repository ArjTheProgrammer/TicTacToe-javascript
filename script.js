function Gameboard(){
    const showInputName = document.querySelector(".inputName");
    const showPostgame = document.querySelector(".postgame");
    const grids = document.querySelectorAll(".grid");
    const playerXField = document.querySelector(".player-x");
    const playerOField = document.querySelector(".player-o");
    const playerXname = document.querySelector("#player-x-name");
    const playerOname = document.querySelector("#player-o-name");
    const announcement = document.querySelector(".announcement");
    const playButton = document.querySelector(".play");
    const restartButton = document.querySelector(".restart");

    let playerX;
    let playerO;
    let currentPlayer;
    let turns = 0;

    showInputName.showModal();

    playButton.addEventListener("click", () => {
        const xDiv = document.createElement("div");
        const oDiv = document.createElement("div");

        xDiv.textContent = `X: ${playerXname.value}`;
        oDiv.textContent = `O: ${playerOname.value}`;
        console.log(`${playerXname.value} ${playerOname.value}`)
        playerX = player(`${playerXname.value}`, "X");
        playerO = player(`${playerOname.value}`, "O");
        currentPlayer = playerX;

        playerXField.appendChild(xDiv);
        playerOField.appendChild(oDiv);
        showInputName.close();
    });

    function player(name, marker){
        let placedMarked = ['','','','','','','','',''];

        function checkWinner(){
            console.log(placedMarked);
            //horizontal
            if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[1] == `${currentPlayer.marker}` && placedMarked[2] == `${currentPlayer.marker}`)||
                (placedMarked[3] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}`) ||
                (placedMarked[6] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                console.log(`${currentPlayer.name} won!`);
                announcement.textContent = `${currentPlayer.name} won!`;
                showPostgame.showModal();
            }

            //horizontal    
            else if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[3] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)||
                (placedMarked[1] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[7] == `${currentPlayer.marker}`) ||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[5] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)
            ){
                console.log(`${currentPlayer.name} won!`);
                announcement.textContent = `${currentPlayer.name} won!`;
                showPostgame.showModal();
            }

            //diagonal
            else if ((placedMarked[0] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[8] == `${currentPlayer.marker}`)||
                (placedMarked[2] == `${currentPlayer.marker}` && placedMarked[4] == `${currentPlayer.marker}` && placedMarked[6] == `${currentPlayer.marker}`)
            ){
                console.log(`${currentPlayer.name} won!`);
                announcement.textContent = `${currentPlayer.name} won!`;
                showPostgame.showModal();
            }

            else if (turns == 9){
                announcement.textContent = `Tied!`;
                showPostgame.showModal();
            }
        }
        return {name, marker, placedMarked, checkWinner};
        }

    grids.forEach((grid, index) => {
        grid.addEventListener(("click"), () =>{
            if (grid.textContent === ""){
                console.log(`${currentPlayer.name}`)
                turns++;
                currentPlayer.placedMarked.splice(index, 1, currentPlayer.marker);
                console.log(currentPlayer.placedMarked);
                grid.textContent = currentPlayer.marker;
                currentPlayer.checkWinner();
                currentPlayer = currentPlayer == playerO ? playerX : playerO;
            }
        });
    }); 

            
    restartButton.addEventListener("click", () => {
        grids.forEach(grid => {
            grid.textContent = "";
        })
        playerX = player(`${playerXname.value}`, "X");
        playerO = player(`${playerOname.value}`, "O");
        currentPlayer = playerX;
        turns = 0;
    })
}   

Gameboard();