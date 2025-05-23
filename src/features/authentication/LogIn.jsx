import { HiMail } from "react-icons/hi";
import { HiChevronLeft, HiLockClosed } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { useLogin } from "./useLogin";
import { useState } from "react";

function LogIn({ setCheckLogin }) {
  const { logIn, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    logIn(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <form className="flex flex-col max-h-screen " onSubmit={onSubmitLogin}>
      <div className={`flex gap-2 p-4 bg-gray-100  rounded-lg`}>
        <HiMail className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
        <input
          type="email"
          className="outline-none w-full"
          placeholder="you@example.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* error displaying -> email */}
      <div className="h-5 border-t-0 mb-4 rounded-b-md"></div>

      <div className={`flex gap-2 p-4 bg-gray-100 rounded-lg`}>
        <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
        <input
          type="password"
          className="outline-none w-full"
          placeholder="At least 8 characters password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* error displaying -> password */}
      <div className="h-5 border-t-0 mb-4 rounded-b-md"></div>

      <div className="border-2 text-white flex justify-between items-center">
        <p>You don't have an account?</p>
        <button
          className="cursor-pointer bg-white text-black p-2"
          onClick={() => setCheckLogin((c) => !c)}
          type="button"
        >
          Sign In
        </button>
      </div>
      <button
        className="bg-blue-500 rounded-md p-2 w-full mt-2 text-white cursor-pointer"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
}

export default LogIn;
