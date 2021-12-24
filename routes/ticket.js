const router = require('express').Router();
const db = require('../db/db');

router.get('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
})

router.patch('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({msg: 'Updated Succesfully', updatedTicket});
})

router.delete('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
})

//for user
router.get('/u/:username', (req, res) => {
    const username = req.params.username;
    const tickets = db.findByUserName(username);
    res.status(200).json(tickets);
})

router.patch('/u/:username', (req, res) => {
    const username = req.params.username;
    const updatedTicket = db.updateByUsername(username, req.body);
    console.log(updatedTicket);
    res.status(200).json({msg : 'Updated ticket succesfully', updatedTicket});
})

router.delete('/u/:username', (req, res) => {
    const username = req.params.username;
    const allTIckets = db.deleteByUsername(username);
    res.status(200).json({msg : 'deleted succesfully', allTIckets})
})

//others
router.post('/sell', (req, res) => {
    const { username, price } = req.body;
    const newTicket = db.createTicket(username, price);
    res.status(201).json({ msg: "Ticket Created Succesfully", newTicket })
})

router.post('/bulk', (req, res) => {
    const { username, price, quantity } = req.body;
    const newTickets = db.createMultiple(username, price, quantity);
    res.status(201).json({ msg: "Bulk Ticket Created Succesfully", newTickets })
})

router.get('/draw', (req, res) => {
    const winnerCount = req.query.winnerCount;
    const winner = db.draw(winnerCount);
    res.status(200).json(winner);
})

//get all
router.get('', (req, res) => {
    const allTickets = db.find();
    res.status(200).json({allTickets})
})

//could be written in this way
// router.route('/tickets/t/:ticketId')
//         .get(() => { })
//         .patch(() => { })
//         .delete(() => { })


module.exports = router;