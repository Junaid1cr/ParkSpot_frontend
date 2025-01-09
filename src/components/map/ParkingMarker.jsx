/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-map-gl";

const ParkingMarker = ({ spot, isSelected, onClick }) => {
  return (
    <Marker longitude={spot.longitude} latitude={spot.latitude} anchor="bottom">
      <div
        onClick={() => onClick(spot)}
        className={`
          cursor-pointer transform transition-transform
          ${isSelected ? "scale-125" : "hover:scale-110"}
        `}
      >
        <div
          className={`
          w-8 h-8 rounded-full flex items-center justify-center
          ${isSelected ? "bg-red-600" : "bg-gray-600"}
          text-white font-bold
        `}
        >
          P
        </div>
      </div>
      {isSelected && (
        <Popup
          longitude={spot.longitude}
          latitude={spot.latitude}
          anchor="top"
          closeButton={false}
        >
          <div className="p-2">
            <h3 className="font-bold">{spot.name}</h3>
            <p>Available: {spot.available_spaces}</p>
            <p>Cost: {spot.cost_per_hour}/hr</p>
          </div>
        </Popup>
      )}
    </Marker>
  );
};

export default ParkingMarker;
