const form = document.querySelector('.form');
const addBookButton = document.querySelector('.add-book');
const close = document.querySelector('.close');

addBookButton.addEventListener('click', () => {
    form.style.display = 'block';
});

close.addEventListener('click', () => {
    form.style.display = 'none';
})

// form.style.display = 'none';

let myLibrary = [];