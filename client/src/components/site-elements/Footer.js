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

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                Footer
            </div>
        );
    }
}