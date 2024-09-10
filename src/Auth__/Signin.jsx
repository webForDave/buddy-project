import { Link } from "react-router-dom"
import FormInput from "../components/FormInput"
import { useState } from "react"
import axios from "axios"
import FormNav from "../components/FormNav"

const INPUT_VALUES = {
    email: '',
    password: ''
}

const Signin = () => {

    const [formData, setFormData] = useState(INPUT_VALUES);
    // const [formError, setFormError] = useState(
    //     {
    //         email: false,
    //         password: false
    //     }
    // )

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailTypeError, setEmailTypeError] = useState(false);

    const handleChange = e => {
        let name = e.target.name;

        setFormData(
            {
                ...formData,
                [name]: e.target.value
            }
        )
    }

    const onValidate = () => {
        let isValid = true;
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if(formData.email === '') {
            setEmailError(true)
            isValid = false
        } else if(!emailRegex.test(formData.email)) {
            setEmailError(false);
            setEmailTypeError(true)
            isValid = false;
        } else {
            setEmailError(false);
            setEmailTypeError(false)
        }

        if(formData.password === '') {
            setPasswordError(true);
            isValid = false;
        } else {
            setPasswordError(false);
        }

        return isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let isValid = onValidate();

        if(isValid) {
            const handleUser = async() => {
                const response = await axios.post('http://localhost:3000/user', formData);

                try{
                    setFormData(INPUT_VALUES);

                } catch(error) {
                    console.log(error);
                    
                }
            }
            handleUser();
        }
    }

  return (
    <div className="w-full h-screen block md:flex justify-between items-center">

        {/* image section */}
        <div className="hidden md:flex w-[100%] h-full overflow-hidden">
            <img src="/form-image.jpg" alt="form image" className="w-[100%] h-auto object-cover" />
        </div>

        {/* form secton */}
        <div className="w-[100%] h-full overflow-auto pb-[50px]">
            <FormNav />

            <div className="w-[100%] flex justify-center items-center px-[50px]">
                <div className="lg:w-[55%] h-auto">
                    <h1 className="alegreya-sans-light text-[30px] text-left">Hey,</h1>
                    <p className="alegreya-sans-bold text-[30px] mb-[25px]">Welcome Back! Sign In</p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='text' placeholder='johndoe@gmail.com' id='email' name='email' value={formData.email} onChange={handleChange} error={emailError} emailTypeError={emailTypeError} errorText='Email Address'/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleChange} error={passwordError} errorText='Password'/>
                        </div>

                        <button type='submit' className="alegreya-sans-bold w-full h-auto p-[10px] my-[20px] rounded-[4px] text-white text-center bg-[#008CCF]">Sign In</button>
                        
                        <p className="alegreya-sans-bold text-center ">Don't have an account? <Link className="text-[#008CCF]" to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin