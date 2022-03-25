import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/layouts/Layout';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Layout>
  <App />

  </Layout>,
  document.getElementById('root')
);

