// contatos.jsx
function Contatos() {
  const numeroTelefone = "5521975614500"; // Número formatado para o WhatsApp (55 = Brasil)

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="mt-5">Contatos</h1>
      
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        Fale conosco! Clique no número abaixo para abrir o WhatsApp:
      </p>

      {/* Transformamos o número em um link que direciona para o WhatsApp */}
      <a 
        href={`https://wa.me/${numeroTelefone}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#25D366", // Verde oficial do WhatsApp
          textDecoration: "none",
          border: "2px solid #25D366",
          padding: "10px 20px",
          borderRadius: "10px",
          marginTop: "10px"
        }}
      >
        📞 (21) 97561-4500
      </a>
      
    </div>
  );
}

export default Contatos;