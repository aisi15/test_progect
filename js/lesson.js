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


//курс валюты
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const request = new XMLHttpRequest();
request.open('GET', '../data/converter.json');
request.send();

request.onload = () => {
    const response = JSON.parse(request.response);
    const converter = (element) => {
        element.oninput = () => {
            if (element.value === '') {
                somInput.value = '';
                usdInput.value = '';
                eurInput.value = '';
                return;
            }
            const value = Number(element.value);

            if (element.id === 'som') {
                usdInput.value = (value / response.usd).toFixed(2);
                eurInput.value = (value / response.eur).toFixed(2);
            }
            if (element.id === 'usd') {
                const somValue = value * response.usd;
                somInput.value = somValue.toFixed(2);
                eurInput.value = (somValue / response.eur).toFixed(2);
            }
            if (element.id === 'eur') {
                const somValue = value * response.eur;
                somInput.value = somValue.toFixed(2);
                usdInput.value = (somValue / response.usd).toFixed(2);
            }
        };
    };
    converter(somInput);
    converter(usdInput);
    converter(eurInput);
};

