// import React from 'react'

// function App() {
//   return (
//    <div class="min-h-screen border-2 border-black bg-[#3a1111]">

//         <h1 class="text-center text-white text-5xl">TODO LIST</h1>

//         <div class="flex justify-center items-center mt-[20px] py-[10px] px-[20px] ">
//             <input class="w-1/2  border-none text-3xl bg-white" type="text" placeholder="Search"></input>
//             <button class="border-1 border-black text-2xl cursor-pointer py-[10px] px-[20px] bg-white rounded-lg hover:bg-white-100">Add</button>
//         </div>

//         {/* <!-- Boxes Container --> */}
//         <div class="flex gap-[20px] mt-[20px] ml-[20px]">

//             {/* <!-- First Box --> */}
//             <div class="h-[33vh] w-[50vh] border-2 border-black bg-[#124f4f]">

//                 <h2 class="text-center text-white text-2xl pt-[10px]">Title</h2>

//                 <h3 class="text-center text-white text-1xl pt-[15px]">Description</h3>

//                 <h3 class="text-center text-white text-1xl pt-[15px]">Priority</h3>

//                 <div class="mt-[20px] text-center">
//                     <button class="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300" >Submit</button>
//                     <button class="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">Cancel</button>
//                 </div>

//             </div>

            
//             <div class="h-[33vh] w-[50vh] border-2 border-black bg-[#124f4f]">
                
//             </div>

//         </div>

//     </div>
//   )
// }

// export default App
import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="w-[400px] bg-white p-[30px] rounded-xl shadow-lg">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-[8px]">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-[25px]">
          Register for FreelanceHub
        </p>


        {/* Name */}
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


        {/* Confirm Password */}
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


        {/* Role */}
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


        {/* Register Button */}
        <button
          type="submit"
          className="w-full p-[12px] bg-black text-white rounded-md font-bold text-[16px] hover:bg-gray-800 transition"
        >
          Register
        </button>


        {/* Login */}
        <p className="text-center text-sm mt-[20px] text-gray-600">

          Already have an account?

          <a
            href="/login"
            className="text-blue-600 hover:underline ml-[5px]"
          >
            Login
          </a>

        </p>

      </form>

    </div>
  )
}

export default App