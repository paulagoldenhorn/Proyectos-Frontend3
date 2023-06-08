import { useState } from 'react'
import Pedido from './Pedido'

function Ejercicio4() {
  const [inProgress, setInProgress] = useState(false)
  return (
    <>
      {!inProgress ? (
        <button onClick={() => setInProgress(true)}>Hacer pedido</button>
      ) : (
        <Pedido cancelar={() => setInProgress(false)} />
      )}
    </>
  )
}
export default Ejercicio4
