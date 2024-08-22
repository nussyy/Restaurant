import logo from './logo.svg';
import './App.css';
import React from 'react';
import RoutesComponent from './Routes'; 
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RoutesComponent />
      <Footer />
    </div>
  );
}


export default App;

