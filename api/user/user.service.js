const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const contactService = require("../contact/contact.service");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  query,
  getById,
  getByEmail,
  remove,
  update,
  add,
  getHeaderDetails,
  getBalance,
};

async function query(filterBy = {}) {
  const criteria = _buildCriteria(filterBy);
  try {
    const collection = await dbService.getCollection("user");
    var users = await collection.find(criteria).toArray();
    users = users.map((user) => {
      delete user.password;
      user.createdAt = ObjectId(user._id).getTimestamp();
      // Returning fake fresh data
      // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
      return user;
    });
    return users;
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function getById(userId) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(userId) });
    delete user.password;
    user.contactsLength = user.contacts.length;
    // delete user.contacts;

    return user;
  } catch (err) {
    logger.error(`while finding user ${userId}`, err);
    throw err;
  }
}

async function getHeaderDetails(userId) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(userId) });
    // const test = await collection.find(
    //   { _id: ObjectId(userId) }.project({ coins: 1, fullname: 1 })
    // );

    return { balance: user.coins, fullname: user.fullname };
  } catch (err) {
    logger.error(`while finding user ${userId}`, err);
    throw err;
  }
}
async function getBalance(userId) {
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ _id: ObjectId(userId) });

    return user.coins;
  } catch (err) {
    logger.error(`while finding user ${userId}`, err);
    throw err;
  }
}

async function getByEmail(email) {
  email = email.toLowerCase();
  try {
    const collection = await dbService.getCollection("user");
    const user = await collection.findOne({ email });
    return user;
  } catch (err) {
    logger.error(`while finding email ${email}`, err);
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

    const collection = await dbService.getCollection("user");
    user._id = ObjectId(user._id);
    await collection.updateOne({ _id: user._id }, { $set: user });
    return user;
  } catch (err) {
    logger.error(`cannot update user ${user._id}`, err);
    throw err;
  }
}

async function add(user) {
  try {
    // peek only updatable fields!
    const userToAdd = {
      password: user.password,
      fullname: user.fullname,
      coins: user.coins || 100,
      email: user.email,
      phone: user.phone,
      contacts: [],
      img: user.img || "",
    };

    const collection = await dbService.getCollection("user");
    await collection.insertOne(userToAdd);

    return userToAdd;
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
