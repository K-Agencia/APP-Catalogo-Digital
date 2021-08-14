import React /*, { useState }*/ from 'react';
import { Images } from "../Constants/Images";
import ReactGA from 'react-ga';
import "../css/Buttons.css";

function ClickHandler(data) {

  // console.log(data.name, data.icon, data.ctgTitle);
  let clickBtn = data.icon === "cart" ? "Comprar Ahora" : "Contacte a su asesor";

  ReactGA.event({
    category: 'Botones de acción',
    action: `${clickBtn}`,
    label: `${data.name}`
  });
}

const Button = ({ ctgTitle, name, url, icon }) => {

  return (
    <div>
      <a target="blank" href={url} id="btn" className={name === "Arte" ? "inactive" : "url"} onClick={() => ClickHandler({ name, icon, ctgTitle })}>
        <img className="imgButton" src={icon === "cart" ? `${Images.buttonCart}` : `${Images.buttonWhatsapp}`} alt="" />
        <p className="textButton">{icon === "cart" ? `Comprar Ahora` : `Contactar un asesor`}</p>
      </a>
    </div>
  );
};

export default Button;