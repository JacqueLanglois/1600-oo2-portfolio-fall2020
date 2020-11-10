import { people } from '../Data/people.js'



const mainContent = document.querySelector('#main')
populateDOM(people)
const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female'
mainHeader.appendChild(femaleButton)

const enbyButton = document.createElement('button')
enbyButton.textContent = 'N/A'
mainHeader.appendChild(enbyButton)



const malePeople = people.filter(person => person.gender === 'male')

const femalePeople = people.filter(person => person.gender === 'female')

const enbyPeople = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'none' ||
        person.gender === 'hermaphrodite') {
        return person
    }

})


maleButton.addEventListener('click', (event) => {
    populateDOM(malePeople)
})

femaleButton.addEventListener('click', () => populateDOM(femalePeople))

enbyButton.addEventListener('click', () => populateDOM(enbyPeople))

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true)//genius level achieved by paying attention to Thor
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)
    })

}

//let theURL = "https://swapi.co/api/people/1/"
//let theURL2 = "https://swapi.co/api/people/14/"

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
