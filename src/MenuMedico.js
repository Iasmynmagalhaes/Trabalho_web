import React, {Component} from 'react';
class MenuMedico extends React.Component {
    state = {
        open: false
    };
    handleButtonClick = () => {
    this.setState(state => {
        return {
        open: !state.open
        };
    });
    };
    handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)){
        this.setState({
        open: false
        });
    }
    };
    render() {
      return(
        <div>
            <nav id="menu" class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">PSF</a>
                <div div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href='/Pagina1'> Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" onClick={this.handleButtonClick} href='#'> Relatório</a>
                            <div className={this.state.open ? "dropdown-menu show" : "dropdown-menu"}> 
                                <a class="dropdown-item" href="#">Consultar</a>
                                <a class="dropdown-item nav-link" href='/InserirRelatorio'>Inserir</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      );
      
    }
  }
  export default MenuMedico;