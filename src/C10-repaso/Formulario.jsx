import { useState } from "react"
import styles from './Formulario.module.css'

function Formulario(props) {

    const [dishName, setDishName] = useState("")
    const [dishQty, setDishQty] = useState("")

    const [error, setError] = useState("")

    function hasErrors() {
        if (!dishName) {
            setError("Debe ingresar un nombre de plato")
            return true
        }
        if (dishQty <= 0) {
            setError("Debe ingresar una cantidad válida")
            return true
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (hasErrors()) return
        props.onSubmit({dishName, dishQty})
        setError('')
        setDishName('')
        setDishQty('')
    }

    function handleDishName(e) {
        setDishName(e.target.value)
    }

    function handleDishQty(e) {
        setDishQty(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="dishName">Ingrese el nombre del plato</label>
            <input 
                type="text"
                name="dishName"
                placeholder="Nombre"
                value={dishName}
                onChange={handleDishName}
            />
            <label htmlFor="dishQuantity">Ingrese la cantidad por unidad</label>
            <input 
                type="number"
                name="dishQuantity"
                placeholder="Cantidad"
                value={dishQty}
                onChange={handleDishQty}
            />
            <button type='submit'>Pedir</button>
            <br />
            {error && <p style={{color: "red"}}>{error}</p>}
        </form>
    )

}
export default Formulario