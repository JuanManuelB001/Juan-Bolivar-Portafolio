localStorage.setItem("modeWhite", true);
let darkmodeBtn = document.querySelector(".darkmode-button");
let header = document.getElementById("header");
let changeMode = document.querySelector(".darkmode-button");
let profile_data = document.querySelector(".profile-data-container");
let name = document.querySelector(".name");
let profileSumarry = document.querySelector(".profile-summary ");
let section_container = document.querySelector(".section-container");
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
  let jobs = document.querySelectorAll(".card, card-dark");
  let title = document.querySelectorAll(".title, title-dark");
  let studies_card = document.querySelectorAll(
    ".studies-card, .studies-card-dark",
  );
  let certifications_details = document.querySelectorAll(
    ".certifications-details, .certifications-details-dark",
  );
  let studies_grade = document.querySelectorAll(
    ".studies-grade, .studies-grade-dark",
  );
  let information = document.querySelectorAll(
    ".information, .information-dark",
  );
  let period = document.querySelectorAll(".period, .period-dark");
  let bar_percentage = document.querySelectorAll(
    ".bar-percentage, .bar-percentage-dark",
  );
  let title_skills = document.querySelectorAll(
    ".title-skills, .title-skills-dark",
  );
  let profile_skill_name = document.querySelectorAll(
    ".profile-skill-name, .profile-skill-name-dark",
  );
  let tool_tag = document.querySelectorAll(".tool-tag, .tool-tag-dark");

  if (header.classList.contains("header")) {
    // MODO OSCURO
    changeMode.classList.replace("darkmode-button", "darkmode-button-dark");
    header.classList.replace("header", "header-darkmode");
    changesNameClassDark(nav_letter, "header-nav-item");
    changesNameClassDark(indicator_label, "indicator-label");
    changesNameClassDark(indicators_number, "indicators-number");
    changesNameClassDark(title, "title");
    changesNameClassDark(jobs, "card");
    changesNameClassDark(studies_card, "studies-card");
    changesNameClassDark(certifications_details, "certifications-details");
    changesNameClassDark(studies_grade, "studies-grade");
    changesNameClassDark(information, "information");
    changesNameClassDark(period, "period");
    changesNameClassDark(bar_percentage, "bar-percentage");
    changesNameClassDark(title_skills, "title-skills");
    changesNameClassDark(profile_skill_name, "profile-skill-name");
    changesNameClassDark(tool_tag, "tool-tag");
    name.classList.replace("name", "name-dark");
    profile_data.classList.replace(
      "profile-data-container",
      "profile-data-container-dark",
    );
    section_container.classList.replace(
      "section-container",
      "section-container-dark",
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
    changesNameClassWhite(jobs, "card");
    changesNameClassWhite(studies_card, "studies-card");
    changesNameClassWhite(certifications_details, "certifications-details");
    changesNameClassWhite(studies_grade, "studies-grade");
    changesNameClassWhite(information, "information");
    changesNameClassWhite(period, "period");
    changesNameClassWhite(bar_percentage, "bar-percentage");
    changesNameClassWhite(title_skills, "title-skills");
    changesNameClassWhite(profile_skill_name, "profile-skill-name");
    changesNameClassWhite(tool_tag, "tool-tag");
    profile_data.classList.replace(
      "profile-data-container-dark",
      "profile-data-container",
    );
    name.classList.replace("name-dark", "name");
    profileSumarry.classList.replace("profile-summary-dark", "profile-summary");
    section_container.classList.replace(
      "section-container-dark",
      "section-container",
    );

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
