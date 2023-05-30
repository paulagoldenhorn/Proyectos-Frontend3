import { useState } from 'react'
import Formulario from './Formulario'
import Pedido from './Pedido'
import { generateId } from './idGenerator'
//import Pedido from './Pedido'
import ListaPedidos from './ListaPedidos'

function Clase10() {
  const [orderedDish, setOrderedDish] = useState([])

  function handleSubmit(dish) {
    setOrderedDish([
      ...orderedDish,
      {
        id: generateId(),
        dish,
      },
    ])
  }

  function handleDelete(id) {
    const newOrderedDish = orderedDish.filter((dish) => dish.id !== id)
    setOrderedDish(newOrderedDish)
  }

  return (
    <>
      <h1>Hacer un pedido:</h1>
      <br />
      <Formulario onSubmit={handleSubmit} />
      <br />
      <h1>Tus pedidos:</h1>
      <br />
      <ListaPedidos>
        {orderedDish &&
          orderedDish.map((dish) => {
            return <Pedido key={dish.id} dish={dish} onDelete={handleDelete} />
          })}
      </ListaPedidos>
    </>
  )
}
export default Clase10
