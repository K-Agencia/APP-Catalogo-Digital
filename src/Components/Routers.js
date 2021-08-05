import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Catalogo from '../Pages/Catalogo';
// import SearchBar from './SearchBar';
// import { UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios } from "../Constants/Productos"

const Routers = () => {
    return (
        <div className="content">
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <LandingPage></LandingPage>} />
                    <Route exact path="/UsoConsultorio" component={() => <Catalogo title="Uso Consultorio"></Catalogo>} />
                    <Route exact path="/LineaEspecializada" component={() => <Catalogo title="Línea Especializada"></Catalogo>} />
                    <Route exact path="/CepillosEspecializados" component={() => <Catalogo title="Cepillos Especializados"></Catalogo>} />
                    <Route exact path="/LineaSensibilidad" component={() => <Catalogo title="Línea Sensibilidad"></Catalogo>} />
                    <Route exact path="/Multibeneficios" component={() => <Catalogo title="Multibeneficios"></Catalogo>} />
                    {/* <Route exact path="/Search" component={() => <SearchBar placeholder="Search" data={UsoConsultorio, LineaEspecializada, CepillosEspecializados, LineaSensibilidad, Multibeneficios}></SearchBar>} /> */}
                    {/* <Route exact path="/trends" component={Trends} />
                    <Route path="*" component={Error} /> */}
                </Switch>
            </Router>
        </div>

    );
};

export default Routers;