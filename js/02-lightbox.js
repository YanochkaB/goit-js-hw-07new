import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const list = document.querySelector(".gallery"); //ul для галереї
const cardsMarkup = creatImg(galleryItems);

//створення галереї
function creatImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}" />
   </a>
</li>`
    })
    .join("")
}

//відображення галереї (додавання в DOM)
list.insertAdjacentHTML("afterbegin", cardsMarkup);

