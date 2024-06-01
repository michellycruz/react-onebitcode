/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function Button({text}){
    return (
        <button className={styles.btn}>{text}</button>
    )
}