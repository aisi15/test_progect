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

//маленький блок
const child = document.querySelector('.child_block');
const maxLeft = 449;
let start = 0;

const moveRight = () => {
    if (start < maxLeft) {
        start = start + 1; 
        child.style.left = `${start}px`;

        requestAnimationFrame(moveRight); 
    }
};

moveRight();







