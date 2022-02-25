
// var i = 0

// do{
    
//     console.log(i)
//     console.log('hello')
//     i++
// }while(i<9)

// while(i<0){
//     console.log(i,'hello while')
//     i++
// }

var randomNumber;

// do{
//     randomNumber = Math.floor(Math.random()* 100);
//     console.log(randomNumber)
// }while(randomNumber == 50)

// var number;
// var sum = 0

// do{
//     number=Number(prompt('enter a number!'))
//     sum += number;
//     console.log('Sum Result',sum)

// } while(true)

var password ="123456"
var rateLimit=2;

while(rateLimit>0){
    var askPassword = prompt("enter your password")
    rateLimit --;
    if(askPassword == password){
        console.log('welcome user!')
        break;
    }else{
        console.log(`you've ${rateLimit} attempts-left.`)
    }
}