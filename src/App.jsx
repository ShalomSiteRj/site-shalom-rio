import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Rodape from './components/rodape.jsx'


import Inicio from './templates/inicio.jsx'
import Contatos from './templates/contatos.jsx'
import Eventos from './templates/eventos.jsx'
import Noticias from './templates/noticias.jsx'
import Onde from './templates/onde.jsx'
import Sobre from './templates/sobre.jsx'


{/* area dos cevs */}
import Cevcatete from './templates/cev-catete.jsx'
import Cevasilo from './templates/cev-asilo.jsx'
import Cevtijuca from './templates/cev-tijuca.jsx'
import Cevvigario from './templates/cev-vigario.jsx'
import Cevcampogrande from './templates/cev-campo.jsx'
import Cevjacarepagua from './templates/cev-jacarepagua.jsx'
import Cevrecreio from './templates/cev-recreio.jsx'
import Cevquiosque from './templates/cev-quiosque.jsx'
import Cevdifusao01 from './templates/cev-difusao1.jsx'
import Cevdifusao02 from './templates/cev-difusao2.jsx'
import Cevdifusao03 from './templates/cev-difusao3.jsx'




function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
          {<Navbar/>}

          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/contatos" element={<Contatos/>} />
              <Route path="/eventos" element={<Eventos/>} />
              <Route path="/noticias" element={<Noticias/>} />
              <Route path="/onde" element={<Onde/>} />
              <Route path="/sobre" element={<Sobre/>} />


              {/* area dos cevs  11 ao todo */}
              <Route path="/Cevcatete" element={<Cevcatete/>} />
              <Route path="/Cevvigario" element={<Cevvigario/>} />
              <Route path="/Cevtijuca" element={<Cevtijuca/>} />
              <Route path="/Cevcampogrande" element={<Cevcampogrande/>} />
              <Route path="/Cevjacarepagua" element={<Cevjacarepagua/>} />
              <Route path="/Cevrecreio" element={<Cevrecreio/>} />
              <Route path="/Cevasilo" element={<Cevasilo/>} />
              <Route path="/Cevquiosque" element={<Cevquiosque/>} />
              <Route path="/Cevdifusao01" element={<Cevdifusao01/>} />
              <Route path="/Cevdifusao02" element={<Cevdifusao02/>} />
              <Route path="/Cevdifusao03" element={<Cevdifusao03/>} />
            </Routes>
          </main>




             
        {<Rodape/>}  
      </div>
    </BrowserRouter>


  )
}

export default App