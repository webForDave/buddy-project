const FormInput = ({type, placeholder, id}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} id={id}
        className="w-full h-auto p-[10px] border border-gray-500 rounded-[5px] my-[2px] block"
        />
    </div>
  )
}

export default FormInput