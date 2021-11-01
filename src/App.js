import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import PeliculasJson from "./peliculas.json";
import { useState } from "react";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const CANTIDAD_POR_PAGINA = 6;

  let peliculas = PeliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * CANTIDAD_POR_PAGINA,
      paginaActual * CANTIDAD_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    return Math.ceil(PeliculasJson.length / CANTIDAD_POR_PAGINA);
    //return peliculas.length / CANTIDAD_POR_PAGINA;
  };

  cargarPeliculas();

  return (
    <PageWrapper>
      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => setPaginaActual(pagina)}
      />

      {peliculas.map((pelicula) => {
        return (
          <Pelicula
            img={pelicula.img}
            titulo={pelicula.titulo}
            puntaje={pelicula.puntaje}
            duracion={pelicula.duracion}
            fecha={pelicula.fecha}
            director={pelicula.director}
            actores={pelicula.actores}
            clasificacion={pelicula.clasificacion}
            descripcion={pelicula.descripcion}
          ></Pelicula>
        );
      })}
    </PageWrapper>
  );
}

export default App;
