import { galleryItems } from "./gallery-items.js";



const boxForImg = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

boxForImg.innerHTML = markup;
boxForImg.addEventListener("click", modalHandle);
function modalHandle(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) return;
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", closeByEsc),
      onClose: () => window.removeEventListener("keydown", closeByEsc),
    }
  );

  const closeByEsc = (e) => e.code === "Escape" && instance.close();
  instance.show();
}

