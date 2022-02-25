// let deleteButton1 = document.getElementById("deleteButton1");
// let deleteButton2 = document.getElementById("deleteButton2");
// let goBackBtn = document.getElementById("goBackBtn");
// let container = document.querySelector(".container");


// deleteButton1.addEventListener('click', (e) => {
//     container.remove()
// })

// deleteButton2.addEventListener('click', (e) => {
//     container.innerHTML = `<div class="container2">
//     <h1>Hello World !</h1>
//     <button onclick="goBackBtn()"style='background-color:red;border:none;color:black;font-weight:bolder;font-size:15px;padding:10px;position:absolute;top:300px;left:400px;' id="goBackBtn">go back</button>
//     </div>`
//     container.style.cssText +=  'color:red;background-color:black;font-family:fantasy;letter-spacing:5px;border: 10px solid red; font-size:25px;';
// })
let emailInput = document.querySelector(".email")
let passwordInput = document.querySelector(".password")
let deleteBtn = document.getElementById("deleteBtn")
let sendBtn = document.getElementById("sendBtn")
let container = document.querySelector(".container")
let div = document.createElement("div")
div.className = "container"
let h1 = document.createElement("h1")
// let h2 = document.createElement("h2")
// h2.className = "test"
h1.className = "javascript"
let login = document.querySelector(".login")
div.appendChild(h1)

document.getElementById("sendBtn").onclick = () => {
    login.remove()
    h1.innerHTML = "your info is sent to the log"
    container.appendChild(div)

    
    
    console.log(passwordInput.value,emailInput.value)
    
}

document.getElementById("deleteBtn").onclick = () => {
    passwordInput.value = ""
    emailInput.value = ""
    
}




 ///// very cool

// emailInput.onkeyup = () => {
//      console.log(emailInput.value)

//  }