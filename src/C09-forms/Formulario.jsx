import { useState } from 'react'

function Formulario() {
  const [inputNumber, setInputNumber] = useState('')
  const [inputName, setInputName] = useState('')

  const [error, setError] = useState('')
  const [submittedValues, setSubmittedValues] = useState([])

  function handleError() {
    if (inputNumber < 0) {
      setError('Debes ingresar un número mayor que 0')
    }
    if (!inputName) {
      setError('Debe ingresar un nombre')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    handleError()

    setSubmittedValues([
        {
            number: inputNumber,
            name: inputName,
        }
    ])

    setInputNumber('')
    setInputName('')
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
          required
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
          required
          onChange={(e) => setInputNumber(e.target.value)}
        ></input>

        <br />

        <button type='submit'>Enviar</button>
      </form>

      {error ? <p style={{ color: 'red' }}>{error}</p> : undefined}

      {submittedValues ? (
        <p style={{ color: 'lightGreen' }}>
          Tu número favorito es: {submittedValues[0].number}         
        </p>
      ) : undefined}

      {submittedValues.map((value, i) => {
        return (
            <div key={i}>
                <p>Nombre: {value.name}</p>
                <p>Número: {value.number}</p>
            </div>
        )
      })}

    </>
  )
}

export default Formulario
