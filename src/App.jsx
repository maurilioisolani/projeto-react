import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragments'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import './App.css'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAluno from './components/Repetição/ListaAluno'
import TabelaProdutos from './components/Repetição/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

export default () => {
    return (
        <div className = "App">
            <h1>FUNDAMENTOS REACT</h1>
            
            <div className="Cards">
                <Card titulo = "Renderização condicional" color ="#ff6f69">
                    <ParOuImpar numero = {21}></ParOuImpar>
                    <UsuarioInfo usuario={{nome:'Fernando'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{}}></UsuarioInfo>
                </Card>
                <Card titulo = "TabelaProdutos" color ="#aaaaaa">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo = "Repetição" color ="#4a4e4d">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo = "Componente com filhos" color ="#f6cd61">
                    <Familia sobrenome ="Ferreira">
                    <FamiliaMembro nome = "Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome = "Silvia" ></FamiliaMembro>
                    <FamiliaMembro nome = "Gustavo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo = "Desafio Aleatório" color ="#080">
                    <Aleatorio min = {1} max = {60}></Aleatorio>
                </Card>

                <Card titulo = "Fragmento" color = "#2ab7ca">
                    <Fragmento></Fragmento>
                </Card>
        
                <Card titulo = "Com Parametro" color = "#f6abb6">
                    <ComParametro 
                        titulo = "Segundo componente"
                        aluno = "Pedro" 
                        nota = {9.3} />
                </Card>

                <Card titulo = "Primeiro Componente" color = "#03396c">
                        <Primeiro></Primeiro>
                </Card>
            </div> 
    </div>
    );
}