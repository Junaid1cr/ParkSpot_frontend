import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../components/booking/BookingCard";
import LoadingSpinner from "../components/common/LoadingSpinner";
import api from "../services/api";

const BookingHistory = () => {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCurrentBooking();
  }, []);

  const fetchCurrentBooking = async () => {
    try {
      const response = await api.get("/bookings/current");
      setCurrentBooking(response.data.data);
    } catch (error) {
      setError("Error fetching booking details");
      console.error("Error fetching current booking:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteBooking = async (bookingId) => {
    try {
      await api.post(`/bookings/${bookingId}/complete`);
      navigate("/"); // Redirect to dashboard after completion
    } catch (error) {
      setError("Failed to complete booking");
      console.error("Error completing booking:", error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Current Booking</h1>

      {/* {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )} */}

      {currentBooking ? (
        <BookingCard
          booking={currentBooking}
          onComplete={handleCompleteBooking}
        />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No active booking found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            Find a parking spot
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
