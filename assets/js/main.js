// About Section Play Video

// const openBtn = document.getElementById("open-video");
//   const modal = document.getElementById("videoModal");
//   const iframe = document.getElementById("youtubeIframe");
//   const closeBtn = document.getElementById("close-video");

//   const youtubeURL = "https://www.youtube.com/watch?v=p-AvPg5vB10";

//   openBtn.addEventListener("click", () => {
//     iframe.src = youtubeURL;
//     modal.style.display = "flex";
//   });

//   closeBtn.addEventListener("click", () => {
//     iframe.src = "";
//     modal.style.display = "none";
//   });

//   // Optional: Close modal on outside click
//   window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       iframe.src = "";
//       modal.style.display = "none";
//     }
//   });


   let currentIndex = 0;

function updateSlidePosition() {
  const track = document.getElementById("sliderTrack");
  const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const slides = document.querySelectorAll(".testimonial-card");
  const maxIndex = Math.max(0, slides.length - Math.floor(containerWidth / cardWidth));

  // Clamp the currentIndex if it's out of bounds after resize
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
  const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const slides = document.querySelectorAll(".testimonial-card");
  const maxIndex = Math.max(0, slides.length - Math.floor(containerWidth / cardWidth));

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

setInterval(() => {
  const slides = document.querySelectorAll(".testimonial-card");
  const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const maxIndex = Math.max(0, slides.length - Math.floor(containerWidth / cardWidth));

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back to the beginning
  }

  updateSlidePosition();
}, 3000);

window.addEventListener("resize", updateSlidePosition);
