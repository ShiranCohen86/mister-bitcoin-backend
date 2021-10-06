const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;
const asyncLocalStorage = require("../../services/als.service");
const logger = require("../../services/logger.service");

async function query(filterBy = {}, loggedUserId) {
  try {
    const contactCollection = await dbService.getCollection("contact");
    const userCollection = await dbService.getCollection("user");
    // const criteria = _buildCriteria(filterBy);
    // const contacts = await collection.find(criteria).toArray();
    var contacts = await contactCollection
      .find({
        $or: [
          { fromUserId: ObjectId(loggedUserId) },
          { toUserId: ObjectId(loggedUserId) },
        ],
      })
      .toArray();

    contacts = contacts.map(async (contact) => {
      var user;
      if (contact.toUserId == loggedUserId) {
        user = await userCollection.findOne({
          _id: ObjectId(contact.fromUserId),
        });
        contact.username = user.username;
      } else if (contact.fromUserId == loggedUserId) {
        user = await userCollection.findOne({
          _id: ObjectId(contact.toUserId),
        });
        contact.username = user.username;
      }
      return contact;

      // delete contact.fromUserId;
      // delete contact.toUserId;
      // delete contact.status;
      // delete contact.statusAt;
    });
    return Promise.all(contacts);
  } catch (err) {
    logger.error("cannot find contacts", err);
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
async function remove(contactId) {
  try {
    const store = asyncLocalStorage.getStore();
    const { userId, isAdmin } = store;
    const collection = await dbService.getCollection("contact");
    // remove only if user is owner/admin
    const query = { _id: ObjectId(contactId) };
    if (!isAdmin) query.fromUserId = ObjectId(userId);
    await collection.deleteOne(query);
    // return await collection.deleteOne({ _id: ObjectId(contactId), fromUserId: ObjectId(userId) })
  } catch (err) {
    logger.error(`cannot remove contact ${contactId}`, err);
    throw err;
  }
}

async function add(contact) {
  try {
    // peek only updatable fields!
    const contactToAdd = {
      fromUserId: ObjectId(contact.fromUserId),
      toUserId: ObjectId(contact._id),
      createdAt: Date.now(),
      status: "PENDING",
      statusAt: null,
    };
    const collection = await dbService.getCollection("contact");
    await collection.insertOne(contactToAdd);
    return contactToAdd;
  } catch (err) {
    logger.error("cannot insert contact", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  return criteria;
}

module.exports = {
  query,
  remove,
  add,
  getByUsername,
};
