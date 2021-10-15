import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import "./App.css";

function App() {
  let peliculas = [
    {
      img: "images/uploads/mv1.jpg",
      titulo: "Oblivion (2012)",
      puntaje: "8.1",
      duracion: "2h 21min",
      fecha: "1 May 2015",
      director: "Joss Whedon",
      actores: "Robert Downey Jr., Chris Evans, Chris Hemsworth",
      calificacion: "PG-13",
      descripcion:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
    },
    {
      img: "images/uploads/mv2.jpg",
      titulo: "Into the wild (2014)",
      puntaje: "7.8",
      duracion: "2h 12min",
      fecha: "3 May 2017",
      director: "Anthony Russo, Joe Russo",
      actores: "Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      calificacion: "PG-14",
      descripcion:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...",
    },
  ];

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
            calificacion={pelicula.calificacion}
            descripcion={pelicula.descripcion}
          ></Pelicula>
        );
      })}
    </PageWrapper>
  );
}

export default App;
