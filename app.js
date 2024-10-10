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

//console.dir(pokemon, { maxArrayLength: null })

//console.log(game)

/*
Solve Exercise 3 here:
*/
game.difficulty = 'Med'
// console.log(game)

/*
Solve Exercise 4 here:
*/
let starter = pokemon[0]
// console.log(starter)
game.party.push(starter)
// console.log(game.party)

/*
Solve Exercise 5 here:
*/

game.party.push(pokemon[8], pokemon[11], pokemon[79])

// console.log(game.party)

/*
Solve Exercise 6 here:
*/

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})

// console.log(game.gyms)

/*
Solve Exercise 7 here:
*/

const number2 = pokemon.find((no2) => {
  no2.number === 2
})
game.party.splice(0, 1, number2)
// console.log(game.party)

/*


Solve Exercise 8 here:
*/
game.party.forEach((pokName) => {
  // console.log(pokName.name)
})

/*
Solve Exercise 9 here:
*/

pokemon.forEach((start) => {
  if (start.starter === true) {
    // console.log(start.name)
  }
})

/*

Solve Exercise 10 here:
*/
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}
game.catchPokemon(pokemon[28])
// console.log(game.party)

/*

Solve Exercise 11 here:
*/

console.log(game.party)
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items.forEach((item) => {
    if (item.name === 'pokeball') {
      item.quantity -= 1
    }
  })
}

/*
Solve Exercise 12 here:
*/
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})

// console.log(game.gyms)

/*
Solve Exercise 13 here:
*/

game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }
  game.gyms.forEach((gym) => {
    if (gym.completed == true) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })
  console.log(gymTally)
}
game.gymStatus()

/*
Solve Exercise 14 here:
*/

game.partyCounter = () => {
  return game.party.length
}
console.log(game.partyCounter())

/*
Solve Exercise 15 here:
*/
game.gyms((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})
console.log(game.gyms)

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game)
