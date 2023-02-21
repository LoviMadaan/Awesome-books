class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

static getBooks(){
  let books;
  if (localStorage.getItem === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

static addBook(book){
  const books = Book.getBooks();
  books.push(book);
  localStorage.setItem(JSON.stringify(books))
}

static re(title,author){
  const books = Book.getBooks();
  books.forEach((book,index) => {
    if (book.title)
  }
}




