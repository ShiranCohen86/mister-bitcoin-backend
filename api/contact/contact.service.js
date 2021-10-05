const dbService = require("../../services/db.service");
const ObjectId = require("mongodb").ObjectId;
const asyncLocalStorage = require("../../services/als.service");

async function query(filterBy = {}, loggedUserId) {
  try {
    // const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(loggedUserId) });
    // const contacts = await collection.find(criteria).toArray()
    // var contacts = await collection
    //   .aggregate([
    //     {
    //       $match: filterBy,
    //     },
    //     {
    //       $lookup: {
    //         localField: "byUserId",
    //         from: "user",
    //         foreignField: "_id",
    //         as: "byUser",
    //       },
    //     },
    //     {
    //       $unwind: "$byUser",
    //     },
    //     {
    //       $lookup: {
    //         localField: "aboutUserId",
    //         from: "user",
    //         foreignField: "_id",
    //         as: "aboutUser",
    //       },
    //     },
    //     {
    //       $unwind: "$aboutUser",
    //     },
    //   ])
    //   .toArray();
    // contacts = contacts.map((contact) => {
    //   contact.byUser = {
    //     _id: contact.byUser._id,
    //     fullname: contact.byUser.fullname,
    //   };
    //   contact.aboutUser = {
    //     _id: contact.aboutUser._id,
    //     fullname: contact.aboutUser.fullname,
    //   };
    //   delete contact.byUserId;
    //   delete contact.aboutUserId;
    //   return contact;
    // });

    return user.contacts;
  } catch (err) {
    logger.error("cannot find contacts", err);
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
    if (!isAdmin) query.byUserId = ObjectId(userId);
    await collection.deleteOne(query);
    // return await collection.deleteOne({ _id: ObjectId(contactId), byUserId: ObjectId(userId) })
  } catch (err) {
    logger.error(`cannot remove contact ${contactId}`, err);
    throw err;
  }
}

async function add(contact) {
  try {
    // peek only updatable fields!
    const contactToAdd = {
      byUserId: ObjectId(contact.byUserId),
      aboutUserId: ObjectId(contact.aboutUserId),
      txt: contact.txt,
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
};
