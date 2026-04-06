

// LOCALSTORAGE
localStorage.setItem("lenguajes", true)

// UPDATE JSON INFORMATION
getDataLenguajes() // FIRST RUN FUNCTION
function getDataLenguajes(){
    let storage = JSON.parse(localStorage.getItem("lenguajes"));
    let boton = document.querySelector(".button-lenguajes");
    if(storage == true){
    // LOAD SPANISH JSON
    fetch("../data/dataEspanol.json").then((response) => response.json()).then( data => {
    document.querySelector('.name').textContent = data.nombre;
    document.getElementById('title').textContent = data.titulo;
    boton.textContent = data.lenguaje;
    document.querySelector(".profile-summary").innerHTML = data.profileText;
    //INDICATORS
    document.querySelector(".indicator-number").innerHTML = data.indicators.num_experiences;
    document.querySelector(".experience-label").innerHTML = data.indicators.text_experiences;
    
    //TECNOLOGYS
    document.querySelector(".tecnology-number").innerHTML = data.indicators.num_tecnology;
    document.querySelector(".tecnology-label").innerHTML= data.indicators.text_tecnology;
})
}
else{
    // LOAD ENGLISH JSON 
    fetch("../data/dataEnglish.json").then((response)=> response.json()).then((data) => {
        document.getElementById("titulo").textContent = data.title
        boton.textContent = data.lenguaje;
    })

}
}

function changeLenguajes(){
    let isSpanish = JSON.parse(localStorage.getItem("lenguajes"))
    storage = localStorage.setItem("lenguajes", JSON.stringify(!isSpanish));
    updatePage()
}

function updatePage(){
    getDataLenguajes()

}