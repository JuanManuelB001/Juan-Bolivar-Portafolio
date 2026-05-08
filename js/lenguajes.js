// LOCALSTORAGE
localStorage.setItem("lenguajes", true);
localStorage.setItem("modeWhite", true);
// UPDATE JSON INFORMATION
// ESPANOL

document.addEventListener("DOMContentLoaded", () => {
  getDataLenguajes(); // FIRST RUN FUNCTION
});

function getDataLenguajes() {
  let storage = JSON.parse(localStorage.getItem("lenguajes"));
  if (storage == true) {
    // LOAD SPANISH JSON
    dataJson("sp");
  } else {
    // LOAD ENGLISH JSON
    dataJson("en");
  }
}
function dataJson(mode) {
  if (mode == "sp") {
    spanishData();
  } else {
    englishData();
  }
}

function spanishData() {
  let boton = document.querySelector(".button-lenguajes");
  let mode = JSON.parse(localStorage.getItem("modeWhite"));
  if (mode) {
    try {
      fetch("data/dataEspanol.json")
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary").innerHTML =
            data.profileText;
          putInformation(data);
        });
    } catch (Exception) {
      fetch(
        "https://juanmanuelb001.github.io/Juan-Bolivar-Portafolio/data/dataEspanol.json",
      )
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary").innerHTML =
            data.profileText;
          putInformation(data);
        });
    }
  } else {
    // MODE DARK CHANGE CLASS NAME
    try {
      fetch("data/dataEspanol.json")
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name-dark").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary-dark").innerHTML =
            data.profileText;
          putInformation(data);
        });
    } catch (Exception) {
      fetch(
        "https://juanmanuelb001.github.io/Juan-Bolivar-Portafolio/data/dataEspanol.json",
      )
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary").innerHTML =
            data.profileText;
          putInformation(data);
        });
    }
  }
}

function englishData() {
  let boton = document.querySelector(".button-lenguajes");
  let mode = JSON.parse(localStorage.getItem("modeWhite"));
  if (mode) {
    try {
      fetch("data/dataEnglish.json")
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary").innerHTML =
            data.profileText;
          putInformation(data);
        });
    } catch (Exception) {
      fetch(
        "https://juanmanuelb001.github.io/Juan-Bolivar-Portafolio/data/dataEnglish.json",
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          // PUT INFORMATION
          putInformation(data);
        });
    }
  } else {
    // DARK MODE ACTIVATE
    try {
      fetch("data/dataEnglish.json")
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".name-dark").textContent = data.name;
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          document.querySelector(".profile-summary-dark").innerHTML =
            data.profileText;
          putInformation(data);
        });
    } catch (Exception) {
      fetch(
        "https://juanmanuelb001.github.io/Juan-Bolivar-Portafolio/data/dataEnglish.json",
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("title").textContent = data.title;
          boton.textContent = data.lenguaje;
          // PUT INFORMATION
          putInformation(data);
        });
    }
  }
}

function changeLenguajes() {
  let isSpanish = JSON.parse(localStorage.getItem("lenguajes"));
  storage = localStorage.setItem("lenguajes", JSON.stringify(!isSpanish));
  updatePage();
}

