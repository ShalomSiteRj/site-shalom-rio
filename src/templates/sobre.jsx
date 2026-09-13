// sobre.jsx
function Sobre() {
  return (
    // <section> é ideal para agrupar um assunto específico
    <section className="container">
      <h1 className="mt-5" style={{ borderBottom: "2px solid #ccc", paddingBottom: "10px" }}>
        Sobre nós
      </h1>
      
      {/* <article> engloba o texto explicativo da comunidade */}
      <article style={{ lineHeight: "1.8", fontSize: "1.1rem", marginTop: "20px" }}>
        <p>
          A Comunidade Católica Shalom nasceu em Fortaleza, em 9 de julho de 1982, a partir da oferta
          de vida de Moysés Azevedo pela evangelização, especialmente dos jovens. Desde então, o
          Carisma Shalom se espalhou pelo Brasil e pelo mundo, estando hoje presente em mais de 30
          países.
        </p>
        <p>
          No Rio de Janeiro, a Comunidade busca ser presença de paz e esperança, anunciando
          Jesus Cristo e formando pessoas para uma vida de fé, fraternidade e missão. Nossa missão
          também se expressa no cuidado com os mais necessitados.
        </p>
        <p>
          Por meio de obras de misericórdia e ações de promoção humana, a Comunidade atua junto 
          aos pobres, famílias, jovens e pessoas em situação de vulnerabilidade, buscando promover 
          a dignidade humana e levar esperança a quem mais precisa.
        </p>
      </article>
    </section>
  );
}

export default Sobre;