const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  house: { type: String, required: true },
  area: { type: String, required: true },
  type: { type: String, enum: ["Home", "Office", "Friends & Family"], required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
