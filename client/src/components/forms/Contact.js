import React from 'react';
import Helper from '../utilities/helper';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.addHelper = new Helper();

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

        let contactData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        console.log(contactData);

        this.addHelper.sendContactData(contactData);
        this.props.history.push('/contact-submit');
    }

    render() {
        return (
            <div className="col-12 ml-sm-auto col-md-9 ml-md-auto ml-lg-auto mr-auto" id="mainBodySection">
                <div className='row'>
                    <div className="col-12 ml-sm-auto ml-md-auto ml-lg-auto">
                        <h5 className='text-center'><strong>Feel free to leave me a message!</strong></h5>
                    </div>
                </div>

                <br/>
                <br/>

                <form className='col-12 ml-auto mr-auto' onSubmit={this.handleSubmit}>
                    <div className='row formRow'>
                        <div className='col-12 col-md-6 ml-auto mr-auto form-group'>
                            <label className='h5'> Name </ label>
                            <input className='form-control' value={this.state.name} onChange={this.handleChange} type='text' name='name' placeholder="Enter your name." required />
                        </ div>

                        <div className='col-12 col-md-6 ml-auto mr-auto form-group'>
                            <label className='h5'> E-Mail </ label>
                            <input className='form-control' value={this.state.email} onChange={this.handleChange} type='text' name='email' placeholder='Enter an email.' required />
                        </ div>

                        <div className='col-12 ml-auto mr-auto form-group'>
                            <label className='h5'> Leave Me a Message </ label>
                            <textarea className='form-control' value={this.state.message} onChange={this.handleChange} type='text' name='message' rows='10' placeholder='Enter a message.' required />
                        </ div>

                        <input type='submit' value='Submit' className='col-4 ml-auto mr-auto btn btn-dark' />
                    </ div>
                </ form>
            </div>
        );
    }
}