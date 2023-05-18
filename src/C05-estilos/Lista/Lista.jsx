import styles from './Lista.module.css'

function Lista(props) {
    return (
        <ul className={styles.elementos}>{props.children}</ul>
    )
}

export default Lista