let moon = document.querySelector(".moon")

moon.onclick = () => {
    moon.classList.toggle("active")
    document.body.style.backgroundImage = "url('./Assets/aftermoon.jpg')"
    document.body.style.transition = "all 0.01s";   

}

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();


if (hour === 17 && minutes === 20){

   moon.style.top = "200px";
   moon.style.left = "400px";
} else if (hour === 17 && minutes === 21){
    
    moon.style.top = "100px";
    moon.style.left = "700px";
} else if (hour === 17 && minutes === 22){

    moon.style.top = "0px";
    moon.style.left = "900px";
 
} else if (hour === 17 && minutes === 23){

    moon.style.top = "50px";
    moon.style.left = "1100px";
}

// } ==============================================>>>>>>>>>>> NEEDS BETTER CODING

