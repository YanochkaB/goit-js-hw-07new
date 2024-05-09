import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector(".gallery"); //ul для галереї
const cardsMarkup = creatImg(galleryItems)

//створення галереї
function creatImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</li>`
    }).join('')
}

//відображення галереї (додавання в DOM)
list.insertAdjacentHTML("afterbegin", cardsMarkup);

//подія
list.addEventListener('click', onImgClick)


//модалка з картинкою
function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const imgSource = event.target.dataset.source
    const instance = basicLightbox.create(
        `<img src=${imgSource}>`,
        {
            onShow: () => {
                document.addEventListener('keydown', onEscBtnClick);
            },
            onClose: () => {
                document.removeEventListener('keydown', onEscBtnClick)
            },
        }
    );
    
    instance.show();

    function onEscBtnClick(evt) {
      if (evt.code === "Escape") {
        instance.close();
      }
    }
}

