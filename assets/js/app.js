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

// Creando la Tarjega con Imagen

var btnPublicarImagen = document.getElementById("btnPublicarImagen");
var archivoImagen = document.getElementById("archivoImagen");
btnPublicarImagen.addEventListener("click", function(){publicarImagen(archivoImagen)})
// console.log(archivoImagen);

function publicarImagen(elemento) {
  var textoTitulo = document.getElementById("tituloImagen").value;
  var tituloImagen = document.createElement("h3");
  var imagen = document.createElement("img");
  var tarjetaConImagen = document.createElement("div");
  tituloImagen.textContent = textoTitulo;

  var reader = new FileReader();
  reader.onload = function(){
    var imagenUsuario = document.getElementById("imagen");
    imagen.src = reader.result;
  };
  reader.readAsDataURL(elemento.files[0]);
  console.log(reader);

  tarjetaConImagen.appendChild(tituloImagen);
  tarjetaConImagen.appendChild(imagen);
  tarjetas.appendChild(tarjetaConImagen);
  tarjetaConImagen.className = "card-panel";
  textoTitulo.value = "";
}
