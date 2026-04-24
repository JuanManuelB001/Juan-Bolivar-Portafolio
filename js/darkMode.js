let darkmodeBtn = document.querySelector(".darkmode-button");
let header = document.getElementById("header");
let changeMode = document.querySelector(".darkmode-button");

darkmodeBtn.addEventListener("click", () => {
  let nav_letter = document.querySelectorAll(
    ".header-nav-item, .header-nav-item-dark",
  );

  if (header.classList.contains("header")) {
    // MODO OSCURO
    changeMode.classList.replace("darkmode-button", "darkmode-button-dark");
    header.classList.replace("header", "header-darkmode");
    changesNameClassDark(nav_letter, "header-nav-item");
  } else {
    // MODO CLARO
    header.classList.replace("header-darkmode", "header");
    changeMode.classList.replace("darkmode-button-dark", "darkmode-button");
    changesNameClassWhite(nav_letter, "header-nav-item");
  }
});

// WHITE MODE
function changesNameClassWhite(elements, mode) {
  let darkMode = mode + "-dark";
  elements.forEach((element) => {
    element.classList.remove(darkMode);
    element.classList.add(mode);
  });
}

// DARK MODE
function changesNameClassDark(elements, mode) {
  let darkMode = mode + "-dark";
  elements.forEach((element) => {
    element.classList.remove(mode);
    element.classList.add(darkMode);
  });
}
