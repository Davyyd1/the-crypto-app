import { HiCog6Tooth, HiHome, HiMiniIdentification } from "react-icons/hi2";
import { IoIosGitMerge } from "react-icons/io";
import { NavLink } from "react-router";

const navLinks = [
  {
    to: "/",
    name: "Dashboard",
    icon: <HiHome />,
  },
  {
    to: "/market",
    name: "Market",
    icon: <IoIosGitMerge />,
  },
  //   {
  //     to: "/settings",
  //     name: "Settings",
  //     icon: <HiCog6Tooth />,
  //   },
  //   {
  //     to: "/profile",
  //     name: "Profile",
  //     icon: <HiMiniIdentification />,
  //   },
];

function Navbar() {
  return (
    <nav className="mt-4">
      <p className="text-gray-400 mb-2">Main Menu</p>
      <ul>
        <li className="mb-2 text-xl">
          {navLinks.map((item) => (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 p-2 rounded bg-gray-100 flex items-center"
                  : "text-gray-500 p-2 rounded hover:bg-gray-100 flex items-center"
              }
              key={item.name}
            >
              {item.icon}
              <span className="px-2">{item.name}</span>
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
