import styles from "./App.module.css"

function App() {
  return (
    <div>
      <div className={styles.container}>
          <img style={{width: 200}} src="starwars.jpg" alt="poster" />
          <h3>Pôster: Star Wars (1977)</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum vero sapiente quibusdam quae optio.</p>
      </div>
    </div>
  )
}

export default App
