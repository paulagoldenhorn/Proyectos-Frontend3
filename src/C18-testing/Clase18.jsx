import { useState } from 'react'

function Clase18(props) {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <span>{counter}</span>
      <h1>Cookie Clicker</h1>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
      <button disabled={counter < 10} onClick={props.onClick}>
        Ascend
      </button>
    </>
  )
}
export default Clase18
