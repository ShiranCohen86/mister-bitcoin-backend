const logger = require("../../services/logger.service");
const socketService = require("../../services/socket.service");
const contactReqService = require("./contactReq.service");

async function getContactRequests(req, res) {
  try {
    const contactRequests = await contactReqService.query(
      req.query,
      req.session.user._id
    );
    res.send(contactRequests);
  } catch (err) {
    logger.error("Cannot get contacts", err);
    res.status(500).send({ err: "Failed to get contacts" });
  }
}

async function getContactReqById(req, res) {
  try {
    const contactRequest = await contactReqService.getById(
      req.params.id,
      req.session.user._id
    );
    res.send(contactRequest);
  } catch (err) {
    logger.error("Failed to get contact", err);
    res.status(500).send({ err: "Failed to get contact" });
  }
}

async function deleteContact(req, res) {
  try {
    await contactReqService.remove(req.params.id);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete contact", err);
    res.status(500).send({ err: "Failed to delete contact" });
  }
}

async function addContactRequest(req, res) {
  try {
    const { username } = req.body;
    var contactRequest = await contactReqService.getByUsername(username);
    contactRequest.fromUserId = req.session.user._id;
    contactRequest = await contactReqService.add(contactRequest);
    res.send(contactRequest);
  } catch (err) {
    console.log(err);
    logger.error("Failed to add contact", err);
    res.status(500).send({ err: "Failed to add contact" });
  }
}

module.exports = {
  getContactRequests,
  deleteContact,
  addContactRequest,
  getContactReqById,
};
