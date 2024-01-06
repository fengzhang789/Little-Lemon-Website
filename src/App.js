import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/footer';
import './assets/stylesheets/App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
