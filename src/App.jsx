import { Route, Routes } from "react-router-dom";
import Homepage from "./Layout__/pages/Homepage";
import Signup from "./Auth__/Signup";
import Signin from "./Auth__/Signin";
import Content from "./Layout__/pages/Content";
import Sidebar from "./components/Sidebar";
import React from "react";

const App = () => {
  return (
    <div className="w-[100%] h-screen">

      <div className="w-[100%] h-screen">

        <div>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<Signin />}/>

            {/* Private Routes */}
            <>
              <Route path='/content' element={<Content />}/>
            </>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;