const yourVoteFor = document.querySelector('.text span');
const role = document.querySelector('.role span');
const description = document.querySelector('.description');
const warning = document.querySelector('.bottom-side');
const photos = document.querySelector('.top-side-right');
const numbers = document.querySelector('.numbers');

function clicked(num) {
    alert("Clicou em "+num);
}

function empty() {
    alert("Clicou em branco");
}

function correct() {
    alert("Clicou em corrige");
}

function confirm() {
    alert("Clicou em confirma");
}
