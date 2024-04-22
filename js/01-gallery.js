import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.addEventListener('click', gallery)

//створення галереї
const elem = galleryItems.map((oneElem) => {
    const item = `<li class="gallery__item">
    <a class="gallery__link" href="${oneElem.original}">
    <img
        class="gallery__image"
        src="${oneElem.preview}"
        data-source="${oneElem.original}"
        alt="${oneElem.description}"
    />
    </a>
</li>`;
    return item
}).join('')

list.insertAdjacentHTML("afterbegin", elem);

function gallery(event) {
    event.preventDefault()
  //перевірити чи клік відбувся по картинці (в основній ф-ції)
  if (event.target.nodeName !== 'img') {
      return
  }
}