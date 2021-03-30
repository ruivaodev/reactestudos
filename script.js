function addBola() {
  let bola = document.createElement("div"); //criando a div
  bola.setAttribute("class", "bola");

  let p1 = Math.floor(Math.random() * 500);
  let p2 = Math.floor(Math.random() * 400);
  let cor = Math.floor(Math.random() * 900);
  bola.setAttribute(
    "style",
    "left:" +
      p1 +
      "px; top:" +
      p2 +
      "px; background-color:RGB(" +
      cor +
      "," +
      cor +
      "," +
      cor +
      "," +
      cor +
      ");"
  );

  // pegando os estilos
  bola.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(bola); //criando a div
}

function estourar(elemento) {
  document.body.removeChild(elemento); //removendo
}
function iniciar() {
  setInterval(addBola, 1000);
}
