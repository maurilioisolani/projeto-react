import React from "react";

export default props => {

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const names = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];
    const randomName = () => names[Math.floor(Math.random() * names.length)];
    const gerarNerd = () => Math.random () > 0.5


    return (
        <div>
            <div>Filho</div>
            <button onClick={
                e=> props.quandoClicar (randomName(), gerarIdade(), gerarNerd())              
            }>
                Fornecer informações
            </button>
        </div>   
    )
}