function activarHoverGif() {
  document.querySelectorAll(".card-img").forEach((img) => {
    const gif = new Image();
    gif.src = img.dataset.gif; // precarga

    img.addEventListener("mouseenter", () => {
      img.src = img.dataset.gif;
    });

    img.addEventListener("mouseleave", () => {
      img.src = img.dataset.static;
    });
  });
}
