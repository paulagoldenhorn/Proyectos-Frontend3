import { useState } from 'react'
import Pedido from './Pedido'

function EjercicioPG() {
  const [montarPedido, setMontarPedido] = useState(true)

  function handleOnCancel() {
    console.log('Su pedido ha sido cancelado con éxito')
    setMontarPedido(false)
  }
  function handleOnOrder() {
    console.log('Su pedido ha sido ordenado con éxito')
    setMontarPedido(true)
  }

  return (
    <>
      {montarPedido ? (
        <>
          <Pedido handleMount={setMontarPedido} />
          <button onClick={handleOnCancel}>Cancelar pedido</button>
        </>
      ) : (
        <button onClick={handleOnOrder}>Ordenar pedido</button>
      )}
    </>
  )
}
export default EjercicioPG
