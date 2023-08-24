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
    addBookToDisplay(newBook);
}

function addBookToDisplay(newBook) {
    const booksContainer = document.querySelector('.books-container');

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card", "card");

    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close', 'delete');
    bookCard.appendChild(closeButton);

    const propertyClasses = {
        author: "h5 fst-italic card-header",
        title: "display-4 card-title",
        pages: "pages card-text",
        read: "readButtons btn",
    }

    for (key in newBook) {
        if (key !== 'read') {
            const element = document.createElement('div');
            element.classList.add(...propertyClasses[key].split(' '));
            const formattedKey = `${key[0].toUpperCase()}${key.slice(1)}`;
            element.textContent = `${formattedKey}: ${newBook[key]}`;
            bookCard.appendChild(element);
        } else {
            const readButton = document.createElement('button');
            readButton.classList.add(...propertyClasses[key].split(' '));
            if (newBook[key] === true) {
                readButton.textContent = 'Read';
                readButton.classList.add('btn-success');
            } else {
                readButton.textContent = 'Unread';
                readButton.classList.add('btn-warning');
            }
            bookCard.appendChild(readButton);
        } 
        
    }

    booksContainer.appendChild(bookCard);
}

function toggleReadButton(e) {
    e.preventDefault();

    const targetButton = e.target;
    targetButton.classList.toggle('btn-success');
    targetButton.classList.toggle('btn-warning');

    if (targetButton.textContent === 'Read') {
        targetButton.textContent = 'Unread';
    } else {
        targetButton.textContent = 'Read';
    }

}


document.addEventListener('DOMContentLoaded', () => {
    
    // Fake books
    addBookToLibrary("24", "234", 245, false);
    addBookToLibrary("256", "281", 35, false);
    addBookToLibrary("123", "234", 123, true);
    addBookToLibrary("24", "234", 245, false);
    addBookToLibrary("256", "281", 35, false);
    addBookToLibrary("123", "234", 123, true);
    addBookToLibrary("24", "234", 245, false);
    addBookToLibrary("256", "281", 35, false);
    addBookToLibrary("123", "234", 123, true);
    addBookToLibrary("24", "234", 245, false);
    addBookToLibrary("256", "281", 35, false);

    // click-event listener for readButtons
    const readButtons = document.querySelectorAll('.readButtons');
    readButtons.forEach(readButton => {
        readButton.addEventListener('click', toggleReadButton);
    });
});




