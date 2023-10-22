import { series } from './data.js';
function agregarFilaATabla(serie) {
    const tabla = document.querySelector('#series-list');
    if (tabla) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
        tabla.appendChild(fila);
    }
}
series.forEach((serie) => {
    agregarFilaATabla(serie);
});
function promedio(series) {
    if (series.length == 0) {
        return 0;
    }
    const suma = series.reduce((total, serie) => total + serie.seasons, 0);
    const promedio = suma / series.length;
    return promedio;
}
const prom = promedio(series);
const promedioElement = document.getElementById("promedio");
if (promedioElement) {
    promedioElement.textContent = prom.toFixed(2);
}
