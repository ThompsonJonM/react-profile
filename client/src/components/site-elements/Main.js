import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import profilePic from '../../assets/img/selfimage.jpg';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Main extends React.Component {
    render() {
        return (
            // Main Body Column
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className="row">
                    <div className="col-12 col-sm-6 ml-sm-auto col-md-6 ml-md-auto col-lg-6 ml-lg-auto">
                        <img src={profilePic} className='img-fluid' id='aboutMePhoto' alt={profilePic}/>
                    </div>

                    <div className="col-12 col-sm-6 mr-sm-auto col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="aboutMeText">
                        <p>
                            <b>I've been tooling around with web development for more than a 
                            decade as a hobby, though it wasn't until after I left the United States Air Force
                            that I began to consider it as a career choice.</b>
                        </p>

                        <p>
                            <b>I am a certified full-stack web developer after having graduated from <Link to='https://codingbootcamp.northwestern.edu/' target='_blank' style={styles.base}>Northwestern University</Link>. 
                            In addition, I hold a Bachelors of Arts with a major in History and Anthropology
                            from <Link to='https://www2.naz.edu/academics/history-degree-program/' target='_blank' style={styles.base} className='nazLink'>Nazareth College of Rochester</Link>. 
                            Originally from New York, I have called Chicago my home for the last 
                            three years.</b>
                        </p>

                        <p>
                            <b>I currently work as a Quality Assurance Manager for a medical
                            engineering firm where I specialize in documentation and regulatory compliance.
                            I am currently seeking new and exciting opportunities within the fields of 
                            software quality assurance and software development.</b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}