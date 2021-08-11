import React from 'react';
import { Images } from "../Constants/Images";
import { Routes } from '../Constants/Routes';
import SearchBar from './SearchBar';
import "../css/Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <a className="navbar-brand" href={Routes.Home}>
            <img className="imgNav" src={Images.Logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href={Routes.UsoConsultorio}>Uso Consultorio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Routes.LineaEspecializada}>Línea Especializada</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Routes.CepillosEspecializados}>Cepillos Especializados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Routes.LineaSensibilidad}>Línea Sensibilidad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Routes.Multibeneficios}>Multibeneficios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={Routes.LineaInfantil}>Línea Infantil</a>
              </li>
            </ul>
            
            {/* <form className="d-flex"> */}
              <SearchBar></SearchBar>
              {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
            {/* </form> */}
          </div>
        </div>
        <h3 className="navTitle">Cátalogo Digital</h3>
      </nav>

    </div>
  );
};

export default Nav;