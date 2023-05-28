import { useState } from 'react'
import styles from '../C05-estilos/Item/Item.module.css'

function Formulario(props) {
  const [inputNumber, setInputNumber] = useState('')
  const [inputName, setInputName] = useState('')

  const [error, setError] = useState('')

  function hasErrors() {
    if (!inputName) {
      setError('Debes ingresar un nombre')
      return true
    } else if (!inputNumber || inputNumber < 0) {
      setError('Debes ingresar un número mayor que 0')
      return true
    } else return false
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (hasErrors()) return

    props.onSubmit({ inputName, inputNumber })

    setInputNumber('')
    setInputName('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.item}>
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
      
      {error ? <p style={{ color: 'red' }}>{error}</p> : undefined}
    </form>
  )
}

export default Formulario
