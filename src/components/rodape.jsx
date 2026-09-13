import { Link } from "react-router-dom";

function Rodape() {
  return (
    <footer className=" rodape py-4"> {/* bg-primary ou dark e text-light */}
      <div className="container">

        <hr className="border-secondary" />

        <div className="d-flex justify-content-between align-items-center">

          {/* Lado esquerdo */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-secondary text-dark fw-bold d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "6px",
                fontSize: "20px",
              }}
            >
              B
            </div>

            <span>© 2026 Obra Shalom - Projeto Comunitário. Todos os direitos reservados.</span>
          </div>

          {/* Lado direito */}
          <div className="d-flex gap-3">
            <Link to="#" className="text-secondary fs-4">
              <i className="bi bi-instagram"></i>
            </Link>

            <Link to="#" className="text-secondary fs-4">
              <i className="bi bi-facebook"></i>
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Rodape;