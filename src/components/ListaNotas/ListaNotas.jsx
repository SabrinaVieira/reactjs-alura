import React, { Component } from 'react';
import CardNota from '../CardNota'
import "./ListaNotas.css"

class ListaNotas extends Component{

    render(){
    return (
        <ul className="lista-notas">
          {Array.of("Trabalho","Trabalho","Estudo").map((categoria, index)=> {
          return (
            <li key={index} className="lista-notas_item">
              <div className="lista-notas_">{categoria}</div>
              <CardNota />
            </li>
            )
          })}
        </ul>
        )
    }

}

export default ListaNotas;