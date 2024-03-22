import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-header">
        <h1>Super Business</h1>
        <p>A sua rede social de empreendedorismo</p>
      </div>
      <div className="main-sections">
        <section className="section-courses">
          <h2>Cursos de Empreendedorismo</h2>
          <p>Aprimore suas habilidades e impulsione seu negócio.</p>
          <Link to="/cursos">Ver cursos</Link>
        </section>
        <section className="section-metaverse">
          <h2>Conecte-se com o Metaverso</h2>
          <p>Explore novas oportunidades e expanda seus horizontes.</p>
          <Link to="/metaverso">Saiba mais</Link>
        </section>
        <section className="section-marketplace">
          <h2>Compre e Venda Produtos</h2>
          <p>Negocie com outros empreendedores usando dinheiro virtual.</p>
          <Link to="/marketplace">Acesse o marketplace</Link>
        </section>
      </div>
    </main>
  );
};

export default Main;
