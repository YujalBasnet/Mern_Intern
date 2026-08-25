import React from 'react'

function App() {
  return (
    <div class="container">

        <h1>TODO LIST</h1>

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