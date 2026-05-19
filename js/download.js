const button = document.querySelector(".download-curriculum");

button.addEventListener("click", () => {
  let lenguajes = JSON.parse(localStorage.getItem("lenguajes"));
  const file = lenguajes ? "pdf/spanish.pdf" : " pdf/english.pdf";
  window.open(file, "_blank");
});
