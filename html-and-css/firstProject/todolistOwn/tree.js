let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let fourth = document.getElementById("fourth")
let fifth = document.getElementById("fifth")
let container = document.querySelector(".container")

first.onclick = () => {
    container.innerHTML = `
    <div class="container">
        <h1 id="first">*</h1>
        <h1 id="second">second row</h1>
        <h1 id="third">third row</h1>
        <h1 id="fourth">fourth row</h1>
        <h1 id="fifth">fifth row</h1>
    </div>
    `
}

second.onclick = () => {
    container.innerHTML = `
    <div class="container">
        <h1 id="first">*</h1>
        <h1 id="second">**</h1>
        <h1 id="third">third row</h1>
        <h1 id="fourth">fourth row</h1>
        <h1 id="fifth">fifth row</h1>
    </div>
    `  
}

third.onclick = () => {
    container.innerHTML = `
    <div class="container">
        <h1 id="first">*</h1>
        <h1 id="second">**</h1>
        <h1 id="third">***</h1>
        <h1 id="fourth">fourth</h1>
        <h1 id="fifth">fifth row</h1>
    </div>
    `   
}

fourth.onclick = () => {
    container.innerHTML = `
    <div class="container">
        <h1 id="first">*</h1>
        <h1 id="second">**</h1>
        <h1 id="third">***</h1>
        <h1 id="fourth">****</h1>
        <h1 id="fifth">fifth row</h1>
    </div>
    `  
}

fifth.onclick = () => {
    container.innerHTML = `
    <div class="container">
        <h1 id="first">*</h1>
        <h1 id="second">**</h1>
        <h1 id="third">***</h1>
        <h1 id="fourth">****</h1>
        <h1 id="fifth">*****</h1>
    </div>
    `  
}


