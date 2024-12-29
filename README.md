# Location/Address Flow Project

This project implements a Location/Address flow using React for the frontend and Node.js for the backend. It allows users to manage their delivery locations, integrating Google Maps for geolocation and manual address selection.

---
## File Structure
Frontend/
src/
├── components/
│   ├── Modal.js
│   ├── MapView.js
│   ├── AddressForm.js
│   └── AddressList.js
├── pages/
│   ├── Home.js
│   ├── AddressManagement.js
│   └── LocationSelection.js
├── utils/
│   ├── api.js
│   └── geolocation.js
├── App.js
├── index.js
└── .env


Backend/
├── controllers/
│   ├── addressController.js
├── models/
│   ├── address.js
├── routes/
│   ├── addressRoutes.js
├── server.js
└── .env

## Features

### Frontend:
1. Popup modal to request location permissions.
2. Google Maps integration for selecting a location.
3. Address form for entering details (e.g., house number, area).
4. Saved addresses management interface.
5. Responsive and user-friendly UI.

### Backend:
1. APIs for creating, reading, updating, and deleting addresses.
2. MongoDB Atlas for data storage.
3. Express framework for routing and middleware.
4. Connection with the frontend for real-time data updates.

---

## Technologies Used

### Frontend:
- React
- Google Maps API
- Axios
- CSS (Responsive Design)

### Backend:
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
