import { films } from './Data/films.js'
import { species } from '.Data/species.js'

//console.log(species.length)

const main = document.querySelector('main')

/*films.forEach(film => {
    console.log(film.title)
    let newTitle = main.appendChild(document.createElement("h1"))
    newTitle.textContent = film.title
}); */

/*species.forEach(person => {console.log(species.name)
    let personImg = document.createElement('img')
    personImg.src = ""
    main.appendChild(personImg)

}) */

//https://starwars-visualguide.com/assets/img/films/1.jpg

const main = document.querySelector('main')

for (let i = 0; < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = 'https://starwars-visualguide.com/assets/img/films/' + (i + 1) + '.jpg'
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = 'Movie Title Here'

    figure.appendChild(figImg)
    figure.appendChild(figCaption)
}