import Navbarlocais from '../components/Navbar-locais.jsx'
import fotoCatete from '../assets/fotocatete.png'
import Fotorecreio from '../assets/fotorecreio.png'




function Centroquiosque() {
  

  
  return (
    <div>
      <Navbarlocais />

    
    
      <div className="centro-destaque">
        <img src={Fotorecreio} alt="Foto do Centro de Evangelização Shalom - Catete" className="centro-foto" />                
          <div className="centro-info">

            <h1>Quiosque SH82</h1>

            <p>
              Centro de Evangelização Shalom
            </p>

            <p>
              Rua Bento Lisboa, 112
            </p>

            <p>
              Rio de Janeiro - RJ
            </p>

            <p>
              Horários e informações
            </p>

          </div>

      </div>
    </div>

  );
}

export default Centroquiosque;