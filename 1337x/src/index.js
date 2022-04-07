import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainContent />
  </React.StrictMode>,
  document.getElementById('root')
);


