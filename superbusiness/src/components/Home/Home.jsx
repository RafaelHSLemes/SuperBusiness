import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/noticias/?busca=empreendedorismo');
        setNoticias(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Notícias sobre Empreendedorismo</h1>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id}>
            {noticia.imagens && <img src={noticia.imagens} alt="Imagem da notícia" />}
            <h2>{noticia.titulo}</h2>
            <p>{noticia.introducao}</p>
            <p>{noticia.data_publicacao}</p>
            <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leia mais</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;