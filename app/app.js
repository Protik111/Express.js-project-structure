require('dotenv').config('../.env');
const express = require('express');
const { notFoundHandler, errorHandler } = require('./error')

const app = express();

const newTicket = require('../db/db');
newTicket.createTicket("Protik", 10);
newTicket.createTicket("Rafiur", 10);
newTicket.createTicket("Rahman", 10);
newTicket.createTicket("User1", 10);
newTicket.createTicket("User2", 10);
newTicket.createTicket("User3", 10);

const multiple = newTicket.createMultiple("Abir", 20, 2);
console.log('multiple', multiple);
const ticketsAll = newTicket.find();
console.log(ticketsAll);
const winners = newTicket.draw(2);
console.log(winners, 'winners');


app.use(require('./middleware'));
app.use(require('./routes'));
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;