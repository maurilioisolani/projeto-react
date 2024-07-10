import React,{useState} from "react";
import './Mega.css'

export default props => {
    function gerarNumeroNaoContido (min, max, arrays) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return  arrays.includes(aleatorio) ?
                gerarNumeroNaoContido(min, max, arrays) :
                aleatorio
    }
    
    function gerarNumeros (qtde) {
        const numeros = Array(qtde)
                        .fill(0)
                        .reduce((nums) => {
                        const novoNumero = gerarNumeroNaoContido(1,60, nums)
                        console.log([...nums, novoNumero])
                        return [...nums, novoNumero]
                        },[])
    
                        .sort((n1,n2) => n1 -n2)
    
                        return numeros
    }
        const [numeros, setNumeros] = useState (Array(props.qtde || 6).fill(0))
        const [qtde, setQtde] = useState (props.qtde || 6)

            return (
                <div className="Mega">
                    <h2>Mega</h2>
                    <h3>{numeros.join(' ')}</h3>
                    <div>
                        <label>Qtde de Números </label>
                        <input type="number" value = {qtde}
                        onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                        }}></input>
                    </div>
                    <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                        Gerar Numeros
                    </button>
                </div>
    )   
}