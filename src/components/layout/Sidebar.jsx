// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();

//   const navigation = [
//     { name: "Dashboard", href: "/", icon: "🏠" },
//     { name: "Booking History", href: "/history", icon: "📋" },
//     { name: "Settings", href: "/settings", icon: "⚙️" },
//   ];

//   return (
//     <aside className="w-64 bg-gray-50 h-screen border-r-2 flex flex-col gap-2">
//       <nav className="mt-5 px-2">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             to={item.href}
//             className={`
//               group flex items-center px-2 py-2 text-xl font-medium border-y-1
//               ${
//                 location.pathname === item.href
//                   ? "bg-gray-300 text-black-900"
//                   : "text-black-600 hover:bg-gray-200"
//               }
//             `}
//           >
//             <span className="mr-3">{item.icon}</span>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: "🏠" },
    { name: "Booking History", href: "/history", icon: "📋" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-gray-50 h-[calc(100vh-64px)] border-r-2 flex-shrink-0">
      <nav className="mt-5 px-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`
              group flex items-center px-2 py-2 text-base lg:text-xl font-medium border-y-1 
              ${
                location.pathname === item.href
                  ? "bg-gray-300 text-black-900"
                  : "text-black-600 hover:bg-gray-200"
              }
            `}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
