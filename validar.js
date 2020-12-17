function validar () {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    nacimiento = document.getElementById("nacimiento").value;
    direccion = document.getElementById("direccion").value;
    localidad = document.getElementById("localidad").value;
    email = document.getElementById("email").value;
    celular = document.getElementById("celular").value;
    comentarios = document.getElementById("comentarios").value;

    if (nombre === "" || apellido === "" || nacimiento === "" || direccion === "" || localidad === "" || email 
    === "" || celular === "" || comentarios === "" ) {
        alert("Los campos con * son obligatorios")
        return false;
    }
    let checked = formulario.querySelectorAll('.usuario > input[type=checkbox]:checked');
    let checkdos = formulario.querySelectorAll('.puesto > input[type=checkbox]:checked');
    let checktres = formulario.querySelectorAll('.sucursal > input[type=checkbox]:checked');
    let checkcuatro = formulario.querySelectorAll('.horario > input[type=checkbox]:checked');
    let checkcinco = formulario.querySelectorAll('.disponibilidad > input[type=checkbox]:checked');
    let checkseis = formulario.querySelectorAll('.feriados > input[type=checkbox]:checked');

if (checked.length === 0 || checkdos.length === 0 || checktres.length === 0 || checkcuatro.length === 0 || checkcinco.length === 0 ||
    checkseis.length === 0) {
    alert("No ha seleccionado una opción");
    return false;
} else if (checked.length > 1 || checkseis.length > 1 || checkcuatro.length > 1 || checkcinco.length > 1) {
    alert("Ha seleccionado mas opciones de las válidas");
    return false;
} else {
    alert("El Formulario ha sido mandado con Éxito")
}
}