import React from 'react';
import PortfolioHome from '@components/portfolio/PortfolioHome';

import styles from '../styles/portfolio.module.scss';

const Home = () => {
  return (
    <main>
      <PortfolioHome />
      <section id='about'></section>
      <section id='works'></section>
      <section id='contact'></section>
    </main>
  );
};

export default Home;