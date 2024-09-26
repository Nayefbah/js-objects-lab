const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[58].name)
console.log(game)
game.difficulty = 'Med'
const addStarterToParty = (starterPokemon) => game.party.push(starterPokemon)
addStarterToParty(pokemon[0])
const addPokemonToParty = (pokemonArray) => game.party.push(...pokemonArray)
addPokemonToParty([pokemon[5], pokemon[10], pokemon[15]])
game.gyms.forEach((gym) => gym.difficulty < 3 && (gym.completed = true))
const evolveStarter = () => game.party.splice(0, 1, pokemon[1])
evolveStarter()
game.party.forEach((pokemon) => console.log(pokemon.name))
pokemon
  .filter((pokemon) => pokemon.starter)
  .forEach((pokemon) => console.log(pokemon.name))

game.catchPokemon = (pokemonObj) => game.party.push(pokemonObj)
game.catchPokemon(pokemon[6])
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items.find((item) => item.name === 'pokeball').quantity--
}
game.catchPokemon(pokemon[6])
console.log(game.items)
game.gyms.forEach((gym) => gym.difficulty < 6 && (gym.completed = true))
game.gymStatus = () => {
  const gymTally = { completed: 0, incomplete: 0 }
  game.gyms.forEach((gym) =>
    gym.completed ? gymTally.completed++ : gymTally.incomplete++
  )
  console.log(gymTally)
}
game.gymStatus()
game.partyCount = () => game.party.length
console.log(game.partyCount())
game.gyms.forEach((gym) => gym.difficulty < 8 && (gym.completed = true))
console.log(game)
