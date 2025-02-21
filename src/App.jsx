import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

import Inicio from "./pages/Inicio"
import Productos from "./pages/productos"
import Detalle from "./pages/Detalle"
import Busqueda from "./pages/Busqueda"
import Tienda from "./pages/Tienda"


import Carrito from './contexts/Carrito'
import VerCompra from "./pages/VerCompra"

const App = () => {
  return (
    <Carrito>
    <BrowserRouter>
  
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} /> 
        <Route path="/inicio" element={<Inicio/>} /> 
        <Route path="/productos/:categoria" element={<Productos/>} /> 
        <Route path="/detalle/:id" element={<Detalle/>} /> 
        <Route path="/busquedas" element={<Busqueda/>} />
        <Route path="/vercompras" element={<VerCompra/>} />

        <Route path="/tienda" element={<Tienda/>} />

        <Route path="*" element={<Inicio/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Carrito>
  )
}

export default App