// LOCALSTORAGE
localStorage.setItem("lenguajes", true);

// UPDATE JSON INFORMATION
// ESPANOL
getDataLenguajes(); // FIRST RUN FUNCTION
function getDataLenguajes() {
  let storage = JSON.parse(localStorage.getItem("lenguajes"));
  let boton = document.querySelector(".button-lenguajes");
  if (storage == true) {
    // LOAD SPANISH JSON
    fetch("../data/dataEspanol.json")
      .then((response) => response.json())
      .then((data) => {
        //NAV
        list_nav = Object.entries(data.nav); //  RETURN KEY-VALUE
        list_nav.forEach(([key, value]) => {
          document.querySelector(".header-nav-list").innerHTML +=
            `<li class="header-nav-item" ><a href="#${key}">${value}</a></li>`;
        });

        document.querySelector(".name").textContent = data.nombre;
        document.getElementById("title").textContent = data.titulo;
        boton.textContent = data.lenguaje;
        document.querySelector(".profile-summary").innerHTML = data.profileText;
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
        // CAPTURARA INFORMACION JSON
        list_tools = Object.values(data.tools_technologies);
        list_tools.forEach((element) => {
          document.querySelector(".tools-container").innerHTML +=
            `<span class="tool-tag">${element}</span>`;
        });

        // STUDIES
        document.querySelector(".studies-title").textContent =
          data.estudios.titulo;

        `<div class="studies-details" ></div>`;
      });
  } else {
    // LOAD ENGLISH JSON
    fetch("../data/dataEnglish.json")
      .then((response) => response.json())
      .then((data) => {
        // NAV
        list_nav = Object.entries(data.nav);
        list_nav.forEach(([key, value]) => {
          document.querySelector(".header-nav-list").innerHTML +=
            `<li class="header-nav-item" ><a href="#${key}">${value}</a></li>`;
        });
        document.getElementById("title").textContent = data.title;
        boton.textContent = data.lenguaje;
      });
  }
}

function changeLenguajes() {
  let isSpanish = JSON.parse(localStorage.getItem("lenguajes"));
  storage = localStorage.setItem("lenguajes", JSON.stringify(!isSpanish));

  updatePage();
}

function updatePage() {
  cleanDom();
  getDataLenguajes();
}

function cleanDom() {
  document.querySelector(".header-nav-list").innerHTML = "";
}
