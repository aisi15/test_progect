const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('#btn-get');
const btnClose = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

btnOpen.onclick = openModal;
btnClose.onclick = closeModal;

modal.onclick = (event) => {
    if(event.target == modal){
        closeModal();
    }
}

const showFirstT = () => {
    const doc = document.documentElement;
    if (doc. scrollTop + doc.clientHeight >= doc.scrollHeight - 5) {
        setTimeout(() => {
            openModal();
    }, 1000);      //setTimeout можно и убрать, но мне так нравиться         
        document.removeEventListener('scroll', showFirstT);
    }
}

document.addEventListener('scroll', showFirstT);

setTimeout(() => {
    if (modal.style.display !== 'block') {
        openModal();
    }
}, 10000);