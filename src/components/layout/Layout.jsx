/* eslint-disable react/prop-types */
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <div className="flex">
//         <Sidebar className="h-full" />
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import Button from "../common/Button";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <header className="bg-white shadow-sm border-y-2">
          <div className="p-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-2xl text-black-600">
              ParkSpot
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-200 bg-white">
              <div className="p-4 space-y-4">
                {/* User Info */}
                {user && (
                  <div className="px-2 py-3 bg-gray-50 rounded-md">
                    <span className="text-gray-700">{user.email}</span>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="space-y-2">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Find Parking
                  </Link>
                  <Link
                    to="/history"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Bookings
                  </Link>
                </div>

                {/* Auth Button */}
                <div className="pt-2 border-t border-gray-200">
                  {user ? (
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-left"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar className="h-full" />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
