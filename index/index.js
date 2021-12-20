let modal__inner = document.querySelectorAll('.modal__inner');
let navigation__buttons = document.querySelectorAll('.navigation');
let modal__outer = document.querySelector('.modal--outer')
let modalOpen = document.querySelector('#modal')

modal__outer.classList.add('display_none')

modal__inner.forEach(element => {
    element.classList.add('display_none')
})

navigation__buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        modal__inner.forEach(element => {
            element.classList.add('display_none')
        })
        event.preventDefault();
        event.stopPropagation();
        const target = event.currentTarget;
        const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
        content.classList.toggle('display_none')

    })
})

modalOpen.addEventListener('click', (event) => {
    event.preventDefault();
    modal__outer.classList.toggle('display_none')
})

modal__outer.addEventListener('click', (event) => {
    event.preventDefault();
    modal__outer.classList.toggle('display_none')
})