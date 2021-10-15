function Paginacion(props) {
  //Función flecha para crear los links de las páginas:
  const getPaginas = () => {
    //Array que va a tener los links.
    const paginas = [];
    //Bucle según la cantidad total de páginas:
    for (let i = 0; i < props.total; i++) {
      //Numero de pagina real:
      let pagina = i + 1;
      //En cada bucle, se pushea un elemento de tipo link.
      //Cada link tiene la propiedad de llama a la función onChange cuando se le hace click.
      //Se usa un if ternario para verificar si el link corresponde a la página actual:
      paginas.push(
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }
    //Se devuelve el array con los links
    return paginas;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Página {props.pagina} de {props.total}:
        </span>
        {/* Esto llama a la función que devuelve los links de las páginas y lo muestra: */}
        {getPaginas()}
      </div>
    </div>
  );
}
export default Paginacion;