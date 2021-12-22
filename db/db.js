const Ticket = require('../models/Ticket');

class TicketDb {
    constructor() {
        this.tickets = [];
    }

    /**
     * create a new ticket
     * @param {String} username 
     * @param {number} price 
     * @returns {Ticket}
     */
    //crete new ticket
    createTicket(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return this.ticket;
    }

    /**
     * create multiple tickets
     * @param {String} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
    //create multiple ticket
    createMultiple(username, price, quantity) {
        let result = [];
        for (let i = 0; i < quantity, i++;) {
            const ticket = createTicket(username, price);
            result.push(ticket);
        }
        return result;
    }

    /**
     * find all tickets
     */
    //find all
    find() {
        return this.tickets;
    }

    /**
     * 
     * @param {string} ticektId 
     * @returns {Ticket}
     */
    //find by id
    findById(ticektId) {
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === ticektId
        );
        return ticket;
    }

    /**
     * find tickets by username
     * @param {String} username 
     * @returns {Array<Ticket>}
     */
    findByUserName(username) {
        const tickets = this.tickets.filter(
            /**
             * @param {Ticket} ticket
             */
            (tickets) => tickets.username === username);
        return tickets;
    }

    /**
     * 
     * @param {String} ticektId 
     * @param {{username: String, price: number}} ticketBody
     * @returns {Ticket}
     */
    updateById(ticektId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ? ticket.username : '';
        ticket.price = ticketBody.price ? ticket.price : '';
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * deleting ticket by id
     * @param {String} ticketId
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex((index) => index.id === ticketId);

        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    /**
     * draw for winner
     * @param {number} winnerCount
     */
    draw(winnerCount) {
        const winnerIndexes = new Array(winnerCount);

        let index = 0;
        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length);
            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex;
                continue;
            }
        }

        const winners = winnerIndexes.map((index) => this.tickets[index]);
        return winners;
    }

}

const newTicket = new TicketDb();
module.exports = newTicket;