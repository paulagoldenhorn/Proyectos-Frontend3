import Item from '../C05-estilos/Item/Item.jsx'
import Lista from '../C05-estilos/Lista/Lista'
import ProductCard from './Components/ProductCard.jsx'
import products from './json/products.json'
import accounts from './json/accounts.json'
import users from './json/users.json'

function Clase06() {

  function extractArrayMascotasFromUsers(arrayMascotas) {
    let arrayMascotasExtract = []
    arrayMascotas.forEach((mascota) => {
      const { nombre, edad, color } = mascota
      arrayMascotasExtract.push(`${nombre} (${edad}): ${color}`)
    })
    return arrayMascotasExtract
  }

  function addProductToCart({id, productName}) {
    console.log(`Producto agregado: { id: ${id} / nombre: ${productName} }`)
  }

  return (
    <>
      {/* 1. Muestra la lista de productos con su nombre, precio y descripcion */}
      <Lista>
        {products.map((product) => {
          const { id, nombre, precio, descripcion } = product
          return (
            <Item key={id}>
              <h3>{nombre}</h3>
              <p>{precio}</p>
              <p>{descripcion}</p>
            </Item>
          )
        })}
      </Lista>
      {/* 2. Muestra la lista de links que muestren el nombre del usuario y redirijan a https://twitter.com/${account} */}
      <Lista>
        {accounts.map((element, index) => {
          const { account, userName } = element
          return (
            <Item key={index}>
              <a href={`https://twitter.com/${account}`}>{userName}</a>
            </Item>
          )
        })}
      </Lista>
      {/* 3. Muestra la lista de usuarios con su apodo, y la lista de sus mascotas con el formato ${nombre} (${edad}): ${color} */}
      <Lista>
        {users.map((user, index) => {
          const { apodo, mascotas } = user
          return (
            <Item key={index}>
              <h3>{apodo}</h3>
              {extractArrayMascotasFromUsers(mascotas).map(
                (mascota, indice) => {
                  return <p key={indice}>{mascota}</p>
                }
              )}
            </Item>
          )
        })}
      </Lista>
      {/* 4. Crea un componente ProductCard, que se encargue de mostrar un producto de la misma forma que en el paso 1, pero con un boton adicional para agregar el producto al chango. Y utilizala dentro del map. Agregale una prop onAddToCart que reciba una funcion que se encargue de agregar el producto al chango. */}
      <Lista>
        {products.map((product) => {
          const { id, nombre, precio, descripcion } = product
          return (
            <ProductCard
              key={id}
              id={id}
              productName={nombre}
              onAddToCart={addProductToCart}
            >
              <h3>{nombre}</h3>
              <p>{precio}</p>
              <p>{descripcion}</p>
            </ProductCard>
          )
        })}
      </Lista>
    </>
  )
}

export default Clase06
