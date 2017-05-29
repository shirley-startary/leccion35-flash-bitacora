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


var btnPublicarEvento = document.getElementById("btnPublicarEvento");
btnPublicarEvento.addEventListener("click",publicarEvento);

function publicarEvento(){

  var textoTitulo = document.getElementById("tituloEvento").value;
  var fecha=document.getElementById("fechaEvento").value;
  console.log(fecha);

  var tituloMapa = document.createElement("h3");
  tituloMapa.textContent = textoTitulo;
  var fechaEvento =document.createElement("p");
  fechaEvento.textContent =fecha;
  var map = document.createElement("div");
  var tarjetaConMapa= document.createElement("div");

  tarjetaConMapa.appendChild(tituloMapa);
  tarjetaConMapa.appendChild(fechaEvento);
  tarjetaConMapa.appendChild(map);
  tarjetas.appendChild(tarjetaConMapa);
}

function initMap(){


}


function findme(){
  var output = document.getElementById('mapa');
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(localizacion, error);
    output.innerHTML ="<p>tu navegador soporta geolocalicacion</p>";
  }else{
    output.innerHTML ="<p>tu navegador NO soporta geolocalicacion</p>";
    }

  function localizacion (posicion){
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    output.innerHTML ="<p>latitud:"+latitude+"<br/>longitud:"+longitude+"</p>";

  }
  function error (){
    output.innerHTML ="<p>No se pudo obtener ubicacion</p>";
  }

}
