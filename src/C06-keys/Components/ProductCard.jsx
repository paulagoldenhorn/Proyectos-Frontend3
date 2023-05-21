import styles from '../../C05-estilos/Item/Item.module.css'

function ProductCard(props) {

    function handleOnAddToCart() {
        props.onAddToCart({id: props.id, productName: props.productName})
    }

    return (
        <>
            <li className={styles.item}>
                {props.children}
                <button onClick={handleOnAddToCart}>Agregar al carrito</button>
            </li>
        </>
    )
}
export default ProductCard