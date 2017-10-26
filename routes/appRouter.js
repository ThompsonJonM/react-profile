const express = require('express');
const app = express();
const appRouter = express.Router();

const Contact = require('../models/contact');

appRouter.post('/contact/post', (function(req, res) {
    const contact = new Contact(req.body);
    contact.save()

    .then(contact => {
        res.json('Contact added.');
    })

    .catch(err => {
        res.status(400).send('Unable to send contact information.');
    });
}));

appRouter.get('/contacts', function(req, res) {
    Contact.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});

appRouter.get('/', function(req, res) {
    Contact.find(function(err, contacts) {
        if(err) {
            console.log(err);
        } else {
            res.json(contacts);
        }
    });
});

module.exports = appRouter;