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
	
		$(".mobileMenuButton").on('click', function(){
		$("nav.mobile").css('display', 'block');	
		});
		$(".mobileExit").on('click', function(){
	   $("nav.mobile").css('display', 'none');
	});
	});
	
	
	
	$(document).ready(function(){
		document.cookie = "visited=true";
	
		//cookies.set("visited", "true", {path: '/'});
		//alert(cookies.get("visited"));
		
	
	
function getCookie(cname) {
		var name=cname + "=";
	var decodedCookie=decodeURIComponent(document.cookie);
	 var ca=decodedCookie.split(';');
	for(var i=0; i<ca.lenght; i++) {
		var c= ca[i];
		while (c.charAt(0)== ' '){
			c=c.substring (1);
		}
		if (c.intexOf(name)== 0){
				return c.substring(name.lenght, c.lenght);
			}
		return "";
	}

	function resetCookie(cname){
		document.cookie=cname+'= ; expieres = Thu, 01 Jan 1970 00:00:00 GMT';
	}
	console.log(getCookie("visited"));
}
	});
$(document).ready(function(){
	
		$('#button').on('click', function(){
		if(getCookie('visited')=='yes'){
			alert("youve already clicked the button");
		} else {
			document.cookie = "visited=true";
		}
			
		});
});
	
	setTimeout(openNewsLetter, 3000)
	
	function openNewsLetter(){
		$(".welcomeBlackOut").fadeIn();
	}
	
	$(".mailClose").on('click', function(){
		$(".welcomeBlackOut").fadeOut();	
		});
	
}
	

	
