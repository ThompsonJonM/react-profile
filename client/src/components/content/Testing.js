import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import nytimes from '../../assets/img/nytimes.png';
import scraper from '../../assets/img/scraper.png'
import qaDemos from '../../assets/img/qaDemos.png';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Testing extends React.Component {
    render() {
        return (
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row'>
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <h5 className='text-center'><strong>A sampling of my QA projects</strong></h5>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/nytimes-react-app/tree/master/client/src/test" target='_blank' className="project">
                                    <div className='row'>
                                        <img src={nytimes} alt="nytimes testing display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>A simple testing suite I implemented into a React.js project featuring unit and integration testing.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/news-scraper/tree/master/testing" target='_blank' className="project">
                                    <div className='row'>
                                        <img src={scraper} alt="scraper testing display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>A unit testing suite I created within a news-scraper project.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://github.com/ThompsonJonM/qa-test-demos" target='_blank' className="project">
                                    <div className='row'>
                                        <img src={qaDemos} alt="qa demos testing display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>A testing repository I created to demo unit, integration, and end-to-end tests.</b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}