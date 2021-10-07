
var bookLink = document.getElementById('bookLink');
var bookTitle = document.getElementById('bookTitle');
var bookDisc = document.getElementById('bookDisc');
var bookAuthor = document.getElementById('bookAuthor');
var bookStatus = document.getElementById('bookStatus');
var bookCat = document.getElementById('bookCat');
var bookPrice = document.getElementById('bookPrice');
localStorage.setItem("books",JSON.stringify("hello"))
function getValueFromSeller() {
    if(localStorage.getItem("books")==null){
        localStorage.setItem("books","[]")
    }
    return false;
}
let bookObject = {
    bookLink: bookLink,
    bookTitle: bookTitle,
    bookDisc: bookDisc,
    bookAuthor: bookAuthor,
    bookStatus: bookStatus,
    bookCat: bookCat,
    bookPrice: bookPrice,
}
