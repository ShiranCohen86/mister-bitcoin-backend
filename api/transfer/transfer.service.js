const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const userService = require("../user/user.service");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getTransfers,
  addTransfer,
  getTransfersByContactEmail,
};

async function getTransfers(loggedUserId) {
  try {
    const transferCollection = await dbService.getCollection("transfer");
    const transfers = await transferCollection
      .find({
        $or: [{ from: ObjectId(loggedUserId) }, { to: ObjectId(loggedUserId) }],
      })
      .toArray();

    const transferToReturn = transfers.map(async (transfer) => {
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();

      if (loggedUserId === transfer.from.toString()) {
        const transactionUser = await userService.getById(transfer.to);
        transfer.to = transactionUser.fullname;
        transfer.toImg = transactionUser.img;
        delete transfer.from;
      } else {
        const transactionUser = await userService.getById(transfer.from);
        transfer.from = transactionUser.fullname;
        transfer.fromImg = transactionUser.img;
        delete transfer.to;
      }
      return transfer;
    });

    return Promise.all(transferToReturn).then((transfers) => {
      if (!transfers.length) {
        return null;
      }
      return _sortByDate(transfers);
    });
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function getTransfersByContactEmail(contactEmail, loggedUserId) {
  // const criteria = _buildCriteria(filterBy);
  try {
    const transferCollection = await dbService.getCollection("transfer");

    const isUser = await userService.getByEmail(contactEmail);

    const transfers = await transferCollection
      .find({
        $or: [
          {
            from: ObjectId(loggedUserId),
            to: isUser._id,
          },
          {
            from: isUser._id,
            to: ObjectId(loggedUserId),
          },
        ],
      })
      .toArray();

    const transferToReturn = transfers.map((transfer) => {
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();
      if (loggedUserId === transfer.from.toString()) {
        transfer.to = isUser.fullname;
        transfer.toImg = isUser.img;
        delete transfer.from;
      } else {
        transfer.from = isUser.fullname;
        transfer.fromImg = isUser.img;
        delete transfer.to;
      }
      return transfer;
    });
    return _sortByDate(transferToReturn);
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function addTransfer(transferAmount, loggedUserId, contactId) {
  try {
    // peek only updatable fields!

    const updatedUser = await userService.getById(loggedUserId);

    const contact = updatedUser.contacts.find(
      (contact) => contact._id === contactId
    );

    const isUser = await userService.getByEmail(contact.contactEmail);
    if (!isUser) return Promise.reject("Contact not signed");

    const newTransfer = {
      from: ObjectId(loggedUserId),
      to: isUser._id,
      transferAmount,
    };

    isUser.coins += transferAmount;
    newTransfer.toBalance = isUser.coins;
    await userService.update(isUser);

    updatedUser.coins -= transferAmount;
    newTransfer.fromBalance = updatedUser.coins;
    await userService.update(updatedUser);

    const collection = await dbService.getCollection("transfer");
    await collection.insertOne(newTransfer);

    delete newTransfer.fromBalance;
    delete newTransfer.toBalance;
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
