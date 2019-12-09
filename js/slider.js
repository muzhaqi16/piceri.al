// JavaScript Document
var currentElement=1;
$(document).ready(function(){
	
	contentDivs=document.getElementById("content").getElementsByTagName("div");
	var image1= contentDivs.item(0).getElementsByTagName("img").item(0).src;
	var title1 = contentDivs.item(0).getElementsByTagName("h2").item(0).innerHTML;
	var text1=contentDivs.item(0).getElementsByTagName("p").item(0).innerHTML;
	
	document.getElementById("title").innerHTML=title1;
	document.getElementById("text").innerHTML=text1;
	
	animate=window.setInterval("nextImage(1)",5000);
	
	
	$(".prev").mouseover(function(){
		window.clearInterval(animate);
		});
	$(".prev").mouseout(function(){
		animate=window.setInterval("nextImage(1)",5000);
	});
	$(".next").mouseover(function(){
		window.clearInterval(animate);
		});
	$(".next").mouseout(function(){
		animate=window.setInterval("nextImage(1)",5000);
	});
	$('#nextItem').click(function(){
		 nextImage(1);
		});
	$('#previousItem').click(function(){
		  nextImage(-1);
		});
	});
callerInt=null;
width=10;
height=4;

function animation(){
	var textBox=document.getElementById("sliderText");
	textBox.style.visibility="hidden";
	randomNum=Math.floor(1+Math.random()*3);
	switch(randomNum){
		case 1:
			width=10;
			height=4;
			callerInt=window.setInterval("effect1()",15);
			break;
		case 2:
			width=10;
			height=4;
			callerInt=window.setInterval("effect2()",15);
			break;
		case 3:
			width=10;
			height=4;
			callerInt=window.setInterval("effect3()",15);
			break;
		default:
			break;
		}
	textBox.style.visibility="visible";
}

function effect1 (){
	width+=10;
	if(width>650){
	window.clearInterval(callerInt);
	}
	else{
	image=document.getElementById("slider");
	image.style.width =width+"px";
	}
}

function effect2(){
	height+=4;
	if(height>300){
	window.clearInterval(callerInt);
	}
	else{
	image=document.getElementById("slider");
	image.style.height =height +"px";
	}
}
function effect3(){
	width+=10;
	height+=4.7;
	if(width>650){
	window.clearInterval(callerInt);
	}
	else{
	image=document.getElementById("slider");
	image.style.width =width+"px";
	image.style.height =height +"px";
	}
}
function nextImage(direction){
	x=4;
	y=2;
	interval="";
	var slider=document.getElementById("slider");
	if(direction==1){
		currentElement+=1;
		if(currentElement==6){
			currentElement=1;
			}
		animation();
		
		var image1 = contentDivs.item(currentElement-1).getElementsByTagName("img").item(0).src;
		var title1 = contentDivs.item(currentElement-1).getElementsByTagName("h2").item(0).innerHTML;
		var text1 = contentDivs.item(currentElement-1).getElementsByTagName("p").item(0).innerHTML;
		slider.src=image1;
		document.getElementById("title").innerHTML=title1;
		document.getElementById("text").innerHTML=text1;
		}
	else{
		currentElement-=1;
		if(currentElement==0){
			currentElement=5;
			}
	
		var image1= contentDivs.item(currentElement-1).getElementsByTagName("img").item(0).src;
		var title1 = contentDivs.item(currentElement-1).getElementsByTagName("h2").item(0).innerHTML;
		var text1=contentDivs.item(currentElement-1).getElementsByTagName("p").item(0).innerHTML;
		
		slider.src=image1;
		document.getElementById("title").innerHTML=title1;
		document.getElementById("text").innerHTML=text1;
		}
	}