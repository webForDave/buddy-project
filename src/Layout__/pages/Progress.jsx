import Sidebar from "../../components/Sidebar"

const Progress = () => {
  return (
    <div className="w-full h-screen lg:flex justify-between">
      <Sidebar />

      <div className="w-full h-full overflow-auto">
        Progress
      </div>
    </div>
  )
}

export default Progress;