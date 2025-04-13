import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { HiBell, HiCog6Tooth, HiMiniBars3 } from "react-icons/hi2";
// import CrossLine from "./components/CrossLine";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    // inreg ev
    document.addEventListener("keydown", handleKeyDown);

    // curata ev la demontarea componentei
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="hidden flex-col h-screen md:flex md:w-64 lg:w-84 border-r-[3px] border-gray-100 p-4 overflow-y-auto">
        <div className="flex flex-col flex-grow">
          <NavLink to="/" className="flex items-center">
            <img src="./logo.png" alt="img" />
            <p className="text-3xl font-bold px-2">Coinex.</p>
          </NavLink>
          {/* <CrossLine /> */}
          <p
            className={`border-b-2 border-dotted border-gray-200 mt-[1.25rem] mb-4`}
          ></p>
          {/* borderDetail={"dotted"}  */}
          <SearchBar />
          <nav className="mt-4">
            <p className="text-gray-400 mb-2">Main Menu</p>
            <ul>
              <li className="mb-2 text-xl">
                <Navbar />
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col text-xl">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 p-2 rounded bg-gray-100 flex items-center"
                : "text-gray-500 p-2 rounded hover:bg-gray-100 flex items-center"
            }
          >
            <HiCog6Tooth />
            <span className="px-2">Settings</span>
          </NavLink>
        </div>
      </aside>

      <main className="flex-1 p-4 overflow-y-auto">
        {/* header dashboard */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col flex-grow"
        >
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <HiMiniBars3 className="flex text-2xl md:hidden items-center text-gray-400" />
              </button>
              <p className="text-3xl font-bold">Dashboard</p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-2">
              <HiBell className="text-3xl outline-1 rounded-full p-1 outline-gray-400 text-gray-500" />
              <img src="./user.png" alt="User" className="h-[2.5rem]" />
            </div>
          </div>
          {/* <CrossLine /> */}
          <p
            className={`border-b-2 border-solid border-gray-200 mt-[1rem] mb-4`}
          ></p>
          {/* borderDetail={"solid"}  */}
        </motion.div>

        {/* main content */}
        <Outlet />
      </main>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1000 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col text-xl text-center"
            >
              <Navbar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppLayout;
