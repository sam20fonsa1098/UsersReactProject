import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes/Routes';
import Logo from './components/logo/Logo';
import Navigation from './navigation/Navigation';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default () => {
  return (
    <BrowserRouter>
      <div className = "app">
        <Logo/>
        <Navigation/>
        <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
