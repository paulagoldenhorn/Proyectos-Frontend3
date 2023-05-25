import Item from '../C05-estilos/Item/Item'

function SuggestedAccount(props) {
  const { account } = props

  function handleFollowing() {
    props.onFollow(account)
  }

  return (
    <Item>
      <h3>{account.nombre}</h3>
      <p>Edad: {account.edad}</p>
      <p>{account.email}</p>
      <button onClick={handleFollowing}>Seguir</button>
    </Item>
  )
}

export default SuggestedAccount
