/* eslint-disable react/prop-types */
import Button from "../Button"
import styles from "./styles.module.css"

export default function Card(props){
    return(
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt={props.title} />
            <div>
                <h2 className={styles.titulo}>{props.title}</h2>
                <p className={styles.paragrafo}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <Button />
            </div>
        </div>
    )
} // aula 18 - minuto 8:12 - o que são e como uti