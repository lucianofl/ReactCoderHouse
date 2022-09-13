import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Flucciano</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link " href="">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">QUIENES SOMOS?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">PREGUNTAS FRECUENTES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">CONTACTANOS</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </div>
 </nav>
    )
}