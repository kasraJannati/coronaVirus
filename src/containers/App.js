import React from 'react';
import './App.css';
import Routes from '../components/Routes/Routes';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
