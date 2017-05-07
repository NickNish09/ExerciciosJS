var x = document.getElementById("chatinput");
x.onkeyup = function(){
	document.getElementById("caixa").innerHTML = x.value;
}