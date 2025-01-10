/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

const customMarkerIcon = L.icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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

      <Marker
        position={[userPosition.lat, userPosition.lng]}
        icon={customMarkerIcon}
      >
        <Popup>You are here</Popup>
      </Marker>

      {/* Markers for parking spots */}
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          icon={customMarkerIcon}
          eventHandlers={{
            click: () => onSpotSelect(spot),
          }}
        >
          <Popup>
            <strong>{spot.name}</strong>
            <br />
            Available spaces: {spot.available_spaces}
            <br />
            Cost per hour: ${spot.cost_per_hour}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
