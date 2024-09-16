import { Link } from "react-router-dom"
import FormInput from "../components/FormInput";
import { useState } from "react";
import FormNav from "../components/FormNav";
import axios from "axios";

const INPUT_VALUES = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}

const Signup = () => {

    const [formData, setFormData] = useState(INPUT_VALUES);
    const [formErrors, setFormErrors] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        confirm_password: false,
        emailCheck: false,
        passwordsCheck: false
    });

    const handleChange = e => {
        let {name, value} = e.target
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

        let newErrors = {
            first_name: false,
            last_name: false,
            email: false,
            password: false,
            confirm_password: false,
            emailCheck: false,
            passwordsCheck: false
        }

        if(formData.first_name === '') {
            newErrors.first_name = true;
            isValid = false;
        } 

        if(formData.last_name === ''){
            newErrors.last_name = true;
            isValid = false;
        }

        if(formData.email === '') {
            newErrors.email = true;
            isValid = false;

        }else if(!emailRegex.test(formData.email)) {
            newErrors.emailCheck = true;
            isValid = false;
        } 

        if(formData.password === '') {
            newErrors.password = true
            isValid = false;
        }

        if(formData.confirm_password === '') {
            newErrors.confirm_password = true;
            isValid = false;
        } else if(formData.confirm_password !== formData.password) {
            newErrors.passwordsCheck = true;
            isValid = false;
        } 
        setFormErrors(newErrors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = onValidate();

        if(isValid) {
            const handlePost = async (e) => {
                const response = await axios.post('http://localhost:3000/NewUser', formData);

                try{
                    console.log('Response : ', response)
                } catch(error) {
                    console.log(error);
                    
                }
            }

            handlePost();
            setFormData(INPUT_VALUES)
            alert('Form Submitted')
        }

    }

  return (
    <div className="w-[100%] h-screen block md:flex justify-between items-center">

        {/* image section */}
        <div className="hidden md:flex w-[100%] h-full overflow-hidden">
            <img src="/form-image.jpg" alt="form image" className="w-[100%] h-auto object-cover" />
        </div>

        {/* form section */}
        <div className="w-[100%] h-full overflow-auto pb-[50px]">

            <FormNav /> 

            {/* TODO - CHANGE FONT FOR FORM HEADER */}

            <div className="w-[100%] flex justify-center items-center px-[50px]">
                <div className="lg:w-[55%] h-auto">
                    <h1 className="alegreya-sans-light text-[30px] text-left">hi there ✌🏾</h1>
                    <p className="alegreya-sans-bold text-[30px] mb-[25x]">Create an account!</p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="first_name">First Name</label>
                            <FormInput type='text' placeholder='John' id='first_name' name='first_name' value={formData.first_name} onChange={handleChange} error={formErrors.first_name} />
                        </div>

                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <FormInput type='text' placeholder='Doe' id='last_name' name='last_name' value={formData.last_name} onChange={handleChange} error={formErrors.last_name}  />
                        </div>

                        <div>
                            {formErrors.emailCheck && <p className="alegreya-sans-bold text-red-600 text-right">Invalid Email</p>}
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='text' placeholder='johndoe@gmail.com' id='email' name='email' value={formData.email} onChange={handleChange} error={formErrors.email} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleChange} error={formErrors.password} errorText='Password'/>
                        </div>

                        <div>
                            {formErrors.passwordsCheck && <p className="alegreya-sans-bold text-red-600 text-right">Passwords do not match</p>}
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <FormInput type='password' placeholder='confirm password' id='confirm_password' name='confirm_password' value={formData.confirm_password} onChange={handleChange} error={formErrors.confirm_password} />
                        </div>

                        <button type='submit' className='alegreya-sans-bold w-full h-auto p-[10px] my-[20px] rounded-[4px] text-white text-center bg-[#008CCF]'>Sign Up</button>
                        
                        <p className="alegreya-sans-bold text-center ">Already have an account? <Link className="text-[#008CCF]" to='/signin'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup