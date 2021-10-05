const logger = require("../../services/logger.service");
const userService = require("../user/user.service");
const socketService = require("../../services/socket.service");
const contactService = require("./contact.service");

async function getContacts(req, res) {
  try {
    const contacts = await contactService.query(req.query);
    res.send(contacts);
  } catch (err) {
    logger.error("Cannot get contacts", err);
    res.status(500).send({ err: "Failed to get contacts" });
  }
}

async function deleteContact(req, res) {
  try {
    await contactService.remove(req.params.id);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete contact", err);
    res.status(500).send({ err: "Failed to delete contact" });
  }
}

async function addContact(req, res) {
  try {
    const { username } = req.body;
    var contact = await contactService.getByUsername(username);
    contact.fromUserId = req.session.user._id;
    contact = await contactService.add(contact);

    // // prepare the updated contact for sending out
    // contact.fromUser = await userService.getById(contact.fromUserId);
    // contact.toUser = await userService.getById(contact.toUserId);

    // console.log("CTRL SessionId:", req.sessionID);
    // socketService.broadcast({ type: "contact-added", data: contact });
    // socketService.emitToAll({
    //   type: "user-updated",
    //   data: contact.fromUser,
    //   room: req.session.user._id,
    // });
    res.send(contact);
  } catch (err) {
    console.log(err);
    logger.error("Failed to add contact", err);
    res.status(500).send({ err: "Failed to add contact" });
  }
}

module.exports = {
  getContacts,
  deleteContact,
  addContact,
  addContact,
};
