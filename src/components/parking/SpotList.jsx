/* eslint-disable react/prop-types */
import SpotCard from "./SpotCard";
const SpotList = ({ spots, selectedSpot, onSpotSelect, onSpotBook }) => {
  return (
    <div className="space-y-4">
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          spot={spot}
          isSelected={selectedSpot?.id === spot.id}
          onClick={() => onSpotSelect(spot)}
          onBook={() => onSpotBook(spot)} // Make sure this is passed down
        />
      ))}
    </div>
  );
};

export default SpotList;
