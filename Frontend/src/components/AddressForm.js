import React, { useState } from "react";
import "./AddressForm.css";

const AddressForm = ({ onSave }) => {
  const [addressDetails, setAddressDetails] = useState({
    house: "",
    area: "",
    type: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails({ ...addressDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(addressDetails);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add New Address</h2>
      <label>House/Flat/Block No.:</label>
      <input
        type="text"
        name="house"
        value={addressDetails.house}
        onChange={handleChange}
        required
      />
      <label>Apartment/Road/Area:</label>
      <input
        type="text"
        name="area"
        value={addressDetails.area}
        onChange={handleChange}
        required
      />
      <label>Type:</label>
      <select name="type" value={addressDetails.type} onChange={handleChange}>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends & Family">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
