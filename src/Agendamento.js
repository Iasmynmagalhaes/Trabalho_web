import React, { Component} from 'react';
import MenuPaciente from './MenuPaciente';
class Cadastro extends React.Component {
    
    render(){
        return(
            <div>
                <MenuPaciente/>
                <form class="form-horizontal">
                <fieldset>
                <div class="panel panel-primary">
                    <div class="panel-heading">Agendamento Consulta</div></div> 
                    <div class="panel-body"></div> 
                    <div class="form-group">
                        <div class="col-md-11 control-label">
                            <p class="help-block"><h11>*</h11> Campo Obrigatório </p>
                        </div>
                    </div> 
                    <div class="form-group">
                        
                        <label class="col-md-2 control-label" for="CEP">Especialista <h11>*</h11></label>
                            <div class="col-md-2">
                                <input id="especialista" name="especialista" placeholder="" class="form-control input-md" required="" type="text"/>
                            </div>
                        <label class="col-md-1 control-label" for="CEP">Médico <h11>*</h11></label>
                            <div class="col-md-2">
                                <input id="medico" name="medico" placeholder="" class="form-control input-md" required="" type="text"/>
                            </div>
                        <label class="col-md-2 control-label" for="Nome">Data da Consulta <h11>*</h11></label>  
                            <div class="col-md-2">
                                <input id="dtnasc" name="dtnasc" placeholder="DD/MM/AAAA" class="form-control input-md" required="" type="text" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"/>    
                            </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="Nome">Nome <h11>*</h11></label>  
                        <div class="col-md-8">
                            <input id="Nome" name="Nome" placeholder="" class="form-control input-md" required="" type="text"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="Nome">Nascimento <h11>*</h11></label>  
                        <div class="col-md-2">
                        <input id="dtnasc" name="dtnasc" placeholder="DD/MM/AAAA" class="form-control input-md" required="" type="text" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"/>    
                        </div>
                        <label class="col-md-1 control-label" for="radios">Sexo <h11>*</h11></label>
                            <div class="col-md-4"> 
                                <label required="" class="radio-inline" for="radios-0" >
                                <input name="sexo" id="sexo" value="feminino" type="radio" required/>
                                Feminino
                                </label> 
                                <label class="radio-inline" for="radios-1">
                                <input name="sexo" id="sexo" value="masculino" type="radio"/>
                                Masculino
                                </label>
                            </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="prependedtext">Telefone <h11>*</h11></label>
                        <div class="col-md-2">
                            <div class="input-group">
                                <input id="prependedtext" name="prependedtext" class="form-control" placeholder="XX XXXXX-XXXX" required="" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                OnKeyPress="formatar('## #####-####', this)"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-1 control-label" for="CEP">CEP <h11>*</h11></label>
                            <div class="col-md-2">
                                <input id="cep" name="cep" placeholder="##.###-###" class="form-control input-md" required="" type="text" maxlength="8" pattern="[0-9]+$"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="prependedtext">Endereço</label>
                        <div class="col-md-4">
                            <div class="input-group">
                                <input id="rua" name="rua" class="form-control" placeholder="Rua" required="" type="text"/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <input id="numero" name="numero" class="form-control" placeholder="Nº" required=""  type="text"/>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="input-group">
                                <input id="bairro" name="bairro" class="form-control" placeholder="Bairro" required="" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="Cadastrar"></label>
                        <div class="col-md-8">
                            <button id="Cadastrar" name="Cadastrar" class="btn btn-success" type="Submit">Cadastrar</button>
                            <button id="Cancelar" name="Cancelar" class="btn btn-danger" type="Reset">Cancelar</button>
                        </div>
                    </div>
                </fieldset>
                </form>
            </div>
        );
    }
}
export default Cadastro;