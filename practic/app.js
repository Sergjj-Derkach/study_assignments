const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos?albumId=";
let htmlAlbums = document.querySelector(".templateAlbums").innerHTML;
let htmlPhotos = document.querySelector(".templatePhotos").innerHTML;
let listAlbums = document.querySelector(".albums");
let listPhotos = document.querySelector(".photos");

init();

function init() {
  fetch(URL_ALBUMS).then(respJson).then(getArr).then(renderAlbums);
  defaultPhotos();
}

function getArr(data) {
  return (arr = data);
}
function renderAlbums(data) {
  listAlbums.innerHTML = data.map(generationList).join("\n");
}

function generationList(item) {
  return htmlAlbums.replace("{{id}}", item.id).replace("{{title}}", item.title);
}

listAlbums.addEventListener("click", onClickAlbum);

function onClickAlbum(e) {
  if (e.target.classList.contains("title")) {
    renderPhoto(e.target);
  }
}

function renderPhoto(event) {
  getPhoto(event.parentNode.id);
}

function getPhoto(num) {
  let url = `${URL_PHOTOS}${num}`;
  fetch(url).then(respJson).then(getArr).then(renderPhotos);
}

function respJson(response) {
  return response.json();
}
function renderPhotos(data) {
  listPhotos.innerHTML = data.map(generationPhotos).join("\n");
}

function generationPhotos(item) {
  return htmlPhotos
    .replace("{{id}}", item.id)
    .replace("{{url}}", item.thumbnailUrl)
    .replace("{{title}}", item.title);
}

function defaultPhotos() {
  let url = `${URL_PHOTOS}1`;
  fetch(url).then(respJson).then(getArr).then(renderPhotos);
}
