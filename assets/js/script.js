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



const aplicacion = document.querySelector('.container')

const url = 'https://ghibliapi.herokuapp.com/films'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        const p = document.createElement('p') 
        p.innerHTML = usuario.title
        aplicacion.appendChild(p)
    });
})
.catch(err => console.log(err))
