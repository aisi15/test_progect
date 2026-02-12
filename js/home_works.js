//адрес электронной почты
const gmailInput = document.querySelector('#gmail_input');
const gmailBtn = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regex = /^[a-zA-Z0-9._]+@gmail\.com$/;

gmailBtn.addEventListener('click', () => {
    if (regex.test(gmailInput.value)) {
        gmailResult.style.color = 'green';
        gmailResult.innerHTML = 'Gmail is valid';
    } else {
        gmailResult.style.color = 'red';
        gmailResult.innerHTML = 'Gmail is invalid';
    }
});



;//маленький блок
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;
let dir = 0;

let finalPositionX = parentBlock.clientWidth - childBlock.offsetWidth;
let finalPositionY = parentBlock.clientHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (dir === 0 && positionX < finalPositionX) positionX+= 2;
    else if (dir === 0) dir = 1;
    if (dir === 1 && positionY< finalPositionY) positionY+= 2;
    else if (dir === 1) dir = 2;
    if (dir === 2 && positionX > 0) positionX-= 2;
    else if (dir === 2) dir = 3;
    if (dir === 3 && positionY >0) positionY-= 2;
    else if (dir === 3) dir = 0;

    childBlock.style.top = `${positionY}px`;
    childBlock.style.left = `${positionX}px`;
    
    requestAnimationFrame(moveBlock);
    
}
moveBlock();

// секундомер 
const seconds = document.querySelector('#seconds');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

let counter = 0;
let interval = null;

function showSeconds () {
    seconds.textContent = counter;
}

btnStart.addEventListener('click', () => {
    if (interval !== null)
        return;

    interval = setInterval(() => {
        counter +=1;
        showSeconds();
    }, 1000);
});


btnStop.addEventListener('click', () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
});

btnReset.addEventListener('click', () => {
    counter = 0;
    showSeconds();
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
});

showSeconds();



// рандомные персонажи
const charactersList = document.querySelector('.characters-list');
const defaultPhoto = "https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";

const request = new XMLHttpRequest();
request.open('GET', '../data/characters.json'); 
request.setRequestHeader('Content-Type', 'application/json');
request.send();
request.onload = function() {
    if (request.status === 200) {
        const characters = JSON.parse(request.response);

        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('character-photo');
            const img = document.createElement('img');
            img.src = character.person_photo || defaultPhoto;
            img.alt = character.name;
            photoDiv.appendChild(img);

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('character-info');
            infoDiv.innerHTML = `
            <p>Name: ${character.name}</p>
            <p>Age: ${character.age}</p>`;

            card.appendChild(photoDiv);
            card.appendChild(infoDiv);

            charactersList.appendChild(card);

        });
    } else {
        console.log('ошибка, что-то не так с characters.json:', request.status);
    }
};

// анкета
const requestBio = new XMLHttpRequest();
requestBio.open('GET', '../data/bio.json');
requestBio.setRequestHeader('Content-Type', 'application/json');
requestBio.send();
requestBio.onload = () => {
    const response = JSON.parse(requestBio.response);
    console.log(response);
};




