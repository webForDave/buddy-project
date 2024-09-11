import Sidebar from "../../components/Sidebar";

const Goals = () => {
  return (
    <div className="w-full h-screen lg:flex justify-between bg-gray-200">
      <Sidebar />

      <div className="w-full h-full overflow-auto">
        Goals
      </div>

      <div className="w-[35%] h-auto p-[20px] bg-white rounded-[20px] flex flex-col justify-between items-center">

        <div className="w-full h-auto p-3 bg-red-200 rounded-[6px] shadow-lg">
          
        </div>
      </div>

    </div>
  )
}

export default Goals;