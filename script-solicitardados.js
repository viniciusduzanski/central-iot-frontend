const form = document.querySelector("form");

let idDispositivo;
let dtInicial;
let dtFinal;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    idDispositivo = e.target.idDispositivo.value.trim();
    dtInicial = e.target.dtInicial.value;
    dtFinal = e.target.dtFinal.value;

    dtInicial += " 00:00:00";
    dtFinal += " 23:59:59";

    fetch('http://localhost:3000/dados?' + new URLSearchParams({
        idDispositivo, dtInicial, dtFinal
    }))
        .then(response => response.json())
        .then(response => console.log(response))
});
