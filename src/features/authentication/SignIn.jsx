import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";

import { HiChevronLeft, HiLockClosed } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { useSignup } from "./useSignup";

function SignIn({ setCheckLogin }) {
  const { signUp, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    signUp(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <form
      className="flex flex-col max-h-screen "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`flex gap-2 p-4 bg-gray-100  ${
          errors.email ? "bg-red-100 rounded-t-lg" : "bg-gray-100 rounded-lg "
        }`}
      >
        <HiMail className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="you@example.com"
          id="email"
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </div>
      {/* error displaying -> email */}
      <div className="h-5 border-t-0 mb-4 rounded-b-md">
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm bg-white p-1 rounded-b-md"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`flex gap-2 p-4 bg-gray-100  ${
          errors.password
            ? "bg-red-100 rounded-t-lg"
            : "bg-gray-100 rounded-lg "
        }`}
      >
        <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
        <input
          type="password"
          className="outline-none w-full"
          placeholder="At least 8 characters password"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password need a minimum of 8 characters",
            },
          })}
        />
      </div>
      {/* error displaying -> password */}
      <div className="h-5 border-t-0 mb-4 rounded-b-md">
        <AnimatePresence>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm bg-white p-1 rounded-b-md"
            >
              {errors.password.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`flex gap-2 p-4 bg-gray-100  ${
          errors.passwordConfirm
            ? "bg-red-100 rounded-t-lg"
            : "bg-gray-100 rounded-lg "
        }`}
      >
        <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
        <input
          type="password"
          className="outline-none w-full"
          placeholder="Confirm the password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </div>

      {/* error displaying -> confirm password */}
      <div className="h-5 border-t-0 mb-4 rounded-b-md">
        <AnimatePresence>
          {errors.passwordConfirm && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm bg-white p-1 rounded-b-md"
            >
              {errors.passwordConfirm.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="border-2 text-white flex justify-between items-center">
        <p>You already have an account?</p>
        <button
          className="cursor-pointer bg-white text-black p-2"
          onClick={() => setCheckLogin((c) => !c)}
          type="button"
        >
          Log in
        </button>
      </div>
      <button
        className="bg-blue-500 rounded-md p-2 w-full mt-2 text-white cursor-pointer"
        type="submit"
      >
        Create new user
      </button>
    </form>
  );
}

export default SignIn;
