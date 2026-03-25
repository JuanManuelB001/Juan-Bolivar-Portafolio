

//PONER CADA COMPONENTE DEL JSON

fetch("../data/dataEspanol.json").then((response) => response.json()).then( data => {
    document.getElementById('titulo').textContent = data.titulo
})