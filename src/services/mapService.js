import api from "./api";

export const findNearbySpots = async (lat, lng, radius, sortBy) => {
  const { data } = await api.get("/parking/spots", {
    params: { lat, lng, radius, sortBy },
  });
  return data;
};

export const createBooking = async (spotId, estimatedHours) => {
  const { data } = await api.post("/bookings/create", {
    spotId,
    estimatedHours,
  });
  return data;
};

export const completeBooking = async (bookingId) => {
  const { data } = await api.post(`/bookings/${bookingId}/complete`);
  return data;
};
