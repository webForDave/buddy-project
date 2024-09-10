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
    // const [formError, setFormError] = useState({
    //     first_name: false,
    //     last_name: false,
    //     email: false,
    //     password: false,
    //     confirm_password: false
    // });

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [emailTypeError, setEmailTypeError] = useState(false);
    const [checkPasswords, setCheckPasswords] = useState(false);

    const handleChange = e => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )        
    }

    const onValidate = () => {
        let isValid = true;
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if(formData.first_name === '') {
            setFirstNameError(true);
            isValid = false;
        } else {
            setFirstNameError(false);
        }

        if(formData.last_name === ''){
            setLastNameError(true);
            isValid = false;
        } else {
            setLastNameError(false);
        }

        if(formData.email === '') {
            setEmailError(true);
            isValid = false;

        }else if(!emailRegex.test(formData.email)) {
            setEmailError(false);  //I put this here to disable the epmty field and the next line just checks the email type
            setEmailTypeError(true);
            isValid = false;
        } else {
            setEmailError(false);
            setEmailTypeError(false)
        } 

        if(formData.password === '') {
            setPasswordError(true);
            isValid = false;
        } else {
            setPasswordError(false)
        }

        if(formData.confirm_password === '') {
            setConfirmPasswordError(true);
            isValid = false;
        } else if(formData.confirm_password !== formData.password) {
            setCheckPasswords(true);
            isValid = false;
        } else {
            setConfirmPasswordError(false);
            setCheckPasswords(false);
        }

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = onValidate();

        if(isValid) {
            const handlePost = async (e) => {
                const response = await axios.post('http://localhost:3000/NewUser', formData);

                try{
                    setFormData(INPUT_VALUES);
                    
                } catch(error) {
                    console.log(error);
                    
                }
            }
            handlePost();
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
                            <FormInput type='text' placeholder='John' id='first_name' name='first_name' value={formData.first_name} onChange={handleChange} error={firstNameError} errorText='First Name' />
                        </div>

                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <FormInput type='text' placeholder='Doe' id='last_name' name='last_name' value={formData.last_name} onChange={handleChange} error={lastNameError} errorText='Last Name' />
                        </div>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <FormInput type='text' placeholder='johndoe@gmail.com' id='email' name='email' value={formData.email} onChange={handleChange} error={emailError} errorText='Email' emailTypeError={emailTypeError} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput type='password' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleChange} error={passwordError} errorText='Password'/>
                        </div>

                        <div>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <FormInput type='password' placeholder='confirm password' id='confirm_password' name='confirm_password' value={formData.confirm_password} onChange={handleChange} error={confirmPasswordError} errorText='Confirm Password' checkPasswords={checkPasswords}/>
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