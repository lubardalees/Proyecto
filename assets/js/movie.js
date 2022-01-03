const aplication = document.querySelector('#contenido_api')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://ghibliapi.herokuapp.com/films'
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {

const div = document.createElement('div')

div.className = 'info'

 const title = document.createElement('h4')
 title.innerHTML = data.title
 const original_title = document.createElement('h5')
 original_title.innerHTML = data.original_title
 const description = document.createElement('h6')
 description.innerHTML = data.description
 div.appendChild (title)
 div.appendChild (original_title)
 div.appendChild (description)
 const image = document.createElement('img')
 image.src = data.image
 image.id = ('ghibli')
 aplication.appendChild(div)
 aplication.appendChild(image)




})
.catch(err => console.log(err))

