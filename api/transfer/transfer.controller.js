const transferService = require("./transfer.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function addTransfer(req, res) {
  try {
    const { transferAmount } = req.body;
    const { contactId } = req.body;
    const loggedUserId = req.session.userId;
    // console.log({ transferAmount, contactId, loggedUserId });

    const transfer = await transferService.addTransfer(
      transferAmount,
      loggedUserId,
      contactId
    );
    res.send(transfer);
  } catch (err) {
    // logger.error("Failed to update user", err);
    res.status(500).send(err);
  }
}

async function getTransfers(req, res) {
  try {
    const loggedUserId = req.session.userId;
    const transfers = await transferService.getTransfers(loggedUserId);
    res.send(transfers);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}

async function getTransfersByContactEmail(req, res) {
  try {
    const contactEmail = req.params.email;
    const loggedUserId = req.session.userId;
    const transfers = await transferService.getTransfersByContactEmail(
      contactEmail,
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
  getTransfersByContactEmail,
};
