import React from "react";
function Register({ type }) {

  const isLogin = type === "login";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="w-[400px] bg-white p-[30px] rounded-xl shadow-lg">

        {/* Title */}

        <h1 className="text-3xl font-bold text-center mb-[8px]">
          {isLogin ? "Login" : "Create Account"}
        </h1>


        <p className="text-center text-gray-500 mb-[25px]">
          {isLogin
            ? "Welcome back to FreelanceHub"
            : "Register for FreelanceHub"
          }
        </p>


        {/* Name - ONLY REGISTER */}

        {!isLogin && (
          <div className="mb-[18px]">

            <label
              htmlFor="name"
              className="block font-semibold mb-[7px]"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-[12px] border border-gray-300 rounded-md outline-none focus:border-black"
            />

          </div>
        )}


        {/* Email */}

        <div className="mb-[18px]">

          <label
            htmlFor="email"
            className="block font-semibold mb-[7px]"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-[12px] border border-gray-300 rounded-md outline-none focus:border-black"
          />

        </div>


        {/* Password */}

        <div className="mb-[18px]">

          <label
            htmlFor="password"
            className="block font-semibold mb-[7px]"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-[12px] border border-gray-300 rounded-md outline-none focus:border-black"
          />

        </div>


        {/* Confirm Password - ONLY REGISTER */}

        {!isLogin && (
          <div className="mb-[18px]">

            <label
              htmlFor="confirmPassword"
              className="block font-semibold mb-[7px]"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-[12px] border border-gray-300 rounded-md outline-none focus:border-black"
            />

          </div>
        )}


        {/* Role - ONLY REGISTER */}

        {!isLogin && (
          <div className="mb-[20px]">

            <label
              htmlFor="role"
              className="block font-semibold mb-[7px]"
            >
              Register as
            </label>

            <select
              id="role"
              name="role"
              className="w-full p-[12px] border border-gray-300 rounded-md outline-none focus:border-black"
            >
              <option value="client">Client</option>
              <option value="freelancer">Freelancer</option>
            </select>

          </div>
        )}


        {/* Button */}

        <button
          type="submit"
          className="w-full p-[12px] bg-black text-white rounded-md font-bold hover:bg-gray-800 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>


        {/* Bottom text */}

        <p className="text-center text-sm mt-[20px] text-gray-600">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"
          }

          <a
            href={isLogin ? "/register" : "/login"}
            className="text-blue-600 hover:underline ml-[5px]"
          >
            {isLogin ? "Register" : "Login"}
          </a>

        </p>

      </form>

    </div>
  );
}

export default Register;