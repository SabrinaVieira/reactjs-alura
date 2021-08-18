import React, { Component } from "react";
import Formulario from "components/Formulario";
import ListaNotas from "components/ListaNotas";
import "assets/reset.css";
import "assets/index.css";
import "assets/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    this.notas.push(novaNota);
    console.log(this.notas.length);
  }

  render() {
    return (
      <div>
        <section className="conteudo">
          <Formulario criarnota={this.criarNota.bind(this)} />
          <ListaNotas notas={this.notas} />
        </section>
      </div>
    );
  }
}
