const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const userService = require('../user/user.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
	getTransactions,
	addTransaction,
	getTransactionsByContactEmail
};

async function getTransactions(loggedUserId) {
	try {
		const transactionCollection = await dbService.getCollection('transaction');
		const transactions = await transactionCollection
			.find({
				$or: [ { from: ObjectId(loggedUserId) }, { to: ObjectId(loggedUserId) } ]
			})
			.toArray();

		const transactionToReturn = transactions.map(async (transaction) => {
			transaction.createdAt = ObjectId(transaction._id).getTimestamp();

			if (loggedUserId === transaction.from.toString()) {
				const transactionUser = await userService.getById(transaction.to);
				transaction.to = transactionUser.fullname;
				transaction.toImg = transactionUser.img;
				delete transaction.from;
			} else {
				const transactionUser = await userService.getById(transaction.from);
				transaction.from = transactionUser.fullname;
				transaction.fromImg = transactionUser.img;
				delete transaction.to;
			}
			return transaction;
		});

		return Promise.all(transactionToReturn).then((transactions) => {
			if (!transactions.length) {
				return null;
			}
			return _sortByDate(transactions);
		});
	} catch (err) {
		logger.error('cannot find users', err);
		throw err;
	}
}

async function getTransactionsByContactEmail(contactEmail, loggedUserId) {
	// const criteria = _buildCriteria(filterBy);
	try {
		const transactionCollection = await dbService.getCollection('transaction');

		const isUser = await userService.getByEmail(contactEmail);

		const transactions = await transactionCollection
			.find({
				$or: [
					{
						from: ObjectId(loggedUserId),
						to: isUser._id
					},
					{
						from: isUser._id,
						to: ObjectId(loggedUserId)
					}
				]
			})
			.toArray();

		const transactionToReturn = transactions.map((transaction) => {
			transaction.createdAt = ObjectId(transaction._id).getTimestamp();
			if (loggedUserId === transaction.from.toString()) {
				transaction.to = isUser.fullname;
				transaction.toImg = isUser.img;
				delete transaction.from;
			} else {
				transaction.from = isUser.fullname;
				transaction.fromImg = isUser.img;
				delete transaction.to;
			}
			return transaction;
		});
		return _sortByDate(transactionToReturn);
	} catch (err) {
		logger.error('cannot find users', err);
		throw err;
	}
}

async function addTransaction(transactionAmount, loggedUserId, contactId) {
	try {
		const updatedUser = await userService.getById(loggedUserId);
		const contact = updatedUser.contacts.find((contact) => contact._id === contactId);
		const isUser = await userService.getByEmail(contact.contactEmail);
		if (!isUser) return Promise.reject('Contact not signed');

		const newTransaction = {
			from: ObjectId(loggedUserId),
			to: isUser._id,
			transactionAmount
		};

		isUser.coins += transactionAmount;
		newTransaction.toBalance = isUser.coins;
		await userService.update(isUser);

		updatedUser.coins -= transactionAmount;
		newTransaction.fromBalance = updatedUser.coins;
		await userService.update(updatedUser);

		const collection = await dbService.getCollection('transaction');
		await collection.insertOne(newTransaction);

		delete newTransaction.fromBalance;
		delete newTransaction.toBalance;
		return newTransaction;
	} catch (err) {
		logger.error('cannot insert user', err);
		throw err;
	}
}

const _sortByDate = (transactions) => {
	return transactions.sort((a, b) => {
		return a.createdAt > b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
	});
};
