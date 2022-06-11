let order = []; //to store order by computer
let playerOrder = [];//to store player's order
let flash;//number of flashes appeared 
let turn;//what turn player is on
let good;//if player is doing right or not
let compTurn;//whose turn is it
let intervalID;
let strict = false;//if strict mode is on
let noise = true;
let on = false;//if power is turned on or not

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");


strictButton.addEventListener('change', (event) => {

    console.log("checked");
    strict = strictButton.checked; // tells if strict mode is on or off


})

onButton.addEventListener('click', event => {

    if (onButton.checked == true) {
        on = onButton.checked;
        turnCounter.innerHTML = "--";
    }
    else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();//turn off the lights of colors
        clearInterval(intervalID);
    }

});

startButton.addEventListener('click', event => {
    if (on || win)//if start button on or player won the game then...
    {
        play();//it will play the game
    }
});

play = () => {

    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;//game level 
    good = true;

    for (var i = 0; i < 20; ++i) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalID = setInterval(gameTurn, 800);
    // console.log(order)
}

gameTurn = () => {
    on = false;//disables player input while its computer turn
    //if number of flashes is equal to no. of turns screen shows then...
    if (flash == turn) {
        clearInterval(intervalID);
        compTurn = false;
        clearColor();
        on = true;
        document.getElementsByClassName("turn")[0].innerHTML="Your turn";

    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {

            // switch (order[flash]) {
            //     case 1: one(); break;
            //     case 2: two(); break;
            //     case 3: three(); break;
            //     case 4: four(); break;
            // }
             document.getElementsByClassName("turn")[0].innerHTML = "Computer turn";
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();

            flash++;

        }, 200);
    }
}


one = () => {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
}

two = () => {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
}

three = () => {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
}

four = () => {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
}

clearColor = () => {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";

}

flashColor = () => {
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";

}

topLeft.addEventListener('click', event => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }

    }
})

topRight.addEventListener('click', event => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }

    }
})



bottomLeft.addEventListener('click', event => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }

    }
})

bottomRight.addEventListener('click', event => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }

    }
})

check = () => {
    //if the last value stored in playerOrder array after
    //player clicking is not equal to the order(computer order array)
    //then...
    if (playerOrder[playerOrder.length - 1] != order[playerOrder.length - 1]) {
        good = false;
    }

    if (playerOrder.length == 20 && good) {
        winGame();
        
    }

    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();

            //if strict is true then it will start the game
            //from beginning
            if (strict) {
                play();
            }
            else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalID = setInterval(gameTurn, 800);
            }


        }, 800);

        noise = false;
    }

    if(turn == playerOrder.length && good && !win)
    {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalID = setInterval(gameTurn,800);
    }
}


winGame = ()=>{
    document.getElementsByClassName("turn")[0].innerHTML = "SIMON !";
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}