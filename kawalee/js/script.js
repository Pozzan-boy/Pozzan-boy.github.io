const checkbox = document.querySelectorAll('.checkbox');
const dropdownC = document.querySelector('.dropdown-menu');
const droplistC = document.querySelectorAll('.dropdown-menu .dropdown-menu_item');
const dropdownP = document.querySelector('.dropdown-menu_gray');
const droplistCurrentC = document.querySelector('#current-itemC');
const droplistCurrentP = document.querySelector('#current-itemP');
const droplistP = document.querySelectorAll('.dropdown-menu_gray .dropdown-menu_item');
const formbtn = document.querySelector('#form-btn');
const form = document.querySelector('.get__form');
const choose = document.querySelector('.get__choose');


checkbox.forEach( (item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('checkbox_checked');
    });
});

dropdownC.addEventListener('click', () => {
    dropdownC.classList.toggle('dropdown-menu_active');
});

dropdownP.addEventListener('click', () => {
    dropdownP.classList.toggle('dropdown-menu_gray_active');
});

droplistC.forEach( (item) => {
    item.addEventListener('click', () => {
        droplistCurrentC.innerHTML = item.innerHTML;
    });
});

droplistP.forEach( (item) => {
    item.addEventListener('click', () => {
        droplistCurrentP.innerHTML = item.innerHTML;
    })
})

formbtn.addEventListener('click', () => {
    form.classList.add('get__form_collapse');
    document.querySelector('.get__header').classList.add('get__header_collapse');
    choose.classList.add('get__choose_active');
})