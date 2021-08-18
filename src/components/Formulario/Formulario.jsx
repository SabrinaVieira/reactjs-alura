import React, { Component }  from 'react'
import "./Formulario.css"
 
export default class Formulario extends Component{

    handleMudancaTitulo(evento){
        console.log(evento.target.value)
    }

    render(){
        return(

        <form className="form-cadastro">
            <input className="form-cadastro_input" type="text" placeholder="Título" onChange={this.handleMudancaTitulo} />
            <textarea className="form-cadastro_input" rows={15} placeholder="Escreva sua nota..." />
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
        )
    } 
}