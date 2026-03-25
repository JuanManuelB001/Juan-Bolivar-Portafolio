

//PONER CADA COMPONENTE DEL JSON
// LOCALSTORAGE
localStorage.setItem("lenguajes", true)
let storage = JSON.parse(localStorage.getItem("lenguajes"));

if(storage == true){
    fetch("../data/dataEspanol.json").then((response) => response.json()).then( data => {
    document.getElementById('titulo').textContent = data.titulo
})
}
else{
    fetch("../data/dataEnglish.json").then((response)=> response.json()).then((data) => {
        document.getElementById("titulo").textContent = data.title
    })
    console.log("Ingles");
}