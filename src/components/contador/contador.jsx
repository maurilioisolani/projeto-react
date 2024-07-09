import React, {Component} from "react";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    desc = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPass}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.desc}>-</button>
            </div>
        )
    }
}

export default Contador