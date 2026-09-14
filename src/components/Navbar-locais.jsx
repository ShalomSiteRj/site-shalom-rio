import React from 'react';
import { Link } from 'react-router-dom';




function Locais() {
  return (
    <nav className="navbar-locais navbar-expand-lg navbar-dark ">{/* bg-primary ou dark */}
      <div className="container-fluid">


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/eventos" className="nav-link">Catete</Link>{/* todos os outro são nav-link */}
            </li>

            <li className="nav-item">
              <Link to="/noticias" className="nav-link">Tijuca</Link>
            </li>

            <li className="nav-item">
              <Link to="/onde" className="nav-link">Vigário Geral</Link>
            </li>

            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Campo grande</Link>
            </li>

            <li className="nav-item">
              <Link to="/contatos" className="nav-link">Jacarepaguá / Curicica</Link>
            </li> 

            <li className="nav-item">
              <Link to="/contatos" className="nav-link">Recreio dos Bandeirantes</Link>
            </li>

            <li className="nav-item">
              <Link to="/contatos" className="nav-link"> Ajude o Azilo em Irája</Link>
            </li>

            <li className="nav-item">
              <Link to="/contatos" className="nav-link">Quiosque SH82- Praia do recreio posto</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Locais;