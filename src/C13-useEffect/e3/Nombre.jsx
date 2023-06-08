import { useEffect } from 'react'

function Nombre(props) {
  useEffect(() => {
    if (props.value) {
      console.log('EJERCICIO 3')
      console.log(`buscando datos en api.github.com/users/${props.value}`)
    }
  }, [props.value])
  return <p style={{ color: 'lightGreen' }}>{props.value}</p>
}
export default Nombre
