const form = document.querySelector('.form');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');

let myLibrary = [{title: 'test1', author: 'test2', pages: 'test3', read: true}];

// Gets form data and creates new book
function getFormData() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    // Creates new book using constructor
    const newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);
}

// Add book to library
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// Gets form data and passes to constructor to create book
submit.addEventListener('click', (e) => {
    e.preventDefault(); // Stops submit button sending form to server
    getFormData();
    createCard();
    // displayLibrary();
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

// Creates a card element to store book information on the web page
function createCard() {
    const cardContent = document.querySelector('.card-content');
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('button');

    let i = myLibrary.length - 1;

    title.textContent = `Title: ${myLibrary[i].title}`;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    read.textContent = 'Read';

    if (myLibrary[i].read === true) {
        read.classList.add('read-book');
    } else {
        read.classList.add('not-read-book');
    }

    cardContent.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
}