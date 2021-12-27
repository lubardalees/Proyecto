const aplication = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://ghibliapi.herokuapp.com/films'
console.log(`${url}/${id}`)
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {

 const title = document.createElement('h4')
 title.innerHTML = data.title
 const original_title = document.createElement('h5')
 original_title.innerHTML = data.original_title
 const description = document.createElement('h6')
 description.innerHTML = data.description
 const image = document.createElement('img')
 image.src = data.image
 aplication.appendChild(title)
 aplication.appendChild(original_title)
 aplication.appendChild(description)
 aplication.appendChild(image)




})
.catch(err => console.log(err))

