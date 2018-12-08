//url servidor

let url = "http://rest.learncode.academy/api/kau/lms";

function postGrupos(){
  let xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function(){
      if(xhttp.readyState==4){
          console.log(xhttp.responseText);
      }
  }

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type","application/json");

  let msg = [
      //GRUPO 1
      { 
      grupo: "Grupo da família!",
      mensagens: [{
          usuario: "joao03",
          texto: "Tudo bem?"
          },
          {
          usuario: "victor23",
          texto: "Tudo Tranqs"
          },
          {
          usuario: "joao03",
          texto: "Que bom"
          },
      ]
      },
      //GRUPO 2
      { 
      grupo: "Churrascão no domingão",
      mensagens: [{
          usuario: "maria2000",
          texto: "Na paz?"
          },
          {
          usuario: "victor23",
          texto: "Show"
          },
          {
          usuario: "maria2000",
          texto: "Que bom"
          },
      ]
      },
      //GRUPO 3
      { 
      grupo: "Só topzera",
      mensagens: [{
          usuario: "victor03",
          texto: "Bom?"
          },
          {
          usuario: "robson_alves",
          texto: "Bom"
          },
          {
          usuario: "victor03",
          texto: "Que bom"
          },
      ]
      }
  ];
  xhttp.send(JSON.stringify(msg));
}

function getGrupos(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(xhttp.readyState==4){
          let body_parsed = JSON.parse(xhttp.responseText);
          console.log(xhttp.responseText);
          console.log(body_parsed);
      }
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}

function criarGrupo(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(xhttp.readyState==4){
          let body_parsed = JSON.parse(xhttp.responseText);
          console.log(xhttp.responseText);
          console.log(body_parsed[0]);
      }
  }
  xhttp.open("GET", url, true);
  xhttp.send();

  //criando elementos
  let grupos = document.querySelector(".grupos");

  let grupo = document.createElement("div");
  grupo.classList.add("grupo");

  let imgGrupo = document.createElement("div");
  imgGrupo.classList.add("imgGrupo");
  
  let tituloGrupo = document.createElement("span");
  tituloGrupo.classList.add("tituloGrupo");

  // juntando elementos
  let textoTeste = document.createTextNode("blabla");

  tituloGrupo.appendChild(textoTeste);

  grupo.appendChild(imgGrupo);
  grupo.appendChild(tituloGrupo);
  grupos.appendChild(grupo);
}

postGrupos();
getGrupos();
criarGrupo();