const myLibrary = [];
const booksContainer = document.querySelector('.books-container');
const addBookForm = document.querySelector('form');

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

function deleteBook(e) {
    e.preventDefault();

    //Remove from Array
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1);

    // Remove from display
    const bookCard = e.target.closest('.book-card');
    bookCard.remove();
}


    
// Fake books
addBookToLibrary("Jane Doe", "The Cross", 293, true);
addBookToLibrary("John Smith", "Echoes of Eternity", 412, false);
addBookToLibrary("Emily Johnson", "Whispers in the Wind", 178, true);
addBookToLibrary("Michael Brown", "Beyond the Horizon", 326, false);
addBookToLibrary("Sophia Davis", "Midnight Melodies", 245, true);
addBookToLibrary("William Clark", "Fading Memories", 198, false);
addBookToLibrary("Olivia Adams", "Eternal Embrace", 310, true);
addBookToLibrary("David Wilson", "Lost and Found", 234, false);
addBookToLibrary("Ava Martinez", "The Silent Echo", 289, true);
addBookToLibrary("Daniel Lee", "Shadows of Yesterday", 173, false);


const readButtons = document.querySelectorAll('.readButtons');

// To delete a book card or toggle read button

booksContainer.addEventListener('click', (e) =>{
    const clickedElement = e.target;

    if (clickedElement.classList.contains('delete')) {
        deleteBook(e);
    }

    if (clickedElement.classList.contains('readButtons')) {
        toggleReadButton(e);
    }
});

// To add a book
addBookForm.addEventListener('submit', (e) => {

    const author = addBookForm.author.value;
    const title = addBookForm.title.value;
    const pages = addBookForm.pages.value;
    const read = addBookForm.read.checked;

    addBookToLibrary(author, title, pages, read);
    
    alert(`${title} added to the library!`);

    e.preventDefault();

    addBookForm.author.value = "";
    addBookForm.title.value = "";
    addBookForm.pages.value = "";
    addBookForm.read.checked = false;
});


