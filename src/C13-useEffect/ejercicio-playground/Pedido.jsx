import { useEffect } from "react";

function Pedido(props) {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.handleMount(true)
            console.log('EJERCICIO PG');
            console.log('Componente actualizado');
        }, 2000);
        return () => {
            clearTimeout(timer)
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <>
        <h4>Su pedido: </h4>
        <ul>
            <li>2 Pizzas</li>
            <li>6 Empanadas</li>
            <li>3 Gaseosas</li>
        </ul>
        </>
    )

}
export default Pedido