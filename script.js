const btn = document.getElementById('btn')
const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById('card')
const image = document.getElementById('image')
const pokeName = document.getElementById('pokeName')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defence = document.getElementById('defence')
const speed = document.getElementById('speed')
const search = document.getElementById('search')
const searchBar = document.getElementById('search_bar')
let getPokemon = () => {
    let id = Math.floor(Math.random() * 150) + 1
    const finalUrl = url + id
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data)
            console.log(data)
        })
}
btn.addEventListener('click', getPokemon)
window.addEventListener('load', getPokemon)

function generateCard(data) {
    const sprite = data.sprites.other.dream_world.front_default
    const pokemon = data.name
    const hpStat = data.stats[0].base_stat
    const attackStat = data.stats[1].base_stat
    const defenceStat = data.stats[2].base_stat
    const speedStat = data.stats[3].base_stat
    image.src = sprite
    pokeName.style.fontSize = '20px'
    pokeName.innerText = pokemon
    hp.innerText = hpStat
    attack.innerText = attackStat
    defence.innerText = defenceStat
    speed.innerText = speedStat
    // return (sprite, pokemon, hpStat, attackStat, defenceStat, speedStat)
}
search.addEventListener('click', () => {
    const num = searchBar.value
    const finalUrl = url + num
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data)
            console.log(data)
        })
})
/*Colors*/