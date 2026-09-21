import { useState } from "react";

import Fotoevento01 from "../assets/fotoevento01.png";
import Fotoevento02 from "../assets/fotoevento02.png";
import Fotoevento03 from "../assets/fotoevento03.png";
import Fotoevento04 from "../assets/fotoevento04.png";
import Fotoevento05 from "../assets/fotoevento05.png";

function Eventos() {

  // Lista dos eventos
  const listaDeEventos = [
    {
      titulo: "Halleluya",
      desc: "A Festa que nunca acaba!",
      imagem: Fotoevento02,
      link: "https://www.instagram.com/acampsrio/",
      descricao:"detalhes" 
    },

    {
      titulo: "Flash",
      desc: "Encontro jovem.",
      imagem: Fotoevento01,
      link: "https://www.instagram.com/acampsrio/",
      descricao:"detalhes" 
    },

    {
      titulo: "Seminário de Vida",
      desc: "Um encontro de experiência com Deus.",
      imagem: Fotoevento04,
      link: "https://www.instagram.com/acampsrio/",
      descricao:"detalhes" 
    },

    {
      titulo: "Acamps 2027",
      desc: "O melhor acampamento de jovens.",
      imagem: Fotoevento03,
      link: "https://www.instagram.com/acampsrio/",
      descricao:"detalhes"   
    },
    {
      titulo: "Conferência universitária",
      desc: "O melhor acampamento de jovens.",
      imagem: Fotoevento05,
      descricao:        
           "Tem perguntas que a gente carrega pra faculdade, pro trabalho, pras conversas e até pra vida — mesmo quando não percebe.O que é verdade?Dá pra realmente conhecê-la?A Conferência Universitária nasce pra abrir esse espaço: um dia de conversa e reflexão sobre o encontro da razão com a Verdade — sem medo de fazer perguntas e sem respostas prontas.Porque pensar também é uma forma de buscar.📆 24 de outubro📍 Shopping Via Brasil — Rua Itapera, 500 Chama a galera, salva a data e vem viver esse encontro com a gente.",
      link: "https://www.instagram.com/juventudeshrio/"
      
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
          <p>
            {evento.descricao}
          </p>

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