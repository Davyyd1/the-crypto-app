// import { Form, useForm } from "react-hook-form";
// import { HiChevronRight } from "react-icons/hi2";
// import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useSignup } from "./useSignup";
import toast, { Toaster } from "react-hot-toast";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import supabase from "../../services/supabase";
import { useAuth } from "./AuthProvider";

function AuthForm() {
  const { signUp, isLoading } = useSignup();
  const { session } = useAuth();

  // const { errors } = formState;
  const [checkLogin, setCheckLogin] = useState(0);

  const videoRef = useRef(null);

  const handleAnimationComplete = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 0.9;
    }
  };

  return (
    <>
      {!session && (
        <div className="flex flex-col min-h-screen overflow-hidden justify-center items-center md:grid md:grid-cols-2">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            poster="poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            className="hidden md:grid h-full"
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={handleAnimationComplete}
          >
            <div className="relative h-screen w-full overflow-hidden">
              {/* Video Background */}

              {/* Blur Overlay */}
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs bg-black/25 z-10" />

              {/* Content */}
              <div className="relative z-20 flex items-center justify-center h-full text-white">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold ">
                    Welcome to Coinex
                  </h1>
                  <p className="text-xl">Trade crypto with confidence 🚀</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid h-full w-full"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={checkLogin > 0 ? "signin" : "login"}
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" w-[20rem] sm:w-1/2 md:w-[25rem] place-self-center backdrop-blur-xs border border-black/10 shadow-2xl rounded-xl p-6"
              >
                <div className="mb-4 flex flex-col gap-4">
                  <p className="flex text-3xl font-bold text-white">Welcome!</p>
                  <p className="text-lg text-gray-300 mt-2 mb-8">
                    Start trading crypto currencies!
                  </p>
                </div>
                <motion.div>
                  {checkLogin > 0 ? (
                    <SignIn
                      checkLogin={checkLogin}
                      setCheckLogin={setCheckLogin}
                    />
                  ) : (
                    <LogIn
                      checkLogin={checkLogin}
                      setCheckLogin={setCheckLogin}
                    />
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default AuthForm;
