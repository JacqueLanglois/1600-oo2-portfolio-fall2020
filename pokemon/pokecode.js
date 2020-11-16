const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('')
    const data =await response.json()
    populatePokePage(data)
}

//https://pokeapi.co/api/v2/pokemon/munna
//https://github.com/fanzeyi/pokemon.json/blob/master/images/517.png