/*aquí va tu código*/
function doFirst () {
	var comentar = document.getElementById("add-button");
	comentar.addEventListener("click", saveComment, false);
}

function saveComment () {
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
	display();
}

function display (){
	var contComment = document.getElementById("ale");

}


window.addEventListener("load",doFirst,false);
