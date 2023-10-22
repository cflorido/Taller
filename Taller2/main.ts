import {series} from './data.js';
import {Serie} from './serie.js';



function agregarFilaATabla(serie: Serie) {
    const tabla = document.querySelector('#series-list');
  
    if (tabla) {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      
    fila.addEventListener('click', () => {
      mostrarCarta(serie)
    });

      tabla.appendChild(fila);
    }
  }
 series.forEach((serie) => {
    agregarFilaATabla(serie);
  });

  function promedio(series:Serie[]): number{
    if(series.length==0){
        return 0;
    }

    const suma = series.reduce((total,serie) => total+serie.seasons,0);
    const promedio = suma/series.length;
    return promedio;
  }

  const prom = promedio(series);
  const promedioElement = document.getElementById("promedio");
  if (promedioElement){
    promedioElement.textContent = prom.toFixed(2);
  }

  function mostrarCarta(serie: Serie) {
    const carta = document.querySelector('#carta') as HTMLDivElement;
    if (carta) {
      carta.innerHTML = `
        <div class="card mx-auto" style="width: 490px; border: 2px solid #ccc; text-align: center;">
          <img src="${serie.imageUrl}" class="card-img-top" alt="Card Image" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.website}" target="_blank" class="btn btn-primary">WebSite Link</a>
          </div>
        </div>
      `;
  
      carta.style.display = 'block';
    }
  }
  


  