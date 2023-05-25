import Item from "../../C05-estilos/Item/Item"

function FollowingAccount(props) {
  const { account } = props
  
  function handleUnFollow() {
    props.onUnFollow(account)
  }

  return (
    <Item key={account.id}>
      <h3>{account.nombre}</h3>
      <p>Edad: {account.edad}</p>
      <p>{account.email}</p>
      <button onClick={handleUnFollow} style={{ color: 'green' }}>
        Siguiendo
      </button>
    </Item>
  )
}

export default FollowingAccount
