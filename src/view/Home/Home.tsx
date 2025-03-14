import { BaseButton } from 'base/index';
import s from './Home.module.scss';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className={s.Home}>
      <BaseButton variant="outlined">Расчет платежей</BaseButton>
    </div>
  );
};

export default Home;
