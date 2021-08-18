import React, { Component }  from 'react'
import "./Formulario.css"
 
export default class Formulario extends Component{
    constructor(props){
        super (props);
        this.titulo = "";//titulo vai ser o atributo da classe
        this.texto ="";
    }
//o uso do this quer dizer que estou fazendo referencia/usando um atributo ou metodo de uma instancia
    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value //toda vez que o render for chamar, vou add o valor
    }
    
    _handleMudancaTexto (evento){
        this.texto = evento.target.value
    }

    _CriarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);  
    }

    render(){

        return(
        <form className="form-cadastro" onSubmit={this._CriarNota.bind(this)}>
            <input className="form-cadastro_input" type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
            <textarea className="form-cadastro_input" rows={15} placeholder="Escreva sua nota..." onClick={this._handleMudancaTexto.bind(this)} />
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
        )
    } 
}