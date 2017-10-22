import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

//Components
import Main from './Main';
import Works from '../content/Works';
import Testing from '../content/Testing';
import Resume from '../content/Resume';
import Contact from '../forms/Contact';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className='col-2 mr-auto nav navbar-nav' id='navList' alt='Navigation Listing'>
                        <li><Link style={styles.base} to='/'> About Me </Link></ li>
                        <li><Link style={styles.base} to='/works'> Works </Link></li>
                        <li><Link style={styles.base} to='/testing'> QA Testing </Link></li>
                        <li><Link style={styles.base} to='/resume'> Resume </Link></li>
                        <li><Link style={styles.base} to='/contact'> Contact Me </Link></li>
                    </ ul>
                    <div className='col-10 ml-auto mr-auto' id='contentTray' alt='Main Content'>
                        <Route exact path='/' component={ Main } />
                        <Route path='/works' component={ Works } />
                        <Route path='/testing' component={ Testing } />
                        <Route path='/resume' component={ Resume } />
                        <Route path='/contact' component={ Contact } />
                    </ div>
                </div>
            </Router>
        );
    }
}