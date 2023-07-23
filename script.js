const form = document.querySelector('.form');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');
const addBookButton = document.querySelector('.add-book');



submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    console.log(title.value, author.value, pages.value, read.checked);


    const testBook = new Book(title, author, pages, read);

    console.log('test ', testBook.title);


    // Book(title.value, author.value, pages.value, read.value); //????????

})



addBookButton.addEventListener('click', () => {
    form.style.display = 'block';
});

close.addEventListener('click', () => {
    form.style.display = 'none';
})

// form.style.display = 'none';

// Constructor function for creating books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

    myLibrary.push();
}

let myLibrary = [];