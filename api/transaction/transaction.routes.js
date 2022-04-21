const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const {
  addTransaction,
  getTransactions,
  getTransactionsByContactEmail,
} = require("./transaction.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", getTransactions);
router.get("/:email", getTransactionsByContactEmail);

router.post("/", addTransaction);

module.exports = router;
