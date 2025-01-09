// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGeolocation } from "../hooks/useGeolocation";
// import MapComponent from "../components/map/MapComponent";
// import SpotList from "../components/parking/SpotList";
// import BookingConfirmation from "../components/booking/BookingConfirmation";
// import LoadingSpinner from "../components/common/LoadingSpinner";
// import { findNearbySpots, createBooking } from "../services/mapService";

// const Dashboard = () => {
//   const [spots, setSpots] = useState([]);
//   const [selectedSpot, setSelectedSpot] = useState(null);
//   const [showBooking, setShowBooking] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sortBy, setSortBy] = useState("cost"); // Default sorting by cost
//   const { position } = useGeolocation();
//   const navigate = useNavigate();

//   const loadSpots = async (selectedSortBy) => {
//     if (!position) return;

//     try {
//       setLoading(true); // Show loading while fetching
//       const { data } = await findNearbySpots(
//         position.lat,
//         position.lng,
//         5000,
//         selectedSortBy
//       );
//       setSpots(data);
//     } catch (error) {
//       setError("Error loading parking spots. Please try again.");
//       console.error("Error loading spots:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadSpots(sortBy); // Fetch spots when position or sort criteria changes
//   }, [position, sortBy]);

//   const handleSortChange = (event) => {
//     const selectedSortBy = event.target.value;
//     setSortBy(selectedSortBy);
//     loadSpots(selectedSortBy);
//   };

//   const handleBookingConfirm = async (hours) => {
//     try {
//       await createBooking(selectedSpot.id, hours);
//       setShowBooking(false);
//       navigate("/history");
//     } catch (error) {
//       setError("Failed to create booking. Please try again.");
//       console.error("Error creating booking:", error);
//     }
//   };

//   const handleSpotBook = (spot) => {
//     setSelectedSpot(spot);
//     setShowBooking(true);
//   };

//   if (!position || loading) {
//     return (
//       <div className="h-[calc(100vh-64px)] flex items-center justify-center">
//         <LoadingSpinner />
//         <p className="ml-2">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-[calc(100vh-64px)]">
//       {error && (
//         <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       )}

//       <div className="w-1/2 p-4 overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-4">Available Parking Spots</h1>

//         {/* Dropdown for sorting */}
//         <div className="mb-4">
//           <label htmlFor="sort" className="mr-2 text-lg font-medium">
//             Sort By:
//           </label>
//           <select
//             id="sort"
//             value={sortBy}
//             onChange={handleSortChange}
//             className="border border-gray-300 rounded px-2 py-1"
//           >
//             <option value="cost">Cost</option>
//             <option value="distance">Distance</option>
//           </select>
//         </div>

//         <SpotList
//           spots={spots}
//           selectedSpot={selectedSpot}
//           onSpotSelect={setSelectedSpot}
//           onSpotBook={handleSpotBook}
//         />
//       </div>

//       <div className="w-2/3 relative z-0">
//         <MapComponent
//           spots={spots}
//           selectedSpot={selectedSpot}
//           onSpotSelect={setSelectedSpot}
//           userPosition={position}
//         />
//       </div>

//       {showBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center">
//           <BookingConfirmation
//             spot={selectedSpot}
//             onConfirm={handleBookingConfirm}
//             onCancel={() => setShowBooking(false)}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../hooks/useGeolocation";
import MapComponent from "../components/map/MapComponent";
import SpotList from "../components/parking/SpotList";
import BookingConfirmation from "../components/booking/BookingConfirmation";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { findNearbySpots, createBooking } from "../services/mapService";

const Dashboard = () => {
  const [spots, setSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("cost"); // Default sorting by cost
  const { position } = useGeolocation();
  const navigate = useNavigate();

  const loadSpots = async (selectedSortBy) => {
    if (!position) return;

    try {
      setLoading(true); // Show loading while fetching
      const { data } = await findNearbySpots(
        position.lat,
        position.lng,
        5000,
        selectedSortBy
      );
      setSpots(data);
    } catch (error) {
      setError("Error loading parking spots. Please try again.");
      console.error("Error loading spots:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSpots(sortBy); // Fetch spots when position or sort criteria changes
  }, [position, sortBy]);

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    loadSpots(selectedSortBy);
  };

  const handleBookingConfirm = async (hours) => {
    try {
      await createBooking(selectedSpot.id, hours);
      setShowBooking(false);
      navigate("/history");
    } catch (error) {
      setError("Failed to create booking. Please try again.");
      console.error("Error creating booking:", error);
    }
  };

  const handleSpotBook = (spot) => {
    setSelectedSpot(spot);
    setShowBooking(true);
  };

  if (!position || loading) {
    return (
      <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <LoadingSpinner />
        <p className="ml-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="w-full lg:w-1/2 p-4 overflow-y-auto order-2 lg:order-1">
        <h1 className="text-2xl font-bold mb-4">Available Parking Spots</h1>

        <div className="mb-4">
          <label htmlFor="sort" className="mr-2 text-lg font-medium">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="cost">Cost</option>
            <option value="distance">Distance</option>
          </select>
        </div>

        <SpotList
          spots={spots}
          selectedSpot={selectedSpot}
          onSpotSelect={setSelectedSpot}
          onSpotBook={handleSpotBook}
        />
      </div>

      <div className="w-full lg:w-2/3 h-[300px] lg:h-auto relative z-0 order-1 lg:order-2">
        <MapComponent
          spots={spots}
          selectedSpot={selectedSpot}
          onSpotSelect={setSelectedSpot}
          userPosition={position}
        />
      </div>

      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center">
          <BookingConfirmation
            spot={selectedSpot}
            onConfirm={handleBookingConfirm}
            onCancel={() => setShowBooking(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
