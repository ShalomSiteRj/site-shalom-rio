// src/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Início</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="eventos">Eventos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/noticias">Notícias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/onde">Onde Estamos</a> {/* faça parte dessa família */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">Sobre Nós</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contatos">Contatos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;