import React, { Component } from "react";
import Formulario from "components/Formulario";
import ListaNotas from "components/ListaNotas";
import "assets/reset.css";
import "assets/index.css";
import "assets/App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <section className="conteudo">
          <Formulario />
          <ListaNotas />
        </section>
      </div>
    );
  }
}
