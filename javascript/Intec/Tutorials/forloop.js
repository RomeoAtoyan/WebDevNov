// for (let i=0; i<=5; i++){
//     console.log('hello',i)
// }


// function printEvenNumber(number) {
    
// }
// for(let i=1; i<50; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//printEvenNumber(10)

// for(let i=10; i>=0;i--){
//     console.log('hello', i)
// }

// let x,y
// // for(x=1,yes=50; x<=10 && y>50; x++){
// //     console.log(`x:${x}\ny:${y}`)
// // }
// for(x=9;y<=10;y++){
//     for(y=1; y<=10;y++){
//         let result = `${x}+${y}= ${x+y}`
//         console.log(result)
//     }
// }

// let arraylist = ['ali','weli','deli'];

// for(let x=0; x<arraylist.length;x++){
//     console.log(x)
//     console.log(arraylist[x])
// }

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"            }
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"            }
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"            }
        }
    }
]

// for(let x=0; x<users.length;x++){
//     let obj = users[x]
//     if(obj.username === "Antonette"){
//         console.log(`${obj.name}: ${obj.address.street}, ${obj.address.city} ${obj.address.zipcode}`)
//     }
// }

// for(variable;condition;operator){

    
// }
function getSingleUser(username){
    for(let i=0;i<users.length;i++){

         let obj = users[i];
         if(obj.username === username){
            console.log(`Fullname: ${obj.name}\nEmail: ${obj.email} \nAddress: ${obj.address}`)   
            return `Fullname: ${obj.name}<br/>Email: ${obj.email} </br>Address: ${obj.address}`
        }else{
            console.log('not found!')
        }
   
    
    }
    
}
getSingleUser('Samantha')