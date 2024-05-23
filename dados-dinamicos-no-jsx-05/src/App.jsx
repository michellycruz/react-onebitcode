function sum(a, b){
  return a + b
}

export default function App(){
  const tech = "Javascript"
  const status = false
  return(
    <div>
      <h1>{tech} é incrivel!</h1>
      <h2>É fácil, igual 1 + 1 é {sum(1, 1)}</h2>
      <h2>Status atual: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}