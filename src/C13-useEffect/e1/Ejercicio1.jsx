import { useEffect } from 'react'

function Ejercicio1() {
  useEffect(() => {
    console.log('EJERCICIO 1')
    console.log(
      'Esto se va a ejecutar una vez con el primer render (cuando se monte el Componente)'
    )
  }, [])

  return <p>Hola mundo</p>
}
export default Ejercicio1
