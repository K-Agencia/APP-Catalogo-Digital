import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Routes } from '../Constants/Routes';
import '../css/Login.css';

const baseUrl = "http://localhost:3001/odontologos";
const cookies = new Cookies();

class Login extends Component {

  state = {
    form: {
      cedula: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  iniciarSesion = async () => {
    await axios.get(baseUrl, { params: { cedula: this.state.form.cedula } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('id', respuesta.id, { path: `/` });
          cookies.set('cedula', respuesta.cedula, { path: `/` });
          cookies.set('nombre', respuesta.nombre, { path: `/` });
          alert(`Bienvenido ${respuesta.nombre}`);
          window.location.href = `.${Routes.Home}`;
        } else {
          alert('El usuario o la contraseña no son correctos');
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  componentDidMount() {
    if (cookies.get('nombre')) {
      window.location.href = `${Routes.Home}`;
    }
  }

  render() {
    return (
      <div className="Login">
        <h1>Catálogo Digital</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nostrum officiis quo mollitia aut.</p>
        <div className="form">
          <input type="text" placeholder="Cédula" name="cedula" className="form-control me-2 inputLogin" onChange={this.handleChange} />
          <button type="submit" className="btn" onClick={() => this.iniciarSesion()}>Ingresar</button>
        </div>
      </div>
    );
  }

};

export default Login;