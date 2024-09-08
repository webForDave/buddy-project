import { Route, Routes } from "react-router-dom";
import Homepage from "./Layout__/pages/Homepage";
import Signup from "./Auth__/Signup";
import Signin from "./Auth__/Signin";

const App = () => {
  return (
    <div className="w-[100%] h-screen">
        <div>
          {/* Public Routes */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<Signin />}/>
          </Routes>
        </div>

        <div>
          {/* Private Routes */}
        </div>

    </div>
  )
}

export default App;