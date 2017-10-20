import React, { Component } from 'react';

import Header from './components/site-elements/Header';
import Navbar from './components/site-elements/Navbar';
import Footer from './components/site-elements/Footer';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>

        <Header/>

        <Navbar />

        <Footer/>

      </div>
    );
  }
}

export default App;
