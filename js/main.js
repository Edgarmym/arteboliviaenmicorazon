const fila = document.querySelectorAll('.contenedor-carousel');
const peliculas = document.querySelector('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetwidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetwidth;
});


// ? ------------paginacion --------
const numeroPaginas = math.ceil(peliculas.length / 5);
for (let i=0; i< numeroPaginas; i++){
    const indicador = document.createElement('button');
     if (i==0){
         indicador.classList.add(activo)
     }
       
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        Float32Array.scrollLeft = i 
     });

 
}