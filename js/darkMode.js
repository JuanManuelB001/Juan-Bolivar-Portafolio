let darkmode = document.querySelector(".darkmode-button");
let header = document.getElementById("header");
let nav = document.getElementById("header-nav");

// LOCAL STORAGE
let storage = localStorage.setItem("darkmode", true);
darkmode.addEventListener("click", () => {
  let valueStorage = localStorage.getItem("darkmode");
  let darkmode = valueStorage ? "white" : "dark";

  // NAV
  console.log(header.classList);

  if (header.classList == "header") {
    // MODO OSCURO
    header.classList.remove("header");
    header.classList.add("header-darkmode");
  } else {
    // MODO CLARO
    header.classList.remove("header-darkmode");
    header.classList.add("header");
  }
});
