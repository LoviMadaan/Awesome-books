const bookList= document.querySelector('.books');
const title= document.getElementById('title');
const author= document.getElementById('author');
const addBook= document.querySelector('#add-books');

const Book= function theBook(title,author){
    this.title= title;
    this.author= author;
}

