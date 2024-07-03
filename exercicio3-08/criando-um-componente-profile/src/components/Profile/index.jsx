/* eslint-disable react/prop-types */
import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./style.module.css"


export default function Profile (props){
//[variável, função de modifica a variável]
    const [followText, setFollowText] = useState("Follow")
    
    function handleClick (){
        alert("Você agora está seguindo!")
        setFollowText("Following")
    }
    
    
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.tel}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.link}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
            </ProfileSection>
        </div>
    ) 
    
}

