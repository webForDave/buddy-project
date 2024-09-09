const FormInput = ({type, placeholder, name, id, value, onChange, error, errorText, emailTypeError, checkPasswords}) => {
  return (
    <div>
      {emailTypeError && <p className="alegreya-sans-bold text-red-600 text-right">Invalid Email</p>}
      {checkPasswords && <p className="alegreya-sans-bold text-red-600 text-right">Passwords do not match</p>}
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${error ? 'w-full h-auto p-[10px] my-[5px] border rounded-[4px] border-red-700 bg-red-100 transition-all duration-1000 ease-in-out' : 'w-full h-auto p-[10px] rounded-[4px] my-[5px] border border-gray-400'} `}
        />
    </div>
  )
}

export default FormInput