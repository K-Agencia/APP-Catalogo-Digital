import React from 'react';
import { Images } from "../Constants/Images";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <a className="navbar-brand" href="/">  <img className="imgNav" src={Images.Logo} alt="" width="175" height="137" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="/UsoConsultorio">Uso Consultorio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/LineaEspecializada">Línea Especializada</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CepillosEspecializados">Cepillos Especializados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/LineaSensibilidad">Línea Sensibilidad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Multibeneficios">Multibeneficios</a>
              </li>              
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
        </div>
        <h3 className="navTitle">Cátalogo Digital</h3>
      </nav>
      
    </div>
  );
};

export default Nav;