function showmenu(){
	document.getElementById('menuoverlay').style.display="block";
}
function hidemenu(){
	document.getElementById('menuoverlay').style.display="none";
}
console.log("You got it! the script is embedded into your site!");
setInterval(makeRainbowBackground,300);


function makeRainbowBackground(){
var r = getRandomInt(255);
var g = getRandomInt(255);
var b = getRandomInt(255);

document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}