import { Form, useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi2";
import { NavLink } from "react-router";

function SignUpForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden justify-center items-center md:grid md:grid-cols-2">
      <div className="hidden md:bg-gray-100 md:grid border-r-2 border-gray-300 h-full">
        <div className="flex items-center">
          <img src="./logo.png" alt="img" className="w-[35px] h-[35px] ml-10" />
          <p className="text-3xl font-bold px-2">Coinex.</p>
        </div>
        <div className="relative w-full h-[15rem] flex items-center justify-center">
          <div className="border-2">
            {/* Imaginea din mijloc */}
            <img
              src="./signup5.jpg"
              alt="Imagine-Autentificare-5"
              className="w-[10rem] z-30 relative rounded-lg"
              fill
            />
          </div>

          {/* Imaginea din stânga */}
          <img
            src="./signup4.jpg"
            alt="Imagine-Autentificare-4"
            className="w-[10rem] absolute top-[1rem] z-20 left-1/2 -translate-x-[14rem] rounded-lg"
          />

          {/* Imaginea din dreapta */}
          <img
            src="./signup3.jpg"
            alt="Imagine-Autentificare-3"
            className="w-[10rem] absolute top-[4rem] z-10 left-1/2 translate-x-[4rem] rounded-lg"
          />
        </div>

        <div className="ml-10 justify-self-start place-self-center">
          <p className="mb-4 font-bold text-xl">Welcome to Coinex App!</p>
          <p className="text-gray-400">
            Start trading crypto currencies today!
          </p>
          <p className="text-gray-400">
            Start trading crypto currencies today!
          </p>
          <p className="text-gray-400">
            Start trading crypto currencies today!
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button className="rounded-full bg-gray-300 flex items-center w-[2%] h-[15%]"></button>
          <button className="rounded-full bg-gray-300 flex items-center w-[2%] h-[15%]"></button>
          <button className="rounded-full bg-gray-300 flex items-center w-[2%] h-[15%]"></button>
        </div>
      </div>

      <div className="w-[20rem] sm:w-1/2 md:w-[25rem] place-self-center border-2">
        <div className="mb-4">
          <p className="flex text-xl font-bold">Welcome back!</p>
          <p className="text-md text-gray-400 mt-2 mb-8">
            Start trading crypto currencies!
          </p>
        </div>
        <form>
          <div
            error={errors?.fullName?.message}
            className="flex gap-2 p-2 bg-gray-100 rounded-lg mb-2"
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
            className="flex gap-2 p-2 bg-gray-100 rounded-lg mb-2"
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
            className="flex gap-2 p-2 bg-gray-100 rounded-lg "
          >
            <HiLockClosed className="text-blue-500 border-2 text-2xl p-[.15rem] bg-white rounded-md" />
            <input
              type="password"
              className="outline-none w-full"
              placeholder="Confirm the password"
              id="password"
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
    </div>
  );
}

export default SignUpForm;
