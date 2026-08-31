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
import Clone from './clone.jsx'


function App() {
  return (
    // <Register type="login" />
    <Clone/>
  )
}

export default App;