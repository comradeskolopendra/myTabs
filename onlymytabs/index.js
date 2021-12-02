let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');
let next = document.querySelectorAll('#next');
let back = document.querySelectorAll('#back');


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

// для кнопки оплатить = хуйня, не важно
document.querySelectorAll('#pay').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

// скрытие всех элементов = не трогать
contents.forEach((i) => {i.classList.add('display_none')});
console.log(nav)

// перебор элементов в nav

next.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        contents.forEach((i) => {i.classList.add('display_none')});
        const target = event.currentTarget;
        const content = document.querySelector(`[data-content-active]="${Number(target.dataset.active) + 1}"`)
        content.nextElementSibling.classList.remove('display_none')
    })
})

back.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        contents.forEach((i) => {i.classList.add('display_none')});
        const target = event.currentTarget;
        console.log(event.currentTarget)
        const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`)
        content.classList.remove('display_none')
    })
})

// nav.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(element);
//         contents.forEach((i) => {i.classList.add('display_none')});
//         let target = event.currentTarget;
//         const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
//         next.onclick = () => {
//             content.removeAttribute('[data-content-acitve]')
//             let b = Number(target) + 1
//             content.setAttribute('[data-content-active]', b)
//             content.classList.add('display_none')
//             content.nextElementSibling.classList.remove('display_none');
//             console.log(content)
//         }
//         back.onclick = () => {
//             content.classList.add('display_none')
//             content.previousElementSibling.classList.remove('display_none');
            
//         }
//         content.classList.remove('display_none');
//     })
// })

// classList.remove('display_none')
// classList.remove('display_none')

// back.onclick = () => {
//     const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
//     content.classList.add('display_none')
//     content.previousElementSibling.classList.remove('display_none');
// }

// next.onclick = () => {
//     content.classList.add('display_none')
//     console.log(content.nextElementSibling);
//     target.dataset.active += 1
//     content.setAttribute('data-content-active', target.dataset.active)
//     content.nextElementSibling.classList.remove('display_none');
// }