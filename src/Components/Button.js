import React from 'react';
import { Images } from "../Constants/Images";
import "../css/Buttons.css"

const Button = ({ url, icon }) => {
    return (
        <div>
            <a href={url} className="url">
                <img className="imgButton" src={icon === "cart" ? `${Images.buttonCart}` : `${Images.buttonWhatsapp}`} alt="" />
                <p className="textButton">{icon === "cart" ? `Comprar Ahora` : `Contacte a su asesor`}</p>
            </a>
        </div>
    );
};

export default Button;