localStorage.setItem("modeWhite", true);
let darkmodeBtn = document.querySelector(".darkmode-button");
let header = document.getElementById("header");
let changeMode = document.querySelector(".darkmode-button");
let profile_data = document.querySelector(".profile-data-container");
let name = document.querySelector(".name");
let profileSumarry = document.querySelector(".profile-summary ");

const body = document.body;
darkmodeBtn.addEventListener("click", () => {
  let indicators_number = document.querySelectorAll(
    ".indicators-number, .indicators-number-dark",
  );
  let indicator_label = document.querySelectorAll(
    ".indicator-label, .indicator-label-dark",
  );
  let nav_letter = document.querySelectorAll(
    ".header-nav-item, .header-nav-item-dark",
  );

  if (header.classList.contains("header")) {
    // MODO OSCURO
    changeMode.classList.replace("darkmode-button", "darkmode-button-dark");
    header.classList.replace("header", "header-darkmode");
    changesNameClassDark(nav_letter, "header-nav-item");
    changesNameClassDark(indicator_label, "indicator-label");
    changesNameClassDark(indicators_number, "indicators-number");
    name.classList.replace("name", "name-dark");
    profile_data.classList.replace(
      "profile-data-container",
      "profile-data-container-dark",
    );
    profileSumarry.classList.replace("profile-summary", "profile-summary-dark");

    // UPDATE LOCAL STORAGE
    updateLocalStorageMode();
  } else {
    // MODO CLARO
    header.classList.replace("header-darkmode", "header");
    changeMode.classList.replace("darkmode-button-dark", "darkmode-button");
    changesNameClassWhite(nav_letter, "header-nav-item");
    changesNameClassWhite(indicator_label, "indicator-label");
    changesNameClassWhite(indicators_number, "indicators-number");
    profile_data.classList.replace(
      "profile-data-container-dark",
      "profile-data-container",
    );
    name.classList.replace("name-dark", "name");
    profileSumarry.classList.replace("profile-summary-dark", "profile-summary");

    // UPDATE LOCAL STORAGE
    updateLocalStorageMode();
  }
});

// WHITE MODE
function changesNameClassWhite(elements, mode) {
  let darkMode = mode + "-dark";
  elements.forEach((element) => {
    element.classList.remove(darkMode);
    element.classList.add(mode);
    body.style.backgroundColor = "rgb(219, 233, 247)";
  });
}

// DARK MODE
function changesNameClassDark(elements, mode) {
  let darkMode = mode + "-dark";
  elements.forEach((element) => {
    element.classList.remove(mode);
    element.classList.add(darkMode);
    body.style.backgroundColor = "#121a2e";
  });
}
function updateLocalStorageMode() {
  let mode = JSON.parse(localStorage.getItem("modeWhite"));
  localStorage.setItem("modeWhite", JSON.stringify(!mode));
}
