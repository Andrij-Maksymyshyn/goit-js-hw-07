import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryPictures = document.querySelector('.gallery');
const itemsMarkup = createItemsMarkup (galleryItems);

galleryPictures.insertAdjacentHTML('beforeend', itemsMarkup);

galleryPictures.addEventListener('click', onGalleryPicturesClick);

function createItemsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
    </div>
        `;
    })
    .join('');
        }

function onGalleryPicturesClick (evt) {
    evt.preventDefault();
        if (!evt.target.classList.contains("gallery__image")) {
        return;
           }
          
           const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}"/>
    
  `) 

 instance.show()

 document.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
        return instance.close()
    }
    });
          
}


