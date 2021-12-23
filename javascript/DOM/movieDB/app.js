// let movieTitle = document.querySelector(".movieTitle")
// let directorName  = document.querySelector(".directorName")
// let coverLink = document.querySelector(".coverLink")
let movieAddBtn = document.querySelector(".movieAddBtn")
let tableBody = document.querySelector("tbody")
const [movieTitle,directorName,] = document.querySelectorAll('input')


movieAddBtn.addEventListener('click', function(e){
    e.preventDefault(e)
    console.log(movieTitle.value,directorName.value) 
    let obj = {
        movieTitle : movieTitle.value,
        directorName : directorName.value,
    }
    console.log(obj)
    tableBody.innerHTML += `<tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td>${movieTitle.value}</td>
    <td>${directorName.value}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
  </tr>`    
            
})
