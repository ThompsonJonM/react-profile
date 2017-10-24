import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Radium from 'radium';
import Color from 'color';

import databaseImage from '../../assets/img/databaseImage.png';
import fullStackImage from '../../assets/img/fullStackImage.png';
import giphyImage from '../../assets/img/giphyImage.png';
import liriImage from '../../assets/img/liriImage.png';
import moodsicImage from '../../assets/img/moodsicImage.png';
import trainSchedImage from '../../assets/img/trainSchedImage.png';
import pigmaticImage from '../../assets/img/pigmaticImage.jpg';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Works extends React.Component {
    render() {
        return (
            // Works Column
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row'>
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <h5 className='text-center'><strong>A sampling of my completed web projects</strong></h5>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <div className='row'>
                            <div className="col-12 imageBlock">
                                <Link to="https://pigmatic-app.herokuapp.com" target='_blank' className="project">
                                    <div className='row'>
                                        <img src={pigmaticImage} alt="pigmatic display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>Pigmatic is a full-stack museum collections
                                                application.
                                            </b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-7 imageBlock">
                                <Link to="https://thompsonjonm.github.io/project-one" target='_blank' className="project">
                                    <div className='row'>
                                        <img src={moodsicImage} alt="moodsic display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>Moodsic is a web app that uses APIs 
                                                to create music playlists.
                                            </b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                            

                            <div className="col-12 col-lg-5 col-xl-5 imageBlock">
                                <Link to="https://thompsonjonm.github.io/friend-finder" target="_blank">
                                    <div className='row'>
                                        <img className="col-12 col-lg-11 col-xl-11 ml-auto projectImgShort" src={fullStackImage} alt="friend-finder display"/>
                                        <h4 className="col-12 col-lg-11 col-xl-11 ml-auto text-center imgDescriptShort">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <b>Friend-Finder is a mock dating app
                                                built with Node.JS</b>
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-12 col-lg-5 col-xl-5 imageBlock">
                                <Link to='https://thompsonjonm.github.io/train-scheduler' target='_blank'>
                                    <div className='row'>
                                        <img className="col-12 col-lg-11 col-xl-11  mr-auto projectImgShort" src={trainSchedImage} alt='scheduler display'/>
                                        <h4 className="col-12 col-lg-11 col-xl-11  mr-auto text-center imgDescriptShort">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <b>Train-scheduler is a web-app built with 
                                                Moment.JS and jQuery.
                                            </b>
                                        </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-lg-7 col-xl-7 imageBlock">
                                <Link to="https://thompsonjonm.github.io/giphy-app" target="_blank">
                                    <div className='row'>
                                        <img src={giphyImage} alt="giphy app display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>Giphy is a web application which uses AJAX
                                                calls to populate the DOM with gifs.
                                            </b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-7 imageBlock">
                                <Link to='https://thompsonjonm.github.io/burger' target='_blank'>
                                    <div className='row'>
                                        <img src={databaseImage} alt="burger app display" className="img-fluid projectImg"/>
                                        <h3 className="col-12 text-center imgDescriptWide">
                                            <br/>
                                            <br/>
                                            <b>Eat-da-Burger is a full-stack web app
                                                built with Node.JS and Express.JS.
                                            </b>
                                        </h3>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-lg-5 col-xl-5 imageBlock">
                                <Link to='https://thompsonjonm.github.io/liri-app' target='_blank'>
                                    <div className='row'>
                                        <img className="col-12 col-lg-11 col-xl-11  ml-auto projectImgShort" src={liriImage} alt="liri app display"/>
                                        <h4 className="col-12 col-lg-11 col-xl-11  ml-auto text-center imgDescriptShort">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <b>LIRI is a mock SIRI app
                                                built with Node.JS</b>
                                        </h4>
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