import { creatures } from '../Data/species.js'

const mainheader = document.createElement('header')
document.body.appendChild(mainheader)

const film1Button = document.createElement('button')
film1Button.textContent = 'A New Hope'
mainheader.appendChild(film1Button)

const film2Button = document.createElement('button')
film2Button.textContent = 'The Empire Strikes Back'
mainheader.appendChild(film2Button)

const film3Button = document.createElement('button')
film3Button.textContent = 'Return of The Jedi'
mainheader.appendChild(film3Button)

const film4Button = document.createElement('button')
film4Button.textContent = 'The Phantom Menace'
mainheader.appendChild(film4Button)

const film5Button = document.createElement('button')
film5Button.textContent = 'Attack of the Clones'
mainheader.appendChild(film5Button)

const film6Button = document.createElement('button')
film6Button.textContent = 'Revenge of the Sith'
mainheader.appendChild(film6Button)

const film7Button = document.createElement('button')
film7Button.textContent = 'The Force Awakens'
mainheader.appendChild(film7Button)