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

export default class Resume extends React.Component {
    render() {
        return (
            // Main Body Column
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row text-center'>
                    <Router>
                        <h5 className='col-12'><b><Link to='mailto:thompson.jonm@gmail.com' target='_blank' style={styles.base} > thompson.jonm@gmail.com </Link> | 585.259.5639 </b></h5>
                    </Router>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            PROFILE
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto" id="resumeBodyText">
                        <p className='resumeEntryText'>
                            Results driven engineer with proven military leadership and experience in full-stack web development. 
                            Demonstrated ability to learn and adapt quickly to high-tempo working environments. 
                            Proficient in JavaScript, HTML5, CSS3, Node, and SQL/NoSQL. 
                            Extremely detail oriented with excellent communication skills.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 col-md-4 ml-md-auto mr-md-auto col-lg-3 ml-lg-auto mr-lg-auto" id='resumeHeaderText'>
                        <h4><b>
                            WORK EXPERIENCE
                        </b></h4>
                    </div>

                    <div className="col-12 col-md-6 mr-md-auto col-lg-6 mr-lg-auto">
                        <div className='row'>
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                RICA Surgical Products, Inc.
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                QA Manager | May 2015 - Present
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Oversees and makes changes to company database using MySQL. Submits
                                change orders for company and affiliate websites. Prepares and publishes
                                technical documentation including standard operating procedures, forms,
                                work instructions, and quality manuals.
                            </p>
                        </div>

                        <div className='row'>
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                United States Air Force
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                Historian | Sept 2013 - Jan 2017
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Developed program for collection and preservation of museum items. 
                                Collaborated with leadership to create yearly comprehensive histories
                                for publishing under the Air Force Historical Research Agency.
                            </p>
                        </div>

                        <div className='row'>
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                Castle-Kaumph Historical Site
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                Archaeologist | June 2012 - May 2015
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Trained students in archaeological processes, theories, and skills.
                                Assisted in the expansion of the archaeology field school and the 
                                development of an academic partnership with Nazareth College 
                                history department.
                            </p>
                        </div>

                        <div className='row'>
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                United States Air Force
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                Avionics Engineer | Jan 2009 - Dec 2013
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Operated and maintained all Guidance and Navigational Control systems
                                aboard C-130H2 aircraft. 
                            </p>
                        </div>
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
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                Northwestern University
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                CERT - Full Stack Web Development - 2017
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Solid understanding of development tools. Proficient with
                                Javascript, Node, and React. Experience in unit, integration,
                                and end-to-end testing.
                            </p>
                        </div>

                        <hr/>

                        <div className='row'>
                            <span className='col-12 col-lg-6 col-xl-6 resumeHeadEntry'>
                                Nazareth College
                            </span>

                            <span className='col-12 col-lg-6 col-xl-6 resumeEntry'>
                                BA - History & Anthropology Major - 2015
                            </span>

                            <p className='col-12 resumeEntryText'>
                                Gained valuable experience in research and writing.
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
                                <b>SKILLSET
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS 3</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                    </ul>
                                </b>
                            </div>

                            <div className='col-12 col-lg-4 col-xl-4'>
                                <b>KNOWLEDGE
                                    <ul>
                                        <li>React Framework</li>
                                        <li>Boostrap 3/4 Framework</li>
                                        <li>Materialize Framework</li>
                                        <li>Selenium Webdriver</li>
                                    </ul>
                                </b>
                            </div>

                            <div className='col-12 col-lg-4 col-xl-4'>
                                <b>TOOLS
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Sublime Text</li>
                                        <li>Github</li>
                                        <li>Jest/Mocha/Chai</li>
                                        <li>Node/NPM</li>
                                    </ul>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}