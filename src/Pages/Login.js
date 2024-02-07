import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Routes } from '../Constants/Routes';
import swal from 'sweetalert';


import '../css/Login.css';
import { Images } from '../Constants/Images';
import { useForm } from 'react-hook-form';

const baseUrl = "https://catalogodigitalcolgate.col1.co/api/login";
// const baseUrl = "http://localhost:3050/login";
const cookies = new Cookies();

const Login = () => {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      cedulas: ''
    }
  })


  const onSubmit = async (data) => {
    await axios.get(baseUrl, { params: { cedulas: data.cedulas } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        console.log(response);
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
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  useEffect(() => {
    if (cookies.get('cedulas')) {
      window.location.href = `${Routes.Home}`;
    }
  }, []);

  return (
    <div className="Login">
      <h1>Catálogo Digital</h1>
      <p>Le damos una calurosa bienvenida a nuestro nuevo <b>Catálogo Digital de Colgate</b>. <br /> Para poder ingresar, digite su cédula en el siguiente recuadro:</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('cedulas', { required: "Este campo es obligatorio" })} type="number" placeholder="Cédula" className="form-control me-2 inputLogin" />
        <button type="submit" className="btn btnLogin">Ingresar</button>
      </form>
      <hr />
      <div className="llamar"><p>Si su cédula no está inscrita, para registrarse llame a: </p>
        <img src={Images.LineaNacional} alt="" /></div>
    </div>
  );
};

export default Login;