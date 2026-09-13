// onde.jsx
function Onde() {
  // Criamos uma lista de objetos com os locais. 
  // Isso deixa o código limpo e fácil de atualizar depois!
  const locais = [
    { nome: "Catete", endereco: "Rua Bento Lisboa, 112" },
    { nome: "Tijuca", endereco: "Rua Alzira Brandão, 304" },
    { nome: "Jacarepaguá / Curicica", endereco: "Rua das Pêras, 2" },
    { nome: "Campo Grande", endereco: "Rua do Petróleo, 125" },
    { nome: "Vigário Geral", endereco: "Shopping Via Brasil" },
    { nome: "Recreio dos Bandeirantes", endereco: "Rua Theodorino Rodrigues Pereira, 30" },
    { nome: "Quisque do Guido", endereco: "Praia" }, // Complete o endereço depois
    { nome: "Difusão Caxias", endereco: "Duque de Caxias" },
    { nome: "Difusão Baixada", endereco: "Baixada Fluminense" }
  ];

  return (
    <div className="container">
      <h1 className="mt-5">Onde estamos</h1>
      <p style={{ color: "#666", fontStyle: "italic" }}>
        Clique nos links (em breve) para ver fotos de cada centro de evangelização.
      </p>

      {/* Usamos uma grade (grid) simples para exibir os itens em colunas, se preferir. 
          Aqui mantivemos a lista, mas com um visual mais espaçado */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        
        {/* O comando .map() passa por cada item da nossa lista 'locais' acima 
            e cria um <li> para cada um automaticamente! */}
        {locais.map((local, index) => (
          // O 'key' é obrigatório no React quando usamos o .map()
          <li key={index} style={{ 
            padding: "10px", 
            borderBottom: "1px solid #eee", // Uma linha sutil entre os locais
            marginBottom: "5px"
          }}>
            <strong>{local.nome}</strong> — <span>{local.endereco}</span>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default Onde;