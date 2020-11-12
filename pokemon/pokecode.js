const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('')
    const data =await response.json()
    populatePokePage(data)
}