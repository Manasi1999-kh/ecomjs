function myf1() {
	localStorage.clear();
	localStorage.setItem('name',document.getElementById("fname").value);
	localStorage.setItem('ml1',document.getElementById("email").value);
	localStorage.setItem('pass1',document.getElementById("psw").value);
	// alert("Form Submitted"+localStorage.getItem('ml')+" "+localStorage.getItem('pass'));
	var p1=document.getElementById("psw").value;
	var p2=document.getElementById("repsw").value;
	if(p1!=p2){
		alert("Password not match");
		return false;
	}
	else{
		alert("From Submitted");
		return true;
	}	
}

