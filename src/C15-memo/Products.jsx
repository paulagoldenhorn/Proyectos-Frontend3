import { useMemo, useState } from 'react'
import products from './products.json'

function Products() {
  const [filteredProducts, setFilteredProducts] = useState([])
  useMemo(() => {
    setFilteredProducts(products.filter((product) => product.precio > 50))
  }, [])

  return (
    <div>
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} style={{ border: 'solid' }}>
            <p>{product.nombre}</p>
            <p style={{ fontStyle: 'italic' }}>{product.descripcion}</p>
            <p style={{ color: 'greenyellow' }}>$ {product.precio}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Products
