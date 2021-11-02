const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const userService = require("../user/user.service");
const contactService = require("../contact/contact.service");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getTransfers,
  addTransfer,
  getTransfersByContactId,
};

async function getTransfers(loggedUserId) {
  try {
    const transferCollection = await dbService.getCollection("transfer");
    const loggedUser = await userService.getById(loggedUserId);
    const transfers = await transferCollection
      .find({
        $or: [{ from: loggedUser.email }, { to: loggedUser.email }],
      })
      .toArray();
    const transferToReturn = transfers.map((transfer) => {
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();

      return transfer;
    });
    if (!transferToReturn.length) {
      return null;
    }
    return _sortByDate(transferToReturn);
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function getTransfersByContactId(contactId, loggedUserId) {
  // const criteria = _buildCriteria(filterBy);
  try {
    const transferCollection = await dbService.getCollection("transfer");
    const userCollection = await dbService.getCollection("user");

    const loggedUser = await userCollection.findOne({
      _id: ObjectId(loggedUserId),
    });
    const contact = loggedUser.contacts.find(
      (contact) => contact._id == contactId
    );

    const transfers = await transferCollection
      .find({
        $or: [
          {
            from: loggedUser.email,
            to: contact.contactEmail,
          },
          {
            from: contact.contactEmail,
            to: loggedUser.email,
          },
        ],
      })
      .toArray();
    // const user = await userCollection.findOne({ _id: ObjectId(userId) });

    const transferToReturn = transfers.map((transfer) => {
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();
      return transfer;
    });
    return _sortByDate(transferToReturn);
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function addTransfer(transferAmount, loggedUserEmail, contactEmail) {
  try {
    // peek only updatable fields!

    let updatedUser = await userService.getByEmail(loggedUserEmail);
    updatedUser.coins -= transferAmount;
    updatedUser = await userService.update(updatedUser);

    const isUser = await userService.getByEmail(contactEmail);
    if (isUser) {
      isUser.coins += transferAmount;
      await userService.update(isUser);
    }

    let newTransfer = {
      from: loggedUserEmail,
      to: contactEmail,
      updatedUserBalance: updatedUser.coins,
      transferAmount,
    };

    const collection = await dbService.getCollection("transfer");
    await collection.insertOne(newTransfer);
    delete newTransfer.updatedUserBalance;
    return newTransfer;
  } catch (err) {
    logger.error("cannot insert user", err);
    throw err;
  }
}

const _sortByDate = (transfers) => {
  return transfers.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
  });
};
