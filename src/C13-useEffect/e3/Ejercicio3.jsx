import { useState } from 'react'
import Nombre from './Nombre'

function Ejercicio3() {
  const [nombre, setNombre] = useState('')
  const [submitedValue, setSubmitedValue] = useState('')

  return (
    <>
      <label>Ingrese su nombre: </label>
      <input
        type='text'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={() => setSubmitedValue(nombre)}>Submit</button>
      <Nombre value={submitedValue} />
    </>
  )
}
export default Ejercicio3
