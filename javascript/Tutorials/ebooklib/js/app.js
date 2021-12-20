let bookName = document.getElementById("book_name"),
 bookAuthor = document.getElementById("book_author"),
 bookCategory = document.getElementById("book_category"),
 bookDate = document.getElementById("book_date"),
 bookPrice = document.getElementById("price"),
 addBook = document.getElementById("addBook"),
 table = document.querySelector('table')


addBook.onclick =function () {
    if(bookName.value === "" || bookAuthor.value === "" ){
        alert ("Please fill below")
    }else{
        

    }
}

 

bookCategory.addEventListener("change", function(e){
    var strUser = bookCategory.options[bookCategory.selectedIndex].text;
    console.log(strUser)  
})

console.log(table)


let bookNameTable = document.querySelectorAll("table tbody  "),
bookAuthorTable = document.querySelector("table tbody ")



let test = document.createElement("tr")
let test2 = document.createElement("td")
test.appendChild(test2)
test2.innerHTML = "sdfsdf"

bookAuthorTable.appendChild(test)