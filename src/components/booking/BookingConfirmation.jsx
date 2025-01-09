/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const BookingConfirmation = ({ spot, onConfirm, onCancel }) => {
  const [hours, setHours] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hours < 1) {
      setError("Minimum booking duration is 1 hour");
      return;
    }
    try {
      await onConfirm(hours);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>

      <div className="mb-6">
        <h3 className="font-bold">{spot.name}</h3>
        <p className="text-gray-600">Rate: ${spot.cost_per_hour}/hour</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Duration (hours)"
          type="number"
          min="1"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          error={error}
        />

        <div className="flex justify-between">
          <p className="text-lg">
            Total Cost: ${(spot.cost_per_hour * hours).toFixed(2)}
          </p>
        </div>

        <div className="flex space-x-4">
          <Button variant="secondary" onClick={onCancel} type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Confirm Booking
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingConfirmation;
