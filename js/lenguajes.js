

// LOCALSTORAGE
localStorage.setItem("lenguajes", true)

// UPDATE JSON INFORMATION
getDataLenguajes()
function getDataLenguajes(){
    let storage = JSON.parse(localStorage.getItem("lenguajes"));
    if(storage == true){
    // LOAD SPANISH JSON
    fetch("../data/dataEspanol.json").then((response) => response.json()).then( data => {
    document.getElementById('titulo').textContent = data.titulo
})
}
else{
    // LOAD ENGLISH JSON 
    fetch("../data/dataEnglish.json").then((response)=> response.json()).then((data) => {
        document.getElementById("titulo").textContent = data.title
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