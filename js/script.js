const yourVoteFor = document.querySelector('.text span');
const role = document.querySelector('.role span');
const description = document.querySelector('.description');
const warning = document.querySelector('.bottom-side');
const images = document.querySelector('.top-side-right');
const numbers = document.querySelector('.numbers');

let currentPhase = 0;
let number = '';
let blankVote = false;

function phaseInit() {

    let phase = phases[currentPhase];
    let numberHtml = '';

    number = '';
    blankVote = false;

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

            if (candidate.photos[i].small) {

                photosHtml += `<div class="image small"><img src="images/${candidate.photos[i].url}" alt="">${candidate.photos[i].subtitle}</div>`;
            
            } else {

                photosHtml += `<div class="image"><img src="images/${candidate.photos[i].url}" alt="">${candidate.photos[i].subtitle}</div>`;
            }
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

    blankVote = true;

    yourVoteFor.style.display = 'block';
    warning.style.display = 'block';
    numbers.innerHTML = '';
    description.innerHTML = '<div class="big--warning blink">VOTO EM BRANCO</div>';
    images.innerHTML = '';
};

function correct() {

    phaseInit();
};

function confirm() {

    let phase = phases[currentPhase];
    let confirmedVote = false;

    if (blankVote === true) {

        confirmedVote = true;
        console.log("Confirmando como BRANCO...");

    } else if (number.length === phase.numbers) {

        confirmedVote = true;
        console.log("Confirmando como "+number);
    }

    if (confirmedVote) {

        currentPhase++;

        if (phases[currentPhase] !== undefined) {
            phaseInit();

        } else {

            document.querySelector('.screen').innerHTML = '<div class="bigger--warning blink">FIM!</div>';
        }
    }
};

phaseInit();
