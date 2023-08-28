const jsConfetti = new JSConfetti();
let turn = "X"
let arr = Array(9).fill(null)
let gameover = false;

// function to change turn
const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}

// Function to check for win
function checkwin() {
    if(
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) || 
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6]) 
    ){
        document.querySelector('.info').innerText = turn + " won";
        if(turn == "X"){
            document.querySelector('.info').style.color = "red"
        }
        else{
            document.querySelector('.info').style.color = "blue"
        }
        jsConfetti.addConfetti({
            emojis: ['✨'],
        });
        gameover = true;
        return;
    }

    if (!arr.some(e => e === null)){
        document.querySelector('.info').innerText = "Draw";
        document.querySelector('.info').style.color = "yellow"
        gameover = true;
        return;
    }
}

// var r = document.querySelector("#reset")
reset.addEventListener("click", function(){
    let boxtext = document.querySelectorAll('.box');
    boxtext.forEach(function(e){
        e.innerText = ""
    })
    turn = "X";
    arr.fill(null)
    document.querySelector('.info').style.color = "white"
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})

function handleclick(el){    
    const id = Number(el.id);
    if(gameover == true) return;
    if(arr[id] !== null) return;
    arr[id] = turn;
    el.innerText = turn
    if(turn === 'X'){
        
        el.style.color = "#CA4E4C"
    }
    else{
        
        el.style.color = "#3EC5F3"
    }
    checkwin();
    if(!gameover){
        turn = changeTurn();
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
}
