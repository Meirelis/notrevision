import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/header/Header"


import Produto from "./pages/Produto/Produto"

import Contato from "./pages/contato/Contato"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/Produto" element={<Produto/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
