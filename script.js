let myLibrary = [];

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
}