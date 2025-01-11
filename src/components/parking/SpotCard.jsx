/* eslint-disable react/prop-types */
import Button from "../common/Button";

const SpotCard = ({ spot, isSelected, onClick, onBook }) => {
  return (
    <div
      className={`
        p-4 rounded-lg shadow-md transition-all
        ${isSelected ? "bg-gray-200 border-2 border-black-900" : "bg-white"}
      `}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{spot.name}</h3>
          <p className="text-gray-600">
            {(spot.distance / 1000).toFixed(1)}km away
          </p>
          <p className="text-gray-600">
            {Math.round(spot.duration / 60)} min drive
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">₹{spot.cost_per_hour}/hr</p>
          <p
            className={`font-medium ${
              spot.available_spaces > 5 ? "text-green-600" : "text-orange-600"
            }`}
          >
            {spot.available_spaces} spots left
          </p>
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 space-x-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${spot.latitude},${spot.longitude}`
              );
            }}
          >
            Navigate
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              onBook(spot);
            }}
          >
            Book Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default SpotCard;
