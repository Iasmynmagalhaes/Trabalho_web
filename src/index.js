import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Pagina2 from './Medico';
import Pagina3 from './Paciente';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import InserirRelatorio from './InserirRelatorio';
import Cadastro from './Agendamento';
import Login from './Login';

ReactDOM.render(
<BrowserRouter>
<Switch>
            <Route path="/" exact={true} component={Home} /> 
            <Route path="/Pagina1" component={Home} />            
            <Route path="/Pagina2" component={Pagina2} />
            <Route path="/Pagina3" component={Pagina3} />
            <Route path="/InserirRelatorio" component={InserirRelatorio} />
            <Route path="/Agendamento" component={Cadastro} />
            <Route path="/Login" component={Login} />
        </Switch>
</BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
