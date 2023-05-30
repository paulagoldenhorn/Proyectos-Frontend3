import { useState } from 'react'
import styles from './Formulario.module.css'

function Formulario(props) {
  const [dishName, setDishName] = useState('')
  const [dishQty, setDishQty] = useState('')

  const [error, setError] = useState('')

  function hasErrors() {
    if (!dishName) {
      setError('Debe ingresar un nombre de plato')
      return true
    }
    if (dishQty <= 0) {
      setError('Debe ingresar una cantidad válida')
      return true
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (hasErrors()) return
    props.onSubmit({ dishName, dishQty })
    setError('')
    setDishName('')
    setDishQty('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor='dishName'>Ingrese el nombre del plato</label>
      <input
        type='text'
        name='dishName'
        placeholder='Nombre'
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
      />
      <label htmlFor='dishQuantity'>Ingrese la cantidad de platos</label>
      <input
        type='number'
        name='dishQuantity'
        placeholder='Cantidad'
        value={dishQty}
        onChange={(e) => setDishQty(e.target.value)}
      />
      <button type='submit'>Pedir</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  )
}
export default Formulario
