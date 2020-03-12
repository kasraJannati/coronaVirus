import React from 'react';
import './App.css';
import Routes from '../components/Routes/Routes';
import Header from '../components/Common/Header';

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
