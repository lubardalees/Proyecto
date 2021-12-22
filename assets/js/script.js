function enviar(){

    var nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre",nombre);
    console.log(nombre)
    window.location.href = "studio.html";

}

document.getElementById("enviar").addEventListener("click", function(){enviar()});