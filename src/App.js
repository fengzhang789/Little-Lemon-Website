import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/stylesheets/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
