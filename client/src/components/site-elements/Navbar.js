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
import ContactSubmit from '../forms/ContactSubmit';

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
                <div className='row row-offcanvas row-offcanvas-left'>
                    <ul className='col-2 mr-auto nav navbar-nav sidebar-offcanvas text-center left-col' id='navList' alt='Navigation Listing'>
                        <li><Link className='nav-link' style={styles.base} to='/'> ABOUT ME </Link></ li>
                        <li><Link className='nav-link' style={styles.base} to='/works'> WORKS </Link></li>
                        <li><Link className='nav-link' style={styles.base} to='/testing'> QA TESTING </Link></li>
                        <li><Link className='nav-link' style={styles.base} to='/resume'> RESUME </Link></li>
                        <li><Link className='nav-link' style={styles.base} to='/contact'> CONTACT ME </Link></li>
                    </ ul>
                    <div className='col-10 ml-auto mr-auto right-col' id='contentTray' alt='Main Content'>
                        <Route exact path='/' component={ Main } />
                        <Route path='/works' component={ Works } />
                        <Route path='/testing' component={ Testing } />
                        <Route path='/resume' component={ Resume } />
                        <Route path='/contact' component={ Contact } />
                        <Route path='/contact-submit' component={ ContactSubmit } />
                    </ div>
                </div>
            </Router>
        );
    }
}