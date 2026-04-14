let darkmode = document.querySelector(".darkmode-button");
let header = document.getElementById("header");
let nav = document.getElementById("header-nav");

// LOCAL STORAGE
let storage = localStorage.setItem("darkmode", true);
darkmode.addEventListener("click", () => {
  let valueStorage = localStorage.getItem("darkmode");
  let darkmode = valueStorage ? "white" : "dark";
  alert("presionado " + darkmode);
});
