import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import React from 'react'


function App() {
  return (
    <div className="AppS">
      <div className="container-main">
        <Navbar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
