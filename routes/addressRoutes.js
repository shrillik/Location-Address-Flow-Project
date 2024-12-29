const express = require("express");
const {
  getAllAddresses,
  createAddress,
  deleteAddress,
  updateAddress
} = require("../controllers/addressController");

const router = express.Router();

router.get("/", getAllAddresses); // Get all addresses
router.post("/", createAddress); // Add a new address
router.delete("/:id", deleteAddress); // Delete an address
router.put("/:id", updateAddress); // Update an address

module.exports = router;
