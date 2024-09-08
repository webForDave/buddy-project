import { Link } from "react-router-dom"
import FormInput from "../components/FormInput"

const Signin = () => {
  return (
    <div className="w-full h-screen block lg:flex justify-between items-center">

        {/* form secton */}
        <div className="w-[100%] h-full overflow-auto">
        <div>
                <h1 className="alegreya-sans-bold text-[28px] lg:text-[30px] mx-[20px] my-[35px] text-[#008CCF] "><Link to="/">Buddy</Link></h1>
            </div> 

            <div className="w-[100%] flex justify-center items-center px-[50px]">
                <div className="w-[55%] h-auto">
                    <h1 className="alegreya-sans-light text-[30px] text-left">holla ✌🏾</h1>
                    <p className="alegreya-sans-bold text-[30px] mb-[25px]">Welcome Back! Sign In</p>

                    <form>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='email' placeholder='johndoe@gmail.com' id='email' name='email' />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' />
                        </div>

                        <button className="alegreya-sans-bold w-full h-auto p-[10px] my-[20px] rounded-[4px] text-white text-center bg-[#008CCF]">Sign In</button>
                        
                        <p className="alegreya-sans-bold text-center ">Don't have an account? <Link className="text-[#008CCF]" to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>

        {/* image section */}
        <div className="hidden lg:flex w-[100%] h-full overflow-hidden">
            <img src="/form-image.jpg" alt="form image" className="w-[100%] h-auto object-cover" />
        </div>

    </div>
  )
}

export default Signin