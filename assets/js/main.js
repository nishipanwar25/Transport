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
    const slide = document.querySelector(".testimonial-card");
    const slideWidth = slide.offsetWidth + 20; // include gap
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".testimonial-card");
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function prevSlide() {
    const slides = document.querySelectorAll(".testimonial-card");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  window.addEventListener("resize", updateSlidePosition);