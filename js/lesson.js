const phoneInput = document.querySelector('#phone_input');
const btn = document.querySelector('#phone_button');
const result = document.querySelector('#phone_result')

const regex = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/g;

btn.addEventListener('click', () => {
    if(regex.test(phoneInput.value)){
        result.style.color = 'green'
        result.innerHTML = 'Phone is valid'
    } else {
        result.style.color = 'red'
        result.innerHTML = 'Phone is invalid'
    }
});


const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabButtons = document.querySelectorAll('.tab_content_item');
const tabButtonsParent = document.querySelector('.tab_content_items');

let activeBloks = 0;

const hideBlocks = () => {
    tabBlocks.forEach(item => {
        item.style.display = 'none';
    });

    tabButtons.forEach(button => {
        button.classList.remove('tab_content_item_active');
    });
};

const showBlock = (index = 0) => {
    tabBlocks[index].style.display = 'block';
    tabButtons[index].classList.add('tab_content_item_active');
};

hideBlocks();
showBlock();

setInterval (() => {
    activeBloks++;
    if(activeBloks >= tabBlocks.length) {
        activeBloks = 0;
    }
    
    hideBlocks();
    showBlock(activeBloks);
}, 5000);

tabButtonsParent.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        tabButtons.forEach((item, index) => {
            if (event.target === item) {
                activeBloks = index;
                hideBlocks();
                showBlock(index);
            }
        });
    }
});


