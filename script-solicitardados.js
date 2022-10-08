const form = document.querySelector("form");

let idDispositivo;
let dtInicial;
let dtFinal;
let dados;
let table = document.querySelector('.js-body');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    idDispositivo = e.target.idDispositivo.value.trim();
    dtInicial = e.target.dtInicial.value;
    dtFinal = e.target.dtFinal.value;

    dtInicial += " 00:00:00";
    dtFinal += " 23:59:59";

    console.log(dtInicial);
    console.log(dtFinal);

    fetch('http://localhost:3000/dados?' + new URLSearchParams({
        idDispositivo, dtInicial, dtFinal
    }))
        .then(response => response.json())
        .then(response => montTable(response))
});

function montTable(dado) {
    let row = "";
    dado.forEach(dado => {
        row += `
        <tr>
            <td>${dado.id_sensor}</td>
            <td>${dado.data_hora}</td>
            <td>${dado.valor}</td>
            <td>${dado.grandeza}</td>
        </tr>
        `
        table.innerHTML = row;
    })
};
