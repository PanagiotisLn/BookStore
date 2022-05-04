let bookTitle = document.getElementById("book-title");
let bookAuthor = document.getElementById("book-author");
let bookPages = document.getElementById("book-pages");
let read = document.getElementById("read"); 
let addButton = document.getElementById("add-book");

let inputList = document.getElementsByTagName("input");
let labelList = document.getElementsByTagName("label");

var deleteButton;

function deleteBook(){
    deleteButton.addEventListener('click', (event) => {
            var item = event.target.parentElement;
            item.parentNode.parentNode.removeChild(item.parentNode);

        })

}

function clearInput(){
    bookTitle.value='';
    bookAuthor.value='';
    bookPages.value='';
    for (label of labelList){
        label.classList.toggle("filled");
    }

}

function createBook(){
    var book = document.createElement("div")
        var title = document.createElement("p");
        title.textContent = bookTitle.value;
        var author = document.createElement("p");
        author.textContent = bookAuthor.value;
        var pages = document.createElement("p");
        pages.textContent = bookPages.value;
        
        if (read.checked){
            var readed = document.createElement("p")
            readed.textContent = "Yes"
        }else{
            var readed = document.createElement("p")
            readed.textContent = "No"
        }
        deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete-btn");
        var div = document.createElement("div");
        div.appendChild(deleteButton);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readed);
        book.appendChild(div);
        book.classList.add("book")
        document.getElementById("book-container").appendChild(book);

}


addButton.addEventListener('click', () => {
    if (bookTitle.value !="" && bookAuthor.value != "" && bookPages.value != "" ){
        createBook();
        clearInput();
        deleteBook();
        
       

    }else {
        return;
    }

})

for (let input of inputList) {
    input.addEventListener('blur', () => {
        let nextLabel = input.nextElementSibling;
        if (input.value != ''){
            
            nextLabel.classList.add("filled");
        }else{
            nextLabel.classList.remove("filled");
        }
    })
}



