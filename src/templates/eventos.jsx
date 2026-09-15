import { useState } from "react";

import Fotorecreio from "../assets/fotorecreio.png";
import Fotoacamps from "../assets/foto-acamps.png";

function Eventos() {

  // Lista dos eventos
  const listaDeEventos = [
    {
      titulo: "Halleluya",
      desc: "A Festa que nunca acaba!",
      imagem: Fotorecreio,
      link: "https://www.instagram.com/acampsrio/"
    },

    {
      titulo: "Flash",
      desc: "Encontro jovem.",
      imagem: Fotorecreio,
      link: "https://www.instagram.com/acampsrio/"
    },

    {
      titulo: "Seminário de Vida",
      desc: "Um encontro de experiência com Deus.",
      imagem: Fotorecreio,
      link: "https://www.instagram.com/acampsrio/"
    },

    {
      titulo: "Acamps 2027",
      desc: "O melhor acampamento de jovens.",
      imagem: Fotoacamps,
      link: "https://www.instagram.com/acampsrio/"
    }
  ];

  // Guarda qual evento foi escolhido
  const [eventoSelecionado, setEventoSelecionado] = useState(0);

  // Pega o evento selecionado
  const evento = listaDeEventos[eventoSelecionado];

  return (
    <div className="container eventos">

      {/* Título */}
      <h1 className="eventos-titulo">
        Eventos
      </h1>

      {/* Cards + foto */}
      <div className="eventos-conteudo">

        {/* LADO DOS CARDS */}
        <div className="eventos-lista">

          {listaDeEventos.map((evento, index) => (

            <div
              key={index}
              className={
                eventoSelecionado === index
                  ? "evento-card ativo"
                  : "evento-card"
              }
              onClick={() => setEventoSelecionado(index)}
            >

              <h3>{evento.titulo}</h3>

              <p>{evento.desc}</p>

              {/* Link dentro do card */}
              <a
                href={evento.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Saiba mais →
              </a>

            </div>

          ))}

        </div>

        {/* LADO DA FOTO */}
        <div className="evento-fotos">

          <img
            src={evento.imagem}
            alt={evento.titulo}
          />

          {/* Link abaixo da foto */}
          <div className="evento-fotos-info">

            <a
              href={evento.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais {evento.titulo} →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Eventos;