export default function ComParametro(props){
    const notaInt = Math.random(props.nota) * 10
    const status = notaInt >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno} </strong> 
            tem nota 
            <strong> {notaInt} </strong>
            e foi
            <strong> {status} </strong>
            </p>
        </div>
    )
}