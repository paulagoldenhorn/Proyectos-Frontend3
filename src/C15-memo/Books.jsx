import { useMemo, useState } from 'react'
import books from './books.json'

function Books() {
  const [selectedOption, setSelectedOption] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])

  useMemo(() => {
    setFilteredBooks(books.filter((book) => book.planeta === selectedOption))
  }, [selectedOption])

  return (
    <>
      <span>Planeta: </span>
      <select name='books' onChange={(e) => setSelectedOption(e.target.value)}>
        <option>Select</option>
        <option value='Roshar'>Roshar</option>
        <option value='Skadrial'>Skadrial</option>
        <option value='Nalthis'>Nalthis</option>
        <option value='Threnody'>Threnody</option>
      </select>
      <div>
        {filteredBooks.map((book) => {
          return (
            <div key={book.id} style={{ border: 'solid' }}>
              <p>Titulo: {book.nombre}</p>
              <p>Saga: {book.saga}</p>
              <p>
                Planeta: <span style={{ color: 'fuchsia' }}>{book.planeta}</span>
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Books
