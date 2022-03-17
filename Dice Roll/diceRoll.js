let photoNumberP1 = Math.floor(Math.random() * 6 + 1);
let photoNumberP2 = Math.floor(Math.random() * 6 + 1);
let whoWin;

document.querySelectorAll("img")[0].setAttribute("src","/images/dice"+photoNumberP1+".png");
document.querySelectorAll("img")[1].setAttribute("src","/images/dice"+photoNumberP2+".png");
 
if(photoNumberP1 === photoNumberP2)
{
   whoWin = "It's a Tie";
}
else if(photoNumberP1 > photoNumberP2)
{
    whoWin = "Player 1 Wins";
}
else 
{
    whoWin = "Player 2 Wins";
}

document.querySelector("h1").innerHTML = whoWin;

