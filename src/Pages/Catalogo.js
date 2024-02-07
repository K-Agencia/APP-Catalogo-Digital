import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';
import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios, LineaInfantil } from "../Constants/Productos";
import { Routes } from '../Constants/Routes';
import Cookies from 'universal-cookie';
import "../css/Catalogo.css";
import { Images } from '../Constants/Images';
import ButtonCC from '../Components/ButtonCC';
import ReactGA from 'react-ga4';

const getArray = (title) => {
    if (title === "Uso Consultorio") { return UsoConsultorio }
    else if (title === "Línea Especializada") { return LineaEspecializada }
    else if (title === "Cepillos Especializados") { return CepillosEspecializados }
    else if (title === "Línea Sensibilidad") { return LineaSensibilidad }
    else if (title === "Multibeneficios") { return Multibeneficios }
    else if (title === "Línea Infantil") { return LineaInfantil }
}

const cookies = new Cookies();

const Catalogo = ({ title }) => {

    window.document.title = `${title} - Catálogo Digital`;
    const name = title;
    const data = getArray(name);
    const [estadoModal, setEstadoModal] = useState(false);
    const [valueIndex, setValueIndex] = useState(null);

    const changeModal = (id) => {
        setEstadoModal(false);

        if (id !== valueIndex) {
            setValueIndex(id);
            setEstadoModal(true);

            let desplazamiento;

            if (window.screen.width < 480) {
                desplazamiento = window.scrollY + 100;
            } else {
                desplazamiento = window.scrollY + 290;
            }

            setTimeout(() => {
                window.scroll({
                    top: desplazamiento,
                    behavior: 'smooth'
                });
            }, 1);

        } else {
            setValueIndex(null);
        }
    }

    const ClickHandler = ({ domicilio, nombre }) => {

        ReactGA.event({
            category: 'Botones de acción',
            action: `${domicilio}`,
            label: `${nombre}`
        });

    }

    useEffect(() => {
        if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
            window.location.href = `${Routes.Login}`;
        }
    })

    return (
        <div className="Catalogo" >
            <h1 className="titleCatalogo">{name}</h1>
            {data.map((prod, index) => (
                <div key={index} id={index} className="productoCatalogo">
                    <img className="imgCatalogo" src={prod.img} alt="" />
                    <div className="buttonsCatalogo">
                        <ButtonCC ctgTitle={prod._id} name={prod.name} url={prod.cart} icon="cart" changeModal={changeModal} idP={index} valor={prod.carritoCompra.length}></ButtonCC>
                        <Button ctgTitle={name} name={prod.name} url={prod.whatsapp} icon="whatsapp"></Button>
                        {/* <button onClick={() => changeModal(index)}>click aqui</button> */}
                    </div>

                    <div className={estadoModal === true && valueIndex === index ? "logosDomicilios" : "inactive"}>
                        <h2>¿Donde deseas comprar hoy?</h2>
                        <div className='divList'>
                            {prod.carritoCompra.map((app, index) => (
                                <div key={index} className={prod.carritoCompra.length > 1 ? "listDomiciliosD" : "listDomicilios"}>
                                    <h3 className={prod.carritoCompra.length > 1 ? "" : "inactive"}> <b>{app.name}</b> </h3>
                                    <div>
                                        <a href={app.laRebaja} target="blank" className={app.laRebaja === "" ? "inactive" : ""} onClick={() => {
                                            let domicilio = "La Rebaja";
                                            let nombre = app.name || prod.name;
                                            ClickHandler({domicilio, nombre});
                                        }}>
                                            <img src={Images.logo_laRebaja} alt="" />
                                        </a>
                                        <a href={app.loPido} target="blank" className={app.loPido === "" ? "inactive" : ""} onClick={() => {
                                            let domicilio = "LoPido.com";
                                            let nombre = app.name || prod.name;
                                            ClickHandler({domicilio, nombre});
                                        }}>
                                            <img src={Images.logo_loPido} alt="" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Catalogo;