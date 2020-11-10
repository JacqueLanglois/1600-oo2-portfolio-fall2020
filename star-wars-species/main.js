import { species } from '../Data/species.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)


const hopeButton = document.createElement('button')
hopeButton.textContent = 'A New Hope'
mainHeader.appendChild(hopeButton)

const empireButton = document.createElement('button')
empireButton.textContent = 'The Empire Strikes Back'
mainHeader.appendChild(empireButton)

const jediButton = document.createElement('button')
jediButton.textContent = 'Return of The Jedi'
mainHeader.appendChild(jediButton)

const phantomButton = document.createElement('button')
phantomButton.textContent = 'The Phantom Menace'
mainHeader.appendChild(phantomButton)

const clonesButton = document.createElement('button')
clonesButton.textContent = 'Attack of the Clones'
mainHeader.appendChild(clonesButton)

const film6Button = document.createElement('button')
film6Button.textContent = 'Revenge of the Sith'
mainHeader.appendChild(film6Button)

const forceButton = document.createElement('button')
forceButton.textContent = 'The Force Awakens'
mainHeader.appendChild(forceButton)

const hopeSpecies = species.filter(species => species.designation === 'hope')
console.log(hopeSpecies)


/*var films = ['https://swapi.co/api/films/1/', 'https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/7/'];

function hopeSpecies(films) {
  return films >= 'https://swapi.co/api/films/1/';
} */



hopeButton.addEventListener('click', (event) => {
    hopeSpecies.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        charImg.src = `https://starwars-visualguide.com/assets/img/species/1.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)

    })

})

//`https://starwars-visualguide.com/assets/img/species/1.jpg`