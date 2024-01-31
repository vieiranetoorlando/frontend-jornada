import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {


  const [itens, setItens] = useState([])

  //Carregamento de dados da API (Backend)
  async function carregarDadosApi() {


   
    //Declarar a UTL da API
  const apiURL = 'https://rickandmortyapi.com/api/character/'
  

    //Preparar e executar a Requisição
  const response = await fetch(apiURL)


  //console.log(response)

  const body = await response.json()

  //console.log(body)

  // Extrair a propriedade results do body
  //Essa propiedade contém a lista de itens
  const results = body.results;

  //Atualizando o estado"itens" com os resultado da API
  setItens(results)

  }
// Chamando a função que carrega os dados da API
  carregarDadosApi()

  return (

    
    
    <>
    <div className="cards">
    {/* <Card item={item1} />
    <Card item={item2} />
    <Card item={item3} /> */}
    {itens.map((item, i) => <Card item={item} key={i} />)}
    </div>

    </>
  )
}

export default App