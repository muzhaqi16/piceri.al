// JavaScript Document
window.ready(runTime());
function checkLogin(){
	loginForm=document.getElementById("loginForm");
	if(loginForm.username.value=="" || loginForm.username.value==null){
		alert('Username could not be empty');
		return false;
		}
	if(loginForm.username.value.length<6){
		alert('Username too short');
		return false;
		}
	if(loginForm.password.value=="" || loginForm.password.value==null){
		alert('Password could not be empty');
		return false;
		}
	if(loginForm.password.value.length<6){
		alert('Password too short');
		return false;
		}
	setCookie('username',loginForm.username.value);
	return true;
	}
	
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setCookie(cookieName,value)
{
	document.cookie=cookieName + "=" + escape(value);
}
function deleteCookie(cookieName){
	 var exdate=new Date();
	 exdate.setDate(exdate.getDate()-1);

	 document.cookie=cookieName+"=null;expires="+exdate.toUTCString();
     location.reload(); 
}
function runTime()
{
   window.setInterval("updateTime()",1000);
   updateTime();
}

function updateTime()
{
   var nowTime = new Date();
   var resultsText =nowTime.toLocaleString();
   var timeArray=resultsText.split('GMT');
   resultsText=timeArray[0];
   document.getElementById('time').innerHTML=resultsText;
}
function check(){
	var errors='';
	form = document.getElementById('sendEmail');
	if(form.name.value==''){
		errors+='* Your name could not be emtpy\n<br />';
		}
	if(form.email.value==''){
		errors+='* Your email could not be emtpy\n<br />';
		}
	if(form.message.value==''){
		errors+='* Your message could not be emtpy\n<br />';
		}
	if(errors!=''){
		errorEl=document.getElementById("errors");
		errorEl.innerHTML="<h4>You have some errors</h4>\n<span id='warn'>"+errors+"</span>";
		return false;
		}
	else{
		return true;
		}
	}
function addToChart(name,amount,price){
	var exists=0;
	var x=1;
	if(getCookie('username')!="" && getCookie('username')!=null){
	while(exists!=1){
		if(getCookie('order'+x)=="" || getCookie('order'+x)==null){
				if(confirm('You have ordered ' + name + " which cost $ "+(price*amount)+"\nDo you want to addd them to chart ?.")){
				setCookie('order'+x,name+'|'+amount+'|'+amount*price);
				exists=1;
				}
				else{
					exists=1;
					}
			}
		else{
				x++;
			}
		}
		location.reload();
	}
	else
	{
		alert('You must be logged in to make an order');
	}
}
function getChartItems(){
	chart=document.getElementById('chartItems');
	items="<table>";
	var x=0;
	cont=1;
	var total=0;
	while(cont!=0){
		if(getCookie('order'+(x+1))=="" || getCookie('order'+(x+1))==null){
			cont=0;
		}
		else
		{
			x++;
			cookieData=getCookie('order'+x)+"\n";
			var elements=cookieData.split('|');
			total+=parseFloat(elements[2]);
			items+='<tr><td align="left"> ' + elements[0] +'</td><td align="right">' + elements[2] +' $</td><td> <img src="images/drop.png" onclick="removeItem('+x+');" /></td></tr>\n';
			cont=1;
		}
	}
	if(x!=0){
		items+='<tr><td colspan="3">------------------------------<td></tr>';
		items+='<tr><td colspan="2" align="left">Total</td>';
		items+='<td colspan="1" align="right"> '+parseFloat(total)+' $</td></tr>';
		items+='<tr><td colspan="3" align="right"><input type="button" value="Checkout" name="checkout" onClick="checkOut();" /><td></tr>';
		items+="</table>";
		chart.innerHTML=items;
	}
	else{
		chart.innerHTML='You have not ordered anything';
		}
	return x;
}
function animate1(){
	$("#chart").animate({"margin-right":"0px"},"slow")
	}
function animate2(){
	$("#chart").animate({"margin-right":"-150px"},"slow")
	}
function removeItem(itemID){
	if(confirm('Are you sure you want to delete this pizza ?')){
			deleteCookie('order'+itemID);
		}
	}
function checkOut(){
	if(confirm('Sure to continue with the order ?')){
		window.open('pay.html','payment','width=300,height=200,toolbar=no,scrollbars=no,resizable=no,menubar=no');
	}
}