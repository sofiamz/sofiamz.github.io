window.onload = function (){
console.log(document.getElementsByClassName("logo"));
console.log(document.getElementsByClassName("text"));
console.log(document.getElementById("button"));
console.log(document.getElementsByTagName("li"));
	
	var contentDiv= document.getElementById("content");
	var landingImg= document.getElementsByClassName("headerImage");
	var newContent = document.createElement("h1");
	newContent.innerHTML= "this is content";
	contentDiv.appendChild(newContent);

	
	console.log(newContent)
	
	function turnTextBlue(){
	newContent.style.color = "140,216,230";
	contentDiv.style.color= "royalblue";

		
	}
	
	setTimeout(turnTextBlue, 1500);
	
	function changeBackground (){
		contentDiv.style.backgroundColor= "floralwhite";
	}
	
	setTimeout(changeBackground, 1800);
	
	
};// JavaScript Document
