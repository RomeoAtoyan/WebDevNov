/*var message = document.getElementById('message')
var getUserName = document.getElementById('username')
console.log(getUserName)

function SayMyName(){
    console.log(getUserName.value)
    message.innerHTML = `your username is ${getUserName.value}`
}
*/

//IMPORTANT//
/*var number1 = document.getElementById('num1')
var number2 = document.getElementById('num2')
var getBtn = document.getElementById('btn')
var result = document.getElementById('result')


//console.log(result)

function DoCalc(){
    console.log('hello test test')
    var sumResult = Number(number1.value) + Number(number2.value);
    console.log(sumResult)
    result.innerHTML = `Your result is ${sumResult}
}*/
//IMPORTANT//

const Auto ={

    a : function(){
        console.log('hello')
    },
    b: function(){
        console.log('hello 1')
    },
    getElementById : function(){
        console.log('getelementbymethod')
    }
}


const result = document.getElementById('result')

const AutoController = {
    turnleft : function(){result.innerHTML='turn left'},
    turnRight : function(){result.innerHTML='turn right'},
    forward : function(){result.innerHTML='forward'},
    backward : function(){result.innerHTML='backward'}
}

AutoController.turnRight()
AutoController.turnleft()
AutoController.forward()
AutoController.backward()
