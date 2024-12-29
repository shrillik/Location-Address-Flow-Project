const Address = require("../models/addressModel");

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch addresses" });
  }
};

// Create a new address
exports.createAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: "Failed to create address" });
  }
};

// Delete an address
exports.deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    await Address.findByIdAndDelete(id);
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete address" });
  }
};

// Update an address
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAddress = await Address.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedAddress);
  } catch (error) {
    res.status(400).json({ error: "Failed to update address" });
  }
};
