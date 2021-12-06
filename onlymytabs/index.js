// desktop
let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');
let steps = document.querySelectorAll('[data-active]');
let next = document.querySelector('#next');
let back = document.querySelector('#back');
let card_show = document.querySelector('#show_card');
let modal__outerX2 = document.querySelectorAll('.modal__outerX2');
let counter = 1;

// mobile
let button_open_mobile_modal = document.querySelector('#button__open_mobile');
let container_mobile_modal = document.querySelector('.mobile__modal');
let back_mobile_button = document.querySelector('#button__back_mob');
let contents_mobile = document.querySelectorAll('[data-content-active-mobile]')
let next_mobile = document.querySelector('#next_mobile');
let back_mobile = document.querySelector('#back_mobile');
let counter_mobile = 1;

for (let k = 1; k < contents_mobile.length; k++) {
    contents_mobile[k].classList.add('display_none')
}

next_mobile.addEventListener('click', (event) => {
    event.preventDefault();

    if (counter_mobile <= contents_mobile.length-1) {
        counter_mobile += 1;
    }

    const content_mobile = document.querySelector(`[data-content-active-mobile="${counter_mobile}"]`)
    const previous_mobile = document.querySelector(`[data-content-active-mobile="${counter_mobile-1}"]`)
    content_mobile.classList.remove('display_none')
    previous_mobile.classList.add('display_none')
})

back_mobile.addEventListener('click', (event) => {
    event.preventDefault();

    if (counter_mobile >= 2) {
        counter_mobile -= 1
    }

    const content_mobile = document.querySelector(`[data-content-active-mobile="${counter_mobile}"]`)
    const previous_mobile = document.querySelector(`[data-content-active-mobile="${counter_mobile+1}"]`)
    content_mobile.classList.remove('display_none');
    previous_mobile.classList.add('display_none')

})


button_open_mobile_modal.onclick = (event) => {
    event.preventDefault();
    container_mobile_modal.classList.toggle('display_none')
}

back_mobile_button.addEventListener('click', (event) => {
    event.preventDefault();
    container_mobile_modal.classList.toggle('display_none')
})


button_open.onclick = () => {
    outer.classList.toggle('show');
}

outer.onclick = () => {
    outer.classList.toggle('show');
}

inner.onclick = (event) => {
    event.stopPropagation();
    outer.classList.add('show');
}

for (let i = 1; i < contents.length; i++) {
    contents[i].classList.add('display_none')
}

next.addEventListener('click', (event) => {
    event.preventDefault();

    if (counter <= contents.length-1) {
        counter += 1
    }
    const content = document.querySelector(`[data-content-active="${counter}"]`)
    const previous_content = document.querySelector(`[data-content-active="${counter-1}"]`)
    content.classList.remove('display_none')
    previous_content.classList.add('display_none')
})

back.addEventListener('click', (event) => {
    event.preventDefault();

    if (counter >= 2) {
        counter -= 1
    }
    const content = document.querySelector(`[data-content-active="${counter}"]`)
    const previous_content = document.querySelector(`[data-content-active="${counter+1}"]`)
    content.classList.remove('display_none')
    previous_content.classList.add('display_none')
})