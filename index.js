var randomnum = Math.random();
var dicenum = Math.floor((randomnum * 6)) + 1;
var ranimage = "dice" + dicenum + ".png";
var imgsource = "images/" + ranimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsource);

var randomnum1 = Math.random();
var dicenum1 = Math.floor((randomnum1 * 6)) + 1;
var ranimage1 = "dice" + dicenum1 + ".png";
var imgsource1 = "images/" + ranimage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsource1);

if (dicenum > dicenum1) {
    document.querySelector("h1").innerHTML = "Player 1 Wiins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}