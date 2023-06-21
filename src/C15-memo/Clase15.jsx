import { useMemo, useState } from 'react'
import Products from './Products'
import Books from './Books'

function Clase15() {
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [thirdInput, setThirdInput] = useState('')

  const suma = useMemo(() => {
    return parseInt(firstInput) + parseInt(secondInput)
  }, [firstInput, secondInput])

  return (
    <>
      <h1>Clase 15</h1>
      <label>Ingresa dos números para ser sumados: </label>
      <input
        type='number'
        placeholder='0'
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />
      <span>+</span>
      <input
        type='number'
        placeholder='0'
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />
      <input
        type='number'
        placeholder='0'
        value={thirdInput}
        onChange={(e) => setThirdInput(e.target.value)}
      />
      <p>
        Resultado: <span style={{ color: 'aqua' }}>{suma}</span>
      </p>

      <h2>Productos con precio mayor a $50</h2>
      <Products />
      <h2>Libros que transcurren en el planeta seleccionado</h2>
      <Books />
    </>
  )
}
export default Clase15
