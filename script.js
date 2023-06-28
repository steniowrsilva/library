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
  for(let i = 0; i<myLibrary.length; i++){
    const bookShelf = document.createElement('tr');
    bookShelf.innerHTML = `<td>${myLibrary[i].title}</td> <td>${myLibrary[i].author}</td> <td>${myLibrary[i].numberOfPages}</td>`;

    books.appendChild(bookShelf);

  }
}
// -------------------------------------------------------------------------------

addBookToLibrary('auto da compadecida', 'suassuna', 200);

addBookToLibrary('memórias póstumas', 'machado', 200);

displayBooks();