import React from 'react'

function App() {
  return (
   <div class="min-h-screen border-2 border-black bg-[#3a1111]">

        <h1 class="text-center text-white text-5xl">TODO LIST</h1>

        <div class="search">
            <input type="text" placeholder="Search"></input>
            <button>Add</button>
        </div>

        {/* <!-- Boxes Container --> */}
        <div class="title-container">

            {/* <!-- First Box --> */}
            <div class="title">

                <h2>Title</h2>

                <h3>Description</h3>

                <h3>Priority</h3>

                <div class="bttn">
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>

            </div>

            
            <div class="title2">
                
            </div>

        </div>

    </div>
  )
}

export default App