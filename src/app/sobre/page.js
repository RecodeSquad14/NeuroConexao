import React from 'react';


const Sobre = () => {
  return (
    <div className="sobre-nos">
      <h1>Sobre Nós - NeuroConexão</h1>

      <section>
        <h2>História:</h2>
        <p>A NeuroConexão surgiu da aspiração de criar oportunidades e promover a inclusão no mercado de trabalho para pessoas neurodiversas. Identificamos uma lacuna significativa nesse cenário, impulsionando-nos a ser uma plataforma dedicada e comprometida com a diversidade.</p>
      </section>

      <section>
        <h2>Formação:</h2>
        <p>Nosso time é liderado por uma equipe dedicada e diversificada, participante do bootcamp 2023 da RECODE PRO, representando o Squad 14. Nossos antecedentes variados e a experiência adquirida moldam uma liderança que acredita profundamente na capacidade de transformar o mundo corporativo por meio da inclusão.</p>
      </section>

      <section>
        <h2>Evolução:</h2>
        <p>Desde o início, enfrentamos desafios como comunicação e divergências de ideias. Cada obstáculo se tornou uma oportunidade para crescer e aprimorar nosso projeto. Estamos constantemente evoluindo, aprendendo com cada desafio, e hoje, orgulhamo-nos de oferecer uma plataforma cheia de personalidade e cumprindo seu papel.</p>
      </section>

      <section>
        <h2>Missão e Visão:</h2>
        <p>A NeuroConexão tem como missão principal resolver o desafio da empregabilidade para pessoas neurodiversas, criando um ambiente inclusivo tanto para empresas quanto para profissionais. Acreditamos que a diversidade é a força propulsora de um futuro mais promissor, e, com a ajuda de profissionais da saúde, estamos caminhando para um mercado de trabalho mais inclusivo.</p>
      </section>

      <section>
        <h2>Compromisso com a Diversidade:</h2>
        <p>Comprometemo-nos não apenas a fornecer soluções inovadoras, mas também a criar um ambiente que celebre as diferenças. Ao escolher a NeuroConexão, você não apenas investe em uma plataforma de empregabilidade, mas se junta a uma comunidade determinada a construir um futuro onde todos tenham oportunidades.</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Sobre />
    </div>
  );
}

export default App;
