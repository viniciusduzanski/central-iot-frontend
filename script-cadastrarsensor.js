const form = document.querySelector("form");

let idDispositivo;
let idSensor;
let empresa;
let grandeza;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    idDispositivo = e.target.idDispositivo.value;
    idSensor = e.target.idSensor.value;
    empresa = e.target.empresa.value;
    grandeza = e.target.grandeza.value;
    console.log(idDispositivo, idSensor, empresa, grandeza);
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => checkData(data));
})

function checkData(data){

}