import React from 'react';
import Button from '../Components/Button';
import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios, LineaInfantil } from "../Constants/Productos";
import "../css/Catalogo.css";

const getArray = (title) => {

    if (title === "Uso Consultorio") { return UsoConsultorio }
    else if (title === "Línea Especializada") { return LineaEspecializada }
    else if (title === "Cepillos Especializados") { return CepillosEspecializados }
    else if (title === "Línea Sensibilidad") { return LineaSensibilidad }
    else if (title === "Multibeneficios") { return Multibeneficios }
    else if (title === "Línea Infantil") { return LineaInfantil }
}

const Catalogo = ({ title }) => {

    window.document.title = `${title} - Catálogo Digital`;
    // console.log(window.screen.width, window.screen.height);
    const data = getArray(title);
    
    return (
        <div className="Catalogo" >
            <h1 className="titleCatalogo">{title}</h1>
            {data.map((prod, index) => (
                <div key={index} id={index}>
                    <img className="imgCatalogo" src={prod.img} alt="" />
                    <div className="buttonsCatalogo">
                        <Button ctgTitle={title} name={prod.name} url={prod.cart} icon="cart"></Button>
                        <Button ctgTitle={title} name={prod.name} url={prod.whatsapp} icon="whatsapp"></Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Catalogo;