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
];

function Navbar() {
  return (
    <>
      {navLinks.map((item) => (
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 p-2 rounded  flex items-center"
              : "text-white p-2 rounded hover:bg-orange-500/70 flex items-center"
          }
          key={item.name}
        >
          {item.icon}
          <span className="px-2">{item.name}</span>
        </NavLink>
      ))}
    </>
  );
}

export default Navbar;
