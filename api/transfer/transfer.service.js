const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const userService = require("../user/user.service");
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
    const userCollection = await dbService.getCollection("user");
    const transfers = await transferCollection
      .find({
        $or: [
          { fromId: ObjectId(loggedUserId) },
          { toId: ObjectId(loggedUserId) },
        ],
      })
      .toArray();

    var loggedUser = await userCollection.findOne({
      _id: ObjectId(loggedUserId),
    });

    return transfers.map((transfer) => {
      const contact = loggedUser.contacts.find(
        (contact) => contact._id.toString() === transfer.toId.toString()
      );

      transfer.fromName = loggedUser.fullname;
      transfer.toName = contact.contactName;
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();
      delete transfer.fromId;
      delete transfer.toId;
      return transfer;
    });
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

    const transfers = await transferCollection
      .find({
        $or: [
          {
            fromId: ObjectId(loggedUserId),
            toId: ObjectId(contactId),
          },
          {
            fromId: ObjectId(contactId),
            toId: ObjectId(loggedUserId),
          },
        ],
      })
      .toArray();

    const loggedUser = await userCollection.findOne({
      _id: ObjectId(loggedUserId),
    });
    // const user = await userCollection.findOne({ _id: ObjectId(userId) });
    const contact = loggedUser.contacts.find(
      (contact) => contact._id.toString() === contactId.toString()
    );

    const transferToReturn = transfers.map((transfer) => {
      transfer.createdAt = ObjectId(transfer._id).getTimestamp();
      transfer.fromName =
        transfer.fromId.toString() === contactId.toString()
          ? contact.contactName
          : loggedUser.fullname;
      transfer.toName =
        transfer.toId.toString() === contactId.toString()
          ? contact.contactName
          : loggedUser.fullname;
      delete transfer.fromId;
      delete transfer.toId;
      return transfer;
    });
    return transferToReturn;
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function addTransfer(amount, loggedUserId, contactId) {
  try {
    // peek only updatable fields!
    const transferToAdd = {
      fromId: ObjectId(loggedUserId),
      toId: ObjectId(contactId),
      amount,
    };
    const collection = await dbService.getCollection("transfer");
    await collection.insertOne(transferToAdd);
    const loggedUser = await userService.getById(loggedUserId);
    loggedUser.coins -= amount;
    await userService.update(loggedUser);

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
      {
        username: txtCriteria,
      },
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

async function getById(userId) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(userId) });
    delete user.password;

    user.givenContacts = await contactService.query({
      byUserId: ObjectId(user._id),
    });
    user.givenContacts = user.givenContacts.map((contact) => {
      delete contact.byUser;
      return contact;
    });

    return user;
  } catch (err) {
    logger.error(`while finding user ${userId}`, err);
    throw err;
  }
}

async function getByUsername(username) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ username });
    return user;
  } catch (err) {
    logger.error(`while finding user ${username}`, err);
    throw err;
  }
}

async function remove(userId) {
  try {
    const collection = await dbService.getCollection("user");
    await collection.deleteOne({ _id: ObjectId(userId) });
  } catch (err) {
    logger.error(`cannot remove user ${userId}`, err);
    throw err;
  }
}

async function update(user) {
  try {
    // peek only updatable fields!
    const userToSave = {
      _id: ObjectId(user._id),
      username: user.username,
      fullname: user.fullname,
      coins: user.coins,
    };
    const collection = await dbService.getCollection("user");
    await collection.updateOne({ _id: userToSave._id }, { $set: userToSave });
    return userToSave;
  } catch (err) {
    logger.error(`cannot update user ${user._id}`, err);
    throw err;
  }
}
