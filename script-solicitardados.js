const form = document.querySelector("form");

let idDispositivo;
let dtInicial;
let dtFinal;
let dados;
let tableBody = document.querySelector('.js-body');
let table = document.querySelector('.central-table');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    idDispositivo = e.target.idDispositivo.value.trim();
    dtInicial = e.target.dtInicial.value;
    dtFinal = e.target.dtFinal.value;

    const d1 = new Date(dtInicial);
    const d2 = new Date(dtFinal);

    if (d1 > d2) {
        alert("A data inicial não pode ser maior que a data final.")
    } else {
        dtInicial += " 00:00:00";
        dtFinal += " 23:59:59";

        fetch('http://localhost:3000/dados?' + new URLSearchParams({
            idDispositivo, dtInicial, dtFinal
        }))
            .then(response => response.json())
            .then(response => montTable(response))
    }
});

function montTable(dado) {
    table.style = "display: table";
    if (dado.length > 0) {
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
            tableBody.innerHTML = row;
        })
    } else {
        alert("Não existem dados para esta pesquisa.");
        table.style = "display: none";
    }

};
