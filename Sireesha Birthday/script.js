const secretPassword = "Karthik_Sireesha_2129";

function checkPassword(){

let pass =
document.getElementById("password").value;

if(pass === secretPassword){

window.location.href="pages/game.html";

}

else{

document.getElementById("error").innerHTML =
"❌ Wrong Password";

}

}