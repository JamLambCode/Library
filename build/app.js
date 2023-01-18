/* eslint-disable no-plusplus */
const myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info =  function () {
    if(this.read === false) {
        const message = (`${this.title} by ${this.author}, ${this.pages} pages,not read yet`);
        
        return message;
    }
    const message = (`${this.title} by ${this.author}, ${this.pages} pages, read`)
    return message;
}
    


function addBooktoLibrary(book){
    myLibrary.push(book);
}



function showCards(){

    if(document.getElementById("information").hasChildNodes()){
        let child = document.getElementById("information").lastElementChild;
        while(child){
            document.getElementById("information").removeChild(child);
            child = document.getElementById("information").lastElementChild;
        }
    }
//we style the stuff in here
    for(let i = 0; i < myLibrary.length; i++){

        const divElement = document.createElement("div");


        const removeButton = document.createElement("button");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-minus")
        removeButton.appendChild(icon);
        divElement.appendChild(removeButton);
        removeButton.classList.add("block", "text-right");
        removeButton.setAttribute('data-remover', 'true');
        removeButton.setAttribute('id', i);


        const title = document.createElement("h1");
        title.textContent = (myLibrary[i]).title;
        title.classList.add("font-bold");

        const author = document.createElement("h2");
        author.textContent = (myLibrary[i]).author;
        author.classList.add("font-bold");

        const pages = document.createElement("h2");
        pages.textContent = (myLibrary[i]).pages;
        pages.classList.add("font-bold");

        const read = document.createElement("h2");
        read.textContent = (myLibrary[i]).read;
        read.classList.add("font-bold");


        divElement.appendChild(title);
        divElement.appendChild(author);
        divElement.appendChild(pages);
        divElement.appendChild(read);




        divElement.classList.add("bg-red-500", "text-white", "rounded", "p-5", "text-center");

        document.getElementById("information").appendChild(divElement);

       
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    showCards();
}

function removeListener(e){
    const element = e.target.parentElement;
    if(element.getAttribute('data-remover','true') ){
        removeBook(element.getAttribute('id'));
    }
    
}

document.addEventListener( "click", removeListener );


const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-button");
const closeModal = document.querySelector("#close-button");

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.setAttribute('data-closing','true');
    modal.addEventListener('animationend',() =>{
        modal.removeAttribute('data-closing');
        modal.close();
    }, {once: true})
})

modal.addEventListener('click', (e) => {
    if(e.target.nodeName === "DIALOG"){
        modal.close();
    }
})

const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    console.log(bookTitle);
    if(bookTitle === "" || bookAuthor === "" || bookPages === ""){
        return;
    }
    const book = new Book(bookTitle, bookAuthor, bookPages, true);
    addBooktoLibrary(book)
    console.log(myLibrary);
    showCards();
    form.reset();
})


