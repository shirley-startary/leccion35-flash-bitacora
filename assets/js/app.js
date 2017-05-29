var publicarMensaje = document.getElementById("publicarMensaje");
publicarMensaje.addEventListener("click",crearTarjetaMensaje);

var tarjetas = document.getElementById("tarjetas");


function crearTarjetaMensaje(){
  var modalTitulo = document.getElementById("tituloDelMensaje").value;
  var modalMensaje = document.getElementById("mensajeAPublicar").value;
  var tituloTarjeta = document.createElement("h3");
  tituloTarjeta.innerText = modalTitulo;
  var contenidoTarjeta = document.createElement("p");
  var tarjetaMensaje = document.createElement("div");
  contenidoTarjeta.innerText=modalMensaje;
  tarjetaMensaje.appendChild(tituloTarjeta);
  tarjetaMensaje.appendChild(contenidoTarjeta);
  tarjetas.appendChild(tarjetaMensaje);
  tarjetaMensaje.className="card-panel";
  modalTitulo.value="";
  modalMensaje.value="";
}
