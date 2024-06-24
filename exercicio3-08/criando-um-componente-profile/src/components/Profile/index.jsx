/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./style.module.css"

export default function Profile (props){
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button>Follow</button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.tel}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className={styles.link}>
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                    <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
                </div>
            </ProfileSection>
        </div>
    ) 
    
}

