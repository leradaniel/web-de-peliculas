import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import PeliculasJson from "./peliculas.json";

function App() {
  let peliculas = PeliculasJson;

  return (
    <PageWrapper>
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
