import React, {Component} from 'react';
import Menu from './MenuPrincipal'; 
class Home extends React.Component {
    render() {
      return(
        <div>
            <Menu />
            <img src="saude02.jpg" width="100%"/>
        </div>
      ); 
    }
  }
  export default Home;