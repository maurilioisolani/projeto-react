import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho texto="Gabriel" numero = {21} bool ={true}></DiretaFilho>
            <DiretaFilho texto="Marcelo" numero = {24} bool ={false}></DiretaFilho>
        </div>
    )
}