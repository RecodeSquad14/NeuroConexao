import React from 'react';

function Card() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mt-8 flex">

      {/* Profissionais de Saúde */}
      <div className="flex-1 mr-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div className="h-auto will-change-auto mb-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-3">Profissionais de Saúde</h2>
    <p className="text-gray-600 text-justify">Profissionais de saúde atuam como mediadores, facilitando a conexão entre profissionais neurodiversos e empresas. Essa colaboração, validada por especialistas, assegura oportunidades de trabalho inclusivas e produtivas para talentos neurodiversos, auxiliando o RH corporativo e garantindo eficácia na conexão.</p>
  </div>
  {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex-row">Saiba Mais</button> */}
</div>


      
      {/* Profissionais Neurodivergentes */}
      <div className="flex-1 mr-8">
        <div className="h-auto will-change-auto mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Profissionais Neurodivergentes</h2>
          <p className="text-gray-600 text-justify">No contexto profissional diversificado, profissionais neurodiversos, como aqueles com autismo e TDAH, trazem perspectivas únicas e soluções inovadoras para desafios no trabalho, desbloqueando potencial humano e promovendo a inclusão.</p>
        </div>
        {/* <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Saiba Mais</button> */}
      </div>

      {/* Empresas */}
      <div className="flex-1">
        <div className="h-auto will-change-auto mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Empresas</h2>
          <p className="text-gray-600 text-justify">Empresas comprometidas com a neurodiversidade se cadastram em nossa plataforma, buscando ativamente profissionais neurodiversos. Agimos como mediadores, facilitando a conexão entre empresas e talentos neurodiversos, criando ambientes acolhedores e inclusivos.</p>
        </div>
        {/* <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Saiba Mais</button> */}
      </div>
      
      

    </div>
    
  );
}

export default Card;
