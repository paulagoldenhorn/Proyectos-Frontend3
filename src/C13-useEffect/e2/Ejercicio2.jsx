import { useState } from "react"
import Activo from './Activo'

function Ejercicio2() {
    const [isActive, setIsActive] = useState(false)
    
    function toggleActive(){
        setIsActive(!isActive)
    }
    
    return (
        <>
            <button onClick={toggleActive}>Activar</button>
            {isActive ? <Activo /> : undefined}
        </>
    )
}

export default Ejercicio2