import { useEffect } from 'react'

function Activo() {
  useEffect(() => {
    console.log('EJERCICIO 2')
    console.log('Activo (se montó)')

    return () => {
      console.log('Desactivo (se desmontó)')
    }
  })

  return <p style={{ color: 'lightGreen' }}>Activo</p>
}
export default Activo
