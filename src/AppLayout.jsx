import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { HiBell, HiCog6Tooth, HiMiniBars3 } from "react-icons/hi2";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const videoRef = useRef(null);

  // Fallback: dacă video-ul nu pornește în 5 secunde, continuă
  useEffect(() => {
    const fallback = setTimeout(() => {
      console.warn("⚠️ Video fallback triggered");
      setVideoReady(true);
    }, 1000);
    return () => clearTimeout(fallback);
  }, []);

  // Înainte să fie gata video-ul, afișează spinner
  if (!videoReady) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Background video */}
      <video
        ref={videoRef}
        onCanPlayThrough={() => {
          console.log("🎬 Video ready");
          setVideoReady(true);
          if (videoRef.current) {
            videoRef.current.play().catch((err) => {
              console.error("Video play error:", err);
            });
            videoRef.current.playbackRate = 0.8;
          }
        }}
        loop
        muted
        playsInline
        preload="auto"
        poster="poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main layout */}
      <motion.div
        className="flex h-screen "
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col h-screen md:w-64 lg:w-84 border-r-[1px] border-white bg-black/70 p-4 overflow-y-auto">
          <div className="flex flex-col flex-grow">
            <NavLink to="/" className="flex items-center">
              <img src="./logo.png" alt="Logo" />
              <p className="text-3xl font-bold px-2 text-white">Coinex.</p>
            </NavLink>
            <p className="border-b-2 border-dotted border-gray-200 mt-5 mb-4"></p>
            <SearchBar />
            <nav className="mt-4">
              <p className="text-gray-300 mb-2">Main Menu</p>
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
                  ? "text-orange-500 p-2 rounded bg-gray-100 flex items-center"
                  : "text-white p-2 rounded hover:bg-orange-500/70 flex items-center"
              }
            >
              <HiCog6Tooth />
              <span className="px-2">Settings</span>
            </NavLink>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col flex-grow "
          >
            <div className="flex gap-4 items-center">
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <HiMiniBars3 className="md:hidden text-2xl text-gray-400" />
              </button>
              <p className="text-3xl font-bold text-white">Dashboard</p>
              <div className="flex flex-1 justify-end items-center gap-2">
                <HiBell className="text-4xl p-1 text-white" />
                <img
                  src="./user.png"
                  alt="User"
                  className="h-10 rounded-full"
                />
              </div>
            </div>
            <p className="border-b-2 border-solid border-gray-200 mt-4 mb-4"></p>
          </motion.div>
          <Outlet />
        </main>

        {/* Mobile menu overlay */}
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
      </motion.div>
    </>
  );
}

export default AppLayout;
