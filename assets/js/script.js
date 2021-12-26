function enviar(){

    var nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre",nombre);
    
    window.location.href = "studio.html";
    
}



if(window.location.href.includes("studio.html")){
    document.getElementById("usuario").innerText=sessionStorage.getItem("nombre");
}

if(window.location.href.includes("nombre.html")){

    document.getElementById("enviar").addEventListener("click", function(){enviar()});
}