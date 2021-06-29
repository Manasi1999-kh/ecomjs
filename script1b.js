function myf1(){
	localStorage.setItem('ml2',document.getElementById("email").value);
	localStorage.setItem('pass2',document.getElementById("psw").value);
	var flag1=false,flag2=false;
	if(localStorage.getItem('ml1')==localStorage.getItem('ml2'))
	{
		flag1=true;
	}
	if(localStorage.getItem('pass1')==localStorage.getItem('pass2'))
	{
		flag2=true;
	}
	if(flag1==true && flag2==true)
	{
		alert("Welcome "+localStorage.getItem('name'));
		return true;
	}
	else if(flag1==true && flag2==false)
	{
		alert("Wrong password");
		return false;
	}
	else{
		alert("User not Registered")
		return false;
	}
}
function myf2()
{
	localStorage.setItem('ml2',document.getElementById("email").value);
	localStorage.setItem('pass2',document.getElementById("psw").value);
	var flag1=false,flag2=false;
	if(localStorage.getItem('ml1')==localStorage.getItem('ml2'))
	{
		flag1=true;
	}
	if(localStorage.getItem('pass1')==localStorage.getItem('pass2'))
	{
		flag2=true;
	}
	if(flag1==true && flag2==true)
	{
		return true;
	}
	return false;
}