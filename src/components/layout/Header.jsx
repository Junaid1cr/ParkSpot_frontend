// import { Link } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";
// import Button from "../common/Button";

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-white shadow-sm border-y-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <Link to="/" className="font-bold text-4xl text-black-600">
//             ParkSpot
//           </Link>

//           <nav className="flex items-center space-x-4">
//             <Link to="/" className="text-gray-700 hover:text-gray-900">
//               Find Parking
//             </Link>
//             <Link to="/history" className="text-gray-700 hover:text-gray-900">
//               Bookings
//             </Link>

//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-gray-700">{user.email}</span>
//                 <Button variant="secondary" onClick={logout}>
//                   Logout
//                 </Button>
//               </div>
//             ) : (
//               <Link to="/login">
//                 <Button variant="primary">Login</Button>
//               </Link>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../common/Button";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-y-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="font-bold text-2xl lg:text-4xl text-black-600"
          >
            ParkSpot
          </Link>

          {/* Navigation - Hidden on mobile since it's in the mobile menu */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Find Parking
            </Link>
            <Link to="/history" className="text-gray-700 hover:text-gray-900">
              Bookings
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user.email}</span>
                <Button variant="secondary" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
