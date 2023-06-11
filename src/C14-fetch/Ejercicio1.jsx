import { useEffect, useState } from 'react'

const api = 'https://jsonplaceholder.typicode.com/posts/1'

function Ejercicio1() {
  const [titulo, setTitulo] = useState('')

  async function fetchData() {
    const data = await (await fetch(api)).json()
    setTitulo(data.title)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <p>{titulo}</p>
    </>
  )
}
export default Ejercicio1
