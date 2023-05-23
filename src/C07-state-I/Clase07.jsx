import { useState } from 'react'
import Calculadora from './Calculadora'
import Lista from '../C05-estilos/Lista/Lista.jsx'
import Item from '../C05-estilos/Item/Item.jsx'

function Clase07() {
  const [sum, setSum] = useState(0)

  function onEqual(resultado) {
    setSum(sum + resultado)
  }
  return (
    <>
      <h1>{sum}</h1>
      <Lista>
        <Item>
          <Calculadora amount={1} onEqual={onEqual}/>
        </Item>
        <Item>
          <Calculadora amount={5} onEqual={onEqual}/>
        </Item>
        <Item>
          <Calculadora amount={13} onEqual={onEqual}/>
        </Item>
      </Lista>
    </>
  )
}
export default Clase07
