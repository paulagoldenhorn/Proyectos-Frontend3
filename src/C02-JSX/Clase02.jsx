import '../App.css'
import Title from './Title.jsx'
import List from './List.jsx'

function darLike() { console.log("Like") }

function Clase02() {
  return (
    <>
      <h1>El Rey Leon</h1>
      <p>Tras la muerte de su padre, Simba vuelve a enfrentar a su malvado tío, Scar, y reclamar el trono de rey.</p>
      <button onClick={darLike}>Like</button>

      <Title title="Premios" />
      <List>
        <li>Oscar Award 2014</li>
        <li>Tony Award 2013</li>
        <li>Tony Award 2018</li>
      </List>
      <Title title="Reparto" />
      <List>
        <li>Simba</li>
        <li>Mufasa</li>
        <li>Nala</li>
      </List>
    </>
  )
}

export default Clase02
