const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;
const asyncLocalStorage = require("../../services/als.service");

async function query(filterBy = {}) {
  try {
    // const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection("contact");
    // const contacts = await collection.find(criteria).toArray()
    var contacts = await collection
      .aggregate([
        {
          $match: filterBy,
        },
        {
          $lookup: {
            localField: "fromUserId",
            from: "user",
            foreignField: "_id",
            as: "fromUser",
          },
        },
        {
          $unwind: "$fromUser",
        },
        {
          $lookup: {
            localField: "toUserId",
            from: "user",
            foreignField: "_id",
            as: "toUser",
          },
        },
        {
          $unwind: "$toUser",
        },
      ])
      .toArray();
    contacts = contacts.map((contact) => {
      contact.fromUser = {
        _id: contact.fromUser._id,
        fullname: contact.fromUser.fullname,
      };
      contact.toUser = {
        _id: contact.toUser._id,
        fullname: contact.toUser.fullname,
      };
      delete contact.fromUserId;
      delete contact.toUserId;
      return contact;
    });

    return contacts;
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
  getByUsername
};
