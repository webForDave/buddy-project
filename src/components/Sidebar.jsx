import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="w-[10%] h-auto hidden lg:flex justify-center items-center flex-col alegreya-sans-bold text-white bg-[#008CCF] overflow-hidden sticky">

        <div className="my-5">
            <div className="flex justify-center items-center">
                <FaHome size={23} />
            </div>
            <Link to="/content"> <span className="text-[18px]">Home</span></Link>
        </div>

        <div className="my-5">
            <div className="flex justify-center items-center">
                <GoGoal size={23} />
            </div>
            <Link to="/goals" className="text-[18px]">Goals</Link>
        </div>

        <div className="my-5">
            <div className="flex justify-center items-center">
             <GiProgression size={23} />
            </div>
            <Link to="/progress" className="text-[18px]">Progress</Link>
        </div>

        <div className="my-5">
            <div className="flex justify-center items-center">
                <FaUserFriends size={23} />
            </div>
            <Link to="/buddies" className="text-[18px]">Buddies</Link>
        </div>

    </div>
  )
}

export default Sidebar