// let url = "http://rem-rest-api.herokuapp.com/"

// let reqTeste = new XMLHttpRequest();


// function adicionarGrupo(){
//     let grupos = document.querySelector(".grupos");

//     let grupo = document.createElement("div");
//     grupo.classList.add("grupo");

//     let imgGrupo = document.createElement("div");
//     imgGrupo.classList.add("imgGrupo");
    
//     let tituloGrupo = document.createElement("span");
//     tituloGrupo.classList.add("tituloGrupo");

//     let textoTeste = document.createTextNode("blabla");

//     tituloGrupo.appendChild(textoTeste);

//     grupos.appendChild(grupo);
//     grupo.appendChild(imgGrupo);
//     grupo.appendChild(tituloGrupo);
// }

// adicionarGrupo();
// adicionarGrupo();
// adicionarGrupo();

var xhr = new XMLHttpRequest()
xhr.open("GET", "http://rem-rest-api.herokuapp.com/api/users", true)
xhr.withCredentials = true
xhr.send()
xhr.onload = function() {
  var data = JSON.parse(xhr.responseText)
}