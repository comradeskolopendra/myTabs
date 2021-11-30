let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');
let steps = document.querySelectorAll('[data-active]');
let next = document.querySelector('#next');
let back = document.querySelector('#back');
let card_show = document.querySelector('#show_card');
let for_test_some_shit = contents.length;


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

next.onclick = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`)
    content.classList.add('display_none')
    content.nextElementSibling.classList.remove('display_none')
    if (content.nextElementSibling.getAttribute('data-content-active') < contents.length) {
        target.dataset.active = content.nextElementSibling.getAttribute('data-content-active');
    }
    else {
        return false
    }
}

back.onclick = (event) => {
    event.preventDefault();
    let target = 3;
    const content = document.querySelector(`[data-content-active="${target}"]`)
    content.classList.add('display_none')
    content.previousElementSibling.classList.remove('display_none')
    if (content.previousElementSibling.getAttribute('data-content-active') < contents.length) {
        target = content.previousElementSibling.getAttribute('data-content-active');
        console.log(content.previousElementSibling.getAttribute('data-content-active'))
    }
    else if (content.previousElementSibling.getAttribute('data-content-active') == 1) {
        return false
    }
}




































// nav.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         contents.forEach((i) => { i.classList.add('display_none') });
//         const target = event.currentTarget;
//         const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
//         content.classList.remove('display_none');
//         next.onclick = () => {
//             content.classList.add('display_none')
//             content.nextElementSibling.classList.remove('display_none');
//         }
//         back.onclick = () => {
//             content.classList.add('display_none')
//             content.previousElementSibling.classList.remove('display_none')
//         }
//     })
// })