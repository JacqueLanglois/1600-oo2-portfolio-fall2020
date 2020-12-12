async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then//?limit=25&offset=800
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                })
            }
    })
}

const pokeGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('.load')
const newPokemonButton = document.querySelector('.newPokemon')

newPokemonButton.addEventListener('click', () => {
    let pokeName = prompt('pick a Pokename')
    let newPokemon = new Pokemon ('')
})


loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.hidden = true
})

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener( 'click', function () {
        pokeCard.classList.toggle('is-flipped')
    })


    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `${pokemon.abilities.length} abilities`
    backLabel.addEventListener('click', () => getAbilitiesDetails(pokemon.abilities))
    pokeBack.appendChild(backLabel)
    return pokeBack
}

async function getAbilitiesDetails(pokemonAbilities) {
    const abilitiesUrl = pokemonAbilities[0].abilities.url
    const abilitiesData = await getAPIData(abilitiesUrl)
    console.log (getAPIData(abilitiesUrl).then((data) => data.type.name))
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99&& pokemon.id < 810) {
        return`${pokemon.id}`
    }
}

function pokemon(name, height, weight, abilities) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
}


/*https://github.com/fanzeyi/pokemon.json/blob/master/images/517.png*/