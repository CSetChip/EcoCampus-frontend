import React from 'react';
import capaInicial from '../../img/img-capa.png'; 
import '../home/home.css';

function Home() {

  return (
    <div className="img-container">
      <img
        src={capaInicial}
        alt="Capa inicial do aplicativo"
        className="img-capa"
      />

      <div className="title default-font">
        <div className='float-animation'>
            <h1>EcoCampus</h1>
            <h3 className='sub-title'>Transformando Rotinas em Sustentabilidade</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
