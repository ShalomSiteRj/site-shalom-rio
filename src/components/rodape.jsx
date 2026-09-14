import { Link } from "react-router-dom";

function Rodape() {
  return (
    <footer className="rodape py-1"> {/* bg-primary ou dark e text-light */}
      <div className="container">

        <hr className="border-secondary" />

        <div className="d-flex justify-content-between align-items-center">

          {/* Lado esquerdo */}
          <div className="texto-rodape-esquerda  d-flex align-items-center gap-2">
            <span>© 2026 Comunidade Católica Shalom – Rio de Janeiro. Todos os direitos reservados.</span>
          </div>

          {/* Lado direito */}
          <div className="texto-rodape-direita d-flex gap-3">

            <Link to="#" className="text-secondary">
              <i className="bi bi-instagram"></i>
              <span>Instagram Shalom Rio</span>
            </Link>

            <Link to="#" className="text-secondary">
              <i className="bi bi-facebook"></i>
              <span>Juventude Shalom Rio</span>
            </Link>

            <Link to="#" className="text-secondary">
              <i className="bi bi-facebook"></i>
              <span>ComShalom</span>
            </Link>
            <Link to="#" className="text-secondary">
              <i className="bi bi-facebook"></i>
              <span>Equipe de desenvolvedores</span>
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Rodape;