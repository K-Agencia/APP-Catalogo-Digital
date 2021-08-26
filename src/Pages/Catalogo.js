import React, { Component } from 'react';
import Button from '../Components/Button';
import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios, LineaInfantil } from "../Constants/Productos";
import { Routes } from '../Constants/Routes'; 
import Cookies from 'universal-cookie';
import "../css/Catalogo.css";

const getArray = (title) => {
    if (title === "Uso Consultorio") { return UsoConsultorio }
    else if (title === "Línea Especializada") { return LineaEspecializada }
    else if (title === "Cepillos Especializados") { return CepillosEspecializados }
    else if (title === "Línea Sensibilidad") { return LineaSensibilidad }
    else if (title === "Multibeneficios") { return Multibeneficios }
    else if (title === "Línea Infantil") { return LineaInfantil }
}

const cookies = new Cookies();

class Catalogo extends Component {

    state = {
        title: this.props.title
    };

    componentDidMount() {
        if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
            window.location.href = `${Routes.Login}`;
        }
    }

    render() {
        window.document.title = `${this.state.title} - Catálogo Digital`;
        // console.log(window.screen.width, window.screen.height);
        const name = this.state.title;
        const data = getArray(name);        

        return (
            <div className="Catalogo" >
                <h1 className="titleCatalogo">{name}</h1>
                {data.map((prod, index) => (
                    <div key={index} id={index}>
                        <img className="imgCatalogo" src={prod.img} alt="" />
                        <div className="buttonsCatalogo">
                            <Button ctgTitle={prod._id} name={prod.name} url={prod.cart} icon="cart"></Button>
                            <Button ctgTitle={name} name={prod.name} url={prod.whatsapp} icon="whatsapp"></Button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

export default Catalogo;