import React, {Component} from 'react';

class Menu extends React.Component {
    render() {
      return(
        <div>
            <nav id="menu" class="navbar navbar-expand-lg navbar-light bg-light">
                <div div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href='/Pagina1'> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/Pagina2'> Medico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/Pagina3'> Paciente</a>
                        </li>
                    </ul>
                    <a type="submit" class="fadeIn fourth nav-link" href='/Login' value="Login">Login</a>
                </div>
            </nav>
        </div>
      );
      
    }
  }
  export default Menu;