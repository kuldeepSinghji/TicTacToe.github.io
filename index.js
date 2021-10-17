let turn = "X";
let win = new Audio("win.mp3")
let gameOver = false;
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerHTML = `Congress... <span class="red">${boxText[e[0]].innerText}</span> Won`;
            gameOver = true;
            document.getElementById("gameOver").style.width = "60%"
            document.getElementById("gameOver").style.transition = "all .9s"
            document.getElementById("gameStarting").style.width = "0"
            document.getElementById("gameStarting").style.transition = "none"
            document.getElementById("message").innerHTML = `Congress...${boxText[e[0]].innerText} ਨੇ ਕੱਛਾ ਪਾੜ੍ਹ  ਦਿੱਤਾ....||||`;
            document.getElementById("message").classList.add("message");
            document.getElementById("message").classList.remove("messageRemove");
            setTimeout(() => {
                document.getElementById("message").classList.add("messageRemove")
            }, 3000);
            win.play();
        }
    })
}

function mainturn(){
let box = document.getElementsByClassName("box")
Array.from(box).forEach(element=>{
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click",()=>{
        boxText.innerText = turn;
        turn = changeTurn();
        if(turn === "X"){
            boxText.style.color = "red"    
        }
        if(turn ==="0"){
            boxText.style.color = "black";
        }
        checkWin();
        if(!gameOver){
            document.getElementsByClassName("info")[0].innerHTML = "Turn of  " + `<span class="red">${turn}</span>`;
        }
    })
})
}

mainturn();
let reset = document.getElementById("reset");
reset.addEventListener("click",function(){
    let boxText = document.getElementsByClassName("boxText")
    Array.from(boxText).forEach(element=>{
        element.innerText = ""
        gameOver = false;
    })
    document.getElementsByClassName("info")[0].innerHTML = "Turn of  X";
    document.getElementById("gameOver").style.width = "0"
    document.getElementById("gameOver").style.transition="none";
    document.getElementById("gameStarting").style.width = "60%"
    document.getElementById("gameStarting").style.transition = "all .9s"
    win.pause();
})

document.querySelector(".dark-mode-switch").onclick = ()=>{
    document.querySelector("body").classList.toggle("dark");
    let mode = document.getElementById("mode");
    mode.innerText === "Dark Mode"? mode.innerText = "Light Mode" : mode.innerText = "Dark Mode" ;
}
