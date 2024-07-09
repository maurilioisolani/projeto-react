import React from "react";

export default props => {

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                e=> cb('João', 53, true)              
            }>
                Fornecer informações
            </button>
        </div>   
    )
}