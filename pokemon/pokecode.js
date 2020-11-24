async function getAPIData(url) {
    try {
        const responce = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/`).them
    (async (data) => {
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {populatePokeCard(pokedata)
            })
        }
    })
}

const pokeGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')




async function loadData() {
    const response = await fetch('')
    const data =await response.json()
    populatePokePage(data)
}

//
//https://github.com/fanzeyi/pokemon.json/blob/master/images/517.png