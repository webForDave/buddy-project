import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput";

const Signup = () => {
    return (
      <div className="w-full h-[100vh] lg:flex">
  
        {/* Form section */}
        <div className="w-full lg:w-[50%] h-full p-[10px] lg:p-[80px] overflow-y-auto flex justify-center items-center">
          <div className="w-[90%] h-auto p-[10px] lg:p-[40px]">
            {/* Form content */}
            <h1 className="poppins-semibold text-[22px] lg:text-[30px] my-[15px]">Create a new Account</h1>

            <form>
                <div className="mt-[20px]">
                    <label htmlFor="first_name" className="poppins-medium">First Name</label>
                    <FormInput type='text' placeholder='John' id='first_name'/>
                </div>

                <div className="mt-[20px]">
                    <label htmlFor="last_name" className="poppins-medium">Last Name</label>
                    <FormInput type='text' placeholder='Doe' id='last_name'/>
                </div>

                <div className="mt-[20px]">
                    <label htmlFor="email" className="poppins-medium">Email Address</label>
                    <FormInput type='email' placeholder='doe@gmail.com' id='email'/>
                </div>

                <div className="mt-[20px]">
                    <label htmlFor="password" className="poppins-medium">Password</label>
                    <FormInput type='password' placeholder='Password' id='password'/>
                </div>

                <div className="mt-[20px]">
                    <label htmlFor="confrim_password" className="poppins-medium">Confirm Password</label>
                    <FormInput type='password' placeholder='confirm password' id='confirm password'/>
                </div>
                <p className="poppins-semibold text-right text-[18px] text-[#00A0DE]"><Link to='https://google.com'>Forgoten password?</Link></p>

                <button type='submit' className="poppins-bold rounded-[5px] w-full h-auto p-[10px] mt-[10px] bg-[#0081C1] text-white">Sign Up</button>
            </form>
            <p className="poppins-regular text-center p-1 text-[17px]">Have an account? <Link className="text-[#00A0DE] poppins-bold" to='/signin'>Sign In</Link></p>
          </div>
        </div>

        {/* Image section */}
        <div className="w-[50%] h-full hidden lg:flex flex-shrink-0">
          <img src="/form-image.jpg" alt="image" className="w-full h-full object-cover" />
        </div>

      </div>
    )
  }
  
  export default Signup;