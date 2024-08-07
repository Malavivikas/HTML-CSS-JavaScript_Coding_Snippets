var playerTurn, moves, isGameOver, span, restartButton;
playerTurn = 'x';
moves = 0;
isGameOver = false;
span = document.getElementsByTagName("span");
restartButton = '<button onclick="playAgain()">Restart</button>';

function play(y){
    if(y.dataset.player == "none" && window.isGameOver == false){
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        moves++;
        if(playerTurn == 'x'){
            playerTurn = "o";
        }else if(playerTurn == 'o'){
            playerTurn = 'x';
        }
    }
    checkWinner(1,2,3);
    checkWinner(4,5,6);
    checkWinner(7,8,9);
    checkWinner(1,4,7);
    checkWinner(2,5,8);
    checkWinner(3,6,9);
    checkWinner(1,5,9);
    checkWinner(3,5,7);
    if(moves == 9 && isGameOver == false){
        draw();
    }
}
function checkWinner(a,b,c){
    a--;b--;c--;
    if((span[a].dataset.player === span[b].dataset.player) &&  
    (span[b].dataset.player === span[c].dataset.player) &&  
    (span[a].dataset.player === span[c].dataset.player) &&  
    ((span[a].dataset.player === "x") || span[a].dataset.player == "o")&&  
    isGameOver == false){
        span[a].parentNode.className += " activeBox";  
        span[b].parentNode.className += " activeBox";  
        span[c].parentNode.className += " activeBox";  
        gameOver(a);  
    }
}
function playAgain(){  
    document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);  
    resetGame();  
    window.isGameOver = false;  
    for(var k =0; k<span.length; k++){  
         span[k].parentNode.className= span[k].parentNode.className.replace("activeBox", "");//remove activebox class; you can use classlist.remove , but it doesn't support all browsers  
    }  
}  
function resetGame(){  
    for (i=0; i<span.length; i++){  
         span[i].dataset.player = "none";  
         span[i].innerHTML = "&nbsp;"  
    }  
    playerTurn = "x";  
}  
function gameOver(a){  
    var gameOverAlertElement = "<b>GAME OVER</b><br><br> Player " + span[a].dataset.player.toUpperCase() + ' Win !!! <br><br>' + restartButton  
    var div = document.createElement("div");  
    div.className = "alert";  
    div.innerHTML = gameOverAlertElement;  
    document.getElementsByTagName("body")[0].appendChild(div);  
    window.isGameOver = true;  
    moves = 0;  
}  
function draw(){  
    var drawAlertElement = '<b>DRAW!!!</b><br><br>' + restartButton;  
    var div = document.createElement("div");  
    div.className = "alert";  
    div.innerHTML = drawAlertElement;  
    document.getElementsByTagName("body")[0].appendChild(div);  
    window.isGameOver = true;  
    moves = 0;  
}  