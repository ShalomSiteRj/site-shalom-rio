import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shalom-logo.png';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">{/* bg-primary ou dark */}
      <div className="container-fluid">

        <Link className="navbar-brand"  to="/">
          <img src={logo} alt="Logo Shalom" /> {/* trabalho árduo */}

          <span className="ms-2">Shalom Rio 30 anos!</span>

        </Link> {/* Isso é um comentário */}




        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/eventos" className="nav-link">Eventos</Link>{/* todos os outro são nav-link */}
            </li>

            <li className="nav-item">
              <Link to="/noticias" className="nav-link">Notícias</Link>
            </li>

            <li className="nav-item">
              <Link to="/onde" className="nav-link">Onde Estamos</Link>
            </li>

            <li className="nav-item">
              <Link to="/sobre" className="nav-link">Sobre Nós</Link>
            </li>

            <li className="nav-item">
              <Link to="/contatos" className="nav-link">Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;