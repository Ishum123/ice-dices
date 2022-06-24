
//alert("Working");
var temp1= Math.floor(Math.random()*6)+1;
var temp2= Math.floor(Math.random()*6)+1;

var diceimage1="dice" + temp1+ ".png"; 
var diceimage2= "dice" +temp2+".png";

document.querySelector(".img1").setAttribute("src", diceimage1);
document.querySelector(".img2").setAttribute("src", diceimage2);

if(temp1>temp2){
 document.querySelector("h1").innerHTML="<em>Player one wins!</em>";
}

if(temp1<temp2){
 document.querySelector("h1").innerHTML="<em>Player two wins!</em>";
}
   
if(temp1===temp2){
 document.querySelector("h1").innerHTML="<em>Woah! It's a tie!!!</em>";
}
   
   
