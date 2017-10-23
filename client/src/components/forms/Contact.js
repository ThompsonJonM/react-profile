import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let messageData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        console.log(messageData);
    }

    render() {
        return (
            <div>
                Contact Content
            </div>
        );
    }
}