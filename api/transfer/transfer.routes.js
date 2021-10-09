const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const {
  addTransfer,
  getTransfers,
  getTransfersByContactId,
} = require("./transfer.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", getTransfers);
router.get("/:id", getTransfersByContactId);

router.post("/", addTransfer);

module.exports = router;
