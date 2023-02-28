const names = document.getElementById("nombre");
const name = document.getElementById("name");
const apellido = document.getElementById("apellido")
const foto = document.getElementById("foto")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const generarPersona = async() => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    foto.src = datos.picture.large;
    names.textContent = datos.name.first + " "+ datos.name.last ;
    name.textContent = datos.name.first + " "+ datos.name.last ;
    phone.textContent = datos.phone ;
    email.textContent = datos.email ;
}
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

      generarPersona();
 
      

    
    
