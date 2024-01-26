import React from 'react';

function Card() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mt-8 flex flex-wrap items-center justify-between">

      {/* Profissionais de Saúde */}
      <div className="flex-1 mr-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="h-auto will-change-auto mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Profissionais de Saúde</h2>
          <p className="text-gray-600 text-justify">Profissionais de saúde atuam como mediadores, facilitando a conexão entre profissionais neurodiversos e empresas. Essa colaboração, validada por especialistas, assegura oportunidades de trabalho inclusivas e produtivas para talentos neurodiversos, auxiliando o RH corporativo e garantindo eficácia na conexão.</p>
        </div>

      </div>



      {/* Profissionais Neurodivergentes */}
      <div className="flex-1 mr-8">
        <div className="h-auto will-change-auto mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Profissionais Neurodivergentes</h2>
          <p className="text-gray-600 text-justify">No contexto profissional diversificado, profissionais neurodiversos, como aqueles com autismo e TDAH, trazem perspectivas únicas e soluções inovadoras para desafios no trabalho, desbloqueando potencial humano e promovendo a inclusão.</p>
        </div>

      </div>

      {/* Empresas */}
      <div className="flex-1">
        <div className="h-auto will-change-auto mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Empresas</h2>
          <p className="text-gray-600 text-justify">Empresas comprometidas com a neurodiversidade se cadastram em nossa plataforma, buscando ativamente profissionais neurodiversos. Agimos como mediadores, facilitando a conexão entre empresas e talentos neurodiversos, criando ambientes acolhedores e inclusivos.</p>
        </div>

      </div>



    </div>

  );
}

export default Card;
