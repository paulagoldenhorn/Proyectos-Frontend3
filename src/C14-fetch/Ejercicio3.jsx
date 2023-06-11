import { useEffect, useState } from 'react'

const api = 'https://cat-fact.herokuapp.com/facts/random'

function Ejercicio3() {
  const [factoText, setFactoText] = useState('')

  async function handleFetchData() {
    const facto = await (await fetch(api)).json()
    setFactoText(facto.text)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <>
      <button onClick={handleFetchData}>Siguiente facto</button>
      <p style={{ color: 'fuchsia' }}>{factoText}</p>
    </>
  )
}
export default Ejercicio3
