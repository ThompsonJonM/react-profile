import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class ContactSubmit extends React.Component {
    render() {
        return (
            // Main Body Column
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row text-center'>
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <h3><b> Thank you for contacting me! </b></h3>
                        <br/>
                        <h4> I will be in touch soon </h4>
                        <br/>
                        <br/>
                        <br/>
                        <h3><Link style={styles.base} to='/'> Take Me Home </Link></ h3>
                    </div>
                </div>
            </div>
        );
    }
}