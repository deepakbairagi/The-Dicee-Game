// For Dicee 1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImg="dice"+randomNumber1+".png";
var randomImgSource="images/"+randomImg;
document.querySelector(".img1").setAttribute("src",randomImgSource);

// For Dicee 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImg2="dice"+randomNumber1+".png";
var randomImgSource2="images/"+randomImg2;
document.querySelector(".img2").setAttribute("src",randomImgSource2);

// Decision of winner
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🏁 Player1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player2 Wins! 🏁";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
