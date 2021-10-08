const contactService = require("./contact.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function getContact(req, res) {
  try {
    const loggedUserId = req.session.user._id;
    const contactId = req.params.id;
    const contact = await contactService.getById(contactId, loggedUserId);
    res.send(contact);
  } catch (err) {
    logger.error("Failed to get contact", err);
    res.status(500).send({ err: "Failed to get contact" });
  }
}

async function getContacts(req, res) {
  try {
    // const filterBy = {
    //   txt: req.query?.txt || "",
    // };
    console.log(req.session);
    const loggedUserId = req.session.user._id;

    const contacts = await contactService.query((filterBy = {}), loggedUserId);
    res.send(contacts);
  } catch (err) {
    logger.error("Failed to get contacts", err);
    res.status(500).send({ err: "Failed to get contacts" });
  }
}

async function addContact(req, res) {
  try {
    var contact = req.body;
    const loggedUserId = req.session.user._id;

    contact = await contactService.add(contact, loggedUserId);
    // console.log("CTRL SessionId:", req.sessionID);
    // socketService.broadcast({ type: "contact-added", data: contact });
    // socketService.emitToAll({
    //   type: "user-updated",
    //   data: contact.byUser,
    //   room: req.session.user._id,
    // });
    res.send(contact);
  } catch (err) {
    console.log(err);
    logger.error("Failed to add contact", err);
    res.status(500).send({ err: "Failed to add contact" });
  }
}

async function deleteContact(req, res) {
  try {
    const contactId = req.params.id;
    await contactService.remove(contactId);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete contact", err);
    res.status(500).send({ err: "Failed to delete contact" });
  }
}

async function updateContact(req, res) {
  try {
    const contact = req.body;
    const loggedUserId = req.session.user._id;

    const updatedContact = await contactService.update(contact, loggedUserId);
    res.send(updatedContact);
    // socketService.broadcast({
    //   type: "contact-updated",
    //   data: contact,
    //   to: savedContact._id,
    // });
  } catch (err) {
    logger.error("Failed to update contact", err);
    res.status(500).send({ err: "Failed to update contact" });
  }
}

module.exports = {
  getContact,
  getContacts,
  deleteContact,
  updateContact,
  addContact,
};

// async function getContact(req, res) {
//   try {
//     const contact = await contactService.getById(req.params.id);
//     res.send(contact);
//   } catch (err) {
//     logger.error("Failed to get contact", err);
//     res.status(500).send({ err: "Failed to get contact" });
//   }
// }

// async function getContacts(req, res) {
//   try {
//     const filterBy = {
//       txt: req.query?.txt || "",
//     };
//     const contacts = await contactService.query(filterBy);
//     res.send(contacts);
//   } catch (err) {
//     logger.error("Failed to get contacts", err);
//     res.status(500).send({ err: "Failed to get contacts" });
//   }
// }

// async function deleteContact(req, res) {
//   try {
//     await contactService.remove(req.params.id);
//     res.send({ msg: "Deleted successfully" });
//   } catch (err) {
//     logger.error("Failed to delete contact", err);
//     res.status(500).send({ err: "Failed to delete contact" });
//   }
// }

// async function updateContact(req, res) {
//   try {
//     const contact = req.body;
//     const savedContact = await contactService.update(contact);
//     res.send(savedContact);
//     // socketService.broadcast({
//     //   type: "contact-updated",
//     //   data: contact,
//     //   to: savedContact._id,
//     // });
//   } catch (err) {
//     logger.error("Failed to update contact", err);
//     res.status(500).send({ err: "Failed to update contact" });
//   }
// }
