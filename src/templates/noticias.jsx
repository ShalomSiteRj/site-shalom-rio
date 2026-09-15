// noticias.jsx
function Noticias() {
  return (
    <div className="container">
      <h1 className="mt-5">Últimas notícias</h1>
      
      {/* Aqui estamos criando um bloco de notícia individual */}
      <article style={{ 
        backgroundColor: "#f4f4f4", 
        padding: "20px", 
        borderRadius: "8px",
        marginTop: "20px" 
      }}>
        <h2>Comunidade recebe medalha de São Francisco na Câmara Municipal do Rio</h2>
        <p style={{ marginTop: "10px" }}>
          Aqui podemos colocar um resumo da notícia do Shalom da cidade...
        </p>
        
        {/* Um link (âncora) estilizado como se fosse um pequeno botão. 
            No futuro, pode trocar o 'href' pelo link do comshalom! */}
        <a 
          href="https://www.instagram.com/p/Dcd6RcDuUi_/" 
          target="_blank" // Faz o link abrir em uma nova aba
          rel="noreferrer" // Medida de segurança do React para links externos
          style={{
            display: "inline-block",
            marginTop: "10px",
            color: "blue",
            textDecoration: "underline"
          }}
        >
          Ler matéria completa no Portal @comshalom
        </a>
      </article>

    </div>
  );
}

export default Noticias;