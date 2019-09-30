let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
function getcomputerchoice()
{
  const choices=['r','p','s'];
  const x=Math.floor(Math.random()*3);
  return(choices[x]);
}
function win(user,comp)
{
  userscore++;
  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=computerscore;
  result_div.innerHTML="you win";
}
function lose(user,comp)
{
  computerscore++;
  compscore_span.innerHTML=computerscore;
  userscore_span.innerHTML=userscore;
  result_div.innerHTML="you lose";

}
function draw(user,comp)
{
  result_div.innerHTML="its a draw";
}
function game(userchoice)
{
  const compchoice=getcomputerchoice();
  switch(userchoice + compchoice)
  {
    case "rs":
    case "pr":
    case "sp":
      win(userchoice,compchoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userchoice,compchoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userchoice,compchoice);
      break;
  }
}
function main()
{
  rock_div.addEventListener("click",function(){
    game('r');
  })
  paper_div.addEventListener("click",function(){
    game('p');
  })
  scissors_div.addEventListener("click",function(){
    game('s');
  })
}
main();
