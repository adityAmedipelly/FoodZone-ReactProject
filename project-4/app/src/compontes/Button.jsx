

function Button({lable,Onclick}) {
  return (
    <button onClick={onclick} className="py-1 px-1 bg-red-500 text-white rounded cursor-pointer hover:text-black hover:bg-white translate " >{lable}</button>
  )
}

export default Button
