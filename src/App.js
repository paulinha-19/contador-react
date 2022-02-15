import React, { Component } from "react";
import './App.css';

export default class App extends Component {
  state = {
    counter: 0
  };
  mensagemNumMax = () => {
    if (this.state.counter === 10) {
      alert("Número máximo");
    }
  };
  mensagemNumMin = () => {
    if (this.state.counter === 0) {
      alert("Número minimo");
    }
  };
  add = () => {
    if (this.state.counter < 10) {
      this.setState(({ counter }) => {
        return { counter: counter + 1 };
      });
    }
    this.mensagemNumMax();
  };
  remove = () => {
    if (this.state.counter > 0) {
      this.setState(({ counter }) => {
        return { counter: counter - 1 };
      });
    }
    this.mensagemNumMin();
  };
  zerar = () => {
    this.setState({
      counter: 0
    });
    this.mensagemNumMin();
  };
  render() {
    return (
      <div className="counter">
        <h1>Contador</h1>
        <span className="counter__output">{this.state.counter}</span>
        <div className="btn__container wrap">
          <button className="button__somar hover__button" onClick={this.add}>
            +
          </button>
          <button className="button__sub hover__button" onClick={this.remove}>
            -
          </button>
          <button className="button__zerar hover__button" onClick={this.zerar}>
            Zerar
          </button>
        </div>
      </div>
    );
  }
}