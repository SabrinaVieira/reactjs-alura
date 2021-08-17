import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaNotas from "./components/ListaNotas";

export default class App extends Component {
  render() {
    return (
      <div>
        <section>
          <Formulario />
          <ListaNotas />
        </section>
      </div>
    );
  }
}
