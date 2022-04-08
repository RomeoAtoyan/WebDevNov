import fetch from "axios";
import $ from "jquery";

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.data)
.then(data => {
    console.log(data)
    data.forEach(post => {
        console.log(post.title)
       $('.list-group').append(`<li class="list-group-item">${post.title}</li>`) 
    });
})

console.log($(".list-group"));