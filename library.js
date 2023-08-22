const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = Boolean(read);
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("123", "234", 123, true);
addBookToLibrary("24", "234", 245, false);

console.table(myLibrary);