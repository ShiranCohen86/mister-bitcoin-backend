const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const { log } = require("../../middlewares/logger.middleware");
const {
  addContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("./contact.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", log, getContacts);
router.get("/:id", log, getContact);
router.post("/", addContact);
router.put("/:id", updateContact);

router.delete("/:id", requireAuth, requireAdmin, deleteContact);
module.exports = router;
