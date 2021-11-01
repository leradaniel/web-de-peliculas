
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const CANTIDAD_POR_PAGINA = 6;

  useEffect(() => {
    buscarPeliculas();
  }, []);
  //Función asincrónica para consumir el archivo JSON
  const buscarPeliculas = async () => {
    let url = "https://api.jsonbin.io/b/618017739548541c29cbb4cf";
    //Await del fetch para esperar un resultado
    let respuesta = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await respuesta.json();
    setPeliculas(json);
  };

  const getTotalPaginas = () => {
    return Math.ceil(peliculas.length / CANTIDAD_POR_PAGINA);
  };

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * CANTIDAD_POR_PAGINA,
    paginaActual * CANTIDAD_POR_PAGINA
  );

  return (
    <PageWrapper>
      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => setPaginaActual(pagina)}
      />

      {peliculasPorPagina.map((pelicula) => {
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

export default ListadoPeliculas;
