import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useState } from "react";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const CANTIDAD_POR_PAGINA = 6;

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
  
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * CANTIDAD_POR_PAGINA,
      paginaActual * CANTIDAD_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    return Math.ceil(peliculas.length / CANTIDAD_POR_PAGINA);
  };

  //cargarPeliculas();
  

  return (
    <PageWrapper>
      <button onClick={buscarPeliculas}>Prueba</button>
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
