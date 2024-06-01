import Card from "./components/Card"
import swPosterImg from "./assets/starwars.jpg"
import emPosterImg from "./assets/empire.jpg"
import retPosterImg from "./assets/return.jpg"
import Button from "./components/Button"

function App() {
  return (
      <>
      <h1>Exercício 2</h1>
        <Button text="Ir ao blog" />
         <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} /> 
         <Card title="Pôster: Empire Strikes Back (1980)" posterImg={emPosterImg} />
         <Card title="Pôster: Return of Jedi (1983)" posterImg={retPosterImg} />
      </> // <-- abreviação da tag <fragment></fragment>
  )// "title= '' " utilização da props criada no arquivo index da pasta card
}

export default App