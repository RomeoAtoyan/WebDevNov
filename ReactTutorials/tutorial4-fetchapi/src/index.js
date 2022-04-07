import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import BlogPage from './Blog';
import ContactPage from './Contact';
import Admin from './Admin';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/Layout/Layout';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Layout/>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
