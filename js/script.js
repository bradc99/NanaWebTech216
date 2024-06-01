document.addEventListener("DOMContentLoaded", function () {
  // Load JSON data for gallery and carousel
  fetch("json/gallery.json")
    .then((response) => response.json())
    .then((data) => {
      loadCarousel(data);
    });
});

let currentIndex = 0;

function loadCarousel(data) {
  const carousel = document.getElementById("carousel");
  data.images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.full;
    img.alt = image.description;
    carousel.appendChild(img);
  });
  showSlide(currentIndex);
}

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}
