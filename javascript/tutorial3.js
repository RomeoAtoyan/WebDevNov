//comparison operators
var result;

//equal to operator "==" ONLY VALUE CHECK
result = 1 == 1 //true
result = 1 == 2 //false
result = 1 == "1" //true
result = 1 == "2" //false
result = "intec" == "intec" //true
result = "Intec" == "Intec" //false
result = true == true //true
result = false == false //true
result = false == true //false
result = [] == []
result = ['1'] == ['1'];
result = {} == {}
result = null == null
result = undefined = undefined
result = undefined == null

// equal value and equal data type "==="
result = 1 === 1
result = 1 === "1" //false
result = undefined === undefined //true
result = undefined === null //false
result = [] === [] //false => same datatype but different values 
result = "intec" === "intec" //true
result = "INTEC" === "intec" //false
result = true === true // true
result = false === false //true
result = false === true // false

// var isStudent = false
//if(isStudent){
    // console.log('yes he is student)
    //}

//not equal to => "!="

result = 1!=1; //false
result = 1!=2; //true
result = 1!="1" //true
result = 1!=="1"
result = "intec" != "Intec" //true
result = [] != []; //true
result = [1] != [1]; //true
result = {} != {} //true
result = function(){} != function(){} //true

var myFunc = () => console.log('hello') //function
var myFunc1 = function(){console.log('hello')} //function

result = myFunc != myFunc //not equal => true


                    var a = 10
                    var b = "10"

            result = a == b //true
            result = a === b //false
            result = a != b //false
            result = a !== b //true
            result = undefined == 0 //false
            result = undefined == null //true
            result = undefined === null //false


// greater than operator ">"

result = 5 > 6 //false
result = 0 > 0 //false
result = -10 > 10 //false

//less than operator "<"

result = 6 < 3 //false
result = 3 < 2.5 //false
result = 2.5 < 3 //true
    result = true > false; //true  TRUE = 1   FALSE = 0
result = false < true //true

//greater than or equal to operator ">="

result = 5>=6 //false
result = 6>=6 //true
result = 6>="6" // true => ONLY VALUE CHECK "="
result = true>=false //true
result = undefined >= null //false


//less than or equal to operator "<="

result = 10 <= 9 //false
result = 9<= 10 //true
result = 9<= "9" //true
result = null<= null //true

var myArr = [1,2,3,4,5]
var myArr1 = [1,2,3,4,5,6]


result = myArr.length < myArr1.length

result = myArr.length

//Logical operator

// and operator "&&"

result = 11 > 10 && 9 < 8 //false
result = 10 < 9 && 1 == 1 //false
result = 1 == 1 && 10 > 9 //true
result = "" == "" && null == null //true
result = "" == "" && null === undefined; //false
result = "" == "" && null == undefined; //true

//OR operator ="||"

result = 1===1 || 10 > 100 // true
result = 1!= 10 || 1 > 10 // true
result = 1 > 10 || 10 > 100 // false

//NOT operator "!"

result = !(1==1) //false
result = !(1 > 10) // true

result = (true == true) === (false == false) ////TRUE
result =!(true == true) === (false == false) ////FALSE


//ternary operator
result = 1 == 1 ? 'yes' : 'no'
result = 10 < 1 ? 'INTEC' : 'BRUSSEL'
result = "computer" === "computer" ? 'yes it is true' : 'no it is not'
result = "computer" === "laptop" ? 'yes it is true' : 'no it is not'


var student = [{
    name:'jack',
    age:17
},
{
    name :'Mike',
    age : 29
}]


console.log(student.name)
result = student.name != undefined ? (student.age >= 18? 'he is allowed to drink alcohol' : 'he is not allowed'):'student name does not exist';
console.log(result)

// if else condition
if(1===2){
    console.log('hello world!')
}
if(myStudents[0].name === 'jack' && myStudents[0].age <=30)
{
    console.log('true!!!')
}

/*

result = age == 18 ? 'yes he is allowed to drink' : 'no he is not allowed to drink
result =  


*/
var age = 18
result = age >= 18 ? 'yes he is allowed to drink' : 'no he is not allowed to drink'
















