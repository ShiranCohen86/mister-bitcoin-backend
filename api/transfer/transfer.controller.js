const transferService = require("./transfer.service");
const socketService = require("../../services/socket.service");
const logger = require("../../services/logger.service");

async function addTransfer(req, res) {
  try {
    const { transferAmount } = req.body;
    const { contactEmail } = req.body;
    const loggedUserEmail = req.session.user.email;
    const loggedUserCoins = req.session.user.coins;
    const { newTransfer, updatedUser } = await transferService.addTransfer(
      transferAmount,
      loggedUserEmail,
      contactEmail,
      loggedUserCoins
    );
    req.session.user = updatedUser;
    res.send({ newTransfer, updatedUser });
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
