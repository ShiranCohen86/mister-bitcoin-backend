const dbService = require("../../services/db.service");
// const logger = require('../../services/logger.service')
const reviewService = require("../review/review.service");
const ObjectId = require("mongodb").ObjectId;

const gContacts = [
  {
    _id: "5a56640269f443a5d64b32ca",
    contactName: "Ochoa Hyde",
    contactEmail: "ochoahyde@renovize.com",
    contactPhone: "+1 (968) 593-3824",
  },
  {
    _id: "5a5664025f6ae9aa24a99fde",
    contactName: "Hallie Mclean",
    contactEmail: "halliemclean@renovize.com",
    contactPhone: "+1 (948) 464-2888",
  },
  {
    _id: "5a56640252d6acddd183d319",
    contactName: "Parsons Norris",
    contactEmail: "parsonsnorris@renovize.com",
    contactPhone: "+1 (958) 502-3495",
  },
  {
    _id: "5a566402ed1cf349f0b47b4d",
    contactName: "Rachel Lowe",
    contactEmail: "rachellowe@renovize.com",
    contactPhone: "+1 (911) 475-2312",
  },
  {
    _id: "5a566402abce24c6bfe4699d",
    contactName: "Dominique Soto",
    contactEmail: "dominiquesoto@renovize.com",
    contactPhone: "+1 (807) 551-3258",
  },
  {
    _id: "5a566402a6499c1d4da9220a",
    contactName: "Shana Pope",
    contactEmail: "shanapope@renovize.com",
    contactPhone: "+1 (970) 527-3082",
  },
  {
    _id: "5a566402f90ae30e97f990db",
    contactName: "Faulkner Flores",
    contactEmail: "faulknerflores@renovize.com",
    contactPhone: "+1 (952) 501-2678",
  },
  {
    _id: "5a5664027bae84ef280ffbdf",
    contactName: "Holder Bean",
    contactEmail: "holderbean@renovize.com",
    contactPhone: "+1 (989) 503-2663",
  },
  {
    _id: "5a566402e3b846c5f6aec652",
    contactName: "Rosanne Shelton",
    contactEmail: "rosanneshelton@renovize.com",
    contactPhone: "+1 (968) 454-3851",
  },
  {
    _id: "5a56640272c7dcdf59c3d411",
    contactName: "Pamela Nolan",
    contactEmail: "pamelanolan@renovize.com",
    contactPhone: "+1 (986) 545-2166",
  },
  {
    _id: "5a5664029a8dd82a6178b15f",
    contactName: "Roy Cantu",
    contactEmail: "roycantu@renovize.com",
    contactPhone: "+1 (929) 571-2295",
  },
  {
    _id: "5a5664028c096d08eeb13a8a",
    contactName: "Ollie Christian",
    contactEmail: "olliechristian@renovize.com",
    contactPhone: "+1 (977) 419-3550",
  },
  {
    _id: "5a5664026c53582bb9ebe9d1",
    contactName: "Nguyen Walls",
    contactEmail: "nguyenwalls@renovize.com",
    contactPhone: "+1 (963) 471-3181",
  },
  {
    _id: "5a56640298ab77236845b82b",

    contactName: "Glenna Santana",
    contactEmail: "glennasantana@renovize.com",
    contactPhone: "+1 (860) 467-2376",
  },
  {
    _id: "5a56640208fba3e8ecb97305",
    contactName: "Malone Clark",
    contactEmail: "maloneclark@renovize.com",
    contactPhone: "+1 (818) 565-2557",
  },
  {
    _id: "5a566402abb3146207bc4ec5",
    contactName: "Floyd Rutledge",
    contactEmail: "floydrutledge@renovize.com",
    contactPhone: "+1 (807) 597-3629",
  },
  {
    _id: "5a56640298500fead8cb1ee5",
    contactName: "Grace James",
    contactEmail: "gracejames@renovize.com",
    contactPhone: "+1 (959) 525-2529",
  },
  {
    _id: "5a56640243427b8f8445231e",
    contactName: "Tanner Gates",
    contactEmail: "tannergates@renovize.com",
    contactPhone: "+1 (978) 591-2291",
  },
  {
    _id: "5a5664025c3abdad6f5e098c",
    contactName: "Lilly Conner",
    contactEmail: "lillyconner@renovize.com",
    contactPhone: "+1 (842) 587-3812",
  },
];

module.exports = {
  query,
  getById,
  getByUsername,
  remove,
  update,
  add,
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

    user.givenReviews = await reviewService.query({
      byUserId: ObjectId(user._id),
    });
    user.givenReviews = user.givenReviews.map((review) => {
      delete review.byUser;
      return review;
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

async function add(user) {
  try {
    // peek only updatable fields!
    const userToAdd = {
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      coins: user.coins || 100,
      contacts: user.contacts || gContacts,
      moves: user.moves || [],
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
