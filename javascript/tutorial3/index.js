// Comparison operators
var result;

// https://www.thomas-krenn.com/en/wiki/Cmd_commands_under_Windows

// equal to operator "==" // check only value
result = 1 == 1 // true
result = 1 == 2 // false
result = 1 == "1" // true
result = 1 == "2" // false
result = "intec" == "intec" // true
result = "Intec" == "intec" // false
result = true == true // true
result = false == false // true
result = false == true // false
result = [] == []
result = ['1'] == ['1'];
result = {} == {}
result = null == null
result = undefined == undefined
result = undefined == null

// equal value and equal data type "===" // check data type and value
result = 1 === 1 // true
result = 1 === "1" // false
result = undefined === undefined // true
result = undefined === null // false
result = [] === [] // false
result = "intec" === "intec" // true
result = "INTEC" === "Intec" // false
result = true === true // true
result = false === false // true
result = false === true // false

// var isStudent =false
// if(isStudent){
//     console.log('yes he is student')
// }

// not equal to  => "!="

result = 1!= 1; // false
result = 1 != 2; // true
result = 1 != "1" // false
result = 1 !== "1" // true
result = "intec" != "Intec" // true
result = [] != []; // true
result = [1] != [1]; // true
result = {} != {} // true
result = function(){} != function(){} // true

var myFunc = ()=> console.log('hello') // arrow function
var myFunc1 = function(){ console.log('hello') } // function

result = myFunc != myFunc1 // not equal=> true

var a = 10
var b = "10"

result = a == b // true
result = a === b // false
result = a != b // false
result = a !==b // true
result = undefined == 0 // false
result = undefined == null // true
result = undefined === null // false

// greater than operator ">"

result = 5 > 6 // false
result = 0 > 0 // false
result = -10 > 10 // false

// var studentAge=30
// if(studentAge > 29){
//     console.log('ok')
// }

// less than operator "<"

result = 6<3 // false
result = 2.5<3 // true
result = true > false;
// true = 1 false = 0
result = false < true // true


// greater than or equal to operator

result = 5>=6 // false
result = 6>=6 // true
result = 6>="6" // true
result = true>=false // true
result = undefined >= null // false

// less than or equal to operator "<="

result = 10 <=9 // false
result = 9<=10 // true
result = 9<="9" // true
result = null<=null // true


var myArr = [1,2,3,4,5]
var myArr1 = [1,2,3,4,5,6]

var StudentList = ['x','y','z']

// myArr.length = 5
// myArr1.length = 6

result = myArr.length <= myArr1.length

result = myArr.length

result = StudentList.length

// Logical Operator

// and operator "&&"

result = 11>10 && 9<8  // false
result = 10<9 && 1==1 // false
result = 1==1 && 10>9 // true
result = "" == "" && null === undefined; // false
result = "" == "" && null == undefined; // true

// OR operator "||"

result = 1===1 || 10>100 // true
result = 1!=10 || 1>10 // true
result = 1>10 || 10>100 // false

// NOT operator "!"

result = !(1==1) // false
result = !(1>10) // true

result = !((true == true) === (false==false)) // false

// ternary operator 
result = 1==1 ? 'yes':'no';
result = 10<1 ? 'INTEC':'condition is false'
result = "computer" === "computer" ? 'Yes its true' : 'No its not'
result = "computer" === "laptop" ? 'Yes its true' : 'No its not'
result = 1 === 2 ? (2===3? 'yes':'no'):'false'

var student = {
    name:'Jack',
    age:50
}

var myStudents = [{
    name:'jack',
    age:16
},
{
    name:'Mike',
    age:29
},
{
    name:'old man',
    age:50
}]
console.log(myStudents[0].age)
console.log(student.name)
result = student.name != undefined ? (student.age >=18? 'He is allowed to drink alcohol':'he is not allowed'):'Student name is not exists';

// if else condition

if(1===2){
    console.log('hello world!')
}

if(myStudents[0].name === 'jack' && myStudents[0].age >=18){
    console.log('True!!!')
}

if(myStudents[0].age >= 18 && myStudents[0].age <=30){
     // 18-30
     console.log('Young man!')
}

// myStudents.forEach(student=>{
//     console.log(student)
//     if(student.age <=17){
//         console.log('not allowed to drink alcohol')
//     }
// })



/*

his age is under 18

 true = 
 false = 

*/
console.log(result)