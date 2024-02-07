import React /*, { useState }*/ from 'react';
import { Images } from "../Constants/Images";
// import ReactGA from 'react-ga4';
import "../css/Buttons.css";

const ButtonCC = ({ ctgTitle, name, url, icon, changeModal, idP, valor }) => {

  // function ClickHandler(data) {

  //   changeModalChildren();
    // console.log(data.name, data.icon, data.ctgTitle);
    // let clickBtn = data.icon === "cart" ? "Comprar Ahora" : "Contacte a su asesor";

    // ReactGA.event({
    //   category: 'Botones de acción',
    //   action: `${clickBtn}`,
    //   label: `${data.name}`
    // });
    // target="blank" onClick={() => ClickHandler({ name, icon, ctgTitle })}
  // }

  const changeModalChildren = (id) => {
    // console.log(id)
    changeModal(id);
  }

  return (
    <div>
      <button id="btn" className={name === "Arte" || valor === 0 ? "inactive" : "url"} onClick={() => changeModalChildren(idP)}>
        <img className="imgButton" src={`${Images.buttonCart}`} alt="" />
        <p className="textButton">Comprar Ahora</p>
      </button>
    </div>
  );
};

export default ButtonCC;