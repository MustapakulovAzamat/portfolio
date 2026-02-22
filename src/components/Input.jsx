export const Input = ({type,name,placeholder}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} required 
    className={`p-3 border-2 border-[rgb(26,31,35)] rounded-2xl`}
    />
  )
}
