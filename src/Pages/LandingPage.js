import React from 'react';
import Slider from '../Components/Slider';
import {LadingPage_Slider1} from '../Constants/Images';
import { Routes } from '../Constants/Routes';
import "../css/LandingPage.css";

const LandingPage = () => {
    window.document.title = 'Home - Catálogo Digital';
    return (
        <div className="landingPage">
            {/* <Slider slider="1"></Slider> */}
            <img className="imglandingPage" src={LadingPage_Slider1.slider1} alt="" />
            <div className="container">
                <h2>Catálogo Digital</h2>
                <p>Seleccione la línea de interés, donde encontrará en detalle cada producto y opción de compra directa</p>
                <div className="links">
                    <a href={Routes.UsoConsultorio}>Uso Consultorio</a>
                    <a href={Routes.LineaEspecializada}>Linea Especializada</a>
                    <a href={Routes.CepillosEspecializados}>Cepillos Especializados</a>
                    <a href={Routes.LineaSensibilidad}>Linea Sensibilidad</a>
                    <a href={Routes.Multibeneficios}>Multibeneficios</a>
                </div>
                <div className="divSlider">
                    <Slider slider="2"></Slider>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;