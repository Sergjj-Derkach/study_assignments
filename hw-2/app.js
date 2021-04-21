const ACCORDEON_ITEM = 'accordeon-item';
const ACCORDEON_ITEM_TITLE = 'accordeon-item-title';
const ACCORDEON_ITEM_CONTENT = 'accordeon-item-contetnt';
const accordeon = document.querySelector('.accordeon');

Array.prototype.forEach.call(accordeon.children, itemEl => {
    itemEl.classList.add(ACCORDEON_ITEM)
    itemEl.children[0].classList.add(ACCORDEON_ITEM_TITLE);
    itemEl.children[1].classList.add(ACCORDEON_ITEM_CONTENT);
});

accordeon.addEventListener('click', onClickAccordeon);

function onClickAccordeon(e) {
    console.log(e.target)
}

console.log('init');




