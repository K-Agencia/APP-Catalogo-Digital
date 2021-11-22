import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Catalogo from '../Pages/Catalogo';
import ReactGA from 'react-ga';
import { Routes } from '../Constants/Routes';
// import Login from '../Pages/Login';
import Admin from '../Pages/Admin';

const Routers = () => {

    useEffect(() => {
        ReactGA.initialize('UA-204757348-2');
        // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    
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
                    <Route exact path={Routes.LineaInfantil} component={() => <Catalogo title="Línea Infantil"></Catalogo>} />
                    {/* <Route exact path={Routes.Login} component={() => <Login></Login>} /> */}
                    <Route exact path="/Adimin" component={() => <Admin></Admin>} />
                </Switch>
            </Router>
        </div>

    );
};

export default Routers;