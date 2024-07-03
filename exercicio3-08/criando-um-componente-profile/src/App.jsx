/* eslint-disable react/no-unknown-property */
import Profile from "./components/Profile"
import imgMich from "./assets/michelly2.jpg"

export default function App() {
  return (
    <div className="app"> 
      <Profile
        avatar = {imgMich}
        name = "Michelly Cruz de Souza"
        bio = "Front-end Developer | UX UI Designer"
        tel = "27996942003"
        email = "michxcrz@gmail.com"
        githubUrl = "https://github.com/michellycruz"
        linkedinUrl = "https://www.linkedin.com/in/michxcrz/"
        instagramUrl = "instagram.com.br"
      />
    </div>
  )
}