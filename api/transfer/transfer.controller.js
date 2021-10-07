const transferService = require("./transfer.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function addTransfer(req, res) {
  try {
    const { amount } = req.body;
    const { contactId } = req.body;
    const loggedUserId = req.session.user._id;
    const transfer = await transferService.addTransfer(
      amount,
      loggedUserId,
      contactId
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

module.exports = {
  addTransfer,
  getTransfers,
};
