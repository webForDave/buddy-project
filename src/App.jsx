import { Route, Routes } from "react-router-dom";
import Homepage from "./Layout__/pages/Homepage";
import Signup from "./Auth__/Signup";
import Signin from "./Auth__/Signin";
import React from "react";
import Progress from "./Layout__/pages/Progress";
import Buddies from "./Layout__/pages/Buddies";
import Goals from "./Layout__/pages/Goals";
import Home from "./Layout__/pages/Home";

const App = () => {

  return (
    <div className="w-[100%] h-screen">

      <div className="w-[100%] h-screen">

        <div>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/signin" element={<Signin />}/>
            
            {/* Private Routes */}
            <Route path="/home" element={<Home />}/>
            <Route path="/buddies" element={<Buddies />}/>
            <Route path="/progress" element={<Progress />}/>
            <Route path="/goals" element={<Goals />}/>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;