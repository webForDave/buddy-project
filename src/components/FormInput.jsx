const FormInput = ({type, placeholder, name, id, value, onChange, error, errorText}) => {
  return (
    <div>
      {error && <p className="text-red-500">{errorText} is required</p>}
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full h-auto p-[10px] rounded-[4px] my-[5px] border border-gray-400"
        />
    </div>
  )
}

export default FormInput