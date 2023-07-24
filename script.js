const form = document.querySelector('.form');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');

let myLibrary = [];

// Gets form data and passes to constructor to create book
submit.addEventListener('click', (e) => {
    e.preventDefault(); // Stops submit button sending form to server

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const testBook = new Book(title, author, pages, read);

    addBookToLibrary(testBook);
    console.log(myLibrary);
});

// Show form pop-up
addBookButton.addEventListener('click', () => {
    form.style.display = 'block';
});

// Close form pop-up
close.addEventListener('click', () => {
    form.style.display = 'none';
});

// Constructor function for creating books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add book to library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}