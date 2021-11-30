// var webdevnov = 1
// var webdevnov1 = 20
// console.log(webdevnov)
// console.log(webdevnov1)

// var fatema = 'Fatema'
// var fatema = 'Khan'
// fatema = 29


// var smartphone = 'samsung' //decleration
// var smartphone = 'apple'  //re-decleration with different value
// smartphone = 'android' //update

// console.log(fatema)

// //update

// //re-decleration

// const firstName = 'Jack'
// //firstName = 'Mike' // const not updateable or changeable

// //let variable

// let companyName = 'IntecBrussel'

// // re-decleration
// //let companyName = 'Microsoft'
// // redecleration not changeable
// //let companyName = 'Apple'
// // update possible


// /////// var can be re-declared and updated
// ////// const can not be re-declared or updated
// ///// let can not be re-declared but can be updated



// console.log(companyName)

// let myMessage ;

// myMessage = 'hello world'

// console.log (myMessage)

// //let 1CompanyName = 'Intec' cannot start a let by a number
// //let %CompanyName = 'hello' cannot start a let by special characters

// let _companyName = 'hello' // correct usage
// let company_Name = 'hello'
// let companyName_ = 'hello'
// //let company-name = 'hello' //////incorrect usage
// let company_1 = 'hello'
// let company1 = 'hello'
// //let company% = 'hello' // incorrect usage

// var number1=10;
// var number2=2;
// var result=number1+number2
// console.log(result)

// var str1 = "intec"
// var str2 = "brussel"
// result = str1 + str2
// result = str1 + number2
// console.log(result)


// //var MySalary = 22000000;
// //var taxpercent = 43434;
// //var result = nettosalary%
// var MyBruto = 2500
// var taxpercent = MyBruto * 25/100
// // 2000 5  ------ 2000*5/100 = 
// result = MyBruto - taxpercent

// //incriment operator"++"
// //_number1++
// //decrease opertaor "--"
// //_number1--
// //result = _number11--

// let x = (10*3)+(3+3);
// console.log(x)
// //console log x

// var a = 10; //10 = 10
// a= a + a
// a = a * 2



// //power
// result = Math.pow(9,2)
// result = Math.pow(10,2)

// //string (text)
// var result;
// result = "this is a string"; //string
// result = 50 //number
// result = true; //true or false
// result = "String" + 4

// var n1 = 5;
// var n2 = 5;
// var res = n1+n2
// console.log(res)

// result = 200.5 // decimal

// result = 616184651;

// console.log(1==1)
// //array commas for other items
// const myDB = ["Atoyan","yuruk,","sameer"]; //array-object
// myDB[0]="Atoyan Romeo"

// //object commas for other items
// let student = {
//     name : 'Romeo',
//     lastname : 'Atoyan',
//     age : 29,
//     isStudent:true,
//     scores : [70,80,90,100]
// }
// let student1 = {
//     name: 'Romeo',
//     lastname : 'Atoyan',
//     age: 21,
//     location : 'Antwerp',
//     lastscore : 87

// }

// console.log(myDB)
// console.log('my man==>' , student1)
// console.log('this is object' , student)

// console.log("RESULT=>" ,typeof result)



// console.log(result)


// var person = {
//     firstName:"Joe",
//     lastname:'Dalton',
//     age:29,
//     livingPlace:'Aalst',
//     isStudent:true,
//     email : 'joe@joe.com'
// }

// if(person.age >=18 && person.livingPlace ==='Aalst' && person.isStudent === true){
//     console.log(person) //return true
// } else if(person.lastname === 'Dalton'){

//     console.log('Lastname is correct, person')
// }

// var userInput = prompt ('please enter a number!');
// console.log(typeof Number(userInput))

var userInput = prompt("Odd or Even")
if (userInput % 2 == 0 ) {
    console.log('EVEN')
} else if(isNaN(userInput)) {
    console.log('Please enter a number')
} else {
    console.log('ODD')
}
