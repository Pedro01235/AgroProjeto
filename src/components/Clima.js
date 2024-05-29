import React, { useEffect, useState } from 'react';

const Clima = () => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/clima')  // Substitua pela URL real da API
      .then(response => response.json())
      .then(data => setClima(data))
      .catch(error => console.error('Erro ao buscar dados climáticos:', error));
  }, []);

  return (
    <section id="clima">
      <h2>Dados Climáticos</h2>
      {clima ? (
        <div>
          <h3>Previsão Climática</h3>
          <p>Temperatura: {clima.temperatura}°C</p>
          <p>Umidade: {clima.umidade}%</p>
        </div>
      ) : (
        <p>Carregando dados climáticos...</p>
      )}
    </section>
  );
};

export default Clima;
