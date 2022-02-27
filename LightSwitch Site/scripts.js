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
	
	$(document).ready(function(){
		var toggled=false;
		
				function toggledDarkmode(){
			if (toggled){
			$("#content").fadeOut (function(){
				$("nav").fadeOut();
			});
				toggled = false;
			} else {
				$("#content").fadeIn(function(){
					$("#nav").fadein();
				});
			toggled= true;
			}
				
			}
				//fadeOut(function(){
				//$("nav").fadeOut();
			//});
		//toggled=false;
			//} else{
			//	$("#content").fadeIn(function(){
			//		$("nav").fadeIn();
			//	});
			//toggled= true
			//}
	$("#button2").on('click', function(){
				toggledDarkmode();
	$ ('#content').css('background-color', "midnightblue")
	$("#content").css('body',"white");	
				});		
	
	});

	$(document).ready(function(){
		var toggled=false;
		
				function toggledGreen(){
			if (toggled){
			$("#content").fadeOut (function(){
				$("nav").fadeOut();
			});
				toggled = false;
			} else {
				$("#content").fadeIn(function(){
					$("#nav").fadein();
				});
			toggled= true;
			}
				
			}
				//fadeOut(function(){
				//$("nav").fadeOut();
			//});
		//toggled=false;
			//} else{
			//	$("#content").fadeIn(function(){
			//		$("nav").fadeIn();
			//	});
			//toggled= true
			//}
	$("#button3").on('click', function(){
				toggledGreen();
	$ ('#content').css('background-color', "MediumAquamarine")
				});		
	
	});
	
	$(document).ready(function(){
		var toggled=false;
		
				function toggledText(){
			if (toggled){
			$("#content").fadeOut (function(){
				$("nav").fadeOut();
			});
				toggled = false;
			} else {
				$("#content").fadeIn(function(){
					$("#nav").fadein();
				});
			toggled= true;
			}
				
			}
				//fadeOut(function(){
				//$("nav").fadeOut();
			//});
		//toggled=false;
			//} else{
			//	$("#content").fadeIn(function(){
			//		$("nav").fadeIn();
			//	});
			//toggled= true
			//}
	$("#button4").on('click', function(){
				toggledText();
	$ ('#content').css( 'font-size', "120%")
				});		
	
	});//'font-color', "0, 128, 128",
	
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
