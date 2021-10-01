import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Routes } from '../Constants/Routes';
import swal from 'sweetalert';

import '../css/Login.css';

const baseUrl = "https://catalogodigital.kagencia.com/db_catalogo/";
// const baseUrl = "http://localhost/db_catalogo/";
const cookies = new Cookies();

class Login extends Component {

  state = {
    form: {
      cedulas: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    // console.log(this.state.form);
  }

  iniciarSesion = async () => {
    await axios.get(baseUrl, { params: { cedulas: this.state.form.cedulas } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        // console.log(response);
        let count = Object.keys(response).length;
        if (count >= 7) {
          var respuesta = response;
          cookies.set('id', respuesta.id, { path: `/` });
          cookies.set('cedulas', respuesta.cedulas, { path: `/` });
          cookies.set('nombres', respuesta.nombres, { path: `/` });
          cookies.set('apellidos', respuesta.apellidos, { path: `/` });
          window.location.href = `.${Routes.Home}`;
        } else {
          swal("¡Incorrecto!", "La cédula inscrita es incorrecta, verifica de nuevo", "error");
          // alert("Cedula Incorrecta");
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  componentDidMount() {
    if (cookies.get('cedulas')) {
      window.location.href = `${Routes.Home}`;
    }
  }

  render() {
    return (
      <div className="Login">
        <h1>Catálogo Digital</h1>
        <p>Le damos una calurosa bienvenida a nuestro nuevo <b>Catálogo Digital de Colgate</b>. <br /> Para poder ingresar, digite su cédula en el siguiente recuadro:</p>
        <div className="form">
          <input type="text" placeholder="Cédula" name="cedulas" className="form-control me-2 inputLogin" onChange={this.handleChange} />
          <button type="submit" className="btn btnLogin" onClick={() => this.iniciarSesion()}>Ingresar</button>
        </div>
      </div>
    );
  }

};

export default Login;