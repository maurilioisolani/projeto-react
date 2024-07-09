import React, {useState} from "react";
import './input.css'

export default props => {
    const  [valor, setValor] = useState('inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            </div>
            <input value = {valor} onChange={quandoMudar}/>
            <input value = {valor} readOnly/>
            <input value = {undefined}/>
        </div>
    )
}