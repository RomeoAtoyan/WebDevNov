// example function
function funcName (){

}

// function funcName1(param1,param2,param3){
//     console.log(param1,param2,param3)
// }

// funcName1('string',44,[1,2,3])

// function sumofnumbers(){
//     var a = 5
//     return a
// }
// console.log(sumofnumbers())

// function sumofnumbers(){
//     console.log('before return keyword')
//     return 5+5
//     console.log('after return keyword') // unused
// }

var number1=10
var number2= 20

// function sumofnumbers(){
//     return number1 + number2
// }

// function sumofnumbers(p1,p2){
//     // p1 = 50 10
//     // p2= 40 20
//     return p1+p2
// }
// console.log(sumofnumbers(number1,number2))

// function sayMyName(username){
//     return "Hello your name is " + username
// }

// function sayMyName(username){
//     return `Hello your name is ${username}`
// }
// console.log(sayMyName('root'))

// var myStudents = ['jack','mike','george']

// function getStudentsName(getData){
//     // getData = ['jack','mike','george']
//     getData[0] = 'Khaled'
//     console.log(getData)
// }

// getStudentsName(myStudents)
// console.log(myStudents,'original array')

// function Layer1(number1){
//     console.log("This is from Layer1 Function",number1)

//     function Layer2(){
//         console.log(number1+1,'Layer2 Function')
//     }
//     Layer2()

// }

// Layer1(5)

// var myName = 'root'

// function Kepeer1(param){
//     return param;
// }

// function Kepeer2(param){
//     // param was root
//     // `Your name is root`
//     return `Your name is ${param}`
// }

// function printService(param){
//     console.log(param)
// }

// printService(Kepeer2(Kepeer1(myName)))


// function addStudent(){
//     return myStudents.push(name)
// }

// addStudent('Khaled')
// addStudent('Ender')
// addStudent('Romeo')
// console.log(myStudents)


var myStudents = []

function addStudent(student){
    return myStudents.push(student)
}

const Student_1 = {
    name:'Mahmoud',
    age:28
}

const Student_2 = {
    name:'Romeo',
    age:28
}

addStudent(Student_1)
addStudent(Student_2)

console.log(myStudents)

// function params : brutosalary , tax
    //math calc here

// let getNettoSalary = (2000*25)/100 // exact tax amount
// console.log(2000-getNettoSalary)

function getNettoSalary(bruto,tax){

    let taxAmount = (bruto*tax)/100 // tax amount 500
   // console.log(taxAmount)
    return bruto -taxAmount // 2000 - 500

}

console.log(getNettoSalary(2000,25))
console.log(getNettoSalary(3000,25))