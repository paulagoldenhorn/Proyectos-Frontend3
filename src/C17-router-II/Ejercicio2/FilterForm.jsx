import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


function FilterForm(props) {
  const [minPlayedTime, setMinPlayedTime] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  function handleSubmit(event) {
    event.preventDefault()
    setSearchParams({ genre: selectedGenre, minPlayedTime: minPlayedTime })
  }

  return (
    <form onSubmit={handleSubmit} style={{margin: '15px', backgroundColor: 'orange', color: 'black', width: '250px'}}>
      <h3>BUSCAR JUEGOS</h3>
      <h4>Genero: </h4>
      <select name='genre' onChange={(e) => setSelectedGenre(e.target.value)}>
        <option>Select</option>
        <option value='Roguelike'>Roguelike</option>
        <option value='Platformer'>Platformer</option>
        <option value='Action'>Action</option>
        <option value='Adventure'>Adventure</option>
        <option value='Puzzles'>Puzzles</option>
        <option value='Metroidvania'>Metroidvania</option>
        <option value='Simulation'>Simulation</option>
        <option value='Board'>Board</option>
        <option value='Precision'>Precision</option>
      </select>
      <br />
      <h4>Min. tiempo jugado: </h4>
      <input
        name='minPlayedTime'
        type='text'
        onChange={(e) => setMinPlayedTime(e.target.value)}
      />
      <br />
      <button type='submit'>Buscar</button>
      {props.onFoundedElementsQty ? <h3>Total de elementos encontrados: <span style={{color: 'blue'}}>{props.onFoundedElementsQty}</span></h3> : null}
    </form>
  )
}
export default FilterForm
