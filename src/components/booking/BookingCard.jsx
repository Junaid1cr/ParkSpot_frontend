/* eslint-disable react/prop-types */
import Button from "../common/Button";

const BookingCard = ({ booking, onComplete }) => {
  const isActive = booking.status === "active";
  const startTime = new Date(booking.start_time);
  const endTime = booking.end_time ? new Date(booking.end_time) : null;

  const formatDuration = (start, end) => {
    if (!end) return "Ongoing";
    const diff = Math.floor((end - start) / (1000 * 60));
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 z-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{booking.spot_name}</h3>
          <p className="text-gray-600">
            Started: {startTime.toLocaleTimeString()}
          </p>
          {endTime && (
            <p className="text-gray-600">
              Ended: {endTime.toLocaleTimeString()}
            </p>
          )}
          <p className="text-gray-600">
            Duration: {formatDuration(startTime, endTime)}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">
            ${booking.final_cost || booking.estimated_cost}
          </p>
          <span
            className={`
            px-2 py-1 rounded-full text-sm
            ${
              isActive
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          `}
          >
            {booking.status}
          </span>
        </div>
      </div>

      {isActive && (
        <div className="mt-4">
          <Button variant="primary" onClick={() => onComplete(booking.id)}>
            Complete Booking
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
