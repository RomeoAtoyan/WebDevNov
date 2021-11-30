if(condition){
    //result
}

var person ={
    firstName:"Joe",
    lastname:'Dalton',
    age:29,
    livingPlace:'Aalst',
    isStudent:true,
    email : 'joe@joe.com'
}

if(person.age >=18 && person.livingPlace==='Aalst' && person.isStudent === true){
    console.log(person) //return true
} else{
    console.log('no such a person')
}