import Sidebar from "../../components/Sidebar";

const Buddies = () => {
  return (
    <div className="w-full h-screen lg:flex justify-between">
      <Sidebar />

      <div className="w-full h-full overflow-auto">
        buddies
      </div>
    </div>
  )
}

export default Buddies;