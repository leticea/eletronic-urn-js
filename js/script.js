const yourVoteFor = document.querySelector('.text span');
const role = document.querySelector('.role span');
const description = document.querySelector('.description');
const warning = document.querySelector('.bottom-side');
const images = document.querySelector('.top-side-right');
const numbers = document.querySelector('.numbers');

let currentPhase = 0;
let number = '';

function phaseInit() {

    number = '';
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
    images.innerHTML = '';
    numbers.innerHTML = numberHtml;
};

function screenUpdate() {

    let phase = phases[currentPhase];

    let candidate = phase.candidates.filter((item) => {

        if (item.number === number) {
            return true;

        } else {
            return false;
        }
    });

    if (candidate.length > 0) {

        candidate = candidate[0];
        yourVoteFor.style.display = 'block';
        warning.style.display = 'block';
        description.innerHTML = `Nome: ${candidate.name}<br/>Partido: ${candidate.party}`;

        let photosHtml = '';

        for (let i in candidate.photos) {

            photosHtml += `<div class="image"><img src="images/${candidate.photos[i].url}" alt="">${candidate.photos[i].subtitle}</div>`;
        }

        images.innerHTML = photosHtml;

    } else {

        yourVoteFor.style.display = 'block';
        warning.style.display = 'block';
        description.innerHTML = '<div class="big--warning blink">VOTO NULO</div>';
    }
};

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
    };
};

function empty() {
    alert("Clicou em branco");
};

function correct() {

    phaseInit();
};

function confirm() {
    alert("Clicou em confirma");
};

phaseInit();
