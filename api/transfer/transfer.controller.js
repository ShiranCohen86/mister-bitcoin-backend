const transferService = require("./transfer.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function addTransfer(req, res) {
  try {
    const { amount } = req.body;
    const { contactEmail } = req.body;
    const loggedUserEmail = req.session.user.email;
    const transfer = await transferService.addTransfer(
      amount,
      loggedUserEmail,
      contactEmail
    );
    res.send(transfer);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}

async function getTransfers(req, res) {
  try {
    const loggedUserId = req.session.user._id;
    const transfers = await transferService.getTransfers(loggedUserId);
    res.send(transfers);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}

async function getTransfersByContactId(req, res) {
  try {
    const contactId = req.params.id;
    const loggedUserId = req.session.user._id;
    const transfers = await transferService.getTransfersByContactId(
      contactId,
      loggedUserId
    );
    res.send(transfers);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}

module.exports = {
  addTransfer,
  getTransfers,
  getTransfersByContactId,
};
