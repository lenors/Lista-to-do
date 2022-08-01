import React from "react";

export default class Main extends React.Component {
  state = {
    compras: "",
    listaDeCompras: []
  };

  handleChange = (event) => {
    this.setState({
      compras: event.target.value
    });
  };

  handleClick = () => {
    this.setState({
      listaDeCompras: this.state.listaDeCompras.concat({
        compras: this.state.compras
      })
    });
  };

  render() {
    return (
      <>
        <h1>Vamos fazer uma Lista de Tarefas</h1>
        <div>
          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Enviar</button>
          {this.state.listaDeCompras.map((item) => (
            <ul>
              <li>{item.compras}</li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
