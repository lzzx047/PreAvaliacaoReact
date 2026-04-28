import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Atividade1() {
const [numero1, setNumero1] = useState("")
const [resultado, setResultado] = useState("0")

const [numero2, setNumero2 ] = useState("")

function conta() {
event.preventDefault(); 
console.log
setResultado(Number(numero1) + Number(numero2))

}
    return (

<>
<h2>Atividade1</h2>
<Link to="/Home">
<button>Home</button>
</Link>
<form onSubmit={conta} >

<label>Digite um numero</label>
<input
    type="number"
    value={numero1}
    onChange={(event)=> setNumero1(event.target.value) } 
/>

<label>digite oto numero</label>
<input
type="number"
value={numero2}
onChange={(event)=> setNumero2(event.target.value) }
/>
<label htmlFor="text"> somar os numeros </label>
<button type='submit'>somar</button>
</form>

<p>{resultado}</p>

</>

    )


}
export default Atividade1