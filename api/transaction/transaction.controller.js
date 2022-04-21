const transactionService = require('./transaction.service');
const socketService = require('../../services/socket.service');
const logger = require('../../services/logger.service');

async function addTransaction(req, res) {
	try {
		const { transactionAmount } = req.body;
		const { contactId } = req.body;
		const loggedUserId = req.session.userId;

		const transaction = await transactionService.addTransaction(transactionAmount, loggedUserId, contactId);

		res.send(transaction);
	} catch (err) {
		// logger.error("Failed to update user", err);
		res.status(500).send(err);
	}
}

async function getTransactions(req, res) {
	try {
		const loggedUserId = req.session.userId;
		const transactions = await transactionService.getTransactions(loggedUserId);
		res.send(transactions);
	} catch (err) {
		logger.error('Failed to update user', err);
		res.status(500).send({ err: 'Failed to update user' });
	}
}

async function getTransactionsByContactEmail(req, res) {
	try {
		const contactEmail = req.params.email;
		const loggedUserId = req.session.userId;
		const transactions = await transactionService.getTransactionsByContactEmail(contactEmail, loggedUserId);
		res.send(transactions);
	} catch (err) {
		logger.error('Failed to update user', err);
		res.status(500).send({ err: 'Failed to update user' });
	}
}

module.exports = {
	addTransaction,
	getTransactions,
	getTransactionsByContactEmail
};
