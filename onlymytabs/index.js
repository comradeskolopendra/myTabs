let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');


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

nav.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(element);
        contents.forEach((i) => {i.classList.add('display_none')});
        const target = event.currentTarget;
        const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
        content.classList.remove('display_none')
    })
})