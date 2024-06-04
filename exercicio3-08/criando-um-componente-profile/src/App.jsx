import Profile from "./components/Profile/index.jsx"
import imgMich from "./assets/michelly2.jpg"


function App() {
  return (
    <div> 
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
 
export default App