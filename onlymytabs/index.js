let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');
let steps = document.querySelectorAll('[data-active]');
let next = document.querySelector('#next');
let back = document.querySelector('#back');
let card_show = document.querySelector('#show_card');
let counter = 1;


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
    console.log(counter)
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