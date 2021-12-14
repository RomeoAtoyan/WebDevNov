var userName = document.getElementById("UserName"),
    passWord = document.getElementById("PassWord"),
    button = document.getElementById("loginButton");

    button.onclick = function  () {
        
        if(userName.value == ""  ||  passWord.value == ""){
            alert("Please enter your login information")
        }else if(userName.value == "developer" && passWord.value == "developer"){
            alert("Hello MR.Programmer")
        }else{alert("Welcome")}
            
    }

        
           
        
 





