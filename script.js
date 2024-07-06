function Gameboard(){
    const grids = document.querySelectorAll(".grid");
    
    grids.forEach(grid => {
        grid.addEventListener(("click"), () =>{
            grid.textContent = "X";
        })
    })
}

Gameboard();