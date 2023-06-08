import { useState } from 'react'
import Activo from './Activo'

function Ejercicio2() {
  const [isActive, setIsActive] = useState(false)

  function toggleActive() {
    setIsActive(!isActive)
  }

  return (
    <>
      {!isActive ? (
        <button onClick={toggleActive}>Activar</button>
      ) : (
        <button onClick={toggleActive}>Desactivar</button>
      )}

      {isActive ? <Activo /> : undefined}
    </>
  )
}

export default Ejercicio2
