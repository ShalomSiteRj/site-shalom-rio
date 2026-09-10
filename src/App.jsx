import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'


import Inicio from './templates/inicio.jsx'
import Contatos from './templates/contatos.jsx'
import Eventos from './templates/eventos.jsx'
import Noticias from './templates/noticias.jsx'
import Onde from './templates/onde.jsx'
import Sobre from './templates/sobre.jsx'


function App() {
  return (
    <BrowserRouter>
      <div>
          {<Navbar/>}


          <div className="container">
          {<Inicio/>}
          </div>

          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/contatos" element={<Contatos/>} />
            <Route path="/eventos" element={<Eventos/>} />
            <Route path="/noticias" element={<Noticias/>} />
            <Route path="/onde" element={<Onde/>} />
            <Route path="/sobre" element={<Sobre/>} />
          </Routes>

      </div>
    </BrowserRouter>


  )
}

export default App