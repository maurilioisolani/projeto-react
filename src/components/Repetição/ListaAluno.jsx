import React from "react"
import alunos from "../data/Alunos"

export default props => {
    const list = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        );
    });
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {list}
            </ul>
        </div>
    )
}