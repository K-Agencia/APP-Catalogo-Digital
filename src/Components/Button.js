import React, { useState } from 'react';
import { Images } from "../Constants/Images";
import ReactGA from 'react-ga';
import "../css/Buttons.css";

const ClickHandler = (data) => {

    console.log(data.name, data.icon, data.ctgTitle);

    // ReactGA.event({
    //     category: 'Botones de acción',
    //     action: `Click en el botón de ${data.btnName}`,
    //     label: `Producto ${data.name}, Categoria ${data.title}`
    // });
}

const Button = ({ ctgTitle, name, url, icon }) => {

    // const [data, setData] = useState({
    //     name: name,
    //     btnName: icon,
    //     ctgTitle: ctgTitle
    // })

    return (
        <div>
            <button href={url} className={name === "Arte" ? "inactive" : "url"} onClick={ClickHandler( {name, icon, ctgTitle} )}>
                <img className="imgButton" src={icon === "cart" ? `${Images.buttonCart}` : `${Images.buttonWhatsapp}`} alt="" />
                <p className="textButton">{icon === "cart" ? `Comprar Ahora` : `Contacte a su asesor`}</p>
            </button>
        </div>
    );
};

export default Button;