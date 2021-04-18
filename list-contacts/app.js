const htmlTemplate = document.getElementById('template').innerHTML;
const form = document.getElementById('form');
const deleteUserBtn = document.getElementById('deleteUser');
const table = document.getElementById('listContacts');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const btnAdd = document.getElementById('btnAdd');
const inputs = document.getElementById('inputsForm');
const errorEl = document.getElementById('errorText');
let contact;


form.addEventListener('submit', onSubmitForm);
form.addEventListener('click', onclickForm);
inputs.addEventListener('focus', onFocusInputs, true);
inputs.addEventListener('blur', onBlurInputs, true);

function onSubmitForm(e) {
    e.preventDefault();
    getInputValue();
    addNewUser(contact);
    form.reset();
}

function onclickForm(e) {
    deleteUser(e);
}


function getInputValue() {
    return contact = {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    }
}

function addNewUser(item) {
    if (item.name !== '' && item.phone !== ''){
        delErrorText();
        let htmlEl = document.createElement('tr');
        htmlEl.classList.add('user');
        htmlEl.innerHTML += htmlTemplate.replace('{{name}}', item.name)
        .replace('{{surname}}', item.surname)
        .replace('{{phone}}', item.phone);
        table.appendChild(htmlEl);
    }else{
        console.log('error')
        showText(errorEl);
    }
}

function resetForm() {
    form.reset();
}

function deleteUser(e) {
    if (e.target.classList.contains('deleteUser')) {
        deleteRow(e.target.closest('.user'));
    }
}


function deleteRow(el) {
    el.remove();
}

function onBlurInputs(e) {
    if (!validate(e.target.value)) {
        makeInvalide(e.target)
        if (e.target.classList.contains('button')) {
            makeValide(e.target)
        }
    }
}

function onFocusInputs(e) {
    makeValide(e.target);
}

function makeInvalide(el) {
    el.classList.add('error');
}

function makeValide(el) {
    el.classList.remove('error');
}

function validate(value) {
    return !!value.trim();
}

function showText(errorEl){
    errorEl.classList.add('showErrorText');
}
function delErrorText(){
    errorEl.classList.remove('showErrorText');
}


