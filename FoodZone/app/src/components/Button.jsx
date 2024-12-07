import React from 'react'

function Button({lable,onClick}) {
  return (
    <div>
      <button onClick={onClick} className='py-1 px-1 bg-red-500 text-white hover:bg-white hover:text-black rounded'>
        {lable}
      </button>
    </div>
  )
}

export default Button
