import React from 'react';
import Button from '../Components/Button';
import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios } from "../Constants/Productos";
import "../css/Catalogo.css";
// var accents = require('remove-accents');

const getArray = (title) => {

    if (title === "Uso Consultorio") { return UsoConsultorio }
    else if (title === "Línea Especializada") { return LineaEspecializada }
    else if (title === "Cepillos Especializados") { return CepillosEspecializados }
    else if (title === "Línea Sensibilidad") { return LineaSensibilidad }
    else if (title === "Multibeneficios") { return Multibeneficios }
}

// const getPoint = (title) => {
//     let point = title.replace(/ /g, "");
//     accents.remove(point);    
//     return point;
// }

const Catalogo = ({ title }) => {
    window.document.title = `${title} - Catálogo Digital`;

    const data = getArray(title);
    // const point = getPoint(title);
    // console.log(point);

    return (
        <div className="Catalogo" >
            <h1 className="titleCatalogo">{title}</h1>
            {data.map((prod, index) => (
                <div key={index} id={index}>
                    <img className="imgCatalogo" src={prod.img} alt="" />
                    <div className="buttonsCatalogo">
                        <Button url={prod.cart} icon="cart"></Button>
                        <Button url={prod.whatsapp} icon="whatsapp"></Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Catalogo;