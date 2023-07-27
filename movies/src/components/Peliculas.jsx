function peliculas() {

  let pagina = 1;

  const btnAnterior = (e) => {
    if(pagina > 1){
      pagina--;
      cargarPeliculas();
    }
  }

  const btnSiguiente = (e) => {
    if(pagina < 1000){
      pagina++;
      cargarPeliculas();
    }
  }

  const cargarPeliculas = async () => {
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=13e2f7361f0d359e0e3ebd8cffe5b5e2&language=es-MX&page=${pagina}`);
      console.log(respuesta);
      if(respuesta.status === 200){
        const datos = await respuesta.json();
        console.log(datos);

        let peliculas = "";
        datos.results.forEach((pelicula) => {
          peliculas += `
            <div class="pelicula">
              <img class= "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="">
              <h3 class="title">${pelicula.title}</h3>
              <p class="overview">${pelicula.overview}</p>
            </div>`;
        });

        document.getElementById("contenedor").innerHTML = peliculas;
      }

      else if(respuesta.status === 401){console.log("Key incorrecta")}
      else if(respuesta.status === 404){console.log("No disponible")}
      else{console.log("Algo salio mal")}

    } catch (error) {
      console.log(error);
    }
  }

  cargarPeliculas();

  return (
        <div className="export">
            <h1>Estas son las peliculas</h1>
            <div className="contenedor" id="contenedor"></div>
            <div className="paginado">
              <button onClick={btnAnterior}>Anterior</button>
              <button onClick={btnSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}

export default peliculas;