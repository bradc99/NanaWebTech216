document.addEventListener("DOMContentLoaded", function () {
  // Load JSON data for gallery
  fetch("json/gallery.json")
    .then((response) => response.json())
    .then((data) => {
      loadGallery(data);
    });
});

function loadGallery(data) {
  const gallery = document.getElementById("gallery");
  data.images.forEach((image) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image.thumbnail;
    img.alt = image.description;

    const desc = document.createElement("p");
    desc.textContent = image.description;

    galleryItem.appendChild(img);
    galleryItem.appendChild(desc);
    gallery.appendChild(galleryItem);
  });
}
