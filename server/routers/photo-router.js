const express = require("express");
const photo = require("../controllers/photo-controller");

const router = express.Router();
router.get("/get-all-photo/:id", photo.getProductPhoto);

module.exports = router;
