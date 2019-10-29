import React, { Component} from 'react';
import MenuMedico from './MenuMedico';
class Pagina2 extends React.Component {
    
    render() {
      return(
        <div>
            <MenuMedico />
            <img src="medico.jpg" width="100%"/>
        </div>
      );
      
    }
  }
  export default Pagina2;