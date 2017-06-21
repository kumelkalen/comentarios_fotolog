/*aquí va tu código*/
function doFirst{
	var comentar = document.getElementById("add-button");
	button.addEventListener("click",saveComment,false);
}

function saveComment{
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
}

window.addEventListener("load",doFirst,false);
