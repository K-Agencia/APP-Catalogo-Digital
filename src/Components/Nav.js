import React, { Component } from 'react';
import { Images } from "../Constants/Images";
import { Routes } from '../Constants/Routes';
import SearchBar from './SearchBar';
import Cookies from 'universal-cookie'; 
import "../css/Nav.css";

const cookies = new Cookies();

class Nav extends Component {

  state = {
    visible: false,
    user: false
  }

  cerrarSesion = () => {
    cookies.set('id', "", { path: `/` });
    cookies.set('cedulas', "", { path: `/` });
    cookies.set('nombres', "", { path: `/` });
    window.location.href = `${Routes.Login}`;
  }

  menu = () => {
    if (this.state.visible === true) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }

  componentDidMount() {
    if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
      this.setState({ user: false });
    } else {
      this.setState({ user: true });
    }
  }

  render() {
    // console.log(window.screen.width);
    let Name = cookies.get('nombres');
    let LastName = cookies.get('apellidos');
    let Letters = ""; //`${Name.charAt(0).toUpperCase()}${LastName.charAt(0).toUpperCase()}`;

    if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
      Letters = "NN";
    } else {
      Letters = `${Name.charAt(0).toUpperCase()}${LastName.charAt(0).toUpperCase()}`;
    }

    let cel = window.screen.width;

    // console.log(window.screen.width);
    // console.log('nombres: ' + cookies.get('nombres'));

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
                <li className="nav-item prep">
                  <a className="nav-link" target="blank" href={Routes.Prescripcion}>Prescripciones Odontológicas</a>
                </li>
              </ul>

              <div className={this.state.user === true && cel < 480 ? "navCel" : "navNoVisible"}>
                <SearchBar></SearchBar>
                <hr />
                <p className="nameLogin">{`${Name} ${LastName}`}</p>
                <button className="btnCS" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
              </div>

            </div>

            <button className={this.state.user === true && cel > 480 ? "btnUser btn" : "navNoVisible"} onClick={() => this.menu()}>{Letters}</button>

            <div className={this.state.visible === true && cel > 480 ? "navVisible dis" : "navNoVisible"}>
              <p className="nameLogin">{`${Name} ${LastName}`}</p>
              <SearchBar></SearchBar>
              <button className="btnCS" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
            </div>

          </div>
          <h3 className="navTitle">Cátalogo Digital</h3>
        </nav>

      </div>
    );
  }
};

export default Nav;