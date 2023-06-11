import { useState } from 'react'

const api = 'https://jsonplaceholder.typicode.com/posts'

function Ejercicio4() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title || !body) return

    const payload = {
      title,
      body,
    }
    const response = await (
      await fetch(api, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    ).json()
    console.table(response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Titulo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Cuerpo'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type='submit'>Guardar</button>
    </form>
  )
}
export default Ejercicio4
