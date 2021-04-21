const ACCORDEON_ITEM = 'accordeon-item';
const ACCORDEON_ITEM_TITLE = 'accordeon-item-title';
const ACCORDEON_ITEM_CONTENT = 'accordeon-item-contetnt';
const ACTIVE_ITEM_CLASS = 'active';

const accordeon = document.querySelector('.accordeon');

accordeon.addEventListener('click', onClickAccordeon);

init();

function init() {
    bindClasses();

}

function bindClasses() {
    Array.prototype.forEach.call(accordeon.children, itemEl => {
        itemEl.classList.add(ACCORDEON_ITEM)
        itemEl.children[0].classList.add(ACCORDEON_ITEM_TITLE);
        itemEl.children[1].classList.add(ACCORDEON_ITEM_CONTENT);
    });

}


function onClickAccordeon(e) {
    switch (true) {
        case e.target.classList.contains(ACCORDEON_ITEM_TITLE):
            onTitleClick(e.target);
    }
}

function onTitleClick(titleElement) {
    const isCurrentVisible = isVisible(titleElement.parentNode);
    hideAll();

    if (!isCurrentVisible) {
        show(titleElement.parentNode);
    }
}

function show(element) {
    element.classList.add(ACTIVE_ITEM_CLASS);
}

function hide(element) {
    element.classList.remove(ACTIVE_ITEM_CLASS);;
}

function isVisible(itemElement) {
    return itemElement.classList.contains(ACTIVE_ITEM_CLASS);
}

function hideAll() {
    const visibleElement = document.querySelectorAll('.' + ACTIVE_ITEM_CLASS);
    Array.prototype.forEach.call(visibleElement, hide);
}


