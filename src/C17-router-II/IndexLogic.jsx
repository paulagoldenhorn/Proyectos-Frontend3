import { useNavigate } from "react-router-dom"
function IndexLogic() {
    const navigate = useNavigate()
    
    return (
        <>
            <button onClick={() => navigate('ejercicio1')}>Ejercicio 1</button>
            <button onClick={() => navigate('ejercicio2')}>Ejercicio 2</button>
        </>
    )
}
export default IndexLogic