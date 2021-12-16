// //getElementById
 let value
 let elGen = t => document.createElement(t)
 let findAll = selector => document.querySelectorAll(selector)

// value = document.getElementById('todo-form')

// //value.innerHTML="test"
// value = document.getElementsByTagName('input') //return html collection

// value = document.getElementsByTagName('*')
// // //value = Array.forEach(el=>{
// //     console.log(el)
// // })
// value = Array.from(value)

// // function ForEachFunction (el){
// //     console.log(el)
// //     el.remove
// // }


// // value.ForEach(ForEachFunction)
// // console.log(value)

// // value.forEach((e) => {
    
// //     e.innerHTML="test"
// // })



// // let h3 = document.getElementsByClassName("test")
// // console.log(h3)


// // // h3.forEach( (e) => {
// // //     e.onclick = function(){
// // //         e.classname = ("active")
// // //     }
// // // })

// //getElementByClassName

// value = document.getElementsByClassName('card-body')
// value = document.getElementsByClassName('*') // not working

// // querySelector
// value = document.querySelector('.card-header') // return single element(el). It always takes the first one

// //querySelectorAll
// value = document.querySelectorAll('.card-header')

// value.forEach(el =>{
//     console.log(el)
// })

// value = document.querySelectorAll('.card-header')

const [first,second,third] = document.querySelectorAll('.card-header')

// console.log(first,second,third)

//console.log(value)

value = document.createElement('p')
value.className= "lead text-danger"
value.innerHTML = "this is a test paragraph "
third.appendChild(value)

// custom function for createElement

value = elGen('div')
value = elGen('a')
value.href="https://google.com"
value.innerHTML= "click google"

value = findAll('.delete-item') // return nodelist

value.forEach(btn =>{
    console.log(btn)
    btn.addEventListener('click',function(e){
        e.preventDefault()
        console.log('hello click!!!!!')
        alert(1)
    })



})

console.log(value)
//document.body.appendChild(value)