const coinArray=["Heads","Tails"]
let score =[0,0];
const message =document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for(let i=0;i<buttons.length;i++)
{
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}


function tossCoin(e)
{
    let playerGuess = e.target.innerText
//   console.log("player: "+e.target.innerText);
    let compuerToss=Math.floor(Math.random()*2);
//   console.log("computer: "+coinArray[compuerToss]);
    let computerGuess=coinArray[compuerToss];
    message.innerHTML="Computer Selected: " + computerGuess;
    let output;
    if(playerGuess == computerGuess)
    {
       output = " PlayerWin";
       score[0]++;
    }
    else
    {
        output = " ComputerrWin";
        score[1]++;
    }
    message.innerHTML+= output +"<br/> Player : " + score[0] + " Computer :" + score[1];

}

