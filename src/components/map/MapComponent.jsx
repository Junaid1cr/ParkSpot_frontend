/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ spots, selectedSpot, onSpotSelect, userPosition }) => {
  return (
    <MapContainer
      center={[userPosition.lat, userPosition.lng]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* User position marker */}
      <Marker position={[userPosition.lat, userPosition.lng]}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Parking spots markers */}
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          eventHandlers={{
            click: () => onSpotSelect(spot),
          }}
        >
          <Popup>
            {spot.name}
            <br />
            Available spaces: {spot.available_spaces}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
