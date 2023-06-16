import styles from '../Components/Components.module.css'

function Contact() {
  return (
      <div className={styles.card}>
      <h2>¿Queres saber más de nosotros?</h2>
      <h2>¿Sos revendedor y querés conocer precios mayoristas?</h2>
      <p>
        ¡No dudes en contactarnos!
        <br />
        <code> Email: punkapi@beers.com</code>
        <br />
        <code>Telefono: 11324568</code>
      </p>
      </div>
  )
}
export default Contact
