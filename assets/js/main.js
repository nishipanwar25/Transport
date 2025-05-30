// About Section Play Video

const openBtn = document.getElementById("open-video");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("youtubeIframe");
  const closeBtn = document.getElementById("close-video");

  const youtubeURL = "https://www.youtube.com/watch?v=p-AvPg5vB10";

  openBtn.addEventListener("click", () => {
    iframe.src = youtubeURL;
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    iframe.src = "";
    modal.style.display = "none";
  });

  // Optional: Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      iframe.src = "";
      modal.style.display = "none";
    }
  });
