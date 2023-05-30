import Item from '../C05-estilos/Item/Item'

function Pedido(props) {
  const { id, dishName, dishQty } = props.values

  function handleDelete() {
    props.onDelete(id)
  }

  return (
    <Item>
      <b>Nombre: {dishName}</b>
      <p>Cantidad: {dishQty}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </Item>
  )
}
export default Pedido
