/* eslint-disable react/prop-types */
import Title from "../Title"
import styles from "./style.module.css"

export default function Profile (props){
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title text={props.name} />
            <div>{props.bio}</div>
            <div >{props.tel}</div>
            <div>{props.email}</div>
            <div className={styles.link}>
                <a href={props.githubUrl} target="_blank">GitHub</a>
                <a href={props.linkedinUrl} target="_blank">Linkedin</a>
                <a href={props.instagramUrl} target="_blank">Instagram</a>
            </div>
        </div>
    ) 
    
}

