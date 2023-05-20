import Item from '../C05-estilos/Item/Item'
import Lista from '../C05-estilos/Lista/Lista'
import productos from './json/products.json'
import cuentas from './json/accounts.json'
import usuarios from './json/users.json'
 
function Clase06() {



    return (
        <>
            <Lista>
                {productos.map(producto => {
                    return (
                        <Item key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <h4>{producto.precio}</h4>
                            <p>{producto.descripcion}</p>
                        </Item>
                    )
                })}                    
            </Lista>
            <Lista>
                {cuentas.map((cuenta, index) => {
                    return (
                        <Item key={index}>
                            <a href={`https://twitter.com/${cuenta.account}`}>
                                {cuenta.userName}
                            </a>
                        </Item>
                    )
                })}
            </Lista>
            <Lista>
                {usuarios.map((usuario, index) => {
                    return (
                        <Item key={index}>
                            <h3>{usuario.apodo}</h3>
                            
                        </Item>
                    )
                })}
            </Lista>
        </>
    )
 }

 export default Clase06