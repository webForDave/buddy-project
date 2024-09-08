const FormInput = ({type, placeholder, name, id}) => {
  return (
    <div>
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}

            className="w-full h-auto p-[10px] rounded-[4px] my-[5px] border border-gray-400"
        />
    </div>
  )
}

export default FormInput