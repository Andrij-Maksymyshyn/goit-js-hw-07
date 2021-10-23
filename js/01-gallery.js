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


        let instance = basicLightbox.create(
            `<img src="" />`, {

            onShow: instance => {
                window.addEventListener('keydown', pressKey);
            },
            onClose: instance => {
                window.removeEventListener('keydown', pressKey);
            },
        });

        function pressKey(event) {
                        if (event.code === 'Escape') {
                instance.close();
                          }
        }

       
function onGalleryPicturesClick (evt) {
    evt.preventDefault();
        if (!evt.target.classList.contains("gallery__image")) {
        return;
           }

          instance.element().querySelector('img').src = evt.target.dataset.source; 
        instance.show();

        instance.element().querySelector('img').addEventListener("click", () => {
            instance.close();
        }, {once: true});
                                       
}



