const userService = require("./user.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function getUser(req, res) {
  try {
    const user = await userService.getById(req.params._id);
    res.send(user);
  } catch (err) {
    logger.error("Failed to get user", err);
    res.status(500).send({ err: "Failed to get user" });
  }
}

async function getLoggedInUser(req, res) {
  let loggedInUserId;
  if (req.session.userId) {
    loggedInUserId = req.session.userId;
    updatedLoggedUser = await userService.getById(loggedInUserId);
    res.json(updatedLoggedUser);
  }
}

async function getUsers(req, res) {
  try {
    const filterBy = {
      txt: req.query?.txt || "",
    };
    const users = await userService.query(filterBy);
    res.send(users);
  } catch (err) {
    logger.error("Failed to get users", err);
    res.status(500).send({ err: "Failed to get users" });
  }
  
}

async function deleteUser(req, res) {
  try {
    await userService.remove(req.params.id);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete user", err);
    res.status(500).send({ err: "Failed to delete user" });
  }
}

async function updateUser(req, res) {
  try {
    const user = req.body;
    const savedUser = await userService.update(user);
    res.send(savedUser);
    socketService.broadcast({
      type: "user-updated",
      data: review,
      to: savedUser._id,
    });
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}
async function isMailSigned(req, res) {
  try {
    const { email } = req.params;
    const user = await userService.getByEmail(email);
    if (user) res.send(true);
    else res.send(false);
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  getLoggedInUser,
  isMailSigned,
};
