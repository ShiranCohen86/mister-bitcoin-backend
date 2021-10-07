const express = require("express");
const {
  requireAuth,
  requireAdmin,
} = require("../../middlewares/requireAuth.middleware");
const { log } = require("../../middlewares/logger.middleware");
const {
  addContactRequest,
  getContactRequests,
  getContactReqById,
} = require("./contactReq.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", log, getContactRequests);
router.get("/:id", log, getContactReqById);
router.post("/", requireAuth, addContactRequest);

module.exports = router;