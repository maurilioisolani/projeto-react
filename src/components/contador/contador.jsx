import React, {Component} from "react";
import './Contador.css'
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo = {this.state.passo} setPasso = {this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar = {this.desc}></Botoes>
                </div>
        )
    }
}

export default Contador