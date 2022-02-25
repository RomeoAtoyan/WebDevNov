// Math object
var result;

result = Math.PI

// Round()
result = Math.round(5.4)
result = Math.round(2500.545)

//Power Method()
result = Math.pow(3,2)
result = Math.pow(8,2)

// Square method
result = Math.sqrt(64)

// Sinus and Cosinus
result = Math.sin(90*Math.PI /180)
result = Math.cos(0*Math.PI /180)

// max ()
result = Math.max(3,6,66,99,100,101,999)

// min ()
result = Math.min(3,6,66,99,100,101,999)

// random()
// 0-1
// 0-9
// 0-10
// 0-100
result = Math.random()
result = Math.round(Math.random()*10)

function getRndInteger(min,max){
    return Math.round(Math.random() * (max - min) ) +min;
}

let names = ['jack', 'mike', 'joe' , 'michael']
result = getRndInteger(90,100)
let getRange = getRndInteger(0,3)
console.log(getRange)
result = names[getRange]
console.log(result)