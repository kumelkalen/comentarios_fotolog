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
	
	for(var i=0;i<localStorage.length;i++){
		var clave = localStorage.key(i);
		var valor = localStorage.getItem(clave);

		//Nombre
		var h = document.createElement("h3");
		var textName = document.createTextNode(clave);
		h.appendChild(textName);
		contComment.appendChild(h);
		//Comentario
		var p = document.createElement("p");
		var textComment = document.createTextNode(valor);
		p.appendChild(textComment);
		contComment.appendChild(p);
	}
}


window.addEventListener("load",doFirst,false);
