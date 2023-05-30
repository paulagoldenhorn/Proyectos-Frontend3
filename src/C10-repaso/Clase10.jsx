import { useState } from 'react'
import Formulario from './Formulario'
import Pedido from './Pedido'
import { generateId } from './idGenerator'
import ListaPedidos from './ListaPedidos'

function Clase10() {
  const [orderedDish, setOrderedDish] = useState([])

  function handleSubmit(values) {
    setOrderedDish([
      ...orderedDish,
      {
        id: generateId(),
        dishName: values.dishName,
        dishQty: values.dishQty
      },
    ])
  }

  function handleDelete(id) {
    const newOrderedDish = orderedDish.filter((dish) => dish.id !== id)
    setOrderedDish(newOrderedDish)
  }

  return (
    <>
    <h1>Pedidos Ya!</h1>
    <br />
      <h2>Hacer un pedido:</h2>
      <br />
      <Formulario onSubmit={handleSubmit} />
      <br />
      <h2>Tus pedidos:</h2>
      <br />
      <ListaPedidos>
        {orderedDish &&
          orderedDish.map((dish) => {
            return <Pedido key={dish.id} values={dish} onDelete={handleDelete} />
          })}
      </ListaPedidos>
    </>
  )
}
export default Clase10
