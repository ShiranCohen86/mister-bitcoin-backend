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
  // const criteria = _buildCriteria(filterBy);
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

async function addTransfer(amount, loggedUserEmail, contactEmail) {
  try {
    // peek only updatable fields!
    const transferToAdd = {
      from: loggedUserEmail,
      to: contactEmail,
      amount,
    };
    const collection = await dbService.getCollection("transfer");
    await collection.insertOne(transferToAdd);

    const loggedUser = await userService.getByEmail(loggedUserEmail);
    loggedUser.coins -= amount;
    await userService.update(loggedUser);

    const isUser = await userService.getByEmail(contactEmail);
    if (isUser) {
      isUser.coins += amount;
      await userService.update(isUser);
    }
    return loggedUser;
  } catch (err) {
    logger.error("cannot insert user", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.txt) {
    const txtCriteria = { $regex: filterBy.txt, $options: "i" };
    criteria.$or = [
      // {
      //   username: txtCriteria,
      // },
      {
        fullname: txtCriteria,
      },
    ];
  }
  if (filterBy.minBalance) {
    criteria.balance = { $gte: filterBy.minBalance };
  }
  return criteria;
}

const _sortByDate = (transfers) => {
  return transfers.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
  });
};
