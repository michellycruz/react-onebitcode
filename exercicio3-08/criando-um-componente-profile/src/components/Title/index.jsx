import styles from "./styles.module.css"

export default function Title(props) {
    return (
        <h2 className={styles.wrapper}>{props.text}</h2>
    )
}
// 5:45 aula 21