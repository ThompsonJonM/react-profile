import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import gitHub from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Header extends React.Component {
    render() {
        return (
            <div className="col-lg-12 text-center" id='headerText'>
                <h2><b>Jonathan Thompson</b></h2>
                <h5><b>Web Developer | Chicago, IL</b></h5>

                <br/>
                <br/>

                <Router>
                    <div className='row justify-content-center'>
                        <Link to='https://github.com/thompsonjonm' target='_blank'><img src={gitHub} className='headerImg' alt={gitHub}/></Link>
                        <Link to='https://www.linkedin.com/in/jonathanmnthompson/' target='_blank'><img src={linkedin} className='headerImg' alt={linkedin}/></Link>
                        {/* <input type='image' class='dayStyle' src="./assets/img/day.png" alt="day/night select" id='connectImageFour'>
                        <input type='image' class='nightStyle' src="./assets/img/night.png" alt="day/night select" id='connectImageFive'> */}
                    </div>
                </Router>

                <br/>
                <br/>

                <p className="text-center d-md-none">
                    <button type='button' className="btn btn-dark btn-sm" data-toggle='offcanvas'>Navigation</button>
                </p>

            </div>
        );
    }
}