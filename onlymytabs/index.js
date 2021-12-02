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

// next.onclick = (event) => {
//     event.preventDefault();
//     const target = event.currentTarget;
//     const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`)
//     content.classList.add('display_none')
//     content.nextElementSibling.classList.remove('display_none')
//     if (content.nextElementSibling.getAttribute('data-content-active') < contents.length) {
//         target.dataset.active = content.nextElementSibling.getAttribute('data-content-active');
//     }
//     else if (content.nextElementSibling.getAttribute('data-content-active') == 3) {
//         return false
//     }
// }

// back.onclick = (event) => {
//     event.preventDefault();
//     const content = document.querySelector(`[data-content-active="${c}"]`)
//     content.classList.add('display_none')
//     content.previousElementSibling.classList.remove('display_none')
//     c -= 1
//     if (content.nextElementSibling.getAttribute('data-content-active' <= 1) && c <= 1) {
//         return null;
//     }
// }

next.addEventListener('click', (event) => {
    event.preventDefault();

    counter += 1
    if (counter >= 4) {
        return false
    }
    const content = document.querySelector(`[data-content-active="${counter}"]`)
    const previous_content = document.querySelector(`[data-content-active="${counter-1}"]`)
    content.classList.remove('display_none')
    previous_content.classList.add('display_none')
})

back.addEventListener('click', (event) => {
    event.preventDefault();

    counter -= 1
    if (counter == 0) {
        return false
    }
    const content = document.querySelector(`[data-content-active="${counter}"]`)
    const previous_content = document.querySelector(`[data-content-active="${counter+1}"]`)
    content.classList.remove('display_none')
    previous_content.classList.add('display_none')
})



































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