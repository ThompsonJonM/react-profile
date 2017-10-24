import React from 'react';
import { Link } from 'react-router-dom';
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

export default class Resume extends React.Component {
    render() {
        return (
            // Main Body Column
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            PROFILE
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="resumeBodyText">
                        <h5><b>
                            Results driven engineer with proven military leadership and experience in full-stack web development. 
                            Demonstrated ability to learn and adapt quickly to high-tempo working environments. 
                            Proficient in JavaScript, HTML5, CSS3, Node, and SQL/NoSQL. 
                            Extremely detail oriented with excellent communication skills.
                        </b></h5>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            WORK EXPERIENCE
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="resumeBodyText">
                        <h5><b>
                            Results driven engineer with proven military leadership and experience in full-stack web development. 
                            Demonstrated ability to learn and adapt quickly to high-tempo working environments. 
                            Proficient in JavaScript, HTML5, CSS3, Node, and SQL/NoSQL. 
                            Extremely detail oriented with excellent communication skills.
                        </b></h5>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            EDUCATION
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="resumeBodyText">
                        <div className='row'>
                            <h7 className='col-12 col-lg-6 col-xl-6'><b>
                                NORTHWESTERN UNIVERSITY
                            </b></h7>

                            <p className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                CERT - FULL STACK WEB DEVELOPMENT - 2017
                            </p>
                        </div>

                        <hr/>

                        <div className='row'>
                            <h7 className='col-12 col-lg-6 col-xl-6'><b>
                                NAZARETH COLLEGE
                            </b></h7>

                            <p className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                BA - HISTORY & ANTHROPOLOGY MAJOR - 2015
                            </p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            TECHNICAL EXPERTISE
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="resumeBodyText">
                        <div className='row'>
                            <div className='col-12 col-lg-4 col-xl-4'>
                                <b>SKILLSET</b>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS 3</li>
                                    </ul>
                            </div>

                            <div className='col-12 col-lg-4 col-xl-4'>
                                <b>KNOWLEDGE</b>
                                    <ul>
                                        <li>React Framework</li>
                                    </ul>
                            </div>

                            <div className='col-12 col-lg-4 col-xl-4'>
                                <b>TOOLS</b>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Sublime Text</li>
                                        <li>Github</li>
                                        <li>Node</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}