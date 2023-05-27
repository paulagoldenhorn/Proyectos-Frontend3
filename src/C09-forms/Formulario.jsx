import { useState } from 'react'
import Item from '../C05-estilos/Item/Item'
import Lista from '../C05-estilos/Lista/Lista'
import { generateId } from './idGenerator'

function Formulario() {
  const [inputNumber, setInputNumber] = useState('')
  const [inputName, setInputName] = useState('')

  const [error, setError] = useState('')
  const [submittedValues, setSubmittedValues] = useState([])

  function hasErrors() {
    if (!inputName) {
      setError('Debe ingresar un nombre')
      return true
    } else if (!inputNumber || inputNumber < 0) {
      setError('Debes ingresar un número mayor que 0')
      return true
    } else return false
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (hasErrors()) return

    setSubmittedValues([
      ...submittedValues,
      {
        id: generateId(),
        number: inputNumber,
        name: inputName,
      },
    ])

    setInputNumber('')
    setInputName('')
    setError('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Ingrese su nombre</label>
        <br />
        <input
          placeholder='Nombre'
          value={inputName}
          name='name'
          type='text'
          onChange={(e) => setInputName(e.target.value)}
        ></input>

        <br />

        <label htmlFor='number'>Ingrese su número favorito</label>
        <br />
        <input
          placeholder='Número'
          value={inputNumber}
          name='number'
          type='number'
          onChange={(e) => setInputNumber(e.target.value)}
        ></input>

        <br />

        <button type='submit'>Enviar</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : undefined}

      <br />
      {/* Esto se renderiza cada vez que hay un cambio en 'submittedValues' :/ */}
      <Lista>
        {submittedValues.map(value => {
          return (
            <Item key={value.id}>
                <p>Nombre: {value.name}</p>
                <p style={{ color: 'lightGreen' }}>
                  Tu número favorito es: {value.number}
                </p>
            </Item>
          )
        })}
      </Lista>

    </>
  )
}

export default Formulario
