import React from 'react';
import '@/styles/home.css';
import Utilities from './Utilities.jsx';
import Data from './Data.jsx';
import ScrollDown from './ScrollDown.jsx';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Utilities />
          <img
            src="/images/home.avif"
            alt="Fran Afonso"
            width="300"
            height="300"
            className="home__img"
            fetchPriority="high"
            decoding="async"
          />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
