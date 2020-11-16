const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('')
    const data =await response.json()
    populatePokePage(data)
}

//https://pokeapi.co/api/v2/pokemon/munna