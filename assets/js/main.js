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

  function getVisibleCardCount() {
    const containerWidth = document.querySelector(".slider-container").offsetWidth;
    const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20; // 20 is the gap
    return Math.floor(containerWidth / cardWidth);
  }

  function updateSlidePosition() {
    const track = document.getElementById("sliderTrack");
    const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".testimonial-card");
    const visibleCards = getVisibleCardCount();
    const maxIndex = slides.length - visibleCards;

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

  window.addEventListener("resize", updateSlidePosition);