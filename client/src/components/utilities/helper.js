import axios from 'axios';

export default class Helper {
    
    sendContactData(contactData) {
        axios.post('/contacts/contact/post', {
            name: contactData.name,
            email: contactData.email,
            message: contactData.message
        })

        .then(function(response) {
            console.log(response);
        })

        .catch(function(error) {
            console.log(error);
        });
    }
}