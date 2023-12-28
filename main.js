//variables
let fecha = new Date(),
    segundos = fecha.getSeconds(),
    minutos = fecha.getMinutes(),
    horas = fecha.getHours(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();
let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
//Accediendo a los elementos del DOM
let pHoras = document.getElementById("pHoras"),
    pMinutos = document.getElementById("pMinutos"),
    pSegundos = document.getElementById("pSegundos"),
    pDiaSemana = document.getElementById("pDiaSemana"),
    pDia = document.getElementById("pDia"),
    pMes = document.getElementById("pMes"),
    pYear = document.getElementById("pYear"),
    pSaludo = document.getElementById("Saludo");
//Asignación de valores al Dom
pDiaSemana.textContent = diasSemana[diaSemana];
pDia.textContent = dia;
pMes.textContent = meses[mes];
pYear.textContent = year;
pSaludo.textContent = obtenerSaludo();
//Métodos
function ActualizarHora() {
    fecha = new Date();
    segundos = fecha.getSeconds();
    minutos = fecha.getMinutes();
    horas = fecha.getHours();
    diaSemana = fecha.getDay();
    dia = fecha.getDate();
    mes = fecha.getMonth();
    year = fecha.getFullYear();
    evaluarMinutosSegundos();
    pHoras.textContent = horas;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
}

function evaluarMinutosSegundos() {
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
}

function obtenerSaludo() {
    if (horas >= 18) {
        return "Buenas Noches!";
    } else if (horas >= 12) {
        return "Buenas tardes!"
    } else {
        return "Buenos días!"
    }
}

setInterval(ActualizarHora, 1000);