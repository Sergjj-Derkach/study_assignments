const htmlTemplate = document.getElementById('template').innerHTML;
const form = document.getElementById('form');
const deleteUserBtn = document.getElementById('deleteUser');
const table = document.getElementById('listContacts');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const btnAdd = document.getElementById('btnAdd');

let user;


form.addEventListener('submit', onSubmitForm);
form.addEventListener('click', onclickForm);

function onSubmitForm(e) {
    e.preventDefault();
    getInputValue();
    addNewUser(user);
    form.reset();
}
function onclickForm(e) {
    deleteUser(e);
}


function getInputValue() {
    return user = {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    }
}
function addNewUser(item) {
    let htmlEl = document.createElement('tr');
    htmlEl.classList.add('user');
    htmlEl.innerHTML += htmlTemplate.replace('{{name}}', item.name)
        .replace('{{surname}}', item.surname)
        .replace('{{phone}}', item.phone);

    table.appendChild(htmlEl);
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
