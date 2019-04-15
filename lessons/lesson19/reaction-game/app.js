let app = document.querySelector('#app');
let gameLetter = app.querySelector('.game-letter');
let sidebar = app.querySelector('.sidebar');

let letters = transformLetters('abcdeüfghijkbewalömnohpqrtäsfuvwttxyz');
let minimumWaitTime = 0.5 * 1000;
let maximumWaitTime = 2.5 * 1000;

function transformLetters(str) {
    return str.toUpperCase();
}

function getRandomLetter() {
    let index = Math.floor(Math.random() * letters.length);
    return letters[index];
}

function appendSidebarItem(letter, reactionTime) {
    let item = document.createElement('li');

    let letterChild = document.createElement('span');
    letterChild.textContent = letter;

    item.setAttribute('class', 'time-record');
    item.appendChild(letterChild);

    if (reactionTime !== undefined) {
        let reactionTimeChild = document.createElement('span');
        reactionTimeChild.textContent = reactionTime;
        item.appendChild(reactionTimeChild);
    }

    sidebar.appendChild(item);
}

function presentNoLetter() {
    gameLetter.textContent = '';
}

function presentNewLetter(letter) {
    gameLetter.textContent = letter;
    gameLetter.classList.remove('ani');
    gameLetter.style.fontSize = 0;
    setTimeout(function () {
        gameLetter.classList.add('ani');
        gameLetter.style.fontSize = null;
    }, 0);
}

function randomlyWaitToShowNextLetter() {
    let waitTimeSpan = maximumWaitTime - minimumWaitTime;
    let randomTimeSpan = Math.floor(Math.random() * waitTimeSpan);
    let waitTime = randomTimeSpan + minimumWaitTime;
    //console.log('I will now wait for ' + waitTime + 'ms.');
    setTimeout(showNextLetter, waitTime);
}

function showNextLetter() {
    let current = getRandomLetter();
    let startTime = Date.now();
    presentNewLetter(current);
    
    let handler = function (ev) {
        let key = transformLetters(ev.key);
    
        if (key === current) {
            let reactionTime = Date.now() - startTime;
            appendSidebarItem(current, reactionTime);
        } else {
            appendSidebarItem(current);
        }

        presentNoLetter();
        randomlyWaitToShowNextLetter();
        document.removeEventListener('keypress', handler);
    };

    document.addEventListener('keypress', handler);
}

showNextLetter();
