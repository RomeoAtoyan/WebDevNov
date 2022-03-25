import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/layouts/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import BlogPage from './Blog';
import ContactPage from './components/layouts/Contact';
import ProtectedRoute from './ProtectedRoute';
import Admin from './Admin';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App helloMessage="This is just a test" />} />
      <Route
        path="/blog"
        element={
          <BlogPage auth={{ email: "root@root.com", password: "123" }} />
        }
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute user={{ username: "admin", password: "123456" }}>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

