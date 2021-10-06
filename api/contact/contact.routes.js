const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const { log } = require("../../middlewares/logger.middleware");
const {
  addContact,
  getContacts,
  deleteContact,
  getContactById,
} = require("./contact.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", log, getContacts);
router.get("/:id", log, getContactById);
router.post("/", requireAuth, addContact);
router.delete("/:id", requireAuth, deleteContact);

module.exports = router;
