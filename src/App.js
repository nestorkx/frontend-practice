import React from 'react';
import './scss/main.scss';
import { useTranslation } from 'react-i18next';
import Header from './components/header/header';
import MainContent from './layouts/main-content/MainContent';

const App = () => {
  const [ t ] = useTranslation();
  return (
    <>
    <Header t={t} />
      <div className="container mx-auto">
        <MainContent t={t} />
      </div>
    </>
  );
};

export default App;
