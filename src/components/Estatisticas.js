import React, { useEffect, useState } from 'react';

const Estatisticas = () => {
  const [estatisticas, setEstatisticas] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/estatisticas')  // Substitua pela URL real da API
      .then(response => response.json())
      .then(data => setEstatisticas(data))
      .catch(error => console.error('Erro ao buscar estatísticas:', error));
  }, []);

  return (
    <section id="estatisticas">
      <h2>Estatísticas e Gráficos</h2>
      {estatisticas ? (
        <div>
          <h3>Estatísticas Agrícolas</h3>
          <p>Produção Anual: {estatisticas.producao_anual} toneladas</p>
          <p>Uso de Água: {estatisticas.uso_agua} litros</p>
        </div>
      ) : (
        <p>Carregando estatísticas...</p>
      )}
    </section>
  );
};

export default Estatisticas;
