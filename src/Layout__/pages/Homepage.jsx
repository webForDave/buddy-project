import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div>
            <h1 className="text-[black] text-[40px]">In progress... Check back</h1>
            <Link to='/signin' className="block mt-[5px] text-center text-[20px] font-bold">Sign In</Link>
            <Link to='/signup' className="block mt-[5px] text-center text-[20px] font-bold">Sign up</Link>
        </div>
    </div>
  )
}

export default Homepage;