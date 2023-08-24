import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import { useState } from 'react'
  
function App() {
  const [estado, funcionCambiarEstado] = useState(0)
  console.log(estado)

  const addCount = () =>{
    funcionCambiarEstado(estado + 1)
  }
  
  return (
    <>
      <Navbar count={estado} funcionOnClick={addCount}/>
    </>
  )
}

export default App
