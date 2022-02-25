var result = document.querySelector(".result")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let reset = document.querySelector(".reset")




plus.addEventListener("click" , ()=>{
    result.innerHTML++
    window.localStorage.setItem("result", result.innerHTML)
})

minus.addEventListener("click" , ()=>{
   if ( result.innerHTML > 0) {
       result.innerHTML--
   }
   window.localStorage.setItem("result", result.innerHTML)

})

reset.addEventListener("click", ()=>{
    result.innerHTML = 0
    window.localStorage.setItem("result", result.innerHTML)

})


        // Very Important
if(localStorage.getItem("result")!== ""){
    result.innerHTML = localStorage.getItem("result")
}