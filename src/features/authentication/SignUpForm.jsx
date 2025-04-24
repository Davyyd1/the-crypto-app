import { Form, useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft, HiLockClosed } from "react-icons/hi2";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Welcome to Coinex App!",
    text: "Start trading crypto currencies today!",
    images: {
      center: "./signup5.jpg",
      left: "./signup4.jpg",
      right: "./signup3.jpg",
    },
  },
  {
    title: "All in one crypto dashboard",
    text: "Manage, trade and analyze your portfolio easily.",
    images: {
      center: "./signup2.avif",
      left: "./signup1.avif",
      right: "./signup.avif",
    },
  },
];

function SignUpForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const videoRef = useRef(null);

  const handleAnimationComplete = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 0.85;
    }
  };

  const next = () => {
    setDirection(1);
    setCurrent(current + 1 >= slides.length ? 0 : current + 1);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(current - 1 < 0 ? slides.length - 1 : current - 1);
  };

  const slide = slides[current];

  return (
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
        <div className=" w-[20rem] sm:w-1/2 md:w-[25rem] place-self-center backdrop-blur-xs border border-black/10 shadow-2xl rounded-xl p-6">
          <div className="mb-4 flex flex-col gap-4">
            <p className="flex text-3xl font-bold text-white">Welcome!</p>
            <p className="text-lg text-gray-300 mt-2 mb-8">
              Start trading crypto currencies!
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div
              error={errors?.fullName?.message}
              className="flex gap-2 p-4 bg-gray-100 rounded-lg mb-2"
            >
              <HiMail className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
              <input
                type="text"
                className="outline-none w-full"
                placeholder="you@example.com"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </div>
            <div
              error={errors?.fullName?.message}
              className="flex gap-2 p-4 bg-gray-100 rounded-lg mb-2"
            >
              <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
              <input
                type="password"
                className="outline-none w-full"
                placeholder="At least 8 characters password"
                id="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password need a minimum of 8 characters",
                  },
                })}
              />
            </div>
            <div
              error={errors?.fullName?.message}
              className="flex gap-2 p-4 bg-gray-100 rounded-lg "
            >
              <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
              <input
                type="password"
                className="outline-none w-full"
                placeholder="Confirm the password"
                id="retype-password"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </div>

            {/* <div className="flex justify-end mt-2">
            <button className="text-blue-500 font-bold cursor-pointer">
              Forgot password?
            </button>
          </div> */}
            <div>
              <button className="bg-blue-500 rounded-md p-2 w-full mt-2 text-white cursor-pointer">
                Create new user
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUpForm;
