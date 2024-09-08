import { Link } from "react-router-dom"
import { IoFootball } from "react-icons/io5";
import FormInput from "../components/FormInput";

const Signup = () => {
  return (
    <div className="w-[100%] h-screen block lg:flex justify-between items-center">

        {/* form section */}
        <div className="w-[100%] h-full overflow-auto pb-[50px]">

            <div>
                <h1 className="alegreya-sans-bold text-[28px] lg:text-[25px] mx-[20px] my-[35px] text-[#008CCF] "><Link to="/">Buddy</Link></h1>
            </div> 

            <div className="w-[100%] flex justify-center items-center px-[50px]">
                <div className="w-[55%] h-auto">
                    <h1 className="alegreya-sans-light text-[30px] text-left">holla ✌🏾</h1>
                    <p className="alegreya-sans-bold text-[30px] mb-[10px]">Create an account!</p>

                    <form>
                        <div>
                            <label htmlFor="first_name" className="mt-[2px]">First Name</label>
                            <FormInput type='text' placeholder='John' id='first_name' name='first_name' />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="mt-[3px]">Last Name</label>
                            <FormInput type='text' placeholder='Doe' id='last_name' name='last_name' />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='email' placeholder='johndoe@gmail.com' id='email' name='email' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' />
                        </div>
                        <div>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <FormInput type='password' placeholder='confirm password' id='confirm_password' name='confirm_password' />
                        </div>
                        <button className="alegreya-sans-bold w-full h-auto p-[10px] my-[20px] rounded-[4px] text-white text-center bg-[#008CCF]">Sign Up</button>
                        
                        <p className="alegreya-sans-bold text-center ">Already have an account? <Link className="text-[#008CCF]" to='/signin'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>

        {/* image section */}
        <div className="hidden lg:flex w-[100%] ml-[3px] h-full overflow-hidden">
            <img src="/form-image.jpg" alt="form image" className="w-[100%] h-auto object-cover" />
        </div>

    </div>
  )
}

export default Signup