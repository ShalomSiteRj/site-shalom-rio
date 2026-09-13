// eventos.jsx
function Eventos() {
  // Lista de eventos. Fica muito mais fácil de ler e modificar!
  const listaDeEventos = [
    { titulo: "Halleluya", desc: "A Festa que nunca acaba!" },
    { titulo: "Flash", desc: "Encontro jovem." },
    { titulo: "Seminário de Vida", desc: "Centro de Evangelização do Catete." },
    { titulo: "Acamps 2027", desc: "O melhor acampamento de jovens." }
  ];

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Eventos!</h1>
      
      {/* Container usando Flexbox para organizar os eventos como cartões lado a lado/embaixo */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {listaDeEventos.map((evento, index) => (
          // Desenhando um "cartão" para cada evento
          <div key={index} style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "5px",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.05)" // Sombra bem levinha
          }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#0056b3" }}>{evento.titulo}</h3>
            <p style={{ margin: "0" }}>{evento.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Eventos;