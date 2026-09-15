import { Link } from 'react-router-dom';

function Navbarlocais() {
  return (
    <nav className="navbar-locais navbar-expand-lg navbar-dark ">{/* bg-primary ou dark */}
      <div className="container-fluid">


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/Cevcatete" className="nav-link">Catete</Link>{/* todos os outro são nav-link */}
            </li>

            <li className="nav-item">
              <Link to="/Cevtijuca" className="nav-link">Tijuca</Link>
            </li>

            <li className="nav-item">
              <Link to="/Cevvigario" className="nav-link">Vigário Geral</Link>
            </li>

            <li className="nav-item">
              <Link to="/Cevcampogrande" className="nav-link">Campo grande</Link>
            </li>

            <li className="nav-item">
              <Link to="/Cevjacarepagua" className="nav-link">Jacarepaguá / Curicica</Link>
            </li> 

            <li className="nav-item">
              <Link to="/Cevrecreio" className="nav-link">Recreio dos Bandeirantes</Link>
            </li>

            <li className="nav-item">
              <Link to="/Cevasilo" className="nav-link">Asilo em Irája</Link>
            </li>

            <li className="nav-item">
              <Link to="/Cevquiosque" className="nav-link">Quiosque SH82- Praia do recreio posto</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarlocais;