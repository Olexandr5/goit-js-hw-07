import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const divGallery = document.querySelector('.gallery');
const creatGallleryMarkap = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      data-source=="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
divGallery.innerHTML = creatGallleryMarkap;
divGallery.addEventListener('click', divGalleryOn);
function divGalleryOn(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image'));
  {
    return;
  }
  const instance = basicLightbox.create(
    `img scr = "${event.target.dataset.sourse}" widt="800" heigth="600"`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
