const aplication = document.querySelector('container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://ghibliapi.herokuapp.com/films'
console.log(`${url}/${id}`)
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {

 const title = document.createElement('p')
 title.innerHTML = data.title
 aplication.appendChild(title)


})
.catch(err => console.log(err))

