import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Catalogo from '../Pages/Catalogo';
import { Routes } from '../Constants/Routes';

const Routers = () => {
    return (
        <div className="content">
            <Router>
                <Switch>
                    <Route exact path={Routes.Home} component={() => <LandingPage></LandingPage>} />
                    <Route exact path={Routes.UsoConsultorio} component={() => <Catalogo title="Uso Consultorio"></Catalogo>} />
                    <Route exact path={Routes.LineaEspecializada} component={() => <Catalogo title="Línea Especializada"></Catalogo>} />
                    <Route exact path={Routes.CepillosEspecializados} component={() => <Catalogo title="Cepillos Especializados"></Catalogo>} />
                    <Route exact path={Routes.LineaSensibilidad} component={() => <Catalogo title="Línea Sensibilidad"></Catalogo>} />
                    <Route exact path={Routes.Multibeneficios} component={() => <Catalogo title="Multibeneficios"></Catalogo>} />
                </Switch>
            </Router>
        </div>

    );
};

export default Routers;