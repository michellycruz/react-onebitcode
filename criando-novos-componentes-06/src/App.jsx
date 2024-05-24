import Title from "./Title"
import Subtitle from "./Subtitle"

export default function App(){
    const status = false
    return(
        <div>
            <Title />
            <Subtitle />
            <h2>Status atual: {status ? "ON" : "OFF"}</h2>
        </div>
    )
}