let value;

value = window
window = window.Number('5')
window.WebDeveloper = (arg)=>{
    console.log(arg)
}

value = window.WebDeveloper('jack')

value = window.outerWidth
value = window.outerHeight

window.addEventListener('resize',(e)=>{
    console.log(`${window.outerWidth} \n${window.outerHeight}`)
})

value = window.document

value = document.body
value = document.scripts
value = document.all
value = document.location
value = document.links
//document.location.reload()
value = document.links[0]
value = document.links[0].className = "btn btn-danger btn-lg"
value = document.links[0].getAttribute('key')

//forms
value = document.forms
value = document.forms[0]



console.log(typeof value)