// function HHH(){
//     console.log("rrr")
// }
// HHH()

// const HHH = () => {
//     console.log("rrrrr")
// }
// nj()



let test = document.getElementById("test")

test.onclick = () => {
     alert("how are you ?")
}


// window.onload = () => {
//     console.log("dsvsdvsdf")
// }
const object = [
    {
        name : "khaled",
        age : 22
    },
    {
        name : "osamn",
        age : 35
    },
]

console.log(object.length)
// console.log(object[0].name)
for (let i = 0 ; i < object.length ; i++ ){
    console.log(object[i].name)
}

const div = document.querySelectorAll("div")
console.log( div)


div.forEach(div => {
    for (let j = 0 ; j < object.length ; j++){
        const newDiv = document.createElement("div")
        newDiv.textContent = object[j].name
        div.appendChild(newDiv)
    
    }
});