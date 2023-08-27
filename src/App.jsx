import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer.jsx'
  
function App() {
  const [estado, funcionCambiarEstado] = useState(0)
  const addCount = () =>{
    funcionCambiarEstado(estado + 1)
  }
  
  return (
    <>
      <Navbar count={estado} funcionOnClick={addCount}/>
      <center>
        <ItemListContainer titulo="Titulo Producto" descripcion="Descripcion Producto" imagenURL="https://cdn.pixabay.com/photo/2016/03/31/22/59/box-1297327_640.png"/>
      </center>    
    </>
  )
}

export default App
