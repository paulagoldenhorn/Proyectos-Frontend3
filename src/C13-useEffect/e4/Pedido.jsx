import { useEffect, useState } from 'react'

function Pedido(props) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    console.log('EJERCICIO 4')
    console.log('procesando pedido')

    const timer = setTimeout(() => {
      setIsConfirmed(true)
      console.log('pedido confirmado')
    }, 2000)

    return () => {
      clearTimeout(timer)
      console.log('pedido cancelado')
    }
  }, [props.cancelar])
  return (
    <>
      {!isConfirmed ? (
        <p>Procesando pedido...</p>
      ) : (
        <p style={{ color: 'lightGreen' }}>Pedido confirmado!</p>
      )}
      <button
        onClick={() => {
          props.cancelar()
        }}
      >
        Cancelar
      </button>
    </>
  )
}
export default Pedido
