const yourVoteFor = document.querySelector('.text span');
const role = document.querySelector('.role span');
const description = document.querySelector('.description');
const warning = document.querySelector('.bottom-side');
const photos = document.querySelector('.top-side-right');
const numbers = document.querySelector('.numbers');

let currentPhase = 0;
let number = '';


function phaseInit() {

    let phase = phases[currentPhase];
    let numberHtml = '';

    for (let i = 0; i < phase.numbers; i++) {

        if (i === 0) {

            numberHtml += '<div class="number blink"></div>';

        } else {

            numberHtml += '<div class="number"></div>';
        }
    };

    yourVoteFor.style.display = 'none';
    role.innerHTML = phase.title;
    description.innerHTML = '';
    warning.style.display = 'none';
    photos.innerHTML = '';
    numbers.innerHTML = numberHtml;
}

function screenUpdate() {

}

function clicked(num) {

    let numberElement = document.querySelector('.number.blink');

    if (numberElement !== null) {

        numberElement.innerHTML = num;
        number = `${number}${num}`;

        numberElement.classList.remove('blink');

        if (numberElement.nextElementSibling !== null) {

            numberElement.nextElementSibling.classList.add('blink');

        } else {

            screenUpdate();
        }
    }
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

phaseInit();
