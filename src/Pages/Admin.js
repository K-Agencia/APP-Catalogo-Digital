import React, { Component } from 'react';
import Login from './Login';

class Admin extends Component {
  
  render() {
    return (
      <div>
        <Login></Login>
        <h1>Catalogo Digital</h1>

        <table>
          <thead>
            <th>id</th>
            <th>Cédula</th>
            <th>Codigo Colagte</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Ciudad</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Cédula</td>
              <td>Codigo Colagte</td>
              <td>Nombre</td>
              <td>Apellidos</td>
              <td>Ciudad</td>
              <td>Editar</td>
              <td>Eliminar</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Admin;