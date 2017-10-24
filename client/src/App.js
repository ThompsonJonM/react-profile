import React, { Component } from 'react';
import { $ } from 'jquery';

import Header from './components/site-elements/Header';
import Navbar from './components/site-elements/Navbar';
import Footer from './components/site-elements/Footer';

import './assets/javascript/logic.js';
import './assets/stylesheets/style.css';

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
