// const vacationSpots = ["Tokyo", "New York", "Gotham"]

// for( let i = 0; i < vacationSpots.length; i++ ){
//     console.log("I would like to visit" + " " + vacationSpots[i])
// }







// let bobsFollowers = ["Bruce", "Selina", "Jim", "Alfred"]
// let tinasFollowers = ["Bruce", "Alfred", "Oswald"]
// let mutualFollowers = []

// for( let i = 0; i < bobsFollowers.length; i++){
//   for(let j = 0; i < tinasFollowers.length; j++){
//     if (bobsFollowers[i] === tinasFollowers[j]){
//       console.log(bobsFollowers[i],tinasFollowers[j])
//     }
//   }
// }






// let jackman = ["Logan", "The Wolverine", "Days of Future Past", "Origins: Wolverine", "X-Men"]
// let stewart = ["Days of Future Past", "X-Men", "Logan", "First Class", "Apocalypse", "Dark Phoenix"]

// let mutualMovies = []
// let nonMutualMovies = []

// for( let i = 0; i < jackman.length; i++){
//     for( let j = 0; j < stewart.length; j++){
//         if( jackman[i] === stewart[j]){
//             mutualMovies.push(jackman[i])
//         }            
        
//     }
// }
// console.log(mutualMovies)





// const select = (selector) => {
//   return document.querySelector(selector)
// }

// var x = 10
// do {
//     document.write("<h2>I will run once before checking the condition</h2>")
//     x--
// } while (x > 5)








const bros = [{
    name: 'Khachik',
    height: '174',
    mass: '90',
    eye_color: 'lightbrown',
    gender: 'male',
    occupation: 'brother'

},
{
    name: 'Arsen',
    height: '170',
    mass: '75',
    eye_color: 'brown',
    gender: 'male',
    occupation: 'friend'

},
{
    name: 'Ashot',
    height: '170',
    mass: '70',
    eye_color: 'lightbrown',
    gender: 'male',
    occupation: 'friend'

},
{
    name: 'Gevor',
    height: '177',
    mass: '90',
    eye_color: 'lightbrown',
    gender: 'male',
    occupation: 'friend'

},
]

const eyeColor = bros.map((bro) => bro.eye_color)
console.log(eyeColor)

const broNames = bros.map((bro) => bro.name)
console.log(broNames)

const broGender = bros.map((bro) => ({
    name: bro.name,
    gender: bro.gender
}))
console.log(broGender)

const broOccupation = bros.map((bro) => ({
    name: bro.name,
    occupation: bro.occupation
}))

console.log(broOccupation)

const broMass = bros.map((bro) => bro.mass)
console.log(broMass)
if ( broMass.length == 4){
    console.log('rrrr')
}






























