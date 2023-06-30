let myLibrary = [];
const books = document.querySelector('.books');

function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary(title, author, numberOfPages) {
  // do stuff here
  const book = new Book(title, author, numberOfPages);
  myLibrary.push(book);
}

function displayBooks() {
  // iterate through the array to display the books on the page
  books.innerHTML = "";
  for(let i = 0; i<myLibrary.length; i++){
    const bookShelf = document.createElement('tr');
    bookShelf.innerHTML = `<td>${myLibrary[i].title}</td> <td>${myLibrary[i].author}</td> <td>${myLibrary[i].numberOfPages}</td>`;
    
    books.appendChild(bookShelf);
  }
}
const addBookForm = document.querySelector("#addBookForm");

const booksTitle = document.querySelector("#title");
const booksAuthor = document.querySelector("#author");
const booksNumberOfPages = document.querySelector("#number-of-pages");

addBookForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      if (booksTitle.value == "" || booksAuthor.value == "" || booksNumberOfPages.value==""){
        alert("empty fields. Fill them");
      }else{
        addBookToLibrary(booksTitle.value, booksAuthor.value, booksNumberOfPages.value);
      }
      displayBooks();

});
// -------------------------------------------------------------------------------

addBookToLibrary('O Auto da Compadecida', 'Ariano Suassuna', 208);

addBookToLibrary('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 480);

addBookToLibrary('Grande Sertão: Veredas', 'Guuimarães Rosa', 594);

displayBooks();