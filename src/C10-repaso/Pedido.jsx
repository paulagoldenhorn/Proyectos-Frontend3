import Item from '../C05-estilos/Item/Item'


function Pedido(props) {
    const { dishName, dishQty } = props.dish.dish
    
    function handleDelete() {
        props.onDelete(props.dish.id)
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