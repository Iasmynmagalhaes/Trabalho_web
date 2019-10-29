import React, { Component} from 'react';
import './App.css';
import MenuPrincipal from './MenuPrincipal';

class Login extends React.Component {
    render() {
      return(
        <div>
            <MenuPrincipal/>
            <div class="wrapper fadeInDown">
                    <div id="formContent">
                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
                        <input type="pwd" id="password" class="fadeIn third" name="login" placeholder="password"/>
                        <input type="submit" class="fadeIn fourth" value="Log In"/>
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>  
                </div>
            </div>
            </div>
      );
      
    }
  }
  export default Login;