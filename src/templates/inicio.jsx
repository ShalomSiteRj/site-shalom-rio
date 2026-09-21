import Navbarlocais from '../components/Navbar-locais.jsx'
import Fotocapa from '../assets/foto-capa-inicio.png'

function Inicio() {

  const heroStyle = {
    textAlign: "center",
    padding: "30px 20px",
    marginTop: "20px"
  };

  return (
    <>
      <Navbarlocais />

      <main className="container">

        <div>

          {/* TEXTO EM CIMA */}
          <div style={heroStyle}>

            <h1 style={{ color: "#215E97" }}>
              Comunidade Católica Shalom Rio de Janeiro
            </h1>

            <h2 style={{ fontWeight: "300", margin: "20px 0" }}>
              30 anos construindo um Rio de paz!
            </h2>

            <h3>
              Faça parte dessa família!
            </h3>

            <button
              className="btn btn-primary mt-3"
              style={{
                padding: "10px 20px",
                fontSize: "1.1rem"
              }}
            >
              Venha nos conhecer
            </button>

          </div>

          {/* IMAGEM EMBAIXO */}
          <img
            src={Fotocapa}
            alt="Foto comunidade católica Shalom"
            style={{
              width: "100%",
              display: "block"
            }}
          />

        </div>

      </main>
    </>
  );
}

export default Inicio;