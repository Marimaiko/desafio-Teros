import './style.css'

export function Card(props) {
  const { logo, title, url } = props

  return (
    <div class="card">
      <img src= { logo } alt="Logo do participante"/>
      <div class = "info"> 
        <h4> { title }</h4>
        <h4>{ url }</h4>
      </div>
    </div>
  )
}