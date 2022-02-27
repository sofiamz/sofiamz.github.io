window.onload = function (){
//console.log(document.getElementsByClassName("logo"));
//console.log(document.getElementsByClassName("text"));
//console.log(document.getElementById("button"));
//console.log(document.getElementsByTagName("li"));
	
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
	
	$(document).ready(function(){
					  
	var toggled= false;
	
					  function toggledContent(){
		if (toggled){
			$("#content").hide();
			toggled=false
		} else {
			$("#content").show();
			toggled = true; 
		}
	}
	$("#button").on('click', function(){
		toggledContent();
	});
					  
	});
	
	
	$(document).ready(function(){
					  
	var toggled= false;
	
					function toggledImage(){
		if (toggled){
			$("#containerImage").hide();
			toggled=false
		} else {
			$("#containerImage").show();
			toggled = true; 
		}
	}
	$("#button1").on('click', function(){
		toggledImage();
	});
					  
	});
	
	//jQuery(document).ready(function(){
	//console.log(jQuery("li"));	
	//console.log(jQuery("content"));
	//	$("#button").click( function(){
	//	$("#content").hide();
		
	//});
	//$(document).mouseup(function(e){
	//	var container = $("#button");
		
	//	if (!container.is(e.target)
	//		&& container.has(e.target).lenght===0)
	//	    {
	//			$("#content").show();
	//		}
	//});
	//});
	
	
		
	//jQuery(document).ready(function(){
	//console.log(jQuery("li"));	
	//console.log(jQuery("content"));
	//$("#button").on('click', function(e){
	//$("#content").toggle();
	//});
	//var hiding = $("#button").on('click', function(e){
	//$("#content").hide();
	//});
		
	//	if (hiding.is(function(e.target))){
	//		$("#button").on('click', function(){
	//		$("#content").show();
	//	})
			
	//		}
	
	
}// JavaScript Document
