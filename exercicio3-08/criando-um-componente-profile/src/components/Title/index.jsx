import styles from "./styles.module.css"

export default function Title(props) {
    return (
        <h2 className={styles.wrapper}>{props.text}</h2>
    )
}

//parei no minuto 3:40 da aula 21