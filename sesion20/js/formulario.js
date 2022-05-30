/*function guardarDatos(){
  localStorage.nombre = document.getElementById("nombre").value;
  localStorage.movil = document.getElementById("movil").value;
}

function recuperarDatos(){
  if((localStorage.nombre != undefined) && (localStorage.movil != undefined)){
    document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Num. Celular: " + localStorage.movil;
  }else{

  }
}*/
function guardarDato(){
  var nombre = document.getElementById("nombre").value;
  var movil = document.getElementById("movil").value;
  localStorage.setItem(nombre, movil);
  document.getElementById("nombre").value = "";
  document.getElementById("movil").value = "";
  actualizarDatos();
}

function recuperarDato(){
  var nombre = document.getElementById("nombre").value;
  localStorage.getItem(nombre);
  document.getElementById("movil").value = localStorage.getItem(movil);
}

function eliminarDatos(){
  var nombre = document.getElementById("nombre").value;
  localStorage.removeItem(nombre);
  actualizarDatos();
}

function eliminarTodo(){
  localStorage.clear();
  actualizarDatos();
}

function actualizarDatos(){
  var registro = "";
  if(localStorage.length == 0){
    registro += '<li>Vacío</li>';
  } else{
    for(var i = 0; i <= localStorage.length - 1; i++){
      var key = localStorage.key(i);
      registro += '<li>' + '<span class="nom"> ' + key + ' </span>' + ' <span class = "nom"> ' + localStorage.getItem(key) + ' </span> ' + ' </li><br>';
    }
  }
  document.getElementById('contactos').innerHTML = registro;
}