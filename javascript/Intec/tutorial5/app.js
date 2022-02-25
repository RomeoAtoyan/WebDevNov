// var message = document.getElementById('message')
// var getUserName = document.getElementById('username')

// // console.log(message)
// //console.log(getUserName.value) // input field
// // message.innerHTML="Text has been changed!"

// function SayMyName(){
//   //  console.log(getUserName.value)
//     message.innerHTML = `Your username is ${getUserName.value}`
// }



// // SayMyName()

// var number1 = document.getElementById('num1')
// var number2 = document.getElementById('num2')
// var getBtn = document.getElementById('btn')
// var result = document.getElementById('result')

// //console.log(result)

// function DoCalc(){
//     console.log('hello test test');
//     var sumResult = Number(number1.value) + Number(number2.value);
//     console.log(sumResult)
//     result.innerHTML = `Result is ${sumResult}`
// }


// Local variables and Global variables 

// local variable

// function GetNumber(){
//     var companyName = 'intecbrussel'
//     console.log(companyName,'local variable')
// }
// GetNumber()
//console.log(companyName)
// Uncaught ReferenceError: companyName is not defined at 40

// global variable
// var companyName = 'intecbrussel' // global variable

// function getNumber(){
//     var company = 'intec' // local variable
//     console.log(companyName,'global variable')
//     console.log(company,'local variable')
// }

// getNumber();

//var token = '9384938493483jsdhsjdhjshd'
// var token = '9384938493483jsdhsjdhjshd'

// function a(){
//     token
// }

// function b(){
//    token
// }

// function c(){
//     token
// }


const Autox ={

    a : function(){
        console.log('hello')
    },
    b: function(){
        console.log('hello 1')
    },
    getElementById : function(){
        console.log('getelementmethod')
    }

}

Autox.getElementById()
Autox.a()

const obj ={
    a:1,
    b:'string adata',
    c:true,
    d:[1,2,3],
    e:{id:1,title:'this is title'},
    f:function(){console.log('hello function')}
}

console.log(obj.e)
obj.f()

const result = document.getElementById('result')

const AutoController = {
    turnLeft : function(){result.innerHTML='Turn Left'},
    turnRight: function(){result.innerHTML='Turn Right'},
    forward: function(){result.innerHTML='Forward'},
    backward: function(){result.innerHTML='Backward'}
}