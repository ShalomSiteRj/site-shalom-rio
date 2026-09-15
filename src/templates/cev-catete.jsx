import Navbarlocais from '../components/Navbar-locais.jsx'
import fotoCatete from '../assets/catete-foto.png'




function Centrocatete() {
  

  
  return (
    <div>
      <Navbarlocais />

    
    
      <div className="centro-destaque">
        <img src={fotoCatete} alt="Foto do Centro de Evangelização Shalom - Catete" className="centro-foto" />                
          <div className="centro-info">

            <h1>Shalom Catete - Lanchonete e livraria </h1>

            <p>
              Centro de Evangelização Comunidade católica Shalom 
            </p>
            <p>
              SEGUNDA A SÁBADO DE 15:00 ÀS 21:00 com o Santíssmo exposto para adoração
            </p>
            <p>
              Rua Bento Lisboa, 112, Catete, Rio de Janeiro - RJ
            </p>

            <h2></h2>
            <p></p>



            <h3>Missas</h3>

            <p>Segundas e sextas as 18:00</p>
            <p>Sábados as 15:30</p>
            <p>Domingo as 11:00</p>

            <h4>Grupos de Oração</h4>
            <p>Grupos de jovens todos os sábados as 17:00 após a missa das 15:30</p>
            <p>Grupo de oração para adultos todas as quintas as 20:00</p>
            <p>Grupo de oração para casais todas as terças as 20:00</p>
            <p>Grupo de oração para crianças todas as terças as 20:00 simultaneamente ao grupo de casais</p>
            <p></p>



          </div>

      </div>
    </div>

  );
}

export default Centrocatete;