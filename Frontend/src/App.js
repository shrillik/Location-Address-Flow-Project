import React, { useState } from "react";
import Modal from "./components/Modal";
import MapView from "./components/MapView";
import AddressForm from "./components/AddressForm";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsModalOpen(false);
      },
      () => alert("Location permission denied!")
    );
  };

  const handleSaveAddress = (addressDetails) => {
    setSavedAddresses([
      ...savedAddresses,
      { ...addressDetails, ...currentLocation },
    ]);
    alert("Address saved successfully!");
  };

  return (
    <div className="container">
      <h1>Location/Address Flow</h1>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnableLocation={handleEnableLocation}
        onSearchManually={() => setIsModalOpen(false)}
      />
      {currentLocation && (
        <MapView
          onLocationChange={(loc) => setCurrentLocation(loc)}
          currentLocation={currentLocation}
        />
      )}
      <AddressForm onSave={handleSaveAddress} />
      <div>
        <h2>Saved Addresses</h2>
        <ul className="saved-addresses">
          {savedAddresses.map((address, index) => (
            <li key={index} className="address-item">
              <strong>{address.type}</strong>: {address.house}, {address.area}
              <span className="coordinates">
                (Lat: {address.lat}, Lng: {address.lng})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
