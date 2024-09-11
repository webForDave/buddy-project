import Sidebar from "../../components/Sidebar"

const Home = () => {
  return (
    <div className="w-full h-screen lg:flex justify-between">
        <Sidebar />

        <div className="w-full h-full overflow-auto">
            home
        </div>
    </div>
  )
}

export default Home