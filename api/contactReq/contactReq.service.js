const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;
const asyncLocalStorage = require("../../services/als.service");
const logger = require("../../services/logger.service");

async function query(filterBy = {}, loggedUserId) {
  try {
    const contactReqCollection = await dbService.getCollection(
      "contact-request"
    );
    const userCollection = await dbService.getCollection("user");
    // const criteria = _buildCriteria(filterBy);
    // const contacts = await collection.find(criteria).toArray();
    var contactRequests = await contactReqCollection
      .find({
        $or: [
          { fromUserId: ObjectId(loggedUserId) },
          { toUserId: ObjectId(loggedUserId) },
        ],
      })
      .toArray();

    contactRequests = contactRequests.map(async (contactReq) => {
      var user;
      if (contactReq.toUserId == loggedUserId) {
        user = await userCollection.findOne({
          _id: ObjectId(contactReq.fromUserId),
        });
        contactReq.username = user.username;
      } else if (contactReq.fromUserId == loggedUserId) {
        user = await userCollection.findOne({
          _id: ObjectId(contactReq.toUserId),
        });
      }
      contactReq.username = user.username;
      contactReq.phone = user.phone;
      contactReq.email = user.email;
      delete contactReq.fromUserId;
      delete contactReq.toUserId;
      delete contactReq.status;
      delete contactReq.statusAt;
      delete contactReq.createdAt;

      return contactReq;
    });
    return Promise.all(contactRequests);
  } catch (err) {
    logger.error("cannot find contacts", err);
    throw err;
  }
}

async function getById(contactReqId, loggedUserId) {
  try {
    const contactReqCollection = await dbService.getCollection(
      "contact-request"
    );
    const userCollection = await dbService.getCollection("user");
    const contactReq = await contactReqCollection.findOne({
      _id: ObjectId(contactReqId),
    });
    const term =
      loggedUserId == contactReq.toUserId
        ? contactReq.fromUserId
        : contactReq.toUserId;
    const user = await userCollection.findOne({ _id: ObjectId(term) });
    delete user.password;

    return user;
  } catch (err) {
    logger.error(`while finding contact ${contactId}`, err);
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

async function add(contact) {
  try {
    // peek only updatable fields!
    const contactToAdd = {
      fromUserId: ObjectId(contact.fromUserId),
      toUserId: ObjectId(contact._id),
      status: "PENDING",
      statusChangedAt: null,
    };
    const collection = await dbService.getCollection("contact-request");
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
  add,
  getByUsername,
  getById,
};
