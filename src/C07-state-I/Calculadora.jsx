import { useState } from 'react'

function Calculadora(props) {
  const [resultado, setResultado] = useState(0)

  function handleOnEqual() {
    props.onEqual(resultado)
  }

  return (
    <>
      <h3>{resultado}</h3>
      <button onClick={() => setResultado(resultado + props.amount)}>+</button>
      <button onClick={() => setResultado(resultado - props.amount)}>-</button>
      <button onClick={() => setResultado(0)}>reset</button>
      <button onClick={handleOnEqual}>=</button>
    </>
  )
}

export default Calculadora
