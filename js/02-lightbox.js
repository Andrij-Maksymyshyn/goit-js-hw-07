import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPictures = document.querySelector('.gallery');
const itemsMarkup = createItemsMarkup (galleryItems);

galleryPictures.insertAdjacentHTML('beforeend', itemsMarkup);


 galleryPictures.addEventListener('click', onGalleryPicturesClick)

function createItemsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
        `;
    })
    .join('');
        }

                function onGalleryPicturesClick (evt) {
            evt.preventDefault();
                if (!evt.target.classList.contains("gallery__image")) {
                return;
                   }                   
                  
                   let lightbox = new SimpleLightbox('.gallery a', { /* options */ });                 
            
                        }
