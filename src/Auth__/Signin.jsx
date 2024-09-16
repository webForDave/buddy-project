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
    const [formErrors, setFormErrors] = useState(
        {
            email: false,
            password: false,
            emailCheck: false
        }
    )

    const handleChange = e => {
        let {name, value} = e.target.name;

        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    const onValidate = () => {
        let isValid = true;
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        const newErrors = {
            email: false,
            password: false,
            emailCheck: false
        }

        if(formData.email === '') {
            newErrors.email = true;
            isValid = false
        } else if(!emailRegex.test(formData.email)) {
            newErrors.emailCheck = true;
            isValid = false;
        } 

        if(formData.password === '') {
            newErrors.password = true;
            isValid = false;
        }
        setFormErrors(newErrors);
        return isValid;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let isValid = onValidate();

        if(isValid) {
            const handleUser = async() => {
                const response = await axios.post('http://localhost:3000/user', formData);

                try{
                    console.log('Response :', response);
                } catch(error) {
                    console.log(error);
                    
                }
            }

            setFormData(INPUT_VALUES);
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
                            {formErrors.emailCheck && <p className="alegreya-sans-bold text-red-600 text-right">Invalid Email</p>}
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='text' placeholder='johndoe@gmail.com' id='email' name='email' value={formData.email} onChange={handleChange} error={formErrors.email} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleChange} error={formErrors.password} />
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