import React, { Component} from 'react';
import MenuMedico from './MenuMedico';
class InserirRelatorio extends React.Component {
    
    render(){
        return(
            <div>
                <MenuMedico />
                <form class="form-horizontal">
                <fieldset>
                <div class="panel panel-primary">
                    <div class="panel-heading">Inserindo Relatório</div></div> 
                    <div class="panel-body"></div> 
                    <div class="form-group">
                        <label class="col-md-1 control-label" for="nome">Paciente <h11>*</h11></label>
                            <div class="col-md-2">
                                <input id="paciente" name="paciente" placeholder="" class="form-control input-md" required="" type="text"/>
                            </div>
                        <label class="col-md-2 control-label" for="data">Data da Consulta <h11>*</h11></label>  
                            <div class="col-md-2">
                                <input id="dtnasc" name="dtnasc" placeholder="DD/MM/AAAA" class="form-control input-md" required="" type="text" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"/>    
                            </div>
                    </div>
                    <div class="form-group">
				        <label class="control-label col-sm-1" for="relatorio">Relatório:</label>
				        <div class="col-sm-10">
					        <textarea class="form-control" rows="5" id="comment"></textarea>
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
export default InserirRelatorio;