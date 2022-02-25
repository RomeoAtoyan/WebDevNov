// for (let counter = 0; counter < 4; counter++){
//     console.log(counter)
// }

let addBtn = document.querySelector("#addBtn")
let trashBtn = document.querySelector("#trashBtn")
let titleContainer = document.querySelector(".title_container")
let input = document.querySelector(".input")
let todoContainer = document.querySelector(".todoItem_container")


addBtn.onclick = () => {
    todoContainer.innerHTML +=   
    `<div class="todoItem_container">
      <div class="data">
        <div class="todoItem">
            <h1>${input.value}</h1>
            <i id="trashBtn" class="fa-solid fa-trash-can"></i> 
        </div>
      </div>
    </div>`  
}































































































// let todoItem = document.querySelectorAll(".todoItem")
// let trashBtn = document.querySelectorAll("#trashBtn") 
// let itemContainer = document.querySelector(".todoItem_container")
// let input = document.querySelector(".input")
// let addBtn = document.getElementById("addBtn")
// let data = document.querySelector(".data")
// let add = document.querySelector("#addBtn")

// const tasks = []
// add.onclick= () => {
//     if(input.value !==  ""){
//         let task = document.createElement("div")
//         task.className = "todoItem"
//         let taskCon = document.createElement("h1")
//         taskCon.textContent = input.value
//         let icon = document.createElement("i")
//         icon.id = "trashBtn"
//         icon.className = "fa-solid fa-trash-can"
//         task.appendChild(taskCon)
//         task.appendChild(icon)
//         tasks.push(task)

//         // console.log(task)
//         console.log(tasks)
//         todoItem.forEach((i) => {
//             tasks.push(i)
//         data.appendChild(i)
//         })
//     }
// }

// document.getElementById("addBtn").onclick = () => {
//     data.innerHTML += `<div class="todoItem">
//     <h1>${input.value}</h1>
//     <i id="trashBtn"  class="fa-solid fa-trash-can"></i> 
//     </div>`
// }

// for (let i = 0; i < todoItem.length; i++) {
//     trashBtn.forEach((j, index) => {
//         j.addEventListener('click' , () => {
//             if(index === i) {
//                 todoItem[i].remove()
//             }
//         })
//     });
// }