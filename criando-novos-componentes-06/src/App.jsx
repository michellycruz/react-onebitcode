import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"

  export default function App() {
  
    return (
      <div
        style={{
            backgroundColor:"#2c2c2d",
            display: "grid",
            minHeight: "100vh",
            placeContent: "center",
            textAlign: "center"
          }}
      >
        <Title />
        <Subtitle />
        <StatusText />
      </div>
    )
  }