function putInformation(data) {
  let storage = JSON.parse(localStorage.getItem("lenguajes"));
  let mode = JSON.parse(localStorage.getItem("modeWhite"));

  if (mode) {
    // NAV
    list_nav = Object.entries(data.nav);
    list_nav.forEach(([key, value]) => {
      document.querySelector(".header-nav-list").innerHTML +=
        `<li class="header-nav-item" ><a href="#${key}">${value}</a></li>`;
    });
  } else {
    // NAV

    list_nav = Object.entries(data.nav);
    list_nav.forEach(([key, value]) => {
      document.querySelector(".header-nav-list").innerHTML +=
        `<li class="header-nav-item-dark" ><a href="#${key}">${value}</a></li>`;
    });
  }

  //INDICATORS
  document.querySelector(".indicator-number").innerHTML =
    data.indicators.num_experiences;
  document.querySelector(".experience-label").innerHTML =
    data.indicators.text_experiences;

  //TECNOLOGYS
  document.querySelector(".tecnology-number").innerHTML =
    data.indicators.num_tecnology;
  document.querySelector(".tecnology-label").innerHTML =
    data.indicators.text_tecnology;

  //SKILLS

  document.querySelector(".h2-skills").textContent = data.title_skills;
  document.querySelector(".frontend").textContent = data.frontend.name;
  // TRANSFORMAR A ARRAY
  list_frontend = Object.values(data.frontend.frontend);
  //RECORRER LA   LISTA FRONTEND
  list_frontend.forEach((element) => {
    document.querySelector(".list-frontend").innerHTML +=
      `<ul><li class="profile-skill"><div class="load-bar" ><div class="bar-percentage" style="width:${element[1]}%" >${element[1]}% </div> </div> <span class="profile-skill-name"> ${element[0]}</span></li></ul>`;
  });

  document.querySelector(".backend").textContent = data.backend.name;
  // RECORRER LISTA BACKEND
  list_backend = Object.values(data.backend.backend);

  list_backend.forEach((element) => {
    document.querySelector(".list-backend").innerHTML +=
      `<ul><li class="profile-skill"><div  class="load-bar" ><div class="bar-percentage" style="width:${element[1]}%">${element[1]}%</div></div><span class="profile-skill-name"> ${element[0]}</span></li></ul>`;
  });
  // RECORRER LISTA DATABASES
  document.querySelector(".database").textContent = data.dataBase.name;
  //CAPTURARA LISTA DE DATABASE
  list_batebase = Object.values(data.dataBase.dataBase);

  // MODIFICAR HTML
  list_batebase.forEach((element) => {
    document.querySelector(".list-databases").innerHTML +=
      `<ul><li class="profile-skill"><div  class="load-bar" ><div class="bar-percentage" style="width:${element[1]}%">${element[1]}%</div></div><span class="profile-skill-name"> ${element[0]}</span></li></ul>`;
  });

  document.querySelector(".framework-title").textContent = data.profile_title;
  // CAPTURARA INFORMACION JSON
  list_tools = Object.values(data.tools_technologies);
  list_tools.forEach((element) => {
    document.querySelector(".tools-container").innerHTML +=
      `<span class="tool-tag">${element}</span>`;
  });

  // TITLE STUDIES
  document.querySelector(".professional-experience-title").textContent =
    data.profesional_experience;
  // STUDIES
  document.querySelector(".studies-title").textContent = data.studies.title;
  // PREGRADO
  data.studies.grade.forEach((element) => {
    document.querySelector(".studies").innerHTML +=
      ` <div class="studies-card" ><div  class="title-wrapper"><p class="studies-grade">${element.grade}</p> <span class="period">${element.period}</span></div><div class="information" ><span class="title-grade" >${storage ? "Titulo: " : "Title: "}${element.title}</span><span class="university">${storage ? "Universidad: " : "University: "} </span>${element.university}</div></div>`;
  });
  // POS-GRADO

  data.studies.postgraduate.forEach((element) => {
    document.querySelector(".studies").innerHTML +=
      ` <div class=" studies-card" ><div  class="title-wrapper"><p class="studies-grade">${element.grade}</p> <span class="period">${element.period}</span></div><div class="information" ><span class="title-grade" >${storage ? "Titulo: " : "Title: "}${element.title}</span><span class="university">${storage ? "Universidad: " : "University: "} </span>${element.university}</div></div>`;
  });
  // CERTIFICATIONS
  document.querySelector(".title-certification").textContent =
    data.Certification;

  data.experince_section.certifications.forEach((element) => {
    document.querySelector(".certifications").innerHTML +=
      ` <div class="certifications-details" ><div  class="title-wrapper certification-container"><p class="studies-grade">${element.organization}</p> <span class="period">${element.year}</span></div><div class="information" ><span class="title-certification" >${storage ? "Titulo: " : "Title: "}${element.title_certification}</span></div></div>`;
  });

  //SECTION-CONTAINER
  //title
  const wrapper = document.querySelector(".section-wrapper");

  data.experince_section.experience.jobs.forEach((element) => {
    const skills = element.abilitys
      .map((skill) => `<li class="tools tool-tag">${skill}</li>`)
      .join("");

    wrapper.innerHTML += `
    <div class="card">
      <h2>${element.company} <span>${element.jobTitle}</span></h2>
      <div class="job-data">
        <p class="job-period">${element.period}</p>
        <div class="abilitys"><ul class="skills-list">${skills}</ul></div>
      </div>
    </div>
  `;
  });

  // PORFOLIO
  document.querySelector(".porfolio-title").textContent = data.Portfolio;
  const portfolio_wrapper = document.querySelector(".portfolio-wrapper");
  data.portfolio_card.forEach((element) => {
    const container = element.tech
      .map((elem_tech) => `<li class="tools tool-tag" >${elem_tech}</li>`)
      .join("");
    portfolio_wrapper.innerHTML += `
    <div class="card">
      <h2>${element.title}</h2>
    
      <div class="abitiys">
        
        <div class="card-container">
          <div class="img-container">
            <img class="card-img" src="${getImgPath(element.img)}"
           data-gif="${getGifPath(element.gif)}"  
           data-static="${getImgPath(element.img)}"
           alt="${element.title}}">
          </div>
        </div>

        <ul class="skills-list">
          ${container}
        </ul>

      </div>
      <div>
        <p class="card-description">
          ${element.description}
        </p>
      </div>
    </div>
      `;
  });
  activarHoverGif();
}

function updatePage() {
  cleanDom();
  getDataLenguajes();
}

function cleanDom() {
  document.querySelector(".header-nav-list").innerHTML = "";
  document.querySelector(".list-frontend").innerHTML = "";
  document.querySelector(".list-backend").innerHTML = "";
  document.querySelector(".list-databases").innerHTML = "";
  document.querySelector(".tools-container").innerHTML = "";
  document.querySelector(".studies").innerHTML = "";
  document.querySelector(".section-wrapper").innerHTML = "";
  document.querySelector(".certifications").innerHTML = "";
  document.querySelector(".portfolio-wrapper").innerHTML = "";
}
