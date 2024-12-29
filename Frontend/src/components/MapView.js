import React, { useEffect } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import "./MapView.css";

const MapView = ({ google, currentLocation, onLocationChange }) => {
  useEffect(() => {
    if (!currentLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationChange({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => console.error("Geolocation permission denied!")
      );
    }
  }, [currentLocation, onLocationChange]);

  return (
    <Map
      google={google}
      zoom={14}
      style={{ width: "100%", height: "400px", borderRadius: "10px" }}
      initialCenter={currentLocation}
      center={currentLocation}
      onClick={(mapProps, map, clickEvent) => {
        const lat = clickEvent.latLng.lat();
        const lng = clickEvent.latLng.lng();
        onLocationChange({ lat, lng });
      }}
    >
      <Marker position={currentLocation} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapView);
