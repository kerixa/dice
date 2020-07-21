
var randomNumber1 =getRandomInt(6);
randomNumber1++;
var randomNumber2 =getRandomInt(6);
randomNumber2++;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.querySelector("#img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("#img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1 === randomNumber2) {
  document.querySelector("#heading").innerHTML="<em>Draw</em>";
}else if (randomNumber1 > randomNumber2){
  document.querySelector("#heading").innerHTML="<em>Player 1 wins! 💯</em>";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("#heading").innerHTML="<em>💯 Player 2 wins!</em>";
}
