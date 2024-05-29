import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataPage.css';

function DataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('URL_DA_API_DA_EMBRAPA')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar dados: {error.message}</p>;
  }

  return (
    <main className="data">
      <h2>Dados de Agricultura Sustentável</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </main>
  );
}

export default DataPage;
