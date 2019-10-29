import React, { Component} from 'react';
import MenuPaciente from './MenuPaciente';

class Pagina3 extends React.Component {
    render(){
        return(
            <div>
            <MenuPaciente />  
            <img src="paciente.jpg" width="100%"/>   
        </div>
        );
    }
}
export default Pagina3;