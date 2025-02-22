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
          <div className='home__img'></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
