import { Route, Routes } from "react-router-dom";
import Homepage from "./Layout__/pages/Homepage";
import Signin from "./Auth__/forms/Signin";

const App = () => {
  return (
    <div className="w-[100%] h-screen">
        <div>
          {/* Public Routes */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="signup" element={<Signin />}/>
          </Routes>
        </div>

        <div>
          {/* Private Routes */}
        </div>

    </div>
  )
}

export default App;