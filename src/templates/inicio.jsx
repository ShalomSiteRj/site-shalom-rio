// inicio.jsx
import Navbarlocais from '../components/Navbar-locais.jsx'
function Inicio() {
  // Estilo inline simples para centralizar e dar destaque à página inicial
  const heroStyle = {
    textAlign: "center", // Centraliza o texto
    padding: "50px 20px", // Dá um respiro (espaço) em cima/baixo e nas laterais
    backgroundColor: "#f8f9fa", // Uma cor de fundo bem suave (cinza claro)
    borderRadius: "8px", // Arredonda as bordas para ficar mais moderno
    marginTop: "20px"
  };

  return (
    <><Navbarlocais />
      <main className="container">
        <div style={heroStyle}>
          {/* Título principal da página */}
          <h1 style={{ color: "#215E97" }}>Comunidade Católica Shalom Rio de Janeiro</h1>
          
          {/* Subtítulo chamativo */}
          <h2 style={{ fontWeight: "300", margin: "20px 0" }}>
            30 anos construindo um Rio de paz!
          </h2>
          
          <h3>Faça parte dessa família!</h3>
          
          {/* Um botão fictício que pode ser um link para a página de "Contatos" ou "Onde estamos" */}
          <button 
            className="btn btn-primary mt-3" 
            style={{ padding: "10px 20px", fontSize: "1.1rem" }}
          >
            Venha nos conhecer
          </button>
        </div>
      </main>
    </>
  );
}

export default Inicio;