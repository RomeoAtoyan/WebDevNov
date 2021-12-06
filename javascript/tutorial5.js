//example
function funcName (){

}

function funcName1(param1,param2,param3){
    console.log(param1,param2,param3)
}

funcName1('string',44,[1,2,3])

function sumofnumbers(){
    var a = 5
    return a
}
console.log(sumofnumbers())

function sumofnumbers(){
    console.log('before return keyword') // used
    return 5+5
    console.log('after return keyword') // unused
}
var number1 = 10
var number2 = 20

function sumofnumbers(){
    return number1 + number2
}
console.log(sumofnumbers())

function sumofnumbers(p1,p2){ // example
    return p1+p2
}
console.log(sumofnumbers(50,40))
function sayMyName(username){
    return `hello your name is ${username}` 
}
console.log(sayMyName('root'))
var myStudents = ['jack','mike','george']
function getStudentName(getdata){
    console.log(getdata[0])
}
getStudentName(myStudents)

function Layer1(number1){
    console.log("this is from layer1 function",number1)

    function Layer2(){
        console.log(number1+1,'Layer2 Function')
    }
    Layer2()

}
Layer1(5)

var myName = 'root'

function Keeper1(param){
    return param;
}
function Keeper2(param){
    // param was root
    // Your name is root
    return `Your name is ${param}`
}

function printService(param){
    console.log(param)
}

printService(Keeper2(Keeper1(myName)))

var myStudents = []

/*function addStudent(name){
    myStudents.push(name)
    
}
addStudent('khaled')
addStudent('ender')
addStudent('romeo')
console.log(myStudents)*/

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
    age:21
}
const Student_3 = {
    name:'Khaled',
    age:22
}
const Student_4 = {
    name:'Ender',
    age:21
}
addStudent(Student_1)
addStudent(Student_2)
addStudent(Student_3)
addStudent(Student_4)
console.log(myStudents)


// function params : brutosalary , tax
    //math calc here

  
    function salary (brutosalary, tax){
        return  brutosalary - (brutosalary * tax)
    }
    console.log(salary(3500, 0.20))

    function afterCosts (nettosalary,payments){
        return nettosalary - payments
    }
    console.log(`your money after costs is ${afterCosts(2000,500)}`)
 