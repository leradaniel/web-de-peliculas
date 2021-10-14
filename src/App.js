import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import "./App.css";

function App() {
  return (
    <PageWrapper>
      {/*Pelicula 1*/}
      <Pelicula
        img="images/uploads/mv1.jpg"
        titulo="Oblivion (2012)"
        puntaje="8.1"
        duracion="2h 21min"
        fecha="1 May 2015"
        director="Joss Whedon"
        actores="Robert Downey Jr., Chris Evans, Chris Hemsworth"
        calificacion="PG-13"
      >
        Earth's mightiest heroes must come together and learn to fight as a team
        if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...
      </Pelicula>

      {/*Pelicula 2*/}
      <Pelicula
        img="images/uploads/mv2.jpg"
        titulo="Into the wild (2014)"
        puntaje="7.8"
        duracion="2h 12min"
        fecha="3 May 2017"
        director="Anthony Russo, Joe Russo"
        actores="Chris Evans, Samuel L. Jackson, Scarlett Johansson"
        calificacion="PG-14"
      >
        As Steve Rogers struggles to embrace his role in the modern world, he
        teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to
        battle a new threat...
      </Pelicula>
    </PageWrapper>
  );
}

export default App;
