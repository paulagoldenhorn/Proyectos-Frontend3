function GameRender({ game }) {
  return (
    <>
        <img style={{ height: '150px' }} src={game.imgUrl} />
        <h3>{game.name}</h3>
        <ul>
            <li><b>Jugado:</b> {game.playedTime} veces</li>
            <li><b>Generos:</b> {game.tags.join(' - ')}</li>
            <li><b>Puntaje:</b> {game.score}</li>
        </ul>
    </>
  )
}
export default GameRender
