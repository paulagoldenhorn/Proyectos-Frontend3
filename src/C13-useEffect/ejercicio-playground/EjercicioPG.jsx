import { useEffect, useState } from 'react'

function EjercicioPG() {

    const [montarPedido, setMontarPedido] = useState(false)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setMontarPedido(true)
            console.log('EJERCICIO PG');
            console.log('Componente actualizado');
        }, 2000);
        return () => {
            clearTimeout(timer)
            console.log('Componente desmontado');
        }
    }, [trigger])

    function handleOnClick(){
        alert('Su pedido ha sido cancelado con éxito')
        setMontarPedido(false)
        setTrigger(true)
    }

    return (
    <>
      <h4>Su pedido: </h4>
      {montarPedido ? (
        <ul>
            <li>2 Pizza</li>
            <li>12 Empanadas</li>
            <li>3 Gaseosas</li>
        </ul>
      ) : undefined}
      
    <button onClick={handleOnClick}>Cancelar pedido</button>
    
    </>
  )
}
export default EjercicioPG
