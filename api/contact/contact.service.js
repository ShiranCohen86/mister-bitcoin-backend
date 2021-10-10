const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;
const asyncLocalStorage = require("../../services/als.service");
const logger = require("../../services/logger.service");

module.exports = {
  query,
  getById,
  remove,
  update,
  add,
};

async function query(filterBy = {}, loggedUserId) {
  // const criteria = _buildCriteria(filterBy);
  try {
    const collection = await dbService.getCollection("user");
    const loggedUser = await collection.findOne({
      _id: ObjectId(loggedUserId),
    });
    return loggedUser.contacts;
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function getById(contactId, loggedUserId) {
  try {
    const collection = await dbService.getCollection("user");
    const loggedUser = await collection.findOne({
      _id: ObjectId(loggedUserId),
    });

    const contact = loggedUser.contacts.find(
      (contact) => contact._id.toString() === contactId.toString()
    );
    return contact;
  } catch (err) {
    logger.error(`while finding user ${contactId}`, err);
    throw err;
  }
}

async function remove(contactId) {
  try {
    const collection = await dbService.getCollection("contact");
    await collection.deleteOne({ _id: ObjectId(contactId) });
  } catch (err) {
    logger.error(`cannot remove user ${userId}`, err);
    throw err;
  }
}

async function update(contact, loggedUserId) {
  try {
    const collection = await dbService.getCollection("user");
    const loggedUser = await collection.findOne({
      _id: ObjectId(loggedUserId),
    });
    const idx = loggedUser.contacts.findIndex(
      (oldContact) => oldContact._id === contact._id
    );
    loggedUser.contacts.splice(idx, 1, contact);

    await collection.updateOne({ _id: loggedUser._id }, { $set: loggedUser });
    return contact;
  } catch (err) {
    logger.error(`cannot update user ${user._id}`, err);
    throw err;
  }
}

async function add(contact, loggedUserId) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(loggedUserId) });
    contact._id = ObjectId();
    user.contacts.push(contact);
    return await collection.updateOne({ _id: user._id }, { $set: user });
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